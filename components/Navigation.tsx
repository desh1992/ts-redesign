'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, Code, Heart, HelpCircle } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [isOverDarkSection, setIsOverDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Check if scrolled past hero text container (trigger earlier)
      // Assuming hero text container is around 60% of viewport height
      const heroTextHeight = window.innerHeight * 0.6
      setIsPastHero(window.scrollY > heroTextHeight)

      // Check if header is over the Training section (dark background)
      const trainingSection = document.getElementById('training')
      if (trainingSection) {
        const scrollY = window.scrollY
        const navBarOffset = 120 // Account for nav position (top: 1rem = 16px) and viewport offset
        const sectionTop = trainingSection.offsetTop - navBarOffset
        const sectionBottom = trainingSection.offsetTop + trainingSection.offsetHeight

        // Check if nav is visually over the training section
        setIsOverDarkSection(scrollY >= sectionTop && scrollY < sectionBottom)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="w-8/12 bg-white/30 backdrop-blur-lg border border-white/40 rounded-full shadow-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h2 className={`text-2xl font-bold transition-colors duration-500 ${
              isOverDarkSection 
                ? 'text-white' 
                : isPastHero 
                  ? 'gradient-text' 
                  : 'text-white'
            }`}>Talent Share</h2>
          </motion.div>

          {/* Explore Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg"
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
