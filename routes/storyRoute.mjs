import express from "express";
import Story from '../models/storiesSchema.mjs';

const router = express.Router();

//retrieve a story by id
router.get('/:id', async(req, res)=>{
    const selectedStory = await Story.findById(req.params.id);
    res.json(selectedStory);
})

export default router;