const User = require('../models/User')
exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}

exports.validateLength = (text, min, max) => {
  const length = text.length
  return length <= max && length >= min
}
exports.validateUserName = async (userName) => {
  let tempUserName = userName
  while (userName) {
    //
    const check = await User.findOne({ username: tempUserName })
    if (!check) return tempUserName
    tempUserName =
      userName +
      (+new Date().getMilliseconds() * Math.random()).toString().substring(0.1)
  }
}
