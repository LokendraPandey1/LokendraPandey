const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const projectSchema = new mongoose.Schema({}, { strict: false });
const Project = mongoose.model('Project', projectSchema);

const updates = [
  { name: 'MechMinds',       githubUrl: 'https://github.com/LokendraPandey1/MechMinds' },
  { name: 'FileXplore',      githubUrl: 'https://github.com/LokendraPandey1/FileXplore' },
  { name: 'StockIt',         githubUrl: 'https://github.com/LokendraPandey1/StockIt' },
  { name: 'CompressoX',      githubUrl: 'https://github.com/LokendraPandey1/CompressoX-File-Compressor-application' },
  { name: 'FaceEmotion AI',  githubUrl: 'https://github.com/LokendraPandey1/Facial-Emotion-Recognition-using-ImageNet-and-VGGNet' },
];

async function run() {
  await mongoose.connect(MONGO_URI);
  for (const { name, githubUrl } of updates) {
    const res = await Project.updateOne({ name }, { $set: { githubUrl } });
    console.log(`✅ ${name} — ${res.modifiedCount ? 'updated' : 'not found'}`);
  }
  await mongoose.disconnect();
}

run().catch(err => { console.error('❌', err); process.exit(1); });
