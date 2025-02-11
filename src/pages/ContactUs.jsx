import React from 'react';
import ContactHeroComponent from '../components/ContactHeroComponent';
import KeyServices from '../components/KeyServices'; // Import KeyServices
import Testimonials from '../components/Testimonials'; // Import Testimonials

const ContactUs = () => {
  return (
   <>
    <ContactHeroComponent />
    <KeyServices /> {/* Render KeyServices */}
    <Testimonials /> {/* Render Testimonials */}
   </>
  );
};

export default ContactUs;
