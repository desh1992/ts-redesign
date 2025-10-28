'use client'

import { motion } from 'framer-motion'
import { Play, UserCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import Aurora from './ui/aurora'
import RotatingText from './ui/RotatingText'
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
        colorStops={["#6366f1", "#8b5cf6", "#ec4899"]}
        blend={0.8}
        amplitude={1.5}
        speed={0.3}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 w-full"
              >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap"
            >
              <span className="text-white" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }}>
                Where{' '}
                <span className="px-1 sm:px-1 md:px-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-0.5 sm:py-0.5 md:py-1 rounded-lg inline-block" style={{ textShadow: 'none' }}>
                  <RotatingText
                    texts={['Talent', 'Expertise', 'Knowledge', 'Skills']}
                    mainClassName="inline-block"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
                {' '}Meets Its Match
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
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <UserCheck className="w-4 h-4" />
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
