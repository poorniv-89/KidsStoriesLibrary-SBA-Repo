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
    birthDate: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const parts = value.split('-');
                if (parts.length !== 3) return false;

                const [year, month, day] = parts.map(Number);
                if (String(year).length !== 4) return false;
                if (month < 1 || month > 12) return false;
                if (day < 1 || day > 31) return false;

                // Now check if it’s an actual calendar date
                const birthDate = new Date(value);
                if (birthDate.toISOString().slice(0, 10) !== value) {
                  return false;
                }
                return true;
            },
            message: 'Birth date must be a valid date in YYYY-MM-DD format!'
        }
    }
})

export default mongoose.model('Author', authorSchemas);
