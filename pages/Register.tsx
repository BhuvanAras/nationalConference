import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Profession, RegistrationData, RegistrationResult } from '../types';
import { FEES } from '../constants';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeFZTZrYBeP0iqixb9CHqhdd-lOwhLl_w6z2uvMZqWU_pbB3w/viewform?usp=publish-editor';

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
  
  const processPayment = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  // Forgot Password Handlers
  const sendOtp = async () => {
    if (!resetEmail) {
      setError("Please enter your email.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);

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
    setSuccessMsg("Password reset will be configured soon.");
    setTimeout(() => {
      setShowForgotPassword(false);
      setResetStep('email');
      setResetEmail('');
      setEnteredOtp('');
      setNewPassword('');
      setSuccessMsg(null);
    }, 2000);
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
