require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING)
    console.log('connected to mongoDB successfully')
  } catch (error) {
    console.error('failed to connect to mongoDB', error)
    process.exit(1)
  }
}

module.exports = dbConnect
