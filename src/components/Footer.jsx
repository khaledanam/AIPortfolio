import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">My Portfolio</h3>
            <p className="text-gray-400">Crafting digital experiences with passion and precision.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-indigo-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-400 transition duration-300">About</a></li>
              <li><a href="/projects" className="hover:text-indigo-400 transition duration-300">Projects</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><i className="bi bi-github"></i></a>
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
