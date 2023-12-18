import React, { useState } from 'react';
import axios from 'axios';
import '../css/register.css';
import {Link} from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validation
      const { first_name, last_name, email, password, password2 } = formData;
      const validationErrors = [];

      if (!first_name || !last_name || !email || !password || !password2) {
        validationErrors.push({ msg: 'Please fill in all fields' });
      }

      if (password !== password2) {
        validationErrors.push({ msg: 'Passwords do not match' });
      }

      if (password.length < 6) {
        validationErrors.push({ msg: 'Password needs to be at least 6 characters' });
      }

      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }

      // Check if email is already registered
      // const userResponse = await axios.get(`http://localhost:5000/api/users/${email}`);
      // if (userResponse.data.user) {
      //   validationErrors.push({ msg: 'This email has already been registered' });
      //   setErrors(validationErrors);
      //   return;
      // }

      // Register user
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log('Registration successful:', response.data);

      window.location.href = '/';
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setErrors(error.response.data.errors || [{ msg: 'Registration failed' }]);
    }
  };

  return (
    <div className="container">
      {errors.length > 0 && (
        <div className="errorContainer">
          {errors.map((error, index) => (
            <p key={index} className="errorMsg">
              {error.msg}
            </p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Create Bloggo Account</h2>
        <label className="label">
          First Name:
          <br />
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Last Name:
          <br />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Re-Enter Password:
          <br />
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <button type="submit" className="button">
          Create Account
        </button>
            <br />
            Have an account? <Link to="/"><button
          type="button"
          onClick={() => (window.location.href = '/')}
          className="button"
        >
          Login
        </button></Link>
        
      </form>
    </div>
  );
};

export default Register;
