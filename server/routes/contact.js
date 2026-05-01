const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { submitContact } = require('../controllers/contactController');

// Rate limiting for contact form (max 5 requests per 15 minutes)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: 'Too many messages sent from this IP, please try again after 15 minutes'
});

// @route   POST api/contact
// @desc    Submit a contact form message
// @access  Public
router.post(
  '/',
  contactLimiter,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty()
  ],
  submitContact
);

module.exports = router;
