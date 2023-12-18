import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/pages/pseudo-style/navbar.css'
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
    <nav>
      <ul>
        <div className="left-section">
          <li>
            <h1><Link to="/main" className="logo-link">Bloggo</Link></h1>
          </li>
        </div>
        <div className="right-section">
          <li>
            <Link to="/main"><button>Main</button></Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          <li>
            <Link to="/create">
              <button>Create Blog</button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;