const mongoose = require('mongoose');

// Define the Blog schema
const BlogSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  blogContent: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

// Create the Blog model
const Blog = mongoose.model('blogs', BlogSchema);

module.exports = Blog;
