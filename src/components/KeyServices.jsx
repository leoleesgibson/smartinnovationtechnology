import React from 'react';

const KeyServices = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Homes */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Smart Homes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Transform your home into an intelligent, responsive environment with our Smart Home solutions. Control lighting, temperature, security, and entertainment systems seamlessly from anywhere. Experience convenience, energy savings, and enhanced security.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Smart Lighting</li>
              <li>Automated Climate Control</li>
              <li>Home Security Systems</li>
              <li>Entertainment Integration</li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              IT Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Empower your business with our comprehensive IT solutions. From network infrastructure and cloud services to cybersecurity and data management, we ensure your technology is reliable, secure, and aligned with your business goals.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Network Setup & Maintenance</li>
              <li>Cloud Solutions</li>
              <li>Cybersecurity Services</li>
              <li>Data Backup & Recovery</li>
            </ul>
          </div>

          {/* E-Security */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              E-Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Protect your assets, property, and personnel with our state-of-the-art Electronic Security systems. We offer a range of solutions, including CCTV surveillance, fire alarm systems, access control, and electric fencing, providing 24/7 peace of mind.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>CCTV Surveillance</li>
              <li>Fire Alarm Systems</li>
              <li>Access Control Systems</li>
              <li>Electric Fencing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;