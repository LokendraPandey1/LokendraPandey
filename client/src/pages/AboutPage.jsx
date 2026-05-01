import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/sections/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Lokendra Pandey</title>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;


