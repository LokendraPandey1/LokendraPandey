import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../../context/PortfolioContext';

const About = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return null;
  const { aboutMe, personalInfo } = portfolioData;

  return (
    <section id="about" className="relative min-h-screen w-full bg-siteBlack pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-siteCyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-siteCyan font-body text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-siteCyan"></span>
              Behind the Code
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wide text-white leading-none">
              WHO I AM
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3"
          >
            <p className="text-white/60 font-body text-sm md:text-base leading-relaxed border-l border-siteCyan/30 pl-4">
              {personalInfo.tagline}
            </p>
          </motion.div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 group">
              <motion.img
                src={personalInfo.profilePhoto}
                alt={personalInfo.fullName}
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-siteBlack via-transparent to-transparent opacity-80" />
              
              {/* Floating Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-siteBlack/40 border border-white/10 p-4 flex justify-between items-end">
                <div>
                  <p className="font-heading font-bold text-white text-xl uppercase tracking-widest">{personalInfo.fullName}</p>
                  <p className="text-siteCyan font-body text-[10px] tracking-widest uppercase mt-1">{personalInfo.jobTitle}</p>
                </div>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-siteCyan" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-siteCyan" />
          </motion.div>

          {/* Right: Bio & Info */}
          <div className="lg:col-span-7 lg:pl-10 flex flex-col justify-center space-y-12">
            
            {/* Bio Paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-6"
            >
              {aboutMe.longBio?.map((para, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={`font-body leading-relaxed ${i === 0 ? 'text-white/90 text-lg md:text-xl font-medium' : 'text-white/50 text-base'}`}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-white/20 font-body text-[10px] uppercase tracking-[0.2em] mb-2">Location</p>
                <p className="text-white font-body text-sm tracking-wide">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-white/20 font-body text-[10px] uppercase tracking-[0.2em] mb-2">Contact</p>
                <a href={`mailto:${personalInfo.email}`} className="text-siteCyan hover:text-white transition-colors font-body text-sm tracking-wide">
                  {personalInfo.email}
                </a>
              </div>
              <div className="col-span-2">
                <p className="text-white/20 font-body text-[10px] uppercase tracking-[0.2em] mb-2">Currently</p>
                <p className="text-white font-body text-sm tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-siteCyan animate-pulse" />
                  {aboutMe.currently}
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-siteCyan text-siteBlack font-heading font-bold uppercase tracking-widest overflow-hidden">
                <span className="relative z-10">Resume PDF</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-1">↓</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:border-siteCyan hover:text-siteCyan transition-all">
                GitHub
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
