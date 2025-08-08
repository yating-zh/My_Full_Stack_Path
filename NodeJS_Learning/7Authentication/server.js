const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const authRoutes = require('./routes/auth-route')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-route')
const dbConnect = require('./database/db')

// connect to DB
dbConnect()

// middleware
app.use(express.json())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)

// listen port
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
