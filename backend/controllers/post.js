const Post = require('../models/post')
exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save()
    res.json(post).status(201)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
