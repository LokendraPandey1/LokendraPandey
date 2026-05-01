const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
const schema = new mongoose.Schema({}, { strict: false });
const Portfolio = mongoose.model('Portfolio', schema);

async function run() {
  await mongoose.connect(MONGO_URI);
  const doc = await Portfolio.findOne({});

  // Print current personalInfo to verify
  console.log('Current personalInfo:');
  console.log(JSON.stringify(doc.personalInfo, null, 2));
  console.log('\nSkills:');
  console.log(JSON.stringify(doc.skills, null, 2));
  console.log('\nEducation:');
  console.log(JSON.stringify(doc.education, null, 2));

  await mongoose.disconnect();
}
run().catch(console.error);
