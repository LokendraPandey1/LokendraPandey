const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: String,
  description: String,
  techUsed: [String],
  githubUrl: String,
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
