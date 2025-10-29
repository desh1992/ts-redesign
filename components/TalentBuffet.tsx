'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Target, Shield, GraduationCap, Clock } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'
import GridMotion from './GridMotion'

const TalentBuffet = () => {
  const gridItems = [
    'Programming',
    'Design',
    'Marketing',
    'Analytics',
    'Photography',
    'Music',
    'Writing',
    'Fitness',
    'Cooking',
    'Languages',
    'Business',
    'Acting',
    'Yoga',
    'Art',
    'Data Science',
    'Strategy',
    'Psychology',
    'Science',
    'Finance',
    'Circus',
    'Architecture',
    'Crafts',
    'Therapy',
    'Games',
    'Meditation',
    'Gardening',
    'Leadership',
    'Magic'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Talent Buffet: Pick, Share, and Devour Skills Like Never Before!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your new passion with lessons from pros, enthusiasts, and fellow learners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Choose Your Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Choose Your Program</h3>
              <p className="text-gray-600 text-sm">
                Browse our list of expert-led programs that fits your needs and goals.
              </p>
            </div>
          </motion.div>

          {/* Learn Your Way */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Learn Your Way</h3>
              <p className="text-gray-600 text-sm">
                Face-to-face or online, no pre-recorded videos. Your preference matters.
              </p>
            </div>
          </motion.div>

          {/* Find Your Skill Level */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Find Your Skill Level</h3>
              <p className="text-gray-600 text-sm">
                Beginner, Intermediate, or Advanced. Start where you're comfortable.
              </p>
            </div>
          </motion.div>

          {/* Pay with Peace */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pay with Peace</h3>
              <p className="text-gray-600 text-sm">
                Secure, simple transactions. Focus on growth, not payment worries.
              </p>
            </div>
          </motion.div>
        </div>

        {/* GridMotion Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="my-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Explore Our Diverse Learning Categories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From technical skills to creative arts, discover the endless possibilities of learning
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Full width GridMotion container */}
      <div className="relative h-[800px] w-full overflow-hidden">
        <GridMotion 
          items={gridItems} 
          gradientColor="rgba(99, 102, 241, 0.1)" 
          rows={4}
          scrollTrigger={true}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Additional Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Instructors</h4>
              <p className="text-gray-600 text-sm">Learn from industry professionals and passionate educators</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Live Sessions</h4>
              <p className="text-gray-600 text-sm">Real-time interaction with instructors and fellow learners</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Diverse Categories</h4>
              <p className="text-gray-600 text-sm">Explore limitless learning across various skill categories</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TalentBuffet
