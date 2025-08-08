const jwt = require('jsonwebtoken')
require('dotenv')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denined! no token is provided. please login'
    })
  }
  // decode token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decodedTokenInfo)
    req.userInfo = decodedTokenInfo
    // give this decodedInfo to req then pass to the next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Access denined! no token is provided. please login'
    })
  }
  next()
}

module.exports = authMiddleware
