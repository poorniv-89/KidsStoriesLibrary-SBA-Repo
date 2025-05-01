//imports
import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.mjs';
import connectDB, { createAuthorValidation } from './db/conn.mjs';
import seedingRoute from './routes/seedingRoute.mjs'
import kidRoute from './routes/kidRoute.mjs';
import authorRoute from './routes/authorRoute.mjs';
import storyRoute from './routes/storyRoute.mjs';

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
await connectDB();
await createAuthorValidation();

//middleware
app.use(express.json());

//routes
app.use('/seed', seedingRoute);
app.use('/api/stories', storyRoute);
app.use('/api/kids', kidRoute);
app.use('/api/authors', authorRoute);

//errorhandling middleware
app.use(errorHandler);

//listener
app.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})