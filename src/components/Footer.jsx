import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-gray-400">Get updates on smart home innovations and exclusive offers</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
                  Subscribe <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Smart Living Solutions</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming homes with innovative automation technology for a more 
              comfortable, secure, and sustainable living experience.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: faFacebook, link: '#' },
                { icon: faTwitter, link: '#' },
                { icon: faLinkedin, link: '#' },
                { icon: faInstagram, link: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={`Visit our ${social.icon.iconName} page`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { text: 'Home', path: '/' },
                { text: 'About Us', path: '/about-us' },
                { text: 'Services', path: '/services' },
                { text: 'Projects', path: '/projects' },
                { text: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Smart Lighting Control',
                'Home Security Systems',
                'Climate Control',
                'Entertainment Systems',
                'Energy Management'
              ].map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+11234567890" className="text-gray-400 hover:text-blue-400 flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                  <span>(123) 456-7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@smartliving.com" className="text-gray-400 hover:text-blue-400 flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                  <span>info@smartliving.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mt-1" />
                <span className="text-gray-400">
                  123 Smart Street,<br />
                  Innovation District,<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Smart Living Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;