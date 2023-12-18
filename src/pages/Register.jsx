import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Create an Account</h2>

      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <p key={index}>{error.msg}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Re-Enter Password:
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
