import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';

const Create = () => {
  const [formData, setFormData] = useState({
    blogTitle: '',
    picture: '',
    shortDescription: '',
    blogContent: '',
    name: '',  // Removed the default value
    userEmail: '',
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userdata = sessionStorage.getItem('USERDATA');
        const email = userdata;

        // Set user data in the form
        setFormData((prevData) => ({
          ...prevData,
          userEmail: email,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

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
      // Check if data is being sent correctly
      console.log('Form Data:', formData);

      const response = await axios.post('http://localhost:5000/api/blogs', formData);
      console.log('Blog created successfully:', response.data);

      window.location.href = '/main';
    } catch (error) {
      console.error('Error creating blog:', error.response.data);
    }
  };

  return (
    <div>
      <Navbar/>
      <Authenticated />

      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Blog Title:
          <input
            type="text"
            name="blogTitle"
            value={formData.blogTitle}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Picture URL:
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Short Description:
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Blog Content:
          <textarea
            name="blogContent"
            value={formData.blogContent}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default Create;
