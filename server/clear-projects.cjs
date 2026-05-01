const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const ProjectSchema = new mongoose.Schema({}, { strict: false });
const Project = mongoose.model('Project', ProjectSchema);

async function clearProjects() {
  await mongoose.connect(MONGO_URI);
  const result = await Project.deleteMany({});
  console.log(`✅ Deleted ${result.deletedCount} project(s) from the database.`);
  await mongoose.disconnect();
}

clearProjects().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
