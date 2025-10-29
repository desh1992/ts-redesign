'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Share2, Users, Globe } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

const About = () => {
  const features = [
    {
      icon: Paintbrush,
      title: 'Painting on Canvas',
      description: 'Share your artistic talents with the world',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Share2,
      title: 'Share.',
      description: 'Connect and share knowledge with others',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant community of learners and experts',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with talents from around the world',
      color: 'from-blue-600 to-blue-800'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            What is Talent Share?
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Dive into the vibrant world of Talent Share
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A one-of-a-kind platform where curiosity meets expertise and passion fuels learning. 
              Whether you're bursting with knowledge eager to be shared or on a quest for skills 
              to spark your next adventure, Talent Share is your go-to haven.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Imagine connecting with individuals as passionate and curious as you, from local 
              talents teaching yoga in your neighborhood park to global masters guiding you through 
              the intricacies of digital art, all at the touch of a button.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our unique blend of live online and in-person programs ensures that, no matter where 
              you are or what you seek, the perfect learning experience is waiting for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <feature.icon className="w-9 h-9 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            With Talent Share, every session is a doorway to new possibilities, a chance to nurture 
            your talents, and an opportunity to share your own wisdom with an eager community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
