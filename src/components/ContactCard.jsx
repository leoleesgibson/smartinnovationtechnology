import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faClock,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const ContactCard = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg">
            Transform your living space with our smart home solutions. 
            Get in touch with us for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <a href="tel:+11234567890" 
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="text-gray-700 font-medium">(123) 456-7890</p>
                </div>
              </a>

              <a href="mailto:info@smarthome.com"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="text-gray-700 font-medium">info@smarthome.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office Location</p>
                  <p className="text-gray-700 font-medium">
                    123 Smart Street, Innovation District,
                    <br />Tech City, TC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="text-gray-700 font-medium">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-gray-500 mb-4">Connect With Us</p>
              <div className="flex space-x-4">
                {[
                  { icon: faFacebook, link: '#', color: 'hover:bg-blue-600' },
                  { icon: faTwitter, link: '#', color: 'hover:bg-sky-500' },
                  { icon: faLinkedin, link: '#', color: 'hover:bg-blue-700' },
                  { icon: faInstagram, link: '#', color: 'hover:bg-pink-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 ${social.color} hover:text-white transition-all duration-300`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Hours Column */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.797753599454!2d-122.0840792847139!3d37.42204127975035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad5f84c4ac7%3A0x96351df15c2028d1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1676138225426!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
                className="absolute inset-0"
              />
            </div>
            
            {/* Quick Contact Form */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Schedule a Consultation
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;