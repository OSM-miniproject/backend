// backend/controllers/responsesController.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

const saveResponse = async (req, res) => {
  const { formData } = req.body;

  try {
    // Connect to the database
    await client.connect();
    const db = client.db();
    const response = await db.collection('responses').insertOne(formData);

    // Send success response
    return res.status(200).json({
      message: 'Response saved successfully!',
      data: response,
    });
  } catch (error) {
    console.error('Error saving response:', error);
    return res.status(500).json({ message: 'Failed to save response', error: error.message });
  } finally {
    await client.close();
  }
};

module.exports = { saveResponse };
