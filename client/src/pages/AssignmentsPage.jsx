import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Assignments from '../components/sections/Assignments';

const AssignmentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Assignments | Lokendra Pandey</title>
      </Helmet>
      <div className="min-h-screen bg-siteBlack pt-24 pb-24 px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-siteCyan font-body text-xs tracking-[0.3em] uppercase mb-2">Coursework</p>
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-white tracking-wide">Assignments</h1>
          <div className="w-10 h-px bg-siteCyan mt-4" />
        </div>
        <Assignments />
      </div>
    </>
  );
};

export default AssignmentsPage;


