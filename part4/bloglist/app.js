const express = require('express')
const blogListRouter = require('./controllers/bloglist')
const config = require('./utils/config')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use('/api/blogs', blogListRouter)

module.exports = app




