require('dotenv').config()
const express = require('express')
const dbConnect = require('./database/db')
const productRoutes = require('./routes/routes')
const app = express()

// connect to DB
dbConnect()

// middleware
app.use(express.json())

// routes
app.use('/grocery_api/products', productRoutes)

// listening port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
