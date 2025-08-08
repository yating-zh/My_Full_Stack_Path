const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')

router.get('/welcome', authMiddleware, (req, res) => {
  const { username, userID, role } = req.userInfo
  res.status(200).json({
    message: 'welcome to the home page',
    user: { _id: userID, username, role }
  })
})

module.exports = router
