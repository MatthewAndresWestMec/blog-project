const {MongoClient} = require('mongodb')
const express = require('express')
const app =express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
// const peopleController = require('./routes/user-controller')
const blogController = require('./routes/blog-route')
const connectDB = require('./db/connect')
const port = 5000;

//Middleware

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors()) 

// Body Parser
app.use(express.urlencoded({extended: false}))

// CheckPath
app.get('/',(req,res)=>{
    res.send('server is working')
})

//routes
// app.use('/people',peopleController)
app.use('/blog',blogController)

const initServer = async () => {
    try{
        await connectDB('mongodb+srv://matthew:1234@matthewcluster.chtewfp.mongodb.net/Blog-Project') 
        app.listen(5000, () =>{
        console.log('listening on port 5000')
    })}
        catch(error) {console.log(error)};
    }
    initServer();