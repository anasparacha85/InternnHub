require('dotenv').config()
const express=require('express');
const cors=require('cors')
const bodyparser=require('body-parser')
const AuthRouter=require('./Router/AuthRouter')
const JobRouter=require('./Router/JobRouter')
const passport=require('passport')
const errormiddleware=require('./Middleware/ErrorMiddleware')
const UserRouter=require('./Router/UserRouter')
const AdminRouter=require('./Router/AdminRouter')

require('./Config/passport')
const server=express()

server.use(cors({
    origin: `${process.env.FRONT_END_URL}`,  // OR frontend ka actual URL likhein
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
server.use(bodyparser.json())
server.use(passport.initialize())
server.use(express.urlencoded({ extended: true }));
server.use('/uploads',express.static("uploads"))

server.use('/Api/Auth',AuthRouter)
server.use('/api/jobs',JobRouter)
server.use('/api/user',UserRouter)
server.use('/api/admin',AdminRouter)
server.use(errormiddleware)

const connectdb=require('./utils/db')
const PORT=process.env.PORT||5000
connectdb().then(()=>{
    server.listen(PORT,()=>{
        console.log('server started');
        
    })
})