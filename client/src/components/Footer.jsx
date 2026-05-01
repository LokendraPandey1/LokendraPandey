import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';

const Footer = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading || !portfolioData) return null;
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-siteBlack border-t border-white/5 py-10 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl font-black uppercase tracking-widest text-white hover:text-siteCyan transition-colors">
          {(personalInfo?.fullName || 'Portfolio').split(' ')[0]}.
        </Link>

        {/* Links */}
        <div className="flex gap-8">
          {personalInfo?.github && personalInfo.github !== '#' && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="text-white/30 hover:text-siteCyan transition-colors font-body text-xs uppercase tracking-wider">
              GitHub
            </a>
          )}
          {personalInfo?.linkedin && personalInfo.linkedin !== '#' && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="text-white/30 hover:text-siteCyan transition-colors font-body text-xs uppercase tracking-wider">
              LinkedIn
            </a>
          )}
          {personalInfo?.email && (
            <a href={`mailto:${personalInfo.email}`}
              className="text-white/30 hover:text-siteCyan transition-colors font-body text-xs uppercase tracking-wider">
              Email
            </a>
          )}
        </div>

        {/* Copyright */}
        <p className="text-white/20 font-body text-xs">
          © {new Date().getFullYear()} {personalInfo?.fullName || 'Lokendra Pandey'}
        </p>

      </div>
    </footer>
  );
};

export default Footer;


