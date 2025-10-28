import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

// --- Data for the feature cards ---
const features = [
  {
    title: "Personal Training Sessions",
    description: "Get one-on-one training with expert instructors tailored to your specific learning goals and pace. No pre-recorded videos, just real-time interaction and personalized feedback.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-blue-200 dark:bg-blue-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "In-Person Learning",
    description: "Experience hands-on learning in physical classrooms with direct access to instructors. Build real connections and get immediate support in a collaborative environment.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2070&auto=format&fit=crop&q=80",
    bgColor: "bg-green-200 dark:bg-green-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Live Web Sessions",
    description: "Join interactive online sessions from anywhere in the world. Real-time video calls with instructors, screen sharing, and collaborative tools for effective remote learning.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-purple-200 dark:bg-purple-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "No Pre-recorded Videos",
    description: "Every session is live and interactive. No outdated content or pre-recorded lectures. Get fresh, up-to-date knowledge with real-time Q&A and personalized guidance.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-orange-200 dark:bg-orange-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = <T extends HTMLElement>() => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element's intersection status changes.
        setInView(entry.isIntersecting);
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item must be visible to trigger the callback
      }
    );

    observer.observe(element);

    // Cleanup function to disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};


// --- Header Component ---
const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation<HTMLHeadingElement>();
    const [pRef, pInView] = useScrollAnimation<HTMLParagraphElement>();

    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
                ref={headerRef}
                className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-white ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Personal Training. In-Person Or Live-Web. No Pre-recorded Videos.
            </h2>
            <p 
                ref={pRef}
                className={`text-lg text-gray-300 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Experience real-time learning with expert instructors in interactive sessions designed for your success
            </p>
        </div>
    );
};

// This is the main component that orchestrates everything.
export function StickyFeatureSection() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 font-sans">
        {/* The padding-global and container-large classes from your CSS are replicated here */}
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the features */}
          <section className="py-24 md:py-48 flex flex-col items-center">
            
            <AnimatedHeader />

            {/* The container for the sticky cards */}
            <div className="w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="idle"
                  whileHover="active"
                  variants={{
                    idle: { scale: 1 },
                    active: { scale: 1.02 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={clsx(
                    "group relative flex flex-col overflow-hidden rounded-3xl mb-16 sticky",
                    "bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-sm ring-1 ring-white/10",
                    "cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                  )}
                  style={{ top: '200px' }}
                >
                  {/* Image Container with Background */}
                  <div className="relative h-[29rem] shrink-0 overflow-hidden bg-gray-900">
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${feature.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      variants={{
                        idle: { scale: 1 },
                        active: { scale: 1.1 }
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    {/* Bottom fade gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 z-10" />
                  </div>
                  
                  {/* Text Overlay with Backdrop Blur */}
                  <div className="relative p-8 md:p-10 z-20 isolate mt-[-120px] min-h-[14rem] backdrop-blur-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white rounded-b-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-[600px] text-sm md:text-base leading-relaxed text-gray-200">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
