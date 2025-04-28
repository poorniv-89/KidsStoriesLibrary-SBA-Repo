import mongoose, { mongo } from "mongoose";

const storiesSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'title is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    genre: {
        type: String,
        required: [true, 'Genre must be one of the following: Adventure, Fantasy, Mystery, Educational, Fairy Tale'],
        enum: {
            values: ['Adventure', 'Fantasy', 'Mystery', 'Educational', 'Fairy Tale']
        }

    },
    rating: {
        type: Number,
        min: [1, 'Rating must be between 1 and 5'],
        max: [5, 'Rating must be between 1 and 5'],
        default: 0
    },
    summary: String
})

export default mongoose.model(Story, storiesSchema);