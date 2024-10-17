// server.js
require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // Import MongoDB connection
const assessmentsRoute = require('./routes/responses');
const storiesRoute = require('./routes/stories');
const contactRoute = require('./routes/contactroute');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB(); // Call the function to connect to the database

// Middleware to handle CORS and parse JSON
app.use(cors());
app.use(bodyParser.json());  // For parsing application/json

// Route for handling assessments
app.use('/api/responses', assessmentsRoute);
app.use('/api/stories', storiesRoute); 
app.use("/api", contactRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
