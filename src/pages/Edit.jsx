import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';
import './pseudo-style/edit.css'; // Import your CSS file

const Edit = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    blogTitle: '',
    picture: '',
    shortDescription: '',
    blogContent: '',
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
      console.log('Blog updated successfully!');
      window.location.href = `/blog/${id}`;
    } catch (error) {
      console.error('Error updating blog:', error);
      // Handle error
    }
  };

  return (<> <Navbar />
    <div className="edit-container">
     
      <Authenticated />
      <div className='edit-box'>
        <h2 className="edit-title">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="blogTitle" className="edit-label">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            value={blog.blogTitle}
            onChange={handleChange}
            className="edit-input"
          />

          <label htmlFor="picture" className="edit-label">
            Picture
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={blog.picture}
            onChange={handleChange}
            className="edit-input"
          />

          <label htmlFor="shortDescription" className="edit-label">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={blog.shortDescription}
            onChange={handleChange}
            className="edit-textarea"
          ></textarea>

          <label htmlFor="blogContent" className="edit-label">
            Blog Content
          </label>
          <textarea
            id="blogContent"
            name="blogContent"
            value={blog.blogContent}
            onChange={handleChange}
            className="edit-textarea"
          ></textarea>

          <button type="submit" className="edit-button">
            Update Blog
          </button>
        </form>
      </div>
    </div></>
  );
};

export default Edit;
