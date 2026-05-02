const express = require("express");
const Result = require("../models/Result");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Save result (only logged-in users)
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { totalScore, totalQuestions, categoryStats } = req.body;

    const newResult = new Result({
      user: req.user.id,
      totalScore,
      totalQuestions,
      categoryStats
    });

    await newResult.save();
    res.status(201).json({ message: "Result saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get logged-in user's results
router.get("/my-results", authMiddleware, async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id }).sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
