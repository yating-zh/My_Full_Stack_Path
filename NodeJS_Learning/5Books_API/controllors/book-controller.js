const Book = require('../models/book')

// 1. List all books
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find()
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: 'list of books fetched successfully',
        data: allBooks
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found in the collection'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// 2. Query a specific book
const getSingleBook = async (req, res) => {
  try {
    const requestedBookId = req.params.id
    const getSingleBook = await Book.findById(requestedBookId)
    if (getSingleBook) {
      res.status(200).json({
        success: true,
        message: '',
        data: getSingleBook
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Book with this ID is not found. Please try with a different ID '
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// 3. Create a new book
const addNewBook = async (req, res) => {
  try {
    const newBookFromData = req.body
    const newlycreatedBook = await Book.create(newBookFromData)
    if (newlycreatedBook) {
      res.status(201).json({
        success: true,
        message: 'Book added successfully',
        data: newlycreatedBook
      })
    }
  } catch (error) {
    console.error(error)
  }
}

// 4. Update Book Info
const updateBook = async (req, res) => {
  try {
    const updatedBookFromData = req.body
    const getCurrentBookID = req.params.id
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFromData, { new: true })
    if (updatedBook) {
      res.status(200).json({
        success: true,
        message: 'Book updated successfully.',
        data: updatedBook

      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Book is not found with this ID'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

// 5. Delete book
const deleteBook = async (req, res) => {
  try {
    const getCurrentID = req.params.id
    const deleteBook = await Book.findByIdAndDelete(getCurrentID)
    if (deleteBook) {
      res.status(200).json({
        success: true,
        data: deleteBook
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Book is not found with this ID'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Soemthing went wrong! Please try again'
    })
  }
}

module.exports = { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook }
