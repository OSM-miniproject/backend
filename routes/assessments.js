// routes/assessments.js
const express = require('express');
const router = express.Router();

// POST route for assessments
router.post('/', (req, res) => {
  const formData = req.body;  // This is the data sent from the frontend

  // Check if all required fields are present
  if (!formData.gender || !formData.age || !formData.personality || !formData.handedness) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  // Log form data (For now, just printing to the console)
  console.log('Received Assessment Data:', formData);

  // Simulate saving the data to a database (For example, using MongoDB or Firebase)

  // If successful, send a success message back
  return res.status(200).json({ message: 'Assessment data received successfully!' });
});

module.exports = router;
