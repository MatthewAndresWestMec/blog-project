import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';
import '../css/create.css';

const Create = () => {
  const navigate = useNavigate(); // Use useNavigate
  const [formData, setFormData] = useState({
    blogTitle: '',
    picture: '',
    shortDescription: '',
    blogContent: '',
    name: '',
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

      navigate('/main'); // Use navigate instead of window.location.href
    } catch (error) {
      console.error('Error creating blog:', error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-container">
        <Authenticated />

        <h2 className="create-title">Create New Blog</h2>
        <form className="create-box" onSubmit={handleSubmit}>
          <label className="create-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="create-input"
            />
          </label>

          <label className="create-label">
            Blog Title:
            <input
              type="text"
              name="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              required
              className="create-input"
            />
          </label>

          <label className="create-label">
            Picture URL:
            <input
              type="text"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              required
              className="create-input"
            />
          </label>

          <label className="create-label">
            Short Description:
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              className="create-input"
            />
          </label>

          <label className="create-label">
            Blog Content:
            <textarea
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              required
              className="create-textarea"
            />
          </label>

          <button type="submit" className="create-button">
            Create Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
