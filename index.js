const express=require('express');
const connectDB=require('./config/DB')
const dotenv=require('dotenv')



dotenv.config()
const app=express()
connectDB()

const userRouter=require('./routes/user')
app.use(express.json())

app.use(express.urlencoded({extended:false}))


app.use('/',userRouter)


app.listen(process.env.PORT,console.log(`port is running on ${process.env.PORT}`))
