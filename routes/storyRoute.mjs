import express from "express";
import Story from '../models/storiesSchema.mjs';

const router = express.Router();

//search stories by genre using query params
router.get('/search', async(req, res)=>{
    const genre = req.query.genre;
    const results = await Story.find({genre: genre})
    res.json(results);
    })

//retrieve a story by id
router.get('/:id', async(req, res)=>{
    const selectedStory = await Story.findById(req.params.id);
    res.json(selectedStory);
})



export default router;