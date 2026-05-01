const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

// Load models
const Portfolio = require('./models/Portfolio');
const Project = require('./models/Project');

const verify = async () => {
  try {
    console.log('Attempting to connect to:', process.env.MONGO_URI ? 'URI found in env' : 'NO URI FOUND');
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('------------------------------------');
    console.log('DATABASE VERIFICATION');
    console.log('------------------------------------');
    console.log('Target Database Name:', mongoose.connection.name);
    
    const portfolioCount = await Portfolio.countDocuments();
    const projectCount = await Project.countDocuments();
    
    console.log('Portfolio entries:', portfolioCount);
    console.log('Project entries:', projectCount);
    
    if (portfolioCount === 0) {
      console.log('WARNING: The database is EMPTY. Please ensure you seeded the correct database.');
    } else {
      const data = await Portfolio.findOne();
      console.log('First Portfolio Name:', data?.personalInfo?.fullName || 'NOT FOUND');
    }
    console.log('------------------------------------');
    
    process.exit(0);
  } catch (err) {
    console.error('ERROR during verification:', err);
    process.exit(1);
  }
};

verify();
