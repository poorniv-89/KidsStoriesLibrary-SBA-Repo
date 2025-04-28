//imports
import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.mjs';
import connectDB from './db/conn.mjs';
import { stories, kids, authors } from './utilities/data.mjs';
import Author from './models/authorsSchema.mjs';
import Kid from './models/kidsSchema.mjs';
import Story from './models/storiesSchema.mjs';


//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
connectDB();
//middleware
app.use(express.json());

//routes
app.get('/seed', async (req, res)=>{
    //Delete all data
     await Author.deleteMany({}); 
     await Kid.deleteMany({}); 
     await Story.deleteMany({}); 

     await Author.create(authors);
     await Kid.create(kids);
     await Story.create(stories);

     res.send('Data seeded succesfully!');
})
//errorhandling middleware
app.use(errorHandler);

//listener
app.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})