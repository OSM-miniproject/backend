const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Story = mongoose.models.Story || mongoose.model('Story', StorySchema);

module.exports = Story;  // Use CommonJS module.exports
