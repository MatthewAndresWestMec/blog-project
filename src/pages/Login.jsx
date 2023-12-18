import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', credentials);
      console.log('User logged in successfully:', response.data);
      if (response.data.success) {
        alert('Login Successful!');
        sessionStorage.setItem('USERDATA', credentials.email)
        sessionStorage.setItem('authenticated', 'true')
        window.location.href = '/main';
      } else {
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
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
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button type="button" onClick={() => window.location.href = '/register'}>Sign Up</button>
      <p>As an example you can use:<br></br> Email: matthew.a@example.com <br></br> Password: yourpassword</p>
    </div>
  );
};

export default Login;
