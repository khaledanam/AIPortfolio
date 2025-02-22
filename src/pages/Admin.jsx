import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../firebase';

const auth = getAuth(app);
const db = getFirestore(app);

const Admin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '' });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchProjects();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    const projectList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProjects(projectList);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your credentials.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const technologiesArray = newProject.technologies.split(',').map(tech => tech.trim());
      await addDoc(collection(db, 'projects'), {
        ...newProject,
        technologies: technologiesArray
      });
      setNewProject({ title: '', description: '', technologies: '' });
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Admin Login</h1>
        <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Admin Dashboard</h1>
      <button onClick={handleLogout} className="mb-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Logout
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
        <form onSubmit={handleAddProject} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
            <input
              type="text"
              id="technologies"
              value={newProject.technologies}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Project
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <button onClick={() => handleDeleteProject(project.id)} className="mt-2 py-1 px-2 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
