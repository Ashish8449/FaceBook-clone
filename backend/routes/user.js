const express = require('express')
const { register, activateAccount, logIn } = require('../controllers/user')
const router = express.Router()

router.post('/register', register)
router.post('/activate', activateAccount)
router.post('/login', logIn)

module.exports = router
