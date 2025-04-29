import express from "express";
import Author from '../models/authorsSchema.mjs';

const router = express.Router();

//create a new author 
router.post('/', async(req, res)=>{
    const newAuthor = await Author.create(req.body);
    res.status(201).json({
        message: 'New author created',
        Details: newAuthor});
})

export default router;