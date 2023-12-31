import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import pgsRoute from "./routes/pgs.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
dotenv.config()


const connect = async ()=>{

    try {
         await mongoose.connect(process.env.MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        
        console.log("Connected to mongodb..");
    } catch (error) {
        throw  error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB is disconnected..");
})
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB is connected...");
})


//middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute); 
app.use("/api/users", usersRoute); 
app.use("/api/pgs", pgsRoute); 
    
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });



// 
app.listen(8800, ()=>{
    connect()
    console.log("My backend is connnected.....")
})