'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Palette, 
  Briefcase, 
  Heart, 
  Languages, 
  Wrench,
  Music,
  Camera,
  Dumbbell,
  ChefHat,
  Paintbrush
} from 'lucide-react'

const Categories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    {
      icon: Code,
      title: 'Technology',
      description: 'Programming, web development, data science, and more',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      count: '150+ Programs'
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Design, photography, music, writing, and artistic skills',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      count: '200+ Programs'
    },
    {
      icon: Briefcase,
      title: 'Business',
      description: 'Marketing, entrepreneurship, finance, and leadership',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      count: '120+ Programs'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Yoga, fitness, nutrition, and mental health',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      count: '80+ Programs'
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'Learn new languages from native speakers',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      count: '60+ Programs'
    },
    {
      icon: Wrench,
      title: 'Life Skills',
      description: 'Cooking, home improvement, and practical skills',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      count: '90+ Programs'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Diverse Learning Categories</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From tech skills to creative arts, something for everyone
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`${category.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="text-sm font-semibold text-primary-500">
                {category.count}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Popular This Month
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Music, name: 'Music Production', students: '2.5K' },
                { icon: Camera, name: 'Photography', students: '3.2K' },
                { icon: Dumbbell, name: 'Fitness Training', students: '1.8K' },
                { icon: ChefHat, name: 'Culinary Arts', students: '2.1K' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.students} students</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Categories
