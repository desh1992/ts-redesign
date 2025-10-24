'use client'

import { motion } from 'framer-motion'
import { Play, Users, GraduationCap, Video, UserCheck, BookOpen } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [counts, setCounts] = useState({
    learners: 0,
    instructors: 0,
    sessions: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { learners: 10000, instructors: 500, sessions: 2500 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounts({
          learners: Math.floor(targets.learners * easeOut),
          instructors: Math.floor(targets.instructors * easeOut),
          sessions: Math.floor(targets.sessions * easeOut),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const floatingCards = [
    { icon: Video, text: 'Live Sessions', delay: 0 },
    { icon: Users, text: 'Expert Teachers', delay: 1 },
    { icon: GraduationCap, text: 'Real Skills', delay: 2 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="floating-orb w-72 h-72 bg-gradient-to-r from-primary-500 to-purple-500 top-10 left-10"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="floating-orb w-48 h-48 bg-gradient-to-r from-secondary-500 to-orange-500 top-1/2 right-10"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="floating-orb w-60 h-60 bg-gradient-to-r from-cyan-500 to-blue-500 bottom-20 left-1/2"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="gradient-text">Learn from Experts,</span>
              <br />
              <span className="gradient-text">Teach What You Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              A vibrant marketplace where knowledge meets opportunity. Connect with real professionals, 
              learn new skills, and share your expertise with an eager community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2 text-lg px-8 py-4"
              >
                <UserCheck className="w-5 h-5" />
                Start Teaching
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">
                  {counts.learners.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">
                  {counts.instructors.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">
                  {counts.sessions.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Live Sessions</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 lg:h-[500px]"
          >
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + card.delay * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`floating-card ${
                  index === 0 ? 'top-10 right-20' :
                  index === 1 ? 'top-1/2 right-10' :
                  'bottom-20 right-32'
                }`}
              >
                <card.icon className="w-8 h-8 text-primary-500 mb-2" />
                <span className="font-semibold text-gray-800">{card.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
