import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Lokendra Pandey</title>
      </Helmet>
      <div className="min-h-screen bg-siteBlack pt-24 pb-24 px-8 md:px-12 lg:px-16">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;


