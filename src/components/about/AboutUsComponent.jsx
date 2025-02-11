import React from 'react';
import { motion } from 'framer-motion';

const AboutUsComponent = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/path/to/sarah.jpg", // Add actual image paths
      description: "10+ years in smart home innovation"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "/path/to/david.jpg",
      description: "Expert in IoT and home automation"
    },
    {
      name: "Maria Garcia",
      role: "Head of Design",
      image: "/path/to/maria.jpg",
      description: "Specialist in user experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          {/* Animated particles */}
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

        <div className="relative container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
            >
              <span className="text-blue-400 font-semibold">Our Story</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Innovating the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Smart Living
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Since 2015, S.I Technologies has been at the forefront of smart home innovation,
              transforming everyday living spaces into intelligent, efficient, and secure environments.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="py-16 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize home living through innovative smart technology solutions that enhance comfort,
                security, and efficiency while promoting sustainable living practices.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in smart home technology, creating intelligent living spaces that
                adapt and respond to the unique needs of each household.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="py-16 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing the boundaries of what's possible in smart home technology.",
                icon: "🚀"
              },
              {
                title: "Reliability",
                description: "Delivering consistent, high-quality solutions that our customers can trust.",
                icon: "🛡️"
              },
              {
                title: "Sustainability",
                description: "Committed to eco-friendly practices and energy-efficient solutions.",
                icon: "🌱"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="py-16 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                  {/* Replace with actual images */}
                  <div className="w-full h-full bg-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2015", event: "Founded S.I Technologies" },
              { year: "2017", event: "Launched first smart home solution" },
              { year: "2019", event: "Expanded to international markets" },
              { year: "2021", event: "Achieved 1000+ home installations" },
              { year: "2023", event: "Introduced AI-powered home systems" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-24 text-right">
                  <span className="text-blue-400 font-bold">{milestone.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-500 relative">
                  <div className="absolute w-px h-full bg-blue-500/30 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <p className="text-white">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsComponent;