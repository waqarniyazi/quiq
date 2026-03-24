'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'

/* ── Product images from /public/hero-test-images ──────────────────── */
const RUNWAY_PRODUCTS = [
  { src: '/hero-test-images/vitamin d.webp', label: 'Vitamin D' },
  { src: '/hero-test-images/tsh.webp', label: 'TSH' },
  { src: '/hero-test-images/anemia.webp', label: 'Ferritin' },
  { src: '/hero-test-images/crp.webp', label: 'CRP' },
  { src: '/hero-test-images/vitamin b12.webp', label: 'B12' },
]

export function Hero() {
  const { t } = useLanguage()
  const [slide, setSlide] = useState(0) // 0 = text, 1 = presenting, 2 = runway

  /* ═══════════════════════════════════════════════════════════════════
     SLIDE 1 — One line at a time (previous disappears, next appears)
     ═══════════════════════════════════════════════════════════════════ */
  const slide1Lines = t('hero.slide1Lines')?.split('|') ?? [
    'Imagine', 'Testing for Cancer', 'With a Single Drop of Blood', 'At Home', 'In 5 Minutes',
  ]
  const [activeLineIdx, setActiveLineIdx] = useState(0)
  const [linePhase, setLinePhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    if (slide !== 0) return

    if (linePhase === 'in') {
      // Hold the visible line for a pause
      const id = setTimeout(() => setLinePhase('hold'), 600)
      return () => clearTimeout(id)
    }

    if (linePhase === 'hold') {
      // If it's the last line, hold a bit longer then go to slide 1
      if (activeLineIdx >= slide1Lines.length - 1) {
        const id = setTimeout(() => setSlide(1), 1000)
        return () => clearTimeout(id)
      }
      // Otherwise transition out
      const id = setTimeout(() => setLinePhase('out'), 700)
      return () => clearTimeout(id)
    }

    if (linePhase === 'out') {
      // After fade-out, move to next line
      const id = setTimeout(() => {
        setActiveLineIdx(prev => prev + 1)
        setLinePhase('in')
      }, 500)
      return () => clearTimeout(id)
    }
  }, [slide, linePhase, activeLineIdx, slide1Lines.length])

  // Reset slide 1 state when re-entering
  useEffect(() => {
    if (slide === 0) {
      setActiveLineIdx(0)
      setLinePhase('in')
    }
  }, [slide])

  /* ═══════════════════════════════════════════════════════════════════
     SLIDE 2 — "This is QUIQ" + lines revealed one by one
     ═══════════════════════════════════════════════════════════════════ */
  const slide2Title = t('hero.slide2Title') || 'This is QUIQ'
  const slide2Lines = [
    t('hero.slide2Line1') || 'A self-testing revolution',
    t('hero.slide2Line2') || '20+ conditions. One drop of blood.',
    t('hero.slide2Line3') || 'Built on world-class medical research',
    t('hero.slide2Line4') || 'Trusted by international health authorities',
  ]
  const [visibleBullet, setVisibleBullet] = useState(-1)

  useEffect(() => {
    if (slide !== 1) return
    setVisibleBullet(-1)
    const start = setTimeout(() => setVisibleBullet(0), 800)
    return () => clearTimeout(start)
  }, [slide])

  useEffect(() => {
    if (slide !== 1 || visibleBullet < 0) return

    if (visibleBullet < slide2Lines.length - 1) {
      const id = setTimeout(() => setVisibleBullet(v => v + 1), 800)
      return () => clearTimeout(id)
    } else {
      // All bullets shown → hold then move to runway
      const id = setTimeout(() => setSlide(2), 2500)
      return () => clearTimeout(id)
    }
  }, [visibleBullet, slide, slide2Lines.length])

  /* ═══════════════════════════════════════════════════════════════════
     SLIDE 3 — Product Runway: approach from depth, halt, vanish to side
     ═══════════════════════════════════════════════════════════════════ */
  const [runwayIdx, setRunwayIdx] = useState(0)

  useEffect(() => {
    if (slide !== 2) return
    setRunwayIdx(0)
  }, [slide])

  useEffect(() => {
    if (slide !== 2) return

    if (runwayIdx < RUNWAY_PRODUCTS.length - 1) {
      const id = setTimeout(() => setRunwayIdx(prev => prev + 1), 2400)
      return () => clearTimeout(id)
    } else {
      // Last product shown, hold then loop back
      const id = setTimeout(() => setSlide(0), 2000)
      return () => clearTimeout(id)
    }
  }, [runwayIdx, slide])

  const goTo = useCallback((i: number) => setSlide(i), [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* ═══════════════ SLIDE 1 — One line at a time ══════════════════ */}
      <AnimatePresence>
        {slide === 0 && (
          <motion.div
            key="slide-text"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero.webp"
                alt="Hero Background"
                fill
                priority
                className="object-cover opacity-5"
              />
            </div>

            {/* Single active line */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeLineIdx}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    linePhase === 'out'
                      ? { opacity: 0, y: -30 }
                      : { opacity: 1, y: 0 }
                  }
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {slide1Lines[activeLineIdx]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ SLIDE 2 — This is QUIQ ═══════════════════════ */}
      <AnimatePresence>
        {slide === 1 && (
          <motion.div
            key="slide-presenting"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-10 lg:mb-14"
              >
                {slide2Title}
              </motion.h2>

              {/* Subtitle lines — one by one, centered */}
              <div className="space-y-3 sm:space-y-4">
                {slide2Lines.map((line, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={
                      visibleBullet >= idx
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 16 }
                    }
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="text-lg sm:text-xl lg:text-2xl text-white/75 font-medium"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={
                  visibleBullet >= slide2Lines.length - 1
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10"
              >
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all duration-200 hover:scale-105"
                >
                  {t('hero.cta1')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ SLIDE 3 — Product Runway ═════════════════════ */}
      <AnimatePresence>
        {slide === 2 && (
          <motion.div
            key="slide-runway"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Stage area */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
              {/* Vanishing side masks */}
              <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-56 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-56 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

              {/* Spotlight glow */}
              <div className="absolute inset-0 pointer-events-none z-0" style={{
                background: 'radial-gradient(ellipse 40% 55% at 50% 55%, rgba(255,255,255,0.06) 0%, transparent 100%)',
              }} />

              {/* Products — back to front ramp walk */}
              <div className="relative flex items-center justify-center" style={{ width: '100%', height: '80vh' }}>
                <AnimatePresence>
                  {RUNWAY_PRODUCTS.map((product, idx) => {
                    const offset = idx - runwayIdx
                    // Show: next one waiting in back (+1), current in focus (0), previous exiting (-1)
                    if (offset > 1 || offset < -1) return null

                    return (
                      <motion.div
                        key={product.label}
                        className="absolute flex flex-col items-center"
                        initial={{
                          // Start far back: tiny, high, blurry
                          opacity: 0,
                          scale: 0.25,
                          y: -120,
                          filter: 'blur(8px)',
                        }}
                        animate={{
                          // In focus: full size, centered
                          opacity: offset === 0 ? 1 : offset > 0 ? 0.15 : 0,
                          scale: offset === 0 ? 1 : offset > 0 ? 0.3 : 0.7,
                          y: offset === 0 ? 0 : offset > 0 ? -100 : 40,
                          x: offset === 0 ? 0 : offset < 0 ? (idx % 2 === 0 ? -350 : 350) : 0,
                          filter: offset === 0 ? 'blur(0px)' : 'blur(6px)',
                        }}
                        exit={{
                          // Exit to a side
                          opacity: 0,
                          scale: 0.7,
                          x: idx % 2 === 0 ? -350 : 350,
                          y: 40,
                          filter: 'blur(6px)',
                        }}
                        transition={{
                          duration: 1.0,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{ zIndex: offset === 0 ? 5 : 1 }}
                      >
                        <div className="relative w-[200px] h-[280px] sm:w-[260px] sm:h-[360px] lg:w-[320px] lg:h-[440px]">
                          <Image
                            src={product.src}
                            alt={product.label}
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                        {offset === 0 && (
                          <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-wide"
                          >
                            {product.label}
                          </motion.span>
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom fade ──────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* ── Slide indicators ─────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {[0, 1, 2].map(i => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${slide === i
              ? 'w-8 h-2 bg-white'
              : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
