import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 20
      }
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 20
      }
    }
  };

  const navLinkStyle = (path) => {
    return location.pathname === path ?
      "text-blue-200 font-semibold" :
      "hover:text-blue-100";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              Smart Innovative Technologies
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkStyle("/")}`}>
                Home
              </Link>
              <Link to="/about-us" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkStyle("/about-us")}`}>
                About Us
              </Link>
              <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkStyle("/services")}`}>
                Services
              </Link>
              <Link to="/contact-us" className={`px-3 py-2 rounded-md text-sm font-medium ${navLinkStyle("/contact-us")}`}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 h-full w-64 bg-blue-800 shadow-lg z-50"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyle("/")}`}>
                Home
              </Link>
              <Link to="/about-us" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyle("/about-us")}`}>
                About Us
              </Link>
              <Link to="/services" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyle("/services")}`}>
                Services
              </Link>
              <Link to="/contact-us" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyle("/contact-us")}`}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;