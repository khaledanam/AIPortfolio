import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center text-gradient">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
          alt="Profile" 
          className="w-64 h-64 rounded-full object-cover shadow-lg"
          crossOrigin="anonymous"
        />
        <div className="max-w-2xl">
          <p className="text-xl mb-4 text-gray-700">
            Hi, I'm John Doe, a passionate full-stack developer with over 5 years of experience in creating beautiful and functional websites and applications.
          </p>
          <p className="text-xl mb-4 text-gray-700">
            I specialize in front-end development using modern technologies like React, Vue.js, and Tailwind CSS. I'm also proficient in back-end development with Node.js, Express, and Python, as well as database management with MongoDB and Firebase.
          </p>
          <p className="text-xl mb-4 text-gray-700">
            My goal is to create intuitive and efficient digital solutions that not only meet but exceed client expectations. I'm constantly learning and staying up-to-date with the latest trends and technologies in web development.
          </p>
          <p className="text-xl mb-4 text-gray-700">
            When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the kitchen, or contributing to open-source projects.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'AWS', 'Docker', 'GraphQL'].map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center card-hover">
              <i className={`bi bi-check-circle text-2xl text-green-500 mb-2`}></i>
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
