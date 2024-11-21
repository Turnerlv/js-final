const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bitesRouter = require('./routes/bites')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
  
app.use('/bites', bitesRouter)


app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`)
})
