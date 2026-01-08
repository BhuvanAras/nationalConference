
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Details from './pages/Details';
import Register from './pages/Register';
import Success from './pages/Success';
import AbstractUpload from './pages/AbstractUpload';
import { RegistrationResult } from './types';

const App: React.FC = () => {
  const [regResult, setRegResult] = useState<RegistrationResult | null>(() => {
    const saved = localStorage.getItem('conf_reg_result');
    return saved ? JSON.parse(saved) : null;
  });

  const handleRegistrationComplete = (result: RegistrationResult) => {
    setRegResult(result);
    localStorage.setItem('conf_reg_result', JSON.stringify(result));
  };

  const handleLogout = () => {
    setRegResult(null);
    localStorage.removeItem('conf_reg_result');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isRegistered={!!regResult} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/details" element={<Details />} />
            <Route 
              path="/register" 
              element={
                regResult 
                  ? <Navigate to="/success" replace /> 
                  : <Register onComplete={handleRegistrationComplete} />
              } 
            />
            <Route 
              path="/success" 
              element={
                regResult 
                  ? <Success data={regResult} onLogout={handleLogout} /> 
                  : <Navigate to="/register" replace />
              } 
            />
            <Route 
              path="/abstract" 
              element={
                regResult 
                  ? <AbstractUpload regId={regResult.registrationId} /> 
                  : <Navigate to="/register" replace />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
