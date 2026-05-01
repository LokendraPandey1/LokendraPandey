const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  personalInfo: {
    fullName: String,
    jobTitle: String,
    tagline: String,
    location: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    twitter: String,
    resumeLink: String,
    profilePhoto: String
  },
  aboutMe: {
    shortBio: String,
    longBio: [String],
    yearsOfExperience: Number,
    currently: String
  },
  skills: [{
    category: String,
    items: [String]
  }]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
