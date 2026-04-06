import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/homepage/hero'
import { TestShowcase } from '@/components/homepage/test-showcase'
import { ProblemSolution } from '@/components/homepage/problem-solution'
import { ReinventingRules } from '@/components/homepage/reinventing-rules'
import { TestWorking } from '@/components/homepage/test-working'
import { Markers } from '@/components/homepage/markers'
import { Certifications } from '@/components/homepage/certifications'
import { Testimonials } from '@/components/homepage/testimonials'
import { PenTestCTA } from '@/components/homepage/pen-test-cta'
import { Newsletter } from '@/components/homepage/newsletter'
import { ProductCarousel } from '@/components/homepage/product-carousel'
import { StoryCards } from '@/components/homepage/story-cards'
import { ProductShowcase } from '@/components/homepage/product-showcase'
import { BrandMarquee } from '@/components/homepage/brand-marquee'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />


        <ProductShowcase />
        <BrandMarquee />
        <TestShowcase />

        <TestWorking />
        <Markers />
        <Certifications />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
