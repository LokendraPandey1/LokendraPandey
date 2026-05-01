import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return (
    <div className="h-screen w-full bg-siteBlack flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-siteCyan border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const { aboutMe, projects, personalInfo } = portfolioData;
  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3) || [];
  const fullName = personalInfo?.fullName || 'Portfolio Owner';
  const nameParts = fullName.split(' ');

  return (
    <>
      <Helmet>
        <title>{fullName} | {personalInfo?.jobTitle || 'Portfolio'}</title>
        <meta name="description" content={personalInfo?.tagline || 'Welcome to my cinematic portfolio.'} />
      </Helmet>

      {/* Hero — Full Screen */}
      <section
        className="relative min-h-screen w-full flex items-center overflow-hidden bg-siteBlack"
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-siteBlack via-siteBlack/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-siteBlack to-transparent" />

        <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-2">
              <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide uppercase">
                {nameParts[0]}
              </p>
              <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-wide uppercase">
                {nameParts.slice(1).join(' ')}
              </p>
            </div>
            <p className="font-body text-base md:text-lg tracking-[0.3em] text-white/60 uppercase mb-10 mt-4">
              {personalInfo?.jobTitle || 'Developer'}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              {personalInfo?.resumeLink && personalInfo?.resumeLink !== '#' && (
                <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer"
                  className="border border-white/60 text-white px-8 py-3 font-body font-medium tracking-wider text-sm hover:border-siteCyan hover:text-siteCyan transition-all uppercase">
                  Resume
                </a>
              )}
              <Link to="/projects"
                className="border border-white/60 text-white px-8 py-3 font-body font-medium tracking-wider text-sm hover:border-siteCyan hover:text-siteCyan transition-all uppercase">
                Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex items-center gap-5">
            {personalInfo?.github && personalInfo?.github !== '#' && (
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-siteCyan transition-colors font-body font-bold text-sm">Gh</a>
            )}
            {personalInfo?.linkedin && personalInfo?.linkedin !== '#' && (
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-white/40 hover:text-siteCyan transition-colors font-body font-bold text-sm">in</a>
            )}
            {personalInfo?.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-white/40 hover:text-siteCyan transition-colors font-body text-xs tracking-wider">
                {personalInfo.email}
              </a>
            )}
          </motion.div>
        </div>
        <div className="absolute bottom-6 right-6 z-20 text-white/20 text-xs tracking-widest">SCROLL ↓</div>
      </section>

      {/* About Snippet */}
      <section className="bg-siteBlack py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-4">Who I am</p>
            <blockquote className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug mb-8">
              "{aboutMe?.shortBio || 'Welcome to my portfolio.'}"
            </blockquote>
            <Link to="/about" className="text-white/50 text-sm font-body tracking-widest uppercase hover:text-siteCyan transition-colors border-b border-white/20 hover:border-siteCyan pb-1">
              Read More →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-px bg-white/5">
            {[
              { label: 'Years Experience', value: `${aboutMe.yearsOfExperience}+` },
              { label: 'Projects Built', value: `${projects?.length || 5}+` },
              { label: 'Specialization', value: 'AI/ML' },
              { label: 'Status', value: 'Open to Work' },
            ].map((stat, i) => (
              <div key={i} className="bg-siteBlack p-6">
                <p className="font-heading text-3xl font-black text-siteCyan">{stat.value}</p>
                <p className="text-white/40 text-xs font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-siteDark py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-2">Selected</p>
              <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-white tracking-wide">Work</h2>
            </div>
            <Link to="/projects" className="text-white/40 text-xs font-body tracking-widest uppercase hover:text-siteCyan transition-colors border-b border-white/10 hover:border-siteCyan pb-1">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project._id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-siteBlack overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img src={project.thumbnail} alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'grayscale(50%) brightness(0.6)' }}
                  />
                  <div className="absolute inset-0 bg-siteBlack/40 group-hover:bg-siteBlack/20 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-2 group-hover:text-siteCyan transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-white/50 font-body text-xs leading-relaxed line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techUsed?.slice(0, 3).map((tech, j) => (
                      <span key={j} className="text-siteCyan/70 font-body text-[10px] border border-siteCyan/20 px-2 py-0.5">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-siteBlack py-28 px-8 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-4">Next Step</p>
          <h2 className="font-heading text-4xl md:text-7xl font-black uppercase text-white tracking-wide mb-8">
            Let's Build<br />Something.
          </h2>
          <Link to="/contact"
            className="inline-block border border-siteCyan text-siteCyan px-10 py-4 font-body font-medium tracking-widest text-sm uppercase hover:bg-siteCyan hover:text-siteBlack transition-all">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;


