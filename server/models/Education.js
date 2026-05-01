const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institute: { type: String, required: true },
  degree: { type: String, required: true },
  field: String,
  duration: String,
  cgpa: String,
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Education', educationSchema);
