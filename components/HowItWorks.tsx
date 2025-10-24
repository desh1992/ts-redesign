'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Search, 
  Calendar, 
  GraduationCap, 
  Plus, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const learnerSteps = [
    {
      icon: Search,
      title: 'Browse expert-led programs',
      description: 'Discover programs from verified professionals'
    },
    {
      icon: Calendar,
      title: 'Book live interactive sessions',
      description: 'Schedule sessions that fit your schedule'
    },
    {
      icon: GraduationCap,
      title: 'Learn from real professionals',
      description: 'Get hands-on experience with industry experts'
    }
  ]

  const instructorSteps = [
    {
      icon: Plus,
      title: 'Create your program easily',
      description: 'Set up your teaching program in minutes'
    },
    {
      icon: Users,
      title: 'Manage student enrollments',
      description: 'Track and manage your student base'
    },
    {
      icon: TrendingUp,
      title: 'Track your earnings & growth',
      description: 'Monitor your success and grow your business'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            <span className="gradient-text">How It Works</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get started in minutes, not hours
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* For Learners */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              01
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">For Learners</h3>
              <div className="space-y-6">
                {learnerSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* For Instructors */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              02
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">For Instructors</h3>
              <div className="space-y-6">
                {instructorSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-secondary-500 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary-500 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Easy Setup</h4>
                <p className="text-sm opacity-90">Get started in minutes with our intuitive platform</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Connect & Learn</h4>
                <p className="text-sm opacity-90">Join live sessions with expert instructors</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Grow Together</h4>
                <p className="text-sm opacity-90">Build skills and advance your career</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
