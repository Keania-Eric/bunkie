const express = require('express')
const helmet = require('helmet')

require('dotenv').config()

const authRouter = require('./routes/auth.routes')

const app = express()

app.use(helmet())

// Bring along all routes
app.use('/auth', authRouter)

const PORT = process.env.PORT

app.get('/', (req, res, next)=> {
  
    res.json("My first nodejs application")
})

app.listen(PORT, ()=> {
    console.log("App Running on "+ PORT)
})
