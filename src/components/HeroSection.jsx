import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Smart Solutions for a Connected Future
        </h1>
        <p className="text-xl mb-10">
          Transforming homes and businesses with innovative technology in automation, IT, and security.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-12 rounded-full shadow-lg transition duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Decorative Background Elements (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-48 h-48 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-blue-500 rounded-full w-64 h-64 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;