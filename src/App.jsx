import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/3">
            <Link to="/" className="text-3xl font-serif tracking-widest text-black">
              LUXAHER
            </Link>
            <span className="text-xs tracking-widest text-gray-500 mt-1 uppercase">Women's Fashion</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 w-1/3 justify-center">
            <Link to="/" className="text-sm font-medium text-black hover:text-gray-500">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-black hover:text-gray-500">Shop</Link>
            <Link to="/about" className="text-sm font-medium text-black hover:text-gray-500">About Us</Link>
            <Link to="/contact" className="text-sm font-medium text-black hover:text-gray-500">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center justify-end space-x-6 w-1/3">
            <button className="text-gray-900 hover:text-gray-500">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="text-gray-900 hover:text-gray-500">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="text-gray-900 hover:text-gray-500 relative">
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;