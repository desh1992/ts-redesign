'use client'

import { motion } from 'framer-motion'
import { Target, Users, GraduationCap, Users2, BookOpen, Video } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

const Platform = () => {
  const platformFeatures = [
    {
      icon: Target,
      title: 'Reach your full potential',
      description: 'Connect with distinguished mentors with the precise skills and expertise you need',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Access a network of professionals ready to share their knowledge',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: 'Skill Enhancement',
      description: 'Take your career to the next level with targeted learning',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users2,
      title: 'One-Stop Shop',
      description: 'Your complete platform for talent development and growth',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const successStories = [
    {
      icon: Users,
      title: 'Successful Teenagers',
      description: 'Young talents achieving their dreams',
      image: '👥'
    },
    {
      icon: BookOpen,
      title: 'Tailor with Measuring Tape',
      description: 'Craft skills passed down through generations',
      image: '✂️'
    },
    {
      icon: Video,
      title: 'Studying Online',
      description: 'Flexible learning that fits your schedule',
      image: '💻'
    }
  ]

  return (
    <section id="platform" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Platform Designed For Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Reach your full potential with Talent Share! This is your one-stop shop for connecting 
            with distinguished mentors with the precise skills and expertise you need to enhance 
            your abilities and take your career to the next level.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative text-center"
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
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <GlowingEffect
                spread={35}
                glow={true}
                disabled={false}
                proximity={70}
                inactiveZone={0.15}
                borderWidth={2}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{story.image}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platform
