'use client'

import { motion } from 'framer-motion'
import { Target, Users, GraduationCap, Users2, BookOpen, Video } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'
import { ContainerScroll } from './ui/container-scroll-animation'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import Image from 'next/image'

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
    <section id="platform" className="bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              Platform Designed For <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Reach your full potential with Talent Share! Connect with distinguished mentors 
              and enhance your abilities to take your career to the next level.
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Platform Dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
      
      {/* Platform Features Section - Bento Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive features that make Talent Share the perfect platform for your learning journey.
            </p>
          </motion.div>
          
          <BentoGrid className="max-w-6xl mx-auto">
            {platformFeatures.map((feature, index) => {
              const images = [
                "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ];
              
              // Determine className based on index for layout adjustments
              let classNameValue = '';
              // First row (index 0, 1): increase height with row-span-2
              if (index === 0 || index === 1) {
                classNameValue = 'md:row-span-2';
                // Index 1 already has col-span-2 for width
                if (index === 1) {
                  classNameValue += ' md:col-span-2';
                }
              }
              // Second row, first element (index 2): increase width with col-span-2
              if (index === 2) {
                classNameValue = 'md:col-span-2';
              }
              
              return (
                <BentoGridItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={<feature.icon className="w-6 h-6 text-gray-700" />}
                  className={classNameValue}
                  header={
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={images[index]}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  }
                />
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Platform
