'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'

export function Hero() {
  const { t } = useLanguage()
  const lines = t('hero.title').split('\n').map((l: string) => l.trim()).filter(Boolean)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  // Slide 1: advance after 2s
  useEffect(() => {
    if (slide !== 0 || paused) return
    const id = setTimeout(() => setSlide(1), 2000)
    return () => clearTimeout(id)
  }, [slide, paused])

  // Slide 2: play only the visible video, advance 1s after it ends
  useEffect(() => {
    const desktop = videoRef.current
    const mobile = mobileVideoRef.current
    if (!desktop || !mobile) return

    if (slide === 1) {
      const isMobile = window.matchMedia('(max-width: 639px)').matches
      const active = isMobile ? mobile : desktop
      const inactive = isMobile ? desktop : mobile

      inactive.pause()
      active.currentTime = 0
      active.play().catch(() => { })

      const onEnded = () => {
        setTimeout(() => setSlide(0), 1000)
      }
      active.addEventListener('ended', onEnded)
      return () => active.removeEventListener('ended', onEnded)
    } else {
      desktop.pause()
      mobile.pause()
    }
  }, [slide])

  const goTo = (i: number) => setSlide(i)

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide 1: Text hero ───────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {slide === 0 && (
          <motion.div
            key="slide-0"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero.webp"
                alt="Hero Background"
                fill
                priority
                className="object-cover opacity-15"
              />
            </div>

            {/* Ambient orbs */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', top: '-10%', left: '-10%' }}
                animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)', bottom: '-5%', right: '-5%' }}
                animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 text-center pt-20">
              <div className="max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-4xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1] text-white/95 drop-shadow-lg mb-2"
                >
                  <div className="text-white/95">
                    {lines.map((line, idx) => (
                      <span key={idx} className={`block ${idx > 0 ? 'mt-4 sm:mt-6' : ''}`}>
                        {line}
                      </span>
                    ))}
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-2xl drop-shadow-md mb-6 sm:mb-8 leading-relaxed font-medium"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1"
                >
                  <Link
                    href="/products"
                    className="px-6 py-3 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all duration-200 hover:scale-105"
                  >
                    {t('hero.cta1')}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Slide 2: Video ───────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {slide === 1 && (
          <motion.div
            key="slide-1"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            {/* Desktop video (landscape) */}
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              className="absolute inset-0 w-full h-full object-cover hidden sm:block"
              muted
              playsInline
            />
            {/* Mobile video (portrait) */}
            <video
              ref={mobileVideoRef}
              src="/hero-mobile-vid.mp4"
              className="absolute inset-0 w-full h-full object-cover block sm:hidden"
              muted
              playsInline
            />
            {/* Subtle dark vignette so the video doesn't clash with UI chrome */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom fade (always on top) ───────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* ── Slide indicators ─────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {[0, 1].map(i => (
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
