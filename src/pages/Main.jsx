import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.scss'; // Import your SCSS file
import axios from 'axios';

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
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
  );
};

export default Main;