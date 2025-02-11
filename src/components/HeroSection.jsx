import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Current date/time display component
const DateTime = () => {
  return (
    <motion.div 
      className="absolute top-6 right-6 text-white/70 text-sm font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {new Date().toLocaleString('en-US', {
        hour12: false,
        timeStyle: 'medium',
        dateStyle: 'medium'
      })}
    </motion.div>
  );
};

// Smart Home Illustration Component
const SmartHomeIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 hidden lg:block"
  >
    <svg className="w-full h-auto" viewBox="0 0 800 600" fill="none">
      {/* House Base */}
      <motion.path
        d="M400 100L600 250V500H200V250L400 100Z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      {/* Smart Device Icons */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {/* Smart Lighting */}
        <circle cx="300" cy="300" r="20" fill="rgba(74,222,128,0.2)" />
        <motion.circle
          cx="300"
          cy="300"
          r="20"
          stroke="rgba(74,222,128,0.8)"
          strokeWidth="2"
          fill="none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Security Camera */}
        <circle cx="500" cy="200" r="15" fill="rgba(56,189,248,0.2)" />
        <motion.circle
          cx="500"
          cy="200"
          r="15"
          stroke="rgba(56,189,248,0.8)"
          strokeWidth="2"
          fill="none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Smart Thermostat */}
        <circle cx="400" cy="400" r="25" fill="rgba(251,146,60,0.2)" />
        <motion.circle
          cx="400"
          cy="400"
          r="25"
          stroke="rgba(251,146,60,0.8)"
          strokeWidth="2"
          fill="none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.g>

      {/* Connection Lines */}
      <motion.g
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.line
          x1="300" y1="300"
          x2="400" y2="400"
          animate={{ 
            strokeDashoffset: [0, 100],
            strokeDasharray: [5, 15] 
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="500" y1="200"
          x2="400" y2="400"
          animate={{ 
            strokeDashoffset: [0, 100],
            strokeDasharray: [5, 15] 
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.g>
    </svg>
  </motion.div>
);

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Company Logo/Name */}
      <motion.div 
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-xl">SI</span>
          </motion.div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white tracking-tight">S.I Technologies</h1>
            <span className="text-blue-400 text-sm">Smart Innovative Solutions</span>
          </div>
        </div>
      </motion.div>

      {/* DateTime Display */}
      <DateTime />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            className="text-left max-w-2xl mt-20 lg:mt-0"
          >
            <motion.div
              className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-blue-400 font-semibold">
                Innovating Smart Living
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Transform Your Home
              </span>
              <br />
              <span className="text-white">
                With Smart Technology
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Experience the perfect blend of comfort, security, and efficiency with our 
              cutting-edge smart home solutions. Control everything from lighting to climate 
              with just a touch.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {[
                { number: "98%", label: "Customer Satisfaction" },
                { number: "1000+", label: "Homes Automated" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <SmartHomeIllustration />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
          <motion.div 
            className="w-1 h-3 bg-blue-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;