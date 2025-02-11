import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Chief Technology Officer',
      company: 'ABC Corp',
      testimonial: 'Smart Innovative Technologies transformed our office infrastructure completely. Their intelligent solutions and dedicated support team have significantly improved our operational efficiency. The ROI has been remarkable.',
      image: '/fake.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: 'Alice Johnson',
      position: 'Head of Security',
      company: 'XYZ Solutions',
      testimonial: 'The comprehensive security system installed by Smart Innovative Technologies has revolutionized our facility protection. Their AI-powered surveillance and biometric access control provide unparalleled security.',
      image: '/fake.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: 'Bob Williams',
      position: 'Property Manager',
      company: 'Luxury Living Corp',
      testimonial: 'Implementing their smart home automation system was the best decision we made. From climate control to security, everything works seamlessly. Our residents are absolutely thrilled with the convenience.',
      image: '/fake.jpeg',
      rating: 5
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mt-4 mb-6"
          >
            What Our Clients Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Discover how our smart home solutions are transforming lives and businesses
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-blue-500/10 text-6xl absolute -top-4 -left-2"
                />
                <div className="mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-yellow-400 w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="flex items-center mt-8 border-t pt-6">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-medium text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Schedule Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;