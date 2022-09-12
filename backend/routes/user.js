const express = require('express')
const {
  register,
  activateAccount,
  logIn,
  auth,
  sendVerificationEmail,
} = require('../controllers/user')
const { authUser } = require('../middlwares/auth')
const router = express.Router()

router.post('/register', register)
router.post('/login', logIn)
router.use(authUser)
router.post('/activate', activateAccount)
router.post('/sendVerification', sendVerificationEmail)


module.exports = router
