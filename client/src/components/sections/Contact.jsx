import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-2">What's Next?</p>
        <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-white tracking-wide">
          Get In Touch
        </h1>
        <div className="w-10 h-px bg-siteCyan mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — Contact Info */}
        <div className="space-y-8">
          <p className="text-white/60 font-body text-sm leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is always open.
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-siteCyan pl-4">
              <p className="text-white/30 font-body text-xs uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-body text-sm">lokendrapandey914@gmail.com</p>
            </div>
            <div className="border-l-2 border-white/10 pl-4">
              <p className="text-white/30 font-body text-xs uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-body text-sm">Dehradun, Uttarakhand, India</p>
            </div>
            <div className="border-l-2 border-white/10 pl-4">
              <p className="text-white/30 font-body text-xs uppercase tracking-wider mb-1">Status</p>
              <p className="text-siteCyan font-body text-sm">Open to internships & collaborations</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-white/40 font-body text-xs uppercase tracking-wider">Name</label>
              <input
                type="text" name="name" value={formData.name} onChange={handleChange} required
                className="bg-transparent border-b border-white/20 focus:border-siteCyan text-white font-body text-sm py-3 outline-none transition-colors placeholder-white/20"
                placeholder="Lokendra Pandey"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/40 font-body text-xs uppercase tracking-wider">Email</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="bg-transparent border-b border-white/20 focus:border-siteCyan text-white font-body text-sm py-3 outline-none transition-colors placeholder-white/20"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-white/40 font-body text-xs uppercase tracking-wider">Message</label>
            <textarea
              name="message" value={formData.message} onChange={handleChange} rows="5" required
              className="bg-transparent border-b border-white/20 focus:border-siteCyan text-white font-body text-sm py-3 outline-none transition-colors resize-none placeholder-white/20"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="self-start border border-siteCyan text-siteCyan font-body font-medium tracking-widest text-sm uppercase px-10 py-4 hover:bg-siteCyan hover:text-siteBlack transition-all disabled:opacity-50 mt-2"
          >
            {loading ? 'Sending...' : 'Say Hello'}
          </button>

          {status === 'success' && (
            <p className="text-siteCyan font-body text-sm">✓ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 font-body text-sm">✗ Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;


