import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faServer, 
  faShieldAlt,
  faLightbulb,
  faTemperatureHigh,
  faLock,
  faTv,
  faGlobe,
  faCloud,
  faUserShield,
  faDatabase,
  faVideo,
  faFire,
  faKey,
  faBolt
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ title, description, features, icon, color }) => {
  return (
    <motion.div
      className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute top-0 left-0 w-full h-2 ${color}`} />
      <div className="p-8">
        <div className={`w-16 h-16 ${color.replace('bg-', 'bg-opacity-10 text-')} rounded-2xl flex items-center justify-center mb-6`}>
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FontAwesomeIcon 
                icon={feature.icon} 
                className={`${color.replace('bg-', 'text-')}`} 
              />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        <motion.button
          className={`mt-8 px-6 py-3 rounded-full ${color} text-white flex items-center space-x-2 hover:opacity-90 transition-opacity duration-300`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const KeyServices = () => {
  const services = [
    {
      title: "Smart Home Automation",
      description: "Transform your living space with our cutting-edge home automation systems. Experience unprecedented control, comfort, and efficiency in every corner of your home.",
      icon: faHome,
      color: "bg-blue-600",
      features: [
        { icon: faLightbulb, text: "Intelligent Lighting Control" },
        { icon: faTemperatureHigh, text: "Climate Automation" },
        { icon: faLock, text: "Security Integration" },
        { icon: faTv, text: "Entertainment Systems" }
      ]
    },
    {
      title: "IT Infrastructure",
      description: "Build a robust and scalable IT foundation for your business with our comprehensive technology solutions and expert support services.",
      icon: faServer,
      color: "bg-purple-600",
      features: [
        { icon: faGlobe, text: "Network Architecture" },
        { icon: faCloud, text: "Cloud Solutions" },
        { icon: faUserShield, text: "Cybersecurity" },
        { icon: faDatabase, text: "Data Management" }
      ]
    },
    {
      title: "Advanced Security",
      description: "Protect your property with state-of-the-art security systems. Our comprehensive solutions provide round-the-clock monitoring and instant alerts.",
      icon: faShieldAlt,
      color: "bg-green-600",
      features: [
        { icon: faVideo, text: "HD Surveillance" },
        { icon: faFire, text: "Fire Detection" },
        { icon: faKey, text: "Access Management" },
        { icon: faBolt, text: "Perimeter Security" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mt-4 mb-6"
          >
            Comprehensive Smart Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Discover our range of innovative services designed to make your space 
            smarter, safer, and more efficient
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            <span>Schedule a Consultation</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyServices;