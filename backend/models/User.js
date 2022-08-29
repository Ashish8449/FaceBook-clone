const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, 'first Name is required'],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      require: [true, 'last Name is required'],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      require: [true, 'user Name is required'],
      trim: true,
      text: true,
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'Password is required'],
    },
    picture: {
      type: String,
      default:
        'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
    cover: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      require: [true, 'email is required'],
      trim: true,
      text: true,
      unique: true,
    },
    gender: {
      type: String,
      require: [true, 'gender is required'],
      trim: true,
    },
    birthYear: {
      type: Number,
      require: [true, 'birthYear is required'],
    },
    birthMonth: {
      type: Number,
      require: [true, 'birthYear is required'],
    },
    birthDay: {
      type: Number,
      require: [true, 'birthYear is required'],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ['Single', 'In a relationship', 'Married', 'Divorced'],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.ObjectId,
          ref: 'Post',
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },

  { timestamp: true }
)
const User = mongoose.model('User', userSchema)
module.exports = User
