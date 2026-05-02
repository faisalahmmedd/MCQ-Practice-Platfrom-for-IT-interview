const express = require('express');
const router = express.Router();
const Mcq = require('../models/mcq');


router.post("/get-multi-quiz", async (req, res) => {
  try {
    let { categories, count } = req.body;

    // Ensure categories is always array
    categories = Array.isArray(categories) ? categories : [categories];
    count = parseInt(count) || 10; // default 5 if not provided

    let allQuestions = [];

    for (const category of categories) {
      const quiz = await Mcq.aggregate([
        { $match: { category } },
        { $sample: { size: count } }  // ✅ per category count
      ]);
      allQuestions = [...allQuestions, ...quiz];
    }

    // Shuffle final question set
    allQuestions = allQuestions.sort(() => Math.random() - 0.5);

    if (allQuestions.length === 0) {
      return res.status(404).json({ message: "No questions found!" });
    }

    res.json(allQuestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Submit quiz answers
router.post('/submit-quiz', async (req, res) => {
  try {
    const userAnswers = req.body.answers; // [{id, answer}]
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;

    for (const ans of userAnswers) {
      const mcq = await Mcq.findById(ans.id);

      if (ans.answer === null) {
        // Unattempted → count as wrong
        wrongCount++;
      } else if (String(mcq.correctAnswer) === String(ans.answer)) {
        // Correct
        score++;
        correctCount++;
      } else {
        // Attempted but wrong
        wrongCount++;
      }
    }

    res.json({ 
      score, 
      total: userAnswers.length, 
      correct: correctCount, 
      wrong: wrongCount,
      answers: userAnswers 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
