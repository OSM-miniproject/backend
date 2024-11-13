const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  results: [{
    type: String,
    trim: true
  }]
});

module.exports = mongoose.model('Result', resultSchema);