import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data.blog); // Access the 'data' property
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);


    const handleDelete = async () => {
    try {
      // Assuming you have an endpoint for deleting blogs
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      // Redirect to the main blog list after deletion
      window.location.href = '/main';
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <p>{blog.blogTitle}</p>
      <p>By {blog.name}</p>
      <p>{blog.picture}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
      {/* dont mind this :)*/}

      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Blog;
