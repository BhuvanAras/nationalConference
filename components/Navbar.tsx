
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
        <div className="flex justify-between min-h-16 py-2">
          <div className="flex items-start">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logoviksit.png"
                alt="Viksit Bharat Logo"
                className={`h-[200px] w-[200px] object-contain rounded  p-2 transition-all ${
                  isHome ? 'shadow-lg' : 'shadow-sm'
                }`}
              />
            </Link>
          </div>
          <div className="flex items-start space-x-4 pt-2">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/details" className={linkClass('/details')}>Details</Link>
            {!isRegistered ? (
              <Link to="/register" className="bg-amber-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-500 transition-colors">
                Register / Login
              </Link>
            ) : (
              <>
                <Link to="/success" className={linkClass('/success')}>Ticket</Link>
                <Link to="/abstract" className="bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-500 transition-colors">
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
