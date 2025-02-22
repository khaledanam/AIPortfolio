import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">My Portfolio</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 transition duration-300">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 transition duration-300">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
            <Link to="/projects" className="block text-gray-700 hover:text-indigo-600 transition duration-300">Projects</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
