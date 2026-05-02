const mongoose = require('mongoose');

const cqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true } // DSA, OOP, etc.
});

module.exports = mongoose.model('CQ', cqSchema);
