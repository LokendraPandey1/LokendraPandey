import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Skills, { SectionHeader } from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import { PortfolioContext } from '../context/PortfolioContext';

const whatCanIDo = [
  { label: 'Algorithms & Data Structures', icon: '⚡' },
  { label: 'Machine Learning & AI', icon: '🤖' },
  { label: 'Full Stack Development', icon: '🌐' },
  { label: 'Database Design & Optimization', icon: '🗄️' },
  { label: 'REST API Development', icon: '🔌' },
  { label: 'Open Source Collaboration', icon: '🤝' },
];

const hobbies = [
  { icon: '📖', label: 'Reading' },
  { icon: '💻', label: 'Coding' },
  { icon: '🧩', label: 'Problem Solving' },
  { icon: '✈️', label: 'Travelling' },
];

const ExperiencePage = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <>
      <Helmet>
        <title>Resume | Lokendra Pandey</title>
        <meta name="description" content="Resume, skills, experience and education of Lokendra Pandey." />
      </Helmet>

      <div className="min-h-screen bg-siteBlack">
        {/* Page Header */}
        <div className="relative border-b border-white/5 pt-28 pb-10 px-8 md:px-16 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-siteCyan/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 relative z-10">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-2"
              >
                Curriculum Vitae
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-black uppercase text-white tracking-wide"
              >
                Resume
              </motion.h1>
            </div>
            {portfolioData?.personalInfo?.resumeLink && portfolioData.personalInfo.resumeLink !== '#' && (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href={portfolioData.personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="self-start md:self-auto inline-flex items-center gap-3 border border-siteCyan text-siteCyan font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-siteCyan hover:text-siteBlack transition-all"
              >
                <span>↓</span> Download PDF
              </motion.a>
            )}
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-px bg-white/5"
          >
            {/* ── LEFT: Skills ── */}
            <div className="bg-siteBlack p-8">
              <Skills />
            </div>

            {/* ── CENTER: Experience + Education ── */}
            <div className="bg-siteBlack p-8 border-x border-white/5 flex flex-col gap-14">
              <Experience />
              <Education />
            </div>

            {/* ── RIGHT: What I Do + Hobbies + Stats ── */}
            <div className="bg-siteBlack p-8 flex flex-col gap-12">

              {/* What Can I Do */}
              <div>
                <SectionHeader title="What Can I Do?" />
                <ul className="space-y-3">
                  {whatCanIDo.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-white/50 font-body text-xs tracking-wide group-hover:text-white/80 transition-colors">
                        {item.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Hobbies & Interests */}
              <div>
                <SectionHeader title="Hobbies & Interests" />
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center justify-center gap-2 p-4 border border-white/5 hover:border-siteCyan/40 hover:bg-siteCyan/5 transition-all cursor-default group"
                    >
                      <span className="text-2xl">{h.icon}</span>
                      <span className="text-white/40 font-body text-[10px] tracking-widest uppercase group-hover:text-white/70 transition-colors">
                        {h.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Stats */}
              {portfolioData?.aboutMe && (
                <div>
                  <SectionHeader title="At a Glance" />
                  <div className="space-y-6">
                    {[
                      { value: `${portfolioData.aboutMe.yearsOfExperience}+`, label: 'Years Learning & Building' },
                      { value: `${portfolioData.projects?.length || 5}+`, label: 'Projects Completed' },
                      { value: '3+', label: 'AI/ML Projects' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p className="font-heading text-4xl font-black text-siteCyan leading-none">
                          {stat.value}
                        </p>
                        <p className="text-white/30 font-body text-xs mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              <div>
                <SectionHeader title="Languages" />
                <div className="space-y-4">
                  {[
                    { lang: 'Hindi', level: 'Native', pct: 100 },
                    { lang: 'English', level: 'Professional', pct: 85 },
                  ].map(({ lang, level, pct }, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-white/60 font-body text-xs tracking-wider">{lang}</span>
                        <span className="text-white/30 font-body text-[10px] tracking-widest uppercase">{level}</span>
                      </div>
                      <div className="relative h-px w-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
                          className="absolute top-0 left-0 h-px bg-siteCyan"
                        />
                        <motion.div
                          initial={{ left: 0 }}
                          whileInView={{ left: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
                          className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-siteCyan shadow-[0_0_6px_rgba(0,180,200,0.8)]"
                          style={{ transform: 'translateX(-50%)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
