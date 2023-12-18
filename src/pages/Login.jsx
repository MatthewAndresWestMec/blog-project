import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users', {
        params: {
          email,
          password,
        },
      });

      // Assuming the API response contains a 'success' property
      if (response.data.success) {
        // Redirect to '/main' upon successful login
        window.location.href = '/main';
      } else {
        // Display an error alert if login fails
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error('Login error:', error);
      // Display an error alert if login fails
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
