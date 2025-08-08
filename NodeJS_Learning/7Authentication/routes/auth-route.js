const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controller/auth-controller')

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hello there'
  })
})
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router
