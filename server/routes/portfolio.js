const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Assignment = require('../models/Assignment');
const { protect } = require('../middleware/auth');

// @route   GET api/portfolio
// @desc    Get all portfolio data
// @access  Public
router.get('/', async (req, res) => {
  try {
    const config = await Portfolio.findOne();
    const projects = await Project.find().sort({ order: 1 });
    const experience = await Experience.find().sort({ order: 1 });
    const education = await Education.find().sort({ order: 1 });
    const assignments = await Assignment.find().sort({ order: 1 });

    res.json({
      personalInfo: config?.personalInfo || {},
      aboutMe: config?.aboutMe || {},
      skills: config?.skills || [],
      projects,
      experience,
      education,
      assignments
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/portfolio/config
// @desc    Update personal info, about, skills
// @access  Private
router.put('/config', protect, async (req, res) => {
  try {
    let config = await Portfolio.findOne();
    if (!config) {
      config = new Portfolio(req.body);
    } else {
      config.personalInfo = req.body.personalInfo;
      config.aboutMe = req.body.aboutMe;
      config.skills = req.body.skills;
    }
    await config.save();
    res.json(config);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   POST api/portfolio/projects
// @desc    Add a project
// @access  Private
router.post('/projects', protect, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   PUT api/portfolio/projects/:id
// @desc    Update a project
// @access  Private
router.put('/projects/:id', protect, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/portfolio/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/projects/:id', protect, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// We can do the same for Experience, Education, Assignment.
// To keep it simple, I'll add them later if needed, or implement generic CRUD.

module.exports = router;
