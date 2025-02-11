import React from 'react';
import ServiceHeroComponent from '../components/ServiceHeroComponent';
import KeyServices from '../components/KeyServices'; // Import KeyServices
import Testimonials from '../components/Testimonials'; // Import Testimonials

const Services = () => {
  return (
    <>
        <ServiceHeroComponent />
        <KeyServices /> {/* Render KeyServices */}
        <Testimonials /> {/* Render Testimonials */}
    </>
  );
};

export default Services;
