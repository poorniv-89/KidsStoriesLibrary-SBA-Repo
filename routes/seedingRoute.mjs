import express from "express";
import { stories, kids, authors } from '../utilities/data.mjs';
import Author from '../models/authorsSchema.mjs';
import Kid from '../models/kidsSchema.mjs';
import Story from '../models/storiesSchema.mjs';


const router = express.Router();

router.get('/', async (req, res)=>{
     //Delete all data
     await Author.deleteMany({}); 
     await Kid.deleteMany({}); 
     await Story.deleteMany({}); 

     await Author.create(authors);
     await Kid.create(kids);
     await Story.create(stories);

     res.send('Data seeded succesfully!');
});

 export default router;