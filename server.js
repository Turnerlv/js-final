const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const dotenv = require('dotenv')

//Router
const bitesRouter = require('./routes/bites')

//Database configuration
require('dotenv').config()
require('./config/database')

//Express app configuration
const PORT = process.env.PORT || 3000
const app = express()

//Middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
  
//Routes
app.use('/bites', bitesRouter)

//Confirm app running
app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`)
})
