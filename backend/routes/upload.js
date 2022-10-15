const express = require('express')
const { uploadImages, listImages } = require('../controllers/upload')
const imageUpload = require('../middlwares/imageUpload')
const router = express.Router()

router.post('/uploadImages', imageUpload, uploadImages)
router.get('/listImages', listImages)
module.exports = router
