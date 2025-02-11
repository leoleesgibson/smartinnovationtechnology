import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
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

      <div className="container mx-auto px-4 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative z-10"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full inline-flex items-center gap-3 border border-blue-400/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 font-medium text-sm">
                  Now with AI-Powered Automation
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-4">Smart Home</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your living space with our intelligent ecosystem that combines 
              <span className="font-semibold text-white"> security</span>, 
              <span className="font-semibold text-white"> comfort</span>, and 
              <span className="font-semibold text-white"> efficiency</span> in one seamless experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Start Free Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold shadow-md hover:bg-white/20 transition-all"
              >
                Explore Features
              </motion.button>
            </div>

            {/* Stats Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '15K+', label: 'Smart Homes' },
                  { number: '4.9', label: 'Rating' },
                  { number: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Device Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Main Device */}
              <div className="bg-gradient-to-br from-blue-800 to-indigo-900 p-8 rounded-[40px] shadow-2xl transform rotate-3">
                <div className="bg-gray-900 rounded-3xl overflow-hidden aspect-video relative">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="absolute inset-0 flex flex-col p-6">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-white font-semibold">Living Room</div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                      </div>
                    </div>

                    {/* Device Grid */}
                    <div className="grid grid-cols-3 gap-4 flex-grow">
                      {['🌡️ 72°F', '💡 Lights', '🔒 Locked'].map((item, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                          <div className="text-white text-center text-sm">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-20 -left-20"
              >
                <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-6 rounded-2xl shadow-xl w-48">
                  <div className="bg-gray-900 rounded-xl p-3">
                    <div className="h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg" />
                  </div>
                  <div className="mt-3 text-sm text-blue-200 font-medium">Security Hub</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Device Preview */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900 to-transparent pt-8">
        <div className="mx-auto w-64 bg-gradient-to-br from-blue-800 to-indigo-900 p-4 rounded-2xl shadow-2xl">
          <div className="bg-gray-900 rounded-xl aspect-video overflow-hidden">
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white text-sm">Bedroom</div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {['💡 On', '🔒 Locked'].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-2 flex items-center justify-center">
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;