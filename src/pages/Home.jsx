import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8 text-gray-600">I'm a passionate developer creating amazing web experiences with cutting-edge technologies.</p>
          <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">Get in Touch</Link>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Developer" className="rounded-lg shadow-lg" crossOrigin="anonymous" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md card-hover">
          <i className="bi bi-code-slash text-4xl text-indigo-600 mb-4"></i>
          <h2 className="text-2xl font-semibold mb-4">Latest Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>E-commerce Platform</li>
            <li>Task Management App</li>
            <li>Weather Forecast App</li>
          </ul>
          <Link to="/projects" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition duration-300">View All Projects <i className="bi bi-arrow-right"></i></Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md card-hover">
          <i className="bi bi-gear text-4xl text-indigo-600 mb-4"></i>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React & React Native</li>
            <li>Node.js & Express</li>
            <li>MongoDB & Firebase</li>
            <li>Tailwind CSS & SASS</li>
          </ul>
          <Link to="/about" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition duration-300">Learn More <i className="bi bi-arrow-right"></i></Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md card-hover">
          <i className="bi bi-trophy text-4xl text-indigo-600 mb-4"></i>
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Best Web App Award 2022</li>
            <li>1st Place Hackathon Winner</li>
            <li>Open Source Contributor</li>
          </ul>
          <Link to="/about" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition duration-300">See All Achievements <i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
