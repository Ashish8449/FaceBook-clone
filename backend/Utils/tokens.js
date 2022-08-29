const jwt = require('jsonwebtoken')

exports.genrateToken = (payload, expired) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET_KEY, {
    expiresIn: expired,
  })
}
