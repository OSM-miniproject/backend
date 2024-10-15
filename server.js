// server.js
require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const assessmentsRoute = require('./routes/assessments');
const storiesRoute = require('./routes/stories');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle CORS and parse JSON
app.use(cors());
app.use(bodyParser.json());  // For parsing application/json

// Route for handling assessments
app.use('/api/assessments', assessmentsRoute);
app.use('/api/stories', storiesRoute); 

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
