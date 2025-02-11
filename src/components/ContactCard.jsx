import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactCard = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              We're here to answer your questions and help you find the perfect Smart Home, IT, or E-Security solution. Contact us today!
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-3" />
                <p className="text-gray-600">
                  123 Innovation Street, Tech City, State, 12345
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-3" />
                <p className="text-gray-600">
                  (123) 456-7890
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-3" />
                <p className="text-gray-600">
                  info@smartinnovativetech.com
                </p>
              </div>
            </div>
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.797753599454!2d-122.0840792847139!3d37.42204127975035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad5f84c4ac7%3A0x96351df15c2028d1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1676138225426!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;