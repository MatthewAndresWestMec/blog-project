import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Authenticated from '../components/Authenticated';
import Navbar from '../components/Navbar';

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
        setBlog(response.data.blog); // Assuming the blog data is in the 'blog' property
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

  return (
    <div>
            <Navbar/>

          <Authenticated/>

      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blogTitle">Blog Title</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={blog.blogTitle}
          onChange={handleChange}
        />

        <label htmlFor="picture">Picture</label>
        <input
          type="text"
          id="picture"
          name="picture"
          value={blog.picture}
          onChange={handleChange}
        />

        <label htmlFor="shortDescription">Short Description</label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          value={blog.shortDescription}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="blogContent">Blog Content</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={blog.blogContent}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default Edit;
