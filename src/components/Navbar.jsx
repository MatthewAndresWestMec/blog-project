import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user authentication data from sessionStorage
    sessionStorage.removeItem('USERDATA');
    sessionStorage.removeItem('authenticated');
    // Redirect to the home page or login page
    window.location.href = '/';
  };

  return (
    <>
      <div class="header">
        <Link to="/main" className="navbar-link">Bloggo</Link>
          <Link to="/create" className='navbar-link'>Create Blog</Link>
         <a onClick={handleLogout} className='navbar-link'>Logout</a>
      </div>
      <h1 class="logo">Bloggo</h1>
    </>
  );
};

export default Navbar;
