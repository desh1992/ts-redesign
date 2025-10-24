'use client'

import { motion } from 'framer-motion'
import { ZoomParallax } from './ui/zoom-parallax'
import { GraduationCap, Users, BookOpen, Lightbulb, Target, Award, Globe } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

const ZoomParallaxSection = () => {
  const images = [
    {
      src: '/kenny-eliason-1-aA2Fadydc-unsplash.jpg',
      alt: 'Students learning in a modern classroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Online learning and video conferencing',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Creative workspace with learning materials',
    },
    {
      src: '/unseen-studio-s9CC2SKySJM-unsplash.jpg',
      alt: 'Professional development and training',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Team collaboration and knowledge sharing',
    },
    {
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Digital learning and technology',
    },
    {
      src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Success and achievement in learning',
    },
  ]

  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals'
    },
    {
      icon: Users,
      title: 'Live Sessions',
      description: 'Interactive real-time learning'
    },
    {
      icon: BookOpen,
      title: 'Diverse Programs',
      description: 'Wide range of learning opportunities'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge learning methods'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Achieve your learning objectives'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Recognized credentials and skills'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with learners worldwide'
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Introduction Section */}
      <div className="relative flex h-[50vh] items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Experience Learning Like Never Before
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Scroll down to explore our immersive learning environment
          </motion.p>
          
          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <GlowingEffect
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={60}
                  inactiveZone={0.2}
                  borderWidth={2}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-2">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 text-center">{feature.title}</h3>
                  <p className="text-xs text-gray-600 text-center mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Zoom Parallax Section */}
      <ZoomParallax images={images} />

      {/* Bottom Section */}
      <div className="h-[50vh] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of learners who have transformed their skills with Talent Share
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ZoomParallaxSection
