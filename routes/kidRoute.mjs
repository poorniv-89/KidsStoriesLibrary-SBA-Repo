import express from "express";
import Kid from '../models/kidsSchema.mjs';

const router = express.Router();

//get all kids details
router.get('/', async (req, res) => {
    const allKids = await Kid.find({});
    res.json(allKids);
})

//update Kids details
router.patch('/:id', async (req, res) => {
    const updatedKid = req.body;
    const results = await Kid.findByIdAndUpdate(req.params.id, updatedKid, { new: true });
    res.json(results);
})

export default router;