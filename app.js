//required packages
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//connect to database
mongoose.connect('mongodb://localhost:27017/blog_system', () => console.log('connected to database successfully!'))

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')


//routes
app.use(require('./routes/index'));
app.use(require('./routes/compose'));
app.use(require('./routes/post'));

//server configurations
app.listen(3000, () => console.log('server runs on http://localhost:3000'))