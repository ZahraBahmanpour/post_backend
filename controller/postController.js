const posts = require('../model/model');

const createPost = (req, res) => {
  try {
    const post = {
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
      createdAt: new Date(),
    };
    posts.push(post);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((post) => post.id === id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    } else {
      res.status(200).json({ post });
    }
  } catch (error) {
    console.log(error);
  }
};

const updatePost = (req, res) => {
  try {
    const post = req.body;
    const { id } = req.params;
    index = posts.findIndex((p) => p.id === id);
    posts[index] = post;
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = (req, res) => {
  try {
    const { id } = req.params;
    posts.splice((index = posts.findIndex((p) => p.id === id)), 1);
    res.status(200).json({ msg: 'Post Removed' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
