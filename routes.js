const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require('./controller/postController');

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
