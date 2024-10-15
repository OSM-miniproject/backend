const express = require('express');
const mongoose = require('mongoose');
const Story = require('../models/Story'); // Adjust the path to your model

const router = express.Router();

const MONGODB_URI = process.env.MONGODB_URI; // Use your MongoDB connection string

// Middleware to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState) {
        return; // If already connected, skip
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
}

// GET route to fetch stories
router.get('/', async (req, res) => {
    try {
        await connectToDatabase(); // Ensure MongoDB is connected

        const stories = await Story.find(); // Fetch all stories
        res.status(200).json(stories); // Send stories as JSON
    } catch (error) {
        console.error('Error fetching stories:', error);
        res.status(500).json({ error: 'Failed to fetch stories' });
    }
});

module.exports = router;
