import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const { id } = useParams(); // Access the ID from the URL params
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
        const response = await axios.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]); // Include id in the dependency array to re-fetch when the ID changes

  return (
    <div>
      <p>{blog.blogTitle}</p>
      <p>By {blog.name}</p>
      <p>{blog.picture}</p>
      <p>{blog.Content}</p>
      </div>
  );
};

export default Blog;
