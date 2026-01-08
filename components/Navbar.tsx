
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isRegistered: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isRegistered }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  const linkClass = (path: string) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path) 
        ? isHome ? 'bg-white/20 text-white' : 'bg-blue-900 text-white'
        : isHome ? 'text-gray-200 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
    }`;

  return (
    <nav className={`${isHome ? 'absolute top-0 left-0 right-0 bg-transparent border-none' : 'bg-white border-b border-gray-200 sticky top-0 shadow-sm'} z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className={`${isHome ? 'bg-white text-blue-900' : 'bg-blue-900 text-white'} p-1 rounded font-bold text-xs transition-colors`}>BS2047</div>
              <span className={`${isHome ? 'text-white' : 'text-blue-900'} font-bold hidden md:block transition-colors`}>Bharat Synapse @2047</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/details" className={linkClass('/details')}>Details</Link>
            {!isRegistered ? (
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
                Register / Login
              </Link>
            ) : (
              <>
                <Link to="/success" className={linkClass('/success')}>Ticket</Link>
                <Link to="/abstract" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors">
                  Upload Abstract
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
