const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

mongoose.connect('mongodb://127.0.0.1:27017/jwt',{useNewUrlParser: true}).then(()=>console.log("DB Connected"))
    
app.use(express.json())

app.use('/api/user',authRoute)
app.use('/api/posts',postRoute)

app.listen(3000,()=>console.log("Server Running!"))

