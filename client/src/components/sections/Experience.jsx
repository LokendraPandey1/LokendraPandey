import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../../context/PortfolioContext';
import { SectionHeader } from './Skills';

const Experience = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return null;
  const { experience } = portfolioData;

  return (
    <div>
      <SectionHeader title="Experience" />
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-siteCyan via-white/10 to-transparent" />

        {experience.map((job, index) => (
          <motion.div
            key={job._id || index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative pl-14 pb-10 last:pb-0 group"
          >
            {/* Node */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-siteCyan/40 bg-siteBlack flex items-center justify-center group-hover:border-siteCyan transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-siteCyan shadow-[0_0_8px_rgba(0,180,200,0.6)]" />
            </div>

            {/* Duration badge */}
            <span className="inline-block mb-2 text-siteCyan font-body text-[10px] tracking-widest uppercase border border-siteCyan/30 px-2 py-0.5 rounded-sm">
              {job.duration}
            </span>

            <h4 className="font-heading font-black text-white text-base uppercase tracking-wide leading-tight group-hover:text-siteCyan transition-colors">
              {job.company}
            </h4>
            <p className="text-white/50 font-body text-xs tracking-wider mb-3 italic">{job.role}</p>

            <ul className="space-y-1.5">
              {job.highlights?.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-white/40 text-xs font-body leading-relaxed">
                  <span className="text-siteCyan mt-0.5 shrink-0">▸</span>
                  {hl}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
