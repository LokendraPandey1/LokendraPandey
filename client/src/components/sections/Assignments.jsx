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
        <div className="relative w-full aspect-video bg-siteBlack border border-white/10 overflow-hidden shadow-2xl group">
          <video 
            controls 
            preload="metadata"
            className="w-full h-full object-cover"
            src="/intro.mp4" 
          />
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
              Remote Work - Future of Employment
            </h3>
            <p className="text-siteCyan font-body text-xs uppercase tracking-widest">
              By Lokendra Pandey
            </p>
            <div className="w-16 h-px bg-white/10 mx-auto mt-6" />
          </div>

          {/* Essay Body / PDF Viewer */}
          <div className="w-full border border-white/10 rounded-lg overflow-hidden bg-siteBlack shadow-2xl">
            {/* Custom Viewer Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-siteCyan"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span className="text-white/60 font-body text-xs tracking-widest uppercase">essay.pdf</span>
              </div>
              <a href="/essay.pdf" target="_blank" rel="noreferrer" className="text-white/30 hover:text-siteCyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            {/* Embedded PDF */}
            <div className="w-full h-[600px] md:h-[800px] bg-white relative">
              <iframe
                src="/essay.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Personal Essay"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          {/* Download PDF button */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
             <a href="/essay.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/40 hover:text-siteCyan font-body text-xs uppercase tracking-widest transition-colors">
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
