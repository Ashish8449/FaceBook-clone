const User = require('../models/User')
const {
  validateEmail,
  validateLength,
  validateUserName,
} = require('../Utils/validation')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { genrateToken } = require('../Utils/tokens')
const { sendVerificationEmail, sendResetCode } = require('../Utils/mailer')
const { Code } = require('../models/Code')
const { genrateCode } = require('../Utils/generateCode')
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

    const verifacatioToken = genrateToken({ id: user._id.toString() }, '1d')
    // console.log(verifacatioToken)
    const url = `${process.env.BASE_URL}/activate/${verifacatioToken}`
    console.log(url)
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
        email: user.email,
        verified: user.verified,
        message: 'Registraion Success | Please acitvate your email ',
      })
      .status(201)
  } catch (error) {
    console.log(error)
  }
}

exports.activateAccount = async (req, res) => {
  try {
    const validUser = req.user.id
    console.log(req.user)
    const { token } = req.body
    const user = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    if (validUser !== user.id) {
      return res.status(400).json({
        message: `You Don't have the authorization to complete this operation`,
      })
    }
    const check = await User.findById(user.id)

    // you have also check token is not expired (comming soon )
    console.log(check)
    if (check.verified) {
      return res.status(400).json({ message: 'This Email is already verified' })
    } else {
      await User.findByIdAndUpdate(user.id, {
        verified: true,
      })
      return res
        .status(200)
        .json({ message: 'Account has been activated successfully' })
    }
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

exports.sendVerificationEmail = async (req, res) => {
  try {
    const id = req.user.id
    const user = await User.findById(id)
    if (user.verified) {
      return res
        .status(400)
        .json({ message: 'This account has been activated successfully' })
    }

    const verifacatioToken = genrateToken({ id: user._id.toString() }, '1d')
    // console.log(verifacatioToken)
    const url = `${process.env.BASE_URL}/acitvate/${verifacatioToken}`

    sendVerificationEmail(user.email, user.first_name, url)

    return res
      .status(200)
      .json({ message: 'Email Verification link has been sent to your email.' })
  } catch (error) {}
}
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      res
        .status(400)
        .json({ message: 'This email address is not connected to an account' })
    }

    const check = await bcrypt.compare(password, user.password)
    if (!check) {
      return res
        .status(400)
        .json({ message: 'Invalid credentials . Please try again later' })
    }

    const token = genrateToken({ id: user._id.toString() }, '7d')

    res
      .json({
        id: user._id,
        username: user.username,
        picture: user.picture,
        first_name: user.first_name,
        last_name: user.last_name,
        token,
        email: user.email,
        verified: user.verified,
        message: 'Registraion Success | Please acitvate your email ',
      })
      .status(200)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.findUser = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email: email })

    if (!user)
      return res
        .status(400)
        .json({ message: 'Account with this email not exist' })
    return res.status(200).json({
      email: user.email,
      picture: user.picture,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.sendResetPasswordCode = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email: email })

    await Code.findOneAndRemove({ user: user._id })
    const code = genrateCode(5)

    const saveCode = await new Code({
      code,
      user: user._id,
    }).save()
    sendResetCode(user.email, user.first_name, code)
    return res
      .status(200)
      .json({ message: 'Email Reset Code has been set to your email' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.validateResetCode = async (req, res) => {
  try {
    const { email, code } = req.body
    const user = await User.findOne({ email })

    const dbCode = await Code.findOne({ user: user._id })
    if (code !== dbCode.code) {
      return res.status(400).json({ message: 'Verification Code is Wrong' })
    }
    return res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.changePassword = async (req, res) => {
  try {
    const { email, password } = req.body
    const cryptedPassword = await bcrypt.hash(password, 12)
    await User.findOneAndUpdate({ email }, { password: cryptedPassword })
    return res.json({ message: 'Your Password has been successfully changed' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getProfile = async (req, res) => {
  try {
    const username = req.params.userName
    const profile = await User.findOne({ username })
    if (!profile) {
      res.status(404).json({ message: 'user does not exist' })
    }
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
