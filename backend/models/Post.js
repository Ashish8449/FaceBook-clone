const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema
mongoose.Promise = global.Promise
const postSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['profilePicture', 'coverPicture', null],
      default: null,
    },
    text: {
      type: String,
    },
    images: {
      type: Array,
    },
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    background: {
      type: String,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        image: {
          type: String,
        },
        commentBy: {
          type: ObjectId,
          ref: 'User',
        },
        commentAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
module.exports = Post
