const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    questions: [
        {
            text: {
                type: String,
                required: true,
            },
            answerType: {
                type: String, // E.g., "text", "multiple-choice"
                default: "text",
            },
        },
    ],
});

module.exports = mongoose.model('Story', storySchema);
