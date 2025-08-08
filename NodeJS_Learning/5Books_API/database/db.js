// connect to database
const mongoose = require('mongoose')
const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://booksapi:booksapi@books.mc7yodj.mongodb.net/?retryWrites=true&w=majority&appName=books')
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection failed', error)
    process.exit(1) // immediately terminates NodeJS process for "1 - generatic error"
  }
}

module.exports = connectToDB
