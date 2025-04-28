import mongoose from "mongoose";

const authorSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    stories: {
        type: [String],
        required: true
    },
    birthDate: Date
})

export default mongoose.model('Author', authorSchemas);
