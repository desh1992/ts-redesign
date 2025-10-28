'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Briefcase, Target, Award, TrendingUp } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

const LearningPrograms = () => {
  const programTypes = [
    {
      icon: BookOpen,
      title: 'Classes',
      description: 'Structured learning sessions with expert instructors',
      color: 'from-blue-500 to-cyan-500',
      features: ['Interactive sessions', 'Expert guidance', 'Peer learning']
    },
    {
      icon: Users,
      title: 'Bootcamps',
      description: 'Intensive training programs for rapid skill development',
      color: 'from-green-500 to-emerald-500',
      features: ['Intensive learning', 'Project-based', 'Career-focused']
    },
    {
      icon: Briefcase,
      title: 'Consultations',
      description: 'One-on-one sessions with industry professionals',
      color: 'from-purple-500 to-violet-500',
      features: ['Personalized advice', 'Career guidance', 'Skill assessment']
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Tailored Programs',
      description: 'Designed specifically for your learning needs and career goals'
    },
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from experienced professionals in their fields'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Boost your career with in-demand skills and knowledge'
    }
  ]

  return (
    <section id="learning-programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Tailored Learning Programs For Your Learning Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Experienced professionals design tailored programs to boost your career, offering 
            diverse options like classes, bootcamps, and consultations. Benefit from their 
            expertise to reach your full potential.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programTypes.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <GlowingEffect
                spread={45}
                glow={true}
                disabled={false}
                proximity={100}
                inactiveZone={0.1}
                borderWidth={2}
              />
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
              </div>
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={70}
                inactiveZone={0.2}
                borderWidth={2}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of learners who have already transformed their careers with Talent Share
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningPrograms
