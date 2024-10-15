// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const responsesRoutes = require('./routes/responses');

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use('/api/responses', responsesRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
