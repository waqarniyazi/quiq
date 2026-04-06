'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Heart, Shield, Lightbulb, Globe, Target, Users, FlaskConical, IndianRupee,
  CheckCircle, Microscope, Lock, Zap
} from 'lucide-react'

function AnimatedStat({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => Math.round(v) + suffix)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate(count, value, { duration: 2, ease: 'easeOut' })
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

const values = [
  { icon: Microscope, title: 'Accuracy', description: 'CE & IVD certified diagnostics with >95% clinical accuracy. Trusted by thousands across India.' },
  { icon: IndianRupee, title: 'Affordability', description: 'Every test under ₹99. We believe cost should never be a barrier to knowing your health.' },
  { icon: Lock, title: 'Privacy', description: 'Your health data stays with you. No data stored, no accounts needed, complete confidentiality.' },
  { icon: Zap, title: 'Innovation', description: 'Constantly expanding our range with the latest rapid diagnostic technologies from our R&D lab.' },
]

const timeline = [
  { year: '2019', title: 'Founded', description: 'Santa Clara Wellness Pvt. Ltd. was incorporated with a vision to democratise diagnostics in India.' },
  { year: '2020', title: 'First Products', description: 'Launched our initial range of self-test kits covering vitamins and infectious diseases.' },
  { year: '2022', title: 'CE Certification', description: 'Achieved CE & IVD certification for our entire product line, meeting European medical device standards.' },
  { year: '2024', title: 'Pan-India Reach', description: 'Expanded delivery to every pin code in India. Served 50,000+ customers across 28 states.' },
  { year: '2025', title: 'R&D Expansion', description: 'Opened advanced R&D lab in Mumbai for next-generation rapid diagnostics development.' },
]

const whyQuiq = [
  { icon: Heart, title: 'Accessibility', description: 'Healthcare at your doorstep. No appointments, no waiting rooms, no queues.' },
  { icon: Shield, title: 'Clinically Validated', description: 'Backed by rigorous clinical validation — the same science used in certified laboratories.' },
  { icon: Globe, title: 'Made for India', description: 'Products designed for Indian health needs — monsoon diseases, dietary deficiencies, and more.' },
  { icon: Target, title: 'Early Diagnosis', description: 'Detect conditions early when treatment is most effective and affordable.' },
  { icon: Users, title: 'For Everyone', description: 'Simple enough for anyone in the family to use, from age 18 to 80.' },
  { icon: Lightbulb, title: 'Knowledge is Power', description: 'Empowering individuals to make informed decisions about their own health.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
                About QUIQ
              </h1>
              <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto">
                Empowering every Indian to take control of their health through affordable, accessible self-testing diagnostics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Quote */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <blockquote className="relative text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent rounded-3xl" />
              <div className="relative p-8 sm:p-14 rounded-3xl border border-white/[0.06]">
                <span className="text-7xl text-white/10 absolute top-2 left-8 font-serif">&ldquo;</span>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/60 italic leading-relaxed">
                  We aim to provide affordable and high quality self testing diagnostics to everyone in India
                </p>
                <span className="text-7xl text-white/10 absolute bottom-2 right-8 font-serif">&rdquo;</span>
              </div>
            </blockquote>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">Our Mission</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/50 leading-relaxed">
                <p>
                  At QUIQ, we believe that knowledge is power — especially when it comes to your health. Our mission is to empower individuals to take control of their own healthcare through proactive and preventative testing.
                </p>
                <p>
                  India has over 1.4 billion people, yet 70% lack access to basic diagnostic facilities. Lab tests are expensive, inconvenient, and often require prescriptions. We saw this problem and decided to solve it.
                </p>
                <p>
                  By combining cutting-edge lateral flow diagnostic technology with thoughtful design, we created self-test kits that anyone can use at home — no training required, no lab visit needed, all priced under ₹99. We firmly believe that everyone should have the ability to manage their health on their own terms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: 50, suffix: 'K+', label: 'Customers Served' },
                { value: 7, suffix: '+', label: 'Test Types' },
                { value: 99, suffix: '%', label: 'Accuracy Rate' },
                { value: 28, suffix: '', label: 'States Covered' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white/70 mb-1">
                    <AnimatedStat value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-white/30">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why QUIQ */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold gradient-text">Why QUIQ?</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyQuiq.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-3 group-hover:bg-white/[0.1] transition-colors">
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                    </div>
                    <h3 className="text-sm font-semibold text-white/70 mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold gradient-text">Our Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-colors">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-white/70 mb-1 group-hover:text-white transition-colors">{value.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>


        {/* Products CTA */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 sm:p-12 rounded-3xl border border-white/[0.06] bg-white/[0.02]"
            >
              <FlaskConical className="w-8 h-8 text-white/30 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white/80 mb-3">Explore Our Products</h2>
              <p className="text-sm text-white/40 mb-6 max-w-md mx-auto">
                From cancer markers and fertility checks to vitamins and infectious disease screening — all under ₹99.
              </p>
              <a
                href="/products"
                className="inline-flex px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all"
              >
                Browse Tests
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
