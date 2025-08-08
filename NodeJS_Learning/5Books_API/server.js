// the main server
require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book-routes')

const app = express()
const PORT = process.env.PORT || 3000 // using dotenv

// connect to database
connectToDB()

// set middleware -> express.json()
app.use(express.json()) // built‑in middleware function, it parses the req.body

// routes here
app.use('/api/books', bookRoutes) // API call /api/books + routes in bookRoutes. eg:/api/books/delete/12345

// listening port
app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`)
})
