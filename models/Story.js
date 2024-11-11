const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,  // Store URL to the image for the story
        required: true,
    },
    chapters: [
        {
            chapterTitle: {
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
                        type: String,
                        default: "multiple-choice", // Default to multiple-choice, can be adjusted later
                    },
                    options: {
                        type: [String],  // Dynamic array of options (like Yes/No or custom)
                        default: ["Yes", "No"],  // Default options, can be modified
                    },
                },
            ],
        },
    ],
});

module.exports = mongoose.model('Story', storySchema);
