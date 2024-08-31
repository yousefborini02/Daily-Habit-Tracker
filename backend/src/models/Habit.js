// const mongoose = require('mongoose');

// const habitSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   category: String,
//   tags: [String],
//   frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
//   completions: [{ date: Date }]
// });

// module.exports = mongoose.model('Habit', habitSchema);




const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  tags: [String],
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
  isDeleted: { type: Boolean, default: false },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  completions: [{ date: Date }]
});

module.exports = mongoose.model('Habit', habitSchema);