import mongoose from "mongoose";

const kidsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favoriteGenres: {
        type: [String],
        required: true
    },
    reviews: String
})

export default mongoose.model('Kid', kidsSchema);