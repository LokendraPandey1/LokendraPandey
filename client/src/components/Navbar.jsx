import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { portfolioData } = useContext(PortfolioContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-siteBlack/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          {/* Left: Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-siteCyan'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Phone / Resume */}
          <div className="hidden md:flex items-center gap-6">
            {portfolioData?.personalInfo?.phone && (
              <a
                href={`tel:${portfolioData.personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="text-siteCyan">📞</span>
                {portfolioData.personalInfo.phone}
              </a>
            )}
            {portfolioData?.personalInfo?.resumeLink && portfolioData.personalInfo.resumeLink !== '#' && (
              <a
                href={portfolioData.personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="border border-siteCyan text-siteCyan px-4 py-1.5 text-sm font-medium hover:bg-siteCyan hover:text-siteBlack transition-all"
              >
                CV
              </a>
            )}

          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-siteBlack flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-heading font-bold tracking-widest uppercase ${
                isActive(link.path) ? 'text-siteCyan' : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;


