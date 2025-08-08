require('dotenv').config()
const mongoose = require('mongoose')
const MONGODB_LINK = process.env.MONGODB_LINK

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_LINK)
    console.log('connected to MongoDB')
  } catch (error) {
    console.error('failed to connect to database')
    process.exit(1)
  }
}

module.exports = dbConnect
