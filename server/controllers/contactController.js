const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });
    await newContact.save();

    // Send email using Nodemailer (Optional if EMAIL_USER is configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider or SMTP details
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).send('Server Error');
  }
};
