import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()
dotenv.config()

const PORT = process.env.PORT || 8800;


// MongoDB connection


mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.error('Reason:', err.reason);
  });



mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected!!")
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected!!")
})


app.use(cookieParser())
app.use(cors())
app.use(express.json())
//middlewarw
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/hotels",hotelsRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
    })
})


app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(8800,()=>{
   //connect();
    console.log("connect to backend!!")
})