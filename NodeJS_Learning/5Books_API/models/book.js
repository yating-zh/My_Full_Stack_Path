// book schema and model
const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'book title is required'], // 如果不填title会报错
    trim: true, // 清楚字符串前后的whitespace
    maxlength: [100, 'Book title cannot be more than 100 characters'] // 字符串长度限制
  },
  author: {
    type: String,
    required: [true, 'author name is required'], // 如果不填title会报错
    trim: true // 清楚字符串前后的whitespace
  },
  year: {
    type: Number,
    required: [true, 'publication year is required'],
    min: [1000, 'year must be at least 1000'],
    max: [new Date().getFullYear(), 'year cannot be in the future']
  },
  createdAt: {
    type: Date,
    default: Date.now // Mongoose call this timestamp everytime createing new item
  }
})

const Book = mongoose.model('Book', BookSchema) // create model Book using that BookSchema
module.exports = Book
