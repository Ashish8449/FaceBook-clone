const express = require('express')
const { register } = require('../controllers/user')
const router = express.Router()


router.post('/register', register)
router.post('/activate', register)

module.exports = router
