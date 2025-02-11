import React from 'react';
import AboutUsComponent from '../components/about/AboutUsComponent';
import KeyServices from '../components/KeyServices'; // Import KeyServices
import Testimonials from '../components/Testimonials'; // Import Testimonials

const AboutUs = () => {
  return (
    <>
      <AboutUsComponent />
      <KeyServices /> {/* Render KeyServices */}
      <Testimonials /> {/* Render Testimonials */}
    </>
  );
};

export default AboutUs;
