import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user authentication data from sessionStorage
    sessionStorage.removeItem('USERDATA');
    sessionStorage.removeItem('authenticated');
    // Redirect to the home page or login page
    navigate('/');
  };

  return (
    <div className="header">
      <Link to="/main" className="navbar-link">Bloggo</Link>
      <Link to="/create" className="navbar-link">Create Blog</Link>
      <a onClick={handleLogout} className="navbar-link" href="/">Logout</a>
      <h1 className="logo">Bloggo</h1>
    </div>
  );
};

export default Navbar;
