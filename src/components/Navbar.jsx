import React from 'react';
import { Link } from 'react-router-dom';

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
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;