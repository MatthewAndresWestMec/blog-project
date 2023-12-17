const express = require('express');
const router = express.Router();

const {
  createBlog,
  editBlog,
  readBlog,
  deleteBlog,
  readOneBlog,
} = require('../controllers/blog-controller');
// routes controllers
router.get('/', readBlog);
router.get('/:id', readOneBlog);
router.post('/', createBlog);
router.put('/:id', editBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
