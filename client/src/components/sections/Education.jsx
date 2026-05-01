import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../../context/PortfolioContext';
import { SectionHeader } from './Skills';

const Education = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return null;
  const { education } = portfolioData;

  return (
    <div>
      <SectionHeader title="Education" />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu._id || index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-siteCyan/30 pl-4 hover:border-siteCyan transition-colors group"
          >
            <span className="text-siteCyan font-body text-[10px] tracking-widest uppercase">{edu.duration}</span>
            <h4 className="font-heading font-black text-white text-sm uppercase tracking-wide mt-1 group-hover:text-siteCyan transition-colors">
              {edu.degree}{edu.field ? `, ${edu.field}` : ''}
            </h4>
            <p className="text-white/40 font-body text-xs mt-0.5">{edu.institute}</p>
            {edu.cgpa && (
              <p className="text-white/30 font-body text-xs mt-1">CGPA: <span className="text-siteCyan">{edu.cgpa}</span></p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
