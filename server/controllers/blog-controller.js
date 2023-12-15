const Blog = require('../models/blog');

// Get function for all people
const readBlog = async (req, res) => {
  try {
    console.log('s')
    const blog = await Blog.find();
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error fetching blog' });
  }
};

// Post function for creating people
const createBlog = async (req, res) => { 
  try {
    const { name, blogTitle,picture, shortDescription, blogContent, userEmail, id} = req.body;
    
    if (!name || !shortDescription || !userEmail || !picture || !blogContent || !blogTitle) {
      return res.status(400).json({ data: [], success: false, msg: 'Please enter all fields' });
    }
    
    const allBlog = await Blog.find({});
    const blog = await Blog.create({ name: name,shortDescription:shortDescription, userEmail:userEmail, picture:picture, blogContent:blogContent,blogTitle:blogTitle , id:allBlog.length+1 });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error creating blog' });
  }
};
// Delete function for removing people
const deleteBlog = async (req, res) => {
  try {
    const {id} = req.params
    const blog = await Blog.findOneAndDelete({id:id});
    res.json(blog);
} catch (error) {
    console.log(error);
}
};

const editBlog = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        blogTitle,
        picture,
        shortDescription,
        blogContent,
        userEmail,
      } = req.body;
  
      let changes = {};
  
      if (name) {
        changes.name = name;
      }
  
      if (blogTitle) {
        changes.blogTitle = blogTitle;
      }
  
      if (picture) {
        changes.picture = picture;
      }
  
      if (shortDescription) {
        changes.shortDescription = shortDescription;
      }
  
      if (blogContent) {
        changes.blogContent = blogContent;
      }
  
      if (userEmail) {
        changes.userEmail = userEmail;
      }
  
      const blog = await Blog.findOneAndUpdate({ id: id }, changes, {
        new: true, // return the modified document rather than the original
      });
  
      res.json(blog);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = { createBlog, readBlog, deleteBlog,editBlog };
