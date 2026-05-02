const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalScore: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  categoryStats: [
    {
      category: String,
      correct: Number,
      total: Number
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", resultSchema);
