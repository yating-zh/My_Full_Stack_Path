const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// register controller
const registerUser = async (req, res) => {
  try {
    // 1. extract userInfo from req body
    const { username, email, password, role } = req.body
    // 2. check if the username or email exist in DB
    const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] })
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'the user is already exist either with same username or same email. please try with different username or email'
      })
    }
    // hash the password for web security
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)

    // create a new user and save in the database
    const newUser = new User({
      username,
      email,
      password: hashedpassword,
      role: role || 'user'
    })
    await newUser.save()
    // const newUser = User.create({
    // username,
    // email,
    // password: hashedpassword,
    // role: role || 'user'
    // })
    if (newUser) {
      res.status(201).json({
        success: true,
        message: 'user registered successfully'
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'unable to register user. please try again'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'some error occured! please try again.'
    })
  }
}
// login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    // check if the username or email exist in DB or not
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'invalid credentials,username doesn\'t exist!'
      })
    }
    // compare the hashed password, check if the password is correct or not
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: 'invalid credentials, username doesn\'t exist!'
      })
    }
    // create (bearer) user token, which in front-end will be stored in cookie or session storage
    const accessToken = jwt.sign({
      userID: user._id,
      username: user.username,
      role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '5m' })
    res.status(200).json({
      success: true,
      message: 'logged in successfully',
      accessToken
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'some error occured! please try again.'
    })
  }
}

module.exports = { registerUser, loginUser }
