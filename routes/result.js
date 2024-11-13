const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

router.get("/", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        error: "Email parameter is required",
      });
    }

    const result = await Result.findOne({ email: email.toLowerCase() });

    return res.json({
      results: result ? result.results : [],
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.post("/", async (req, res) => {
    try {
      const { email, result } = req.body;
  
      // Improved validation
      if (!email || typeof email !== 'string') {
        return res.status(400).json({
          error: "Valid email is required"
        });
      }
  
      if (!result) {
        return res.status(400).json({
          error: "Result data is required"
        });
      }
  
      // Use findOneAndUpdate for atomic operation
      const userResult = await Result.findOneAndUpdate(
        { email: email.toLowerCase() },
        { $push: { results: result } },
        { new: true, upsert: true }
      );
  
      return res.status(201).json({
        message: "Result stored successfully",
        results: userResult.results
      });
    } catch (error) {
      console.error('Error storing result:', error);
      return res.status(500).json({
        error: "Internal server error"
      });
    }
  });
module.exports = router;
