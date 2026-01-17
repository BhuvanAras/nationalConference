
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeFZTZrYBeP0iqixb9CHqhdd-lOwhLl_w6z2uvMZqWU_pbB3w/viewform?usp=publish-editor';

const IFIM_URL = 'https://ifim.edu.in/';
interface NavbarProps {
  isRegistered: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isRegistered }) => {
  const location = useLocation();
  const [onLightBackground, setOnLightBackground] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (location.pathname !== '/') {
      setOnLightBackground(true);
      return;
    }

    const updateBackgroundState = () => {
      const details = document.getElementById('details-section');
      const navHeight = 96;
      const threshold = details ? details.offsetTop - navHeight : window.innerHeight * 0.6;
      setOnLightBackground(window.scrollY + navHeight >= threshold);
    };

    updateBackgroundState();
    window.addEventListener('scroll', updateBackgroundState);

    return () => {
      window.removeEventListener('scroll', updateBackgroundState);
    };
  }, [location.pathname]);

  const linkClass = (path: string) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path) 
        ? onLightBackground ? 'bg-gray-100 text-blue-900' : 'bg-white/20 text-white'
        : onLightBackground ? 'text-gray-700 hover:text-blue-900 hover:bg-gray-100' : 'text-gray-100 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent border-none shadow-none">
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logoviksit.png"
                alt="Viksit Bharat Logo"
                className="h-20 w-20 md:h-24 md:w-24 object-contain rounded transition-all"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/details" className={linkClass('/details')}>Details</Link>
            {!isRegistered ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-500 transition-colors"
              >
                Register / Login
              </a>
            ) : (
              <>
                <Link to="/success" className={linkClass('/success')}>Ticket</Link>
                <Link to="/abstract" className="bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-500 transition-colors">
                  Upload Abstract
                </Link>
              </>
            )}
            <a
              href={IFIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/logoviksit1.png"
                alt="IFIM Institutions"
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full bg-white/80 p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
