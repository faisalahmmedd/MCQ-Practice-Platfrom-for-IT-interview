// routes/cqRoutes.js
const express = require('express');
const router = express.Router();
const CQ = require('../models/CQ');

// Get all CQ questions by category
router.get('/get/:category', async (req, res) => {
  let { category } = req.params;
   category = category.trim();
  try {
    const questions = await CQ.find({ category });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
