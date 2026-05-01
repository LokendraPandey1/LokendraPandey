import React from 'react';
import { motion } from 'framer-motion';

const Assignments = () => {
  return (
    <div className="space-y-16">
      
      {/* ── Section 1: Self Introduction Video ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="w-8 h-px bg-siteCyan"></span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
            Self Introduction
          </h2>
        </div>
        
        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-siteCard border border-white/10 overflow-hidden group">
          {/* Placeholder Background */}
          <div className="absolute inset-0 bg-siteBlack flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 mb-3">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
            <p className="text-white/30 font-body text-xs uppercase tracking-widest">Video Placeholder</p>
            <p className="text-siteCyan/50 font-body text-[10px] mt-1 text-center max-w-xs">
              Upload your video file (e.g. mp4) to the public folder and update the src attribute, or embed a YouTube link here.
            </p>
          </div>

          {/* Actual Video Tag (Hidden until src is added) */}
          {/* <video 
            controls 
            className="absolute inset-0 w-full h-full object-cover z-10"
            src="/self-intro.mp4" 
            poster="/video-thumbnail.jpg"
          /> */}
        </div>
      </motion.section>

      {/* ── Section 2: Essay ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="w-8 h-px bg-siteCyan"></span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
            Personal Essay
          </h2>
        </div>

        <div className="bg-siteCard border border-white/5 p-8 md:p-12">
          {/* Essay Header */}
          <div className="mb-10 text-center">
            <h3 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">
              My Journey in Tech
            </h3>
            <p className="text-siteCyan font-body text-xs uppercase tracking-widest">
              By Lokendra Pandey
            </p>
            <div className="w-16 h-px bg-white/10 mx-auto mt-6" />
          </div>

          {/* Essay Body */}
          <div className="prose prose-invert prose-p:font-body prose-p:text-white/60 prose-p:leading-relaxed prose-p:text-sm max-w-3xl mx-auto space-y-6">
            <p>
              [Your essay content goes here. You can write about your passion for Artificial Intelligence, Machine Learning, and how you started your journey as a developer.]
            </p>
            <p>
              [Discuss the challenges you've faced, the projects you've built like MechMinds or FileXplore, and what drives you to keep learning and building robust systems.]
            </p>
            <p>
              [Conclude with your vision for the future, your career aspirations, and the impact you hope to make in the tech industry.]
            </p>
          </div>

          {/* Optional: Download PDF button if the essay is a document */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
             <a href="#" className="inline-flex items-center gap-2 text-white/40 hover:text-siteCyan font-body text-xs uppercase tracking-widest transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
               Download Essay as PDF
             </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Assignments;
