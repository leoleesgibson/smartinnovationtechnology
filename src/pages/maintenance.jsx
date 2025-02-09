import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiClock, FiMail, FiZap } from 'react-icons/fi';

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date to current time + 3 days
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(0, 0, 0, 0); // Set to midnight three days from now

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 border-2 border-white/5 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <FiTool className="text-6xl text-indigo-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Smart Innovative Technologies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're performing essential upgrades to enhance your experience. 
            Our systems will be fully operational by {targetDate.toLocaleDateString()} at midnight.
          </p>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all"
            >
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
              <FiMail className="text-cyan-400" />
              Get Real-Time Updates
            </h2>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <FiZap className="inline" />
                Subscribe
              </motion.button>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex items-center justify-center gap-6">
              <motion.a 
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiClock className="text-xl" />
              </motion.a>
              <p className="text-gray-400 text-sm">
                Smart Innovative Technologies • Status: Active Maintenance • Support: support@smartinnovative.tech
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MaintenancePage;