const express = require('express');
const router = express.Router();
const portfolioData = require('../data/portfolioData');

// @route   GET api/portfolio
// @desc    Get all portfolio data
// @access  Public
router.get('/', (req, res) => {
  try {
    res.json(portfolioData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Mocking update routes since database is removed
router.put('/config', (req, res) => {
  res.status(200).json({ msg: 'Database dependency removed. Changes not persisted.' });
});

router.post('/projects', (req, res) => {
  res.status(200).json({ msg: 'Database dependency removed. Changes not persisted.' });
});

router.put('/projects/:id', (req, res) => {
  res.status(200).json({ msg: 'Database dependency removed. Changes not persisted.' });
});

router.delete('/projects/:id', (req, res) => {
  res.status(200).json({ msg: 'Database dependency removed. Changes not persisted.' });
});

module.exports = router;

