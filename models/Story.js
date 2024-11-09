const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: {
        type: String,
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
                        default: "multiple-choice", // Default to multiple-choice, but can be adjusted later
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

// Export the model to be used in routes
module.exports = mongoose.model('Story', storySchema);
