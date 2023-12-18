// Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';
import './pseudo-style/blog.css';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    name: '',
    blogTitle: '',
    picture: '',
    shortDescription: '',
    blogContent: '',
    userEmail: '',
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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      window.location.href = '/main';
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const userdata = sessionStorage.getItem('USERDATA');
  const email = userdata;
  const show = email === blog.userEmail;

  return (
    <>
      <Navbar />
      <Authenticated />
      <div className="blog-container">
        <div className='blog-box'>
          <h1 className="blog-title">{blog.blogTitle}</h1>
          <p className="blog-author">By {blog.name}</p>
          <img className="blog-image" src={blog.picture} alt={blog.blogTitle} />
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
          {show ? (
            <>
              <Link to={`/edit/${id}`}>
                <button className="blog-button edit-button">Edit</button>
              </Link>{' '}
              <button className="blog-button delete-button" onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <p className="permission-message">You do not have permission to edit / delete blog</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
