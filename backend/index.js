import express from 'express'
import mongoose from 'mongoose'
import authRouter from './router/authRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json()) 

mongoose 
  .connect(process.env.MONGO
  //    ,{
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   serverSelectionTimeoutMS: 50000,
  // }
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  app.listen(3000,()=>{
      console.log('server is running on port 3000');
  })

  app.use('/backend',authRouter)

  app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
      success : false,
      statusCode,
      message
    })
  })