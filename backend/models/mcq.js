const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true } // DSA, OOP, DB, OS, Networking
});

module.exports = mongoose.model('Mcq', mcqSchema);
