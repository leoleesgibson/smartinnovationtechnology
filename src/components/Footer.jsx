import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Smart Innovative Technologies</h3>
          <p className="text-gray-400">
            Providing cutting-edge solutions in Smart Homes, IT Services, and E-Security.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="mailto:info@smartinnovativetech.com" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-gray-400">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Innovation Street, Tech City, State, 12345
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (123) 456-7890
            </div>
            <a href="mailto:info@smartinnovativetech.com" className="hover:text-blue-400 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@smartinnovativetech.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us" className="hover:text-blue-400">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-blue-400">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500">
        &copy; {currentYear} Smart Innovative Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;