'use client'

import * as React from "react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  GraduationCap,
  Users,
  Video,
  BookOpen,
  Target,
  Globe,
  Zap,
  TrendingUp,
} from "lucide-react";

const LearningBentoSection = () => {
  const features = [
    {
      Icon: Video,
      name: "Live Learning Sessions",
      description: "Experience real-time interactive learning with expert instructors in personalized sessions.",
      href: "#training",
      cta: "Explore Sessions",
      background: "/gradients/codioful-formerly-gradienta-n2XqPm7Bqhk-unsplash.jpg",
      backgroundPosition: "center center",
      isDark: true, // Dark purple background
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: GraduationCap,
      name: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience.",
      href: "#platform",
      cta: "Meet Instructors",
      background: "/gradients/ashley-whitlatch-36aGnv29Ss0-unsplash.jpg",
      backgroundPosition: "center center",
      isDark: true, // Top left card - white text
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Users,
      name: "Community Learning",
      description: "Join thousands of learners in our vibrant educational community.",
      href: "#learning-programs",
      cta: "Join Community",
      background: "/gradients/ikhlas-j79AzFDx_ek-unsplash.jpg",
      backgroundPosition: "center center",
      isDark: false, // Bottom left card - black text
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: BookOpen,
      name: "Diverse Programs",
      description: "Choose from classes, bootcamps, and personalized consultations.",
      href: "#learning-programs",
      cta: "View Programs",
      background: "/gradients/magicpattern-65O4Dw6-xLg-unsplash.jpg",
      backgroundPosition: "center center",
      isDark: true, // Top right card - white text
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: TrendingUp,
      name: "Track Progress",
      description: "Monitor your learning journey and celebrate milestones along the way.",
      href: "#platform",
      cta: "View Analytics",
      background: "/gradients/mymind-XUlsF9LYeVk-unsplash.jpg",
      backgroundPosition: "center center",
      isDark: false, // Light yellow-orange/peach background
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Experience Learning Like Never Before
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover powerful features designed to transform your learning journey
            <br />
            and help you achieve your educational goals
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature, index) => (
            <BentoCard 
              key={feature.name} 
              name={feature.name}
              Icon={feature.Icon}
              description={feature.description}
              href={feature.href}
              cta={feature.cta}
              background={feature.background}
              backgroundPosition={feature.backgroundPosition}
              isDark={feature.isDark}
              className={feature.className}
              index={index}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default LearningBentoSection;
