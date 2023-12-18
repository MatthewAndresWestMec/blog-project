import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  // Assuming 'user' is available in the component
  const { name, userEmail } = {"_id":{"$oid":"657b7d6c9b88d52d71c02e64"},"first_name":"John","last_name":"Doe","email":"john.doe@example.com","password":"hashedpassword","date":{"$date":{"$numberLong":"1702591850391"}},"editRights":false,"__v":{"$numberInt":"0"}};

  const [formData, setFormData] = useState({
    blogTitle: '',
    picture: '',
    shortDescription: '',
    blogContent: '',
    // Uncomment and provide default values if 'user' is not available
    name: name || 'defaultName',
    userEmail: userEmail || 'defaultEmail',
  });

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
      // Uncomment the lines below if you want to include user data
      formData.name = name || 'defaultName';
      formData.userEmail = userEmail || 'defaultEmail';

      // Check if data is being sent correctly
      console.log('Form Data:', formData);

      const response = await axios.post('http://localhost:5000/api/blogs', formData);
      console.log('Blog created successfully:', response.data);

      // Redirect to the main blog list or any other desired path
      window.location.href = '/main';
    } catch (error) {
      console.error('Error creating blog:', error.response.data);
    }
  };

  return (
     <div>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
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

        {/* Uncomment the lines below if you want to include user data */}
        {/* <p>Name: {name}</p>
        <p>Email: {userEmail}</p> */}

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default Create;
