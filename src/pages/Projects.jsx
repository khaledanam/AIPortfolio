import React from 'react';

const ProjectCard = ({ title, description, image, technologies, link }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden card-hover">
    <img src={image} alt={title} className="w-full h-48 object-cover" crossOrigin="anonymous" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">View Project</a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides accurate forecasts using geolocation.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["React Native", "OpenWeatherMap API", "Expo"],
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Redux", "Node.js", "Express"],
      link: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile app for tracking workouts and monitoring fitness progress.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["React Native", "GraphQL", "AWS Amplify"],
      link: "#"
    },
    {
      title: "AI-powered Chatbot",
      description: "An intelligent chatbot for customer support using natural language processing.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center text-gradient">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
