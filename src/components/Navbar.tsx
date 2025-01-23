import React from 'react';
import { Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center group">
            <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="ml-2 text-xl font-bold text-primary">SafeHer</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/resources" className={isActive('/resources')}>Resources</Link>
            <Link to="/support" className={isActive('/support')}>Support</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}