const Post = require('../models/post')
exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save()
    res.json(post).status(201)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find().populate('user').sort({
      createdAt: -1,
    })
    res.json(post).status(200)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
