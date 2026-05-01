import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../../context/PortfolioContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return (
    <div className="h-screen w-full bg-siteBlack flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-siteCyan border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const { personalInfo } = portfolioData;
  const nameParts = personalInfo.fullName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-siteBlack">
      
      {/* Background Image: Portrait on the right */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-0 opacity-80 md:opacity-100">
        <img
          src={personalInfo.profilePhoto}
          alt={personalInfo.fullName}
          className="w-full h-full object-cover object-center lg:object-[center_20%]"
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        />
      </div>

      {/* Overlays for blending */}
      {/* Heavy gradient from left to hide the hard edge of the image on desktop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-siteBlack via-siteBlack/90 lg:via-siteBlack/60 to-transparent" />
      {/* Gradient from bottom for scrolling smoothness */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-siteBlack to-transparent" />
      {/* Optional top gradient to fade into navbar */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-siteBlack to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-siteCyan"></span>
            <span className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase font-semibold">
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div className="mb-2">
            <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide uppercase drop-shadow-lg">
              {firstName}
            </p>
            <p className="font-heading text-5xl md:text-7xl lg:text-[10rem] font-black text-white leading-none tracking-tight uppercase drop-shadow-lg">
              {lastName}
            </p>
          </div>

          {/* Job Title */}
          <p className="font-body text-base md:text-lg tracking-[0.2em] text-white/70 uppercase mb-12 mt-6 max-w-lg leading-relaxed">
            {personalInfo.jobTitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mb-16">
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-siteCyan text-siteBlack font-heading font-bold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            {personalInfo.resumeLink && personalInfo.resumeLink !== '#' && (
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:border-siteCyan hover:text-siteCyan transition-all"
              >
                Resume
              </a>
            )}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-6 border-l border-siteCyan/30 pl-5"
        >
          {personalInfo.github && personalInfo.github !== '#' && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="text-white/40 hover:text-siteCyan transition-colors font-body text-xs tracking-widest uppercase">
              Github
            </a>
          )}
          {personalInfo.linkedin && personalInfo.linkedin !== '#' && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="text-white/40 hover:text-siteCyan transition-colors font-body text-xs tracking-widest uppercase">
              LinkedIn
            </a>
          )}
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`}
              className="text-white/40 hover:text-siteCyan transition-colors font-body text-xs tracking-widest uppercase">
              Email
            </a>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-16 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 font-body text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
