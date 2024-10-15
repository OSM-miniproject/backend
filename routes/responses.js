// backend/routes/responses.js

const express = require('express');
const router = express.Router();
const { saveResponse } = require('../controllers/responsesController');

// POST route to save the user responses
router.post('/', saveResponse);

module.exports = router;
