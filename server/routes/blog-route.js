const express = require('express')
const router = express.Router()

const {createBlog, editBlog, readBlog, deleteBlog} = require('../controllers/blog-controller')
// routes controllers
router.get('/', readBlog)
router.post('/', createBlog)
router.put('/:id', editBlog)
router.delete('/:id', deleteBlog)

module.exports = router;