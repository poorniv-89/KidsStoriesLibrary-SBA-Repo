import express from "express";
import Kid from '../models/kidsSchema.mjs';

const router = express.Router();

router.get('/', async(req, res)=>{
    const allKids = await Kid.find({});
    res.json(allKids);
})


export default router;