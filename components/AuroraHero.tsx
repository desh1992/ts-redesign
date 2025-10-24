'use client'

import { motion } from 'framer-motion'
import { Play, UserCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import Aurora from './ui/aurora'
// import GlassSurface from './ui/GlassSurface'

const AuroraHero = () => {
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

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.8}
        amplitude={1.5}
        speed={0.3}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="liquid-glass rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl"
              >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
                Where Talent Meets Its Match
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm"
            >
              Connect with expert instructors and unlock your potential through personalized learning experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <UserCheck className="w-5 h-5" />
                Become an Instructor
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
                <div className="text-3xl font-bold text-gray-800">
                  {counts.learners.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {counts.instructors.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {counts.sessions.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Live Sessions</div>
              </div>
            </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuroraHero
