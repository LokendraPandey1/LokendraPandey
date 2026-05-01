import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../../context/PortfolioContext';

const skillLevels = {
  'C++': 85, 'Python': 88, 'Java': 75, 'JavaScript': 82,
  'React.js': 78, 'Node.js': 76, 'Express.js': 73, 'HTML/CSS': 87,
  'MongoDB': 71, 'PostgreSQL': 65, 'MySQL': 68,
  'scikit-learn': 73, 'TensorFlow / Keras': 68, 'OpenCV': 66, 'NLP basics': 62,
  'Git': 84, 'GitHub': 84, 'Power BI': 62, 'Postman': 76, 'Linux': 70,
};

const getLevel = (skill) => skillLevels[skill] ?? 68;

const SkillBar = ({ name, level, delay = 0 }) => (
  <motion.div
    className="mb-5 group"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-white/70 font-body text-xs tracking-widest uppercase">{name}</span>
      <span className="text-siteCyan font-body text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{level}%</span>
    </div>
    <div className="relative h-px w-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: delay + 0.2 }}
        className="absolute top-0 left-0 h-px bg-siteCyan"
      />
      <motion.div
        initial={{ left: 0 }}
        whileInView={{ left: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: delay + 0.2 }}
        className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-siteCyan shadow-[0_0_6px_rgba(0,180,200,0.8)]"
        style={{ transform: 'translateX(-50%)' }}
      />
    </div>
  </motion.div>
);

const SectionHeader = ({ title }) => (
  <div className="mb-6">
    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-white">{title}</h3>
    <div className="mt-2 w-8 h-px bg-siteCyan" />
  </div>
);

const Skills = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return null;
  const { skills } = portfolioData;

  return (
    <div className="space-y-10">
      {skills?.map((group, idx) => (
        <div key={idx}>
          <SectionHeader title={group.category} />
          {group.items.map((skill, i) => (
            <SkillBar key={i} name={skill} level={getLevel(skill)} delay={i * 0.06} />
          ))}
        </div>
      ))}
    </div>
  );
};

export { SectionHeader };
export default Skills;
