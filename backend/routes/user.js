const express = require('express')
const {
  register,
  activateAccount,
  logIn,

  sendVerificationEmail,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
} = require('../controllers/user')
const { authUser } = require('../middlwares/auth')
const router = express.Router()

router.post('/register', register)
router.post('/login', logIn)
router.post('/findUser', findUser)
router.post('/sendResetPassword', sendResetPasswordCode)
router.post('/validateResetCode', validateResetCode)
router.post('/changePassword', changePassword)
router.use(authUser)
router.post('/activate', activateAccount)
router.post('/sendVerification', sendVerificationEmail)

module.exports = router
