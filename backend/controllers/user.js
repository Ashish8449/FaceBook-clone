const User = require('../models/User')
const {
  validateEmail,
  validateLength,
  validateUserName,
} = require('../Utils/validation')

const bcrypt = require('bcrypt')
const { genrateToken } = require('../Utils/tokens')
const { sendVerificationEmail } = require('../Utils/mailer')
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email',
      })
    }
    const checkEmail = await User.findOne({ email })
    if (checkEmail) {
      return res.status(400).json({
        message:
          'This Email is already in exist, try with a different email address',
      })
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: 'First name must be between 3 and 30 characters',
      })
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: 'Last name must be between 3 and 30 characters',
      })
    }
    if (!validateLength(password, 6, 30)) {
      return res.status(400).json({
        message: 'Password must be between 3 and 30 characters',
      })
    }
    const cryptedPassword = await bcrypt.hash(password, 12)
    const tempUserName = first_name + last_name
    const validateName = await validateUserName(tempUserName)

    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: validateName,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save()

    const verifacatioToken = genrateToken({ id: user._id.toString() }, '30m')
    // console.log(verifacatioToken)
    const url = `${process.env.BASE_URL}/acitvate/${verifacatioToken}`
    sendVerificationEmail(user.email, user.first_name, url)
    const token = genrateToken({ id: user._id.toString() }, '7d')

    res
      .json({
        id: user._id,
        username: user.username,
        picture: user.picture,
        first_name: user.first_name,
        last_name: user.last_name,
        token,
        verified: user.verified,
        message: 'Registraion Success | Please acitvate your email ',
      })
      .status(201)
  } catch (error) {
    console.log(error)
  }
}

exports.activateAccount = (req, res) => {


}
