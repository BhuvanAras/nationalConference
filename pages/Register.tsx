import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Profession, RegistrationData, RegistrationResult } from '../types';
import { FEES } from '../constants';
import { supabase } from '../supabaseClient';
import { hashPassword, verifyPassword } from '../utils/auth';

interface RegisterProps {
  onComplete: (result: RegistrationResult) => void;
}

const Register: React.FC<RegisterProps> = ({ onComplete }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const professionParam = queryParams.get('profession') as Profession | null;
  const initialProfession = professionParam && Object.values(Profession).includes(professionParam) 
    ? professionParam 
    : Profession.RESEARCH_SCHOLAR;

  // Mode Toggle: 'register' or 'login'
  const [isLoginMode, setIsLoginMode] = useState(false);

  // Forgot Password State
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [serverOtp, setServerOtp] = useState<string | null>(null);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetStep, setResetStep] = useState<'email' | 'otp' | 'newPassword'>('email');

  // Registration Form Data
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    mobile: '',
    email: '',
    profession: initialProfession,
    amount: FEES[initialProfession],
    password: ''
  });

  // Login Form Data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      amount: FEES[prev.profession as keyof typeof FEES] || 1500
    }));
  }, [formData.profession]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdCardFile(e.target.files[0]);
    }
  };

  const validateRegistration = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.password || formData.password.length < 6) return "Password must be at least 6 characters";
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) return "Enter a valid 10-digit Indian mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Enter a valid email address";
    if (!idCardFile && formData.profession !== Profession.OBSERVER) return "Please upload your valid ID Card";
    return null;
  };

  const checkDuplicate = async () => {
    console.log("Checking duplicates for:", formData.email, formData.mobile);

    // Check Email
    const { data: emailData, error: emailError } = await supabase
      .from('registrations')
      .select('Email_id')
      .eq('Email_id', formData.email);

    console.log("Email check result:", { emailData, emailError });

    if (emailError) {
      console.error("Error checking email duplicate:", emailError);
      // If error is not 'PGRST116' (no rows), we might want to assume safe or block? 
      // Safest is to let it slide or alert user. For now logging.
    }

    if (emailData && emailData.length > 0) {
      return "Email already registered. Please login.";
    }

    // Check Mobile
    const { data: mobileData, error: mobileError } = await supabase
      .from('registrations')
      .select('Mobile number')
      .eq('Mobile number', formData.mobile);

    console.log("Mobile check result:", { mobileData, mobileError });

    if (mobileData && mobileData.length > 0) {
      return "Mobile number already registered.";
    }

    return null;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const processPayment = async () => {
    const errorMsg = validateRegistration();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setIsProcessing(true);
    setError(null);

    // Check for duplicates
    const duplicateMsg = await checkDuplicate();
    if (duplicateMsg) {
      setError(duplicateMsg);
      setIsProcessing(false);
      return;
    }

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

    // Fallback for demo if no key provided
    if (!razorpayKey || razorpayKey === 'your_razorpay_key_id') {
      if (window.confirm("Razorpay Key not found. Do you want to simulate a successful payment for testing?")) {
         await handlePaymentSuccess('pay_SIMULATED_' + Math.random().toString(36).substr(2, 9));
      } else {
         setIsProcessing(false);
         setError("Payment cancelled or configuration missing.");
      }
      return;
    }

    try {
      const options = {
        key: razorpayKey,
        amount: formData.amount * 100,
        currency: 'INR',
        name: 'Bharat Synapse @2047',
        description: `Registration for ${formData.profession}`,
        handler: function (response: any) {
          handlePaymentSuccess(response.razorpay_payment_id);
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: '#1e3a8a'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      
    } catch (err) {
      console.error("Payment initialization failed:", err);
      setError("Failed to initialize payment. Please try again.");
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = async (paymentId: string) => {
    try {
      const registrationId = 'BS2047-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      let idCardBase64 = '';
      
      if (idCardFile) {
        try {
          idCardBase64 = await fileToBase64(idCardFile);
        } catch (e) {
          console.error("File conversion failed", e);
        }
      }

      const hashedPassword = await hashPassword(formData.password);

      const result: RegistrationResult = {
        ...formData,
        registrationId,
        paymentId,
        paymentDate: new Date().toLocaleDateString(),
        idCardBase64
      };

      // Save to Supabase
      const { error: dbError } = await supabase
        .from('registrations')
        .insert([
          {
            "Name": formData.fullName,
            "Mobile number": formData.mobile,
            "Email_id": formData.email,
            "Category": formData.profession,
            "amount": formData.amount,
            "registration_id": registrationId,
            "payment_id": paymentId,
            "id_card_data": idCardBase64,
            "Password": hashedPassword
          }
        ]);

      if (dbError) {
        console.error("Supabase save error:", dbError);
        throw dbError;
      }

      onComplete(result);
    } catch (err) {
      console.error("Registration processing failed:", err);
      setError("Payment successful but registration failed. Please contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // First fetch user by email
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .eq('Email_id', loginData.email)
        .single();

      if (error || !data) {
        setError('No registration found with these details.');
        setIsProcessing(false);
        return;
      }

      // Verify password
      const isValid = await verifyPassword(loginData.password, data.Password);
      if (!isValid) {
        setError('Invalid Email or Password.');
        setIsProcessing(false);
        return;
      }

      // Map DB result to RegistrationResult type
      const result: RegistrationResult = {
        fullName: data.Name,
        mobile: data["Mobile number"],
        email: data.Email_id,
        profession: data.Category,
        amount: data.amount,
        registrationId: data.registration_id,
        paymentId: data.payment_id,
        paymentDate: data.created_at ? new Date(data.created_at).toLocaleDateString() : new Date().toLocaleDateString(),
        idCardBase64: data.id_card_data
      };

      onComplete(result);

    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Forgot Password Handlers
  const sendOtp = async () => {
    if (!resetEmail) {
      setError("Please enter your email.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);

    // Check if email exists
    const { data, error } = await supabase
      .from('registrations')
      .select('Email_id')
      .eq('Email_id', resetEmail)
      .maybeSingle();

    if (!data) {
      setError("Email address not found.");
      setIsProcessing(false);
      return;
    }

    // Generate OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setServerOtp(generatedOtp);
    
    // Simulate sending email (In production use EmailJS or Supabase Edge Functions)
    console.log(`OTP for ${resetEmail}: ${generatedOtp}`);
    alert(`DEMO MODE: Your OTP is ${generatedOtp}. In production, this would be emailed.`);
    
    setResetStep('otp');
    setIsProcessing(false);
    setSuccessMsg(`OTP sent to ${resetEmail}`);
  };

  const verifyOtp = () => {
    if (enteredOtp === serverOtp) {
      setResetStep('newPassword');
      setSuccessMsg(null);
      setError(null);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const resetPassword = async () => {
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsProcessing(true);
    const hashedPassword = await hashPassword(newPassword);

    const { error } = await supabase
      .from('registrations')
      .update({ "Password": hashedPassword })
      .eq('Email_id', resetEmail);

    if (error) {
      setError("Failed to update password.");
    } else {
      setSuccessMsg("Password updated successfully! Please login.");
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetStep('email');
        setResetEmail('');
        setEnteredOtp('');
        setNewPassword('');
        setSuccessMsg(null);
      }, 2000);
    }
    setIsProcessing(false);
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">Reset Password</h2>
            <p className="mt-2 text-sm text-gray-500">Follow the steps to recover your account</p>
          </div>

          <div className="space-y-6">
            {resetStep === 'email' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Enter your registered Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
                <button
                  onClick={sendOtp}
                  disabled={isProcessing}
                  className="w-full mt-4 py-3 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all"
                >
                  {isProcessing ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            )}

            {resetStep === 'otp' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Enter OTP sent to email</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                />
                <button
                  onClick={verifyOtp}
                  className="w-full mt-4 py-3 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {resetStep === 'newPassword' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Enter New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  onClick={resetPassword}
                  disabled={isProcessing}
                  className="w-full mt-4 py-3 rounded-xl text-white font-bold bg-green-600 hover:bg-green-700 transition-all"
                >
                  {isProcessing ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            )}

            {error && <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">{error}</div>}
            {successMsg && <div className="text-green-600 text-sm text-center bg-green-50 p-2 rounded">{successMsg}</div>}

            <button
              onClick={() => { setShowForgotPassword(false); setResetStep('email'); setError(null); }}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 mt-4"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100" id="registration-form">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 serif">
            {isLoginMode ? 'Login' : 'Register Now'}
          </h2>
          <p className="mt-2 text-sm text-gray-500 italic">Bharat Synapse @2047 Conference</p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
          <button
            onClick={() => { setIsLoginMode(false); setError(null); }}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              !isLoginMode ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            New Registration
          </button>
          <button
            onClick={() => { setIsLoginMode(true); setError(null); }}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              isLoginMode ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Already Registered?
          </button>
        </div>

        {isLoginMode ? (
          /* Login Form */
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="email@example.com"
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
              >
                Forgot Password?
              </button>
            </div>

            {error && <div className="text-red-600 text-xs bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transform transition-all active:scale-95 ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isProcessing ? 'Verifying...' : 'Access Ticket'}
            </button>
          </form>
        ) : (
          /* Registration Form */
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile No.</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="10-digit number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                <select
                  name="profession"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  value={formData.profession}
                  onChange={handleInputChange}
                >
                  {Object.values(Profession).map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Create Password</label>
              <input
                type="password"
                name="password"
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {formData.profession !== Profession.OBSERVER && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Institutional ID Card</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                />
              </div>
            )}

            <div className="bg-blue-900 p-4 rounded-2xl flex justify-between items-center shadow-inner">
              <span className="text-blue-100 font-semibold text-sm">Amount to Pay:</span>
              <span className="text-2xl font-bold text-white">₹{formData.amount}</span>
            </div>

            {error && <div className="text-red-600 text-xs bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}

            <button
              type="button"
              onClick={processPayment}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transform transition-all active:scale-95 ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isProcessing ? 'Connecting to Bank...' : 'Confirm & Pay'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
