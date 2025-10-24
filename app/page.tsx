import Navigation from '@/components/Navigation'
import AuroraHero from '@/components/AuroraHero'
import ZoomParallaxSection from '@/components/ZoomParallaxSection'
import About from '@/components/About'
import Platform from '@/components/Platform'
import Training from '@/components/Training'
import LearningPrograms from '@/components/LearningPrograms'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AuroraHero />
      <ZoomParallaxSection />
      <About />
      <Platform />
      <Training />
      <LearningPrograms />
      <Footer />
    </main>
  )
}
