const express = require('express')
const router = express.Router()

router.get("/user", (req, res)=>{
    res.send("welcome to user ")
})


module.exports = router