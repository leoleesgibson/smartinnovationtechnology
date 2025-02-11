import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";


// Import your Navbar component
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer
import ChatIcon from './components/ChatIcon';  // Import ChatIcon

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

// Import ReactLoading for the spinner
import ReactLoading from 'react-loading';

// Loading Spinner Component
const Loading = () => (
  <div className="loading-spinner">
    <ReactLoading type="spin" color="#3498db" height={50} width={50} />
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer /> {/* Include the Footer component */}
      <ChatIcon /> {/* Include the ChatIcon component */}
    </Router>
  );
};

export default App;
