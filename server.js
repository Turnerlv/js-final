const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const dotenv = require('dotenv')
const path = require('path');

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
app.use(express.static(path.join(__dirname, 'public')));
  
//Routes
app.use('/bites', bitesRouter)

// Fallback route to serve index.html for all unmatched routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Confirm app running
app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`)
})
