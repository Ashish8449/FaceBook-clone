const jwt = require('jsonwebtoken')

exports.authUser = (req, res, next) => {
  try {
    let tem = req.header('Authorization')
    const token = tem && tem.split(' ')[1]

    if (!token) {
      return res.status(401).json({ message: 'User is not authorized' })
    }
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({ message: 'User is not authorized' })
      }
      req.user = user
      next()
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
