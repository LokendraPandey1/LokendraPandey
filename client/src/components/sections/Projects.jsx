import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../../context/PortfolioContext';

/* ── Icons ─────────────────────────────────────────────── */
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── Project Card ───────────────────────────────────────── */
const ProjectCard = ({ project, index, onClick }) => {
  const hasThumbnail = project.thumbnail && project.thumbnail !== '#' && project.thumbnail !== '';
  const visibleTags = project.techUsed?.slice(0, 3) || [];
  const extraTags = (project.techUsed?.length || 0) - visibleTags.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className="group flex flex-col bg-siteCard border border-white/8 rounded-2xl overflow-hidden cursor-pointer
                 hover:border-siteCyan/40 hover:shadow-[0_0_30px_rgba(0,180,200,0.08)] transition-all duration-300"
    >
      {/* ── Image ── */}
      <div className="relative h-48 w-full overflow-hidden bg-siteDark flex-shrink-0">
        {hasThumbnail ? (
          <>
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: 'brightness(0.65) grayscale(20%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-siteCard/80 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/20 font-body text-sm">No image available</span>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 bg-siteCyan text-siteBlack font-body font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-grow p-5 gap-3">
        {/* Title */}
        <h3 className="font-heading font-black text-white text-lg leading-tight tracking-wide uppercase group-hover:text-siteCyan transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-white/45 font-body text-sm leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {visibleTags.map((tech, i) => (
            <span
              key={i}
              className="bg-white/5 border border-white/10 text-white/50 font-body text-[11px] px-2.5 py-0.5 rounded-full
                         group-hover:border-siteCyan/25 group-hover:text-siteCyan/70 transition-colors"
            >
              {tech}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="bg-white/5 border border-white/10 text-white/30 font-body text-[11px] px-2.5 py-0.5 rounded-full">
              +{extraTags}
            </span>
          )}
        </div>

        {/* ── Divider + Footer ── */}
        <div className="border-t border-white/8 mt-1 pt-3 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className={`flex items-center gap-1.5 font-body text-xs tracking-wide transition-colors
              ${project.githubUrl && project.githubUrl !== '#'
                ? 'text-white/40 hover:text-siteCyan cursor-pointer'
                : 'text-white/15 cursor-not-allowed pointer-events-none'}`}
          >
            <CodeIcon />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className={`flex items-center gap-1.5 font-body text-xs tracking-wide transition-colors
              ${project.liveUrl && project.liveUrl !== '#'
                ? 'text-white/40 hover:text-siteCyan cursor-pointer'
                : 'text-white/15 cursor-not-allowed pointer-events-none'}`}
          >
            <ExternalIcon />
            Live
          </a>
        </div>
      </div>
    </motion.article>
  );
};

/* ── Projects Grid ──────────────────────────────────────── */
const Projects = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);
  const navigate = useNavigate();

  if (loading || !portfolioData) return null;
  const { projects } = portfolioData;

  const handleCardClick = (project, index) => {
    const id = project._id || project.id || `project-${index}`;
    navigate(`/projects/${id}`);
  };

  return (
    <section id="projects" className="w-full">
      {/* Section header */}
      <div className="mb-10">
        <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-2">Portfolio</p>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-white tracking-wide">
          Selected Work
        </h2>
        <div className="w-10 h-px bg-siteCyan mt-4" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project._id || index}
            project={project}
            index={index}
            onClick={() => handleCardClick(project, index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
