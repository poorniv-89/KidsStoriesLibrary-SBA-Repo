//imports
import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.mjs';
import connectDB from './db/conn.mjs';

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
connectDB();
//middleware
app.use(express.json());

//routes

//errorhandling middleware
app.use(errorHandler);

//listener
app.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})