import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/homepage/hero'
import { TestShowcase } from '@/components/homepage/test-showcase'
import { ProblemStatement } from '@/components/homepage/problem-statement'
import { OurSolution } from '@/components/homepage/our-solution'
import { HowItWorks } from '@/components/homepage/how-it-works'
import { Markers } from '@/components/homepage/markers'
import { Certifications } from '@/components/homepage/certifications'
import { Testimonials } from '@/components/homepage/testimonials'
import { PenTestCTA } from '@/components/homepage/pen-test-cta'
import { Newsletter } from '@/components/homepage/newsletter'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <TestShowcase />
        <ProblemStatement />
        <OurSolution />
        <HowItWorks />
        <Markers />
        <Certifications />
        <Testimonials />
        <PenTestCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
