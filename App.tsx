
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Details from './pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
