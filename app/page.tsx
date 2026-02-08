import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import HowIWork from '@/components/sections/HowIWork'
import VideoIntroduction from '@/components/sections/VideoIntroduction'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import MobileCTA from '@/components/MobileCTA'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HowIWork />
      <VideoIntroduction />
      <Services />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
      <Chatbot />
    </main>
  )
}
