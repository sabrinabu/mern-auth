import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const app=express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(3000,()=>{
  console.log("server ready")
})

app.use(express.json());

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});