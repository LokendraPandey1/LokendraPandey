import React from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Lokendra Pandey</title>
      </Helmet>
      <div className="min-h-screen bg-siteBlack pt-24 pb-24 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;


