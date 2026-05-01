const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const Portfolio = require('./models/Portfolio');

async function run() {
  await mongoose.connect(MONGO_URI);
  await Portfolio.updateOne({}, { $set: { 'personalInfo.phone': '' } });
  console.log('✅ Phone number removed from database.');
  await mongoose.disconnect();
}
run().catch(console.error);
