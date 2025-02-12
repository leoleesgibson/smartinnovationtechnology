import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

// Import your Navbar component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatIcon from './components/ChatIcon';

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const DashboardPage = lazy(() => import('./admin/Dashboard'));

// Import ReactLoading for the spinner
import ReactLoading from 'react-loading';

// Import the AdminLayout component
import AdminLayout from './layouts/AdminLayout';

// Loading Spinner Component
const Loading = () => (
  <div className="loading-spinner">
    <ReactLoading type="spin" color="#3498db" height={50} width={50} />
  </div>
);

const App = () => {
  // Dummy data for the dashboard
  const consultationRequests = 25;
  const contactEnquiries = 50;
  const newsletterSubscriptions = 100;

  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Suspense fallback={<Loading />}>
                <DashboardPage
                  consultationRequests={consultationRequests}
                  contactEnquiries={contactEnquiries}
                  newsletterSubscriptions={newsletterSubscriptions}
                />
              </Suspense>
            </AdminLayout>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
              </Suspense>
              <Footer />
              <ChatIcon />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;