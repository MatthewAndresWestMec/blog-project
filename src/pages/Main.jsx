import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './pseudo-style/main.css';

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data.data); // Access the 'data' property
        if (!Array.isArray(response.data.data)) {
          console.error('Data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <Authenticated />
      {/* <Authenticated/> */}

      <div className="blog-list">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <div className="blog-card">
              <img src={blog.picture} alt={blog.blogTitle} />
              <div className="card-content">
                <h2>{blog.blogTitle}</h2>
                <p>By {blog.name}</p>
                <p>{blog.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Main;
