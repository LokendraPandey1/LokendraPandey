import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PortfolioContext } from '../context/PortfolioContext';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolioData, loading } = useContext(PortfolioContext);
  const [project, setProject] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    if (!portfolioData?.projects) return;
    const found =
      portfolioData.projects.find(p => p._id === id || p.id === id) ||
      portfolioData.projects[parseInt(id?.replace('project-', ''), 10)];
    if (found) setProject(found);
  }, [portfolioData, id]);


  if (loading) return (
    <div className="h-screen bg-siteBlack flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-siteCyan border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!project) return (
    <div className="h-screen bg-siteBlack flex flex-col items-center justify-center gap-4">
      <p className="text-white/40 font-body">Project not found.</p>
      <Link to="/projects" className="text-siteCyan text-sm font-body hover:underline">← Back to Projects</Link>
    </div>
  );

  // Build an images array — use thumbnail + any extra images field
  const images = [
    project.thumbnail,
    ...(project.images || []),
  ].filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{project.name} | Lokendra Pandey</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              src={lightboxImg}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-siteBlack">
        {/* Hero Banner */}
        <div className="relative h-[55vh] w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) grayscale(30%)' }}
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-siteBlack via-siteBlack/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-siteBlack/60 to-transparent" />

          {/* Back button */}
          <button
            onClick={() => navigate('/projects')}
            className="absolute top-24 left-8 md:left-16 text-white/40 hover:text-siteCyan font-body text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            ← All Projects
          </button>

          {/* Hero text */}
          <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
            {project.featured && (
              <span className="inline-block mb-3 bg-siteCyan text-siteBlack font-body text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                Featured Project
              </span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white tracking-wide leading-none"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — Description */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-3">Overview</p>
                <p className="text-white/70 font-body text-base leading-relaxed">
                  {project.description}
                </p>
                {/* Long description if available */}
                {project.longDescription && (
                  <p className="text-white/50 font-body text-sm leading-relaxed mt-4">
                    {project.longDescription}
                  </p>
                )}
              </motion.div>

              {/* Tech Stack */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed?.map((tech, i) => (
                    <span key={i} className="border border-siteCyan/30 text-siteCyan/80 font-body text-xs px-3 py-1.5 hover:border-siteCyan hover:text-siteCyan transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Screenshots / Gallery */}
              {images.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-4">
                    Screenshots
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightboxImg(img)}
                        className="relative overflow-hidden cursor-zoom-in group border border-white/5 hover:border-siteCyan/30 transition-colors"
                      >
                        <img
                          src={img}
                          alt={`${project.name} screenshot ${i + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ filter: 'brightness(0.7)' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-siteBlack/40">
                          <span className="text-white/70 text-xs font-body tracking-widest uppercase">🔍 Expand</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Prototype / Live Demo Embed */}
              {project.liveUrl && project.liveUrl !== '#' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-4">Live Prototype</p>
                  <div className="border border-white/10 overflow-hidden">
                    <div className="bg-siteCard px-4 py-2 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                      <span className="text-white/20 font-body text-xs truncate ml-2">{project.liveUrl}</span>
                    </div>
                    <iframe
                      src={project.liveUrl}
                      title={`${project.name} prototype`}
                      className="w-full h-[480px] border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                  <p className="text-white/20 font-body text-xs mt-2 text-right">
                    * Some sites may block embedding. Use the external link below.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right — Project Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-8"
            >
              {/* CTA Links */}
              <div className="space-y-3">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full border border-siteCyan text-siteCyan font-body text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-siteCyan hover:text-siteBlack transition-all group"
                  >
                    <span>Live Demo</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full border border-white/20 text-white/60 font-body text-xs uppercase tracking-widest px-5 py-3.5 hover:border-siteCyan hover:text-siteCyan transition-all group"
                  >
                    <span>View on GitHub</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Project Meta */}
              <div className="space-y-5">
                <div>
                  <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-1">Project</p>
                  <p className="text-white font-heading font-bold text-sm uppercase tracking-wide">{project.name}</p>
                </div>
                {project.category && (
                  <div>
                    <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-1">Category</p>
                    <p className="text-white/70 font-body text-sm">{project.category}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-1">Year</p>
                    <p className="text-white/70 font-body text-sm">{project.year}</p>
                  </div>
                )}
                <div>
                  <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-1">Stack</p>
                  <p className="text-white/70 font-body text-sm">{project.techUsed?.slice(0, 3).join(', ')}{project.techUsed?.length > 3 ? ` +${project.techUsed.length - 3} more` : ''}</p>
                </div>
                {project.featured && (
                  <div>
                    <span className="bg-siteCyan/10 border border-siteCyan/30 text-siteCyan font-body text-[10px] uppercase tracking-widest px-2 py-1">
                      ★ Featured Project
                    </span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Navigation — Prev / Next */}
              <div>
                <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-4">More Projects</p>
                <div className="space-y-2">
                  {portfolioData?.projects?.filter((_, i) =>
                    portfolioData.projects.indexOf(_) !== portfolioData.projects.findIndex(p => p._id === id || p.id === id)
                  ).slice(0, 3).map((p, i) => (
                    <Link
                      key={i}
                      to={`/projects/${p._id || p.id || `project-${i}`}`}
                      className="flex items-center gap-3 group py-2 border-b border-white/5 hover:border-siteCyan/20 transition-colors"
                    >
                      <img src={p.thumbnail} alt={p.name} className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all shrink-0" />
                      <span className="text-white/40 font-body text-xs uppercase tracking-wide group-hover:text-siteCyan transition-colors">{p.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/projects"
                    className="block text-white/25 font-body text-xs uppercase tracking-widest mt-3 hover:text-siteCyan transition-colors"
                  >
                    ← All Projects
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
