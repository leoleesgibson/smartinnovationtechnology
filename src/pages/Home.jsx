import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyServices from '../components/KeyServices'; // Import KeyServices
import Testimonials from '../components/Testimonials'; 
import ContactCard from '../components/ContactCard'; // Import ContactCard


const Home = () => {
  return (
<>
<HeroSection/>
<KeyServices /> {/* Render KeyServices */}
<Testimonials /> {/* Render Testimonials */}
<ContactCard /> {/* Render ContactCard */}
</>
  );
};

export default Home;
