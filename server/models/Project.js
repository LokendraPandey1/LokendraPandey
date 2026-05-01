const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  longDescription: String,
  techUsed: [String],
  features: [String],
  liveUrl: String,
  githubUrl: String,
  thumbnail: String,
  images: [String],
  category: String,
  year: String,
  type: String,
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Project', projectSchema);
