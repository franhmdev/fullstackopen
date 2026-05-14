const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const mongoUrl = `mongodb+srv://franhm93_db_user:${password}@cluster0.arkutbu.mongodb.net/blogList?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true`
console.log('mongoUrl:', mongoUrl)
mongoose.set('strictQuery',false)
mongoose.connect(mongoUrl)
    .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })