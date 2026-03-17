'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'

export function Hero() {
  const { t } = useLanguage()
  const [diseaseIndex, setDiseaseIndex] = useState(0);

  const lines = t('hero.title').split('\n').map((l: string) => l.trim()).filter(Boolean);

  const diseasesStr = t('hero.diseasesStr');
  const diseases = (diseasesStr && diseasesStr !== 'hero.diseasesStr') ? diseasesStr.split(',').map((s: string) => s.trim()) : ['Cancer', 'Diabetes', 'Anemia'];
  const pfx = t('hero.titleLine1Prefix');
  const prefix = (pfx && pfx !== 'hero.titleLine1Prefix') ? pfx : 'Imagine Testing for ';
  const sfx = t('hero.titleLine1Suffix');
  const suffix = (sfx && sfx !== 'hero.titleLine1Suffix') ? sfx : '';

  useEffect(() => {
    const interval = setInterval(() => {
      setDiseaseIndex((prev) => (prev >= diseases.length - 1 ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [diseases.length]);

  const getDiseaseGradient = (i: number) => {
    if (i === 0) return 'bg-gradient-to-r from-orange-500 via-rose-600 to-purple-700 bg-clip-text text-transparent drop-shadow-md';
    if (i === 1) return 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-md';
    if (i === 2) return 'bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-md';
    return 'bg-gradient-to-r from-orange-500 via-rose-600 to-purple-700 bg-clip-text text-transparent drop-shadow-md';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
            bottom: '-5%',
            right: '-5%',
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-white/95 drop-shadow-lg mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-3 mb-2 sm:mb-4">
              <span>{prefix}</span>
              <div className="relative inline-block h-[40px] sm:h-[60px] lg:h-[80px] w-[140px] sm:w-[220px] lg:w-[280px] text-left">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={diseaseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`absolute inset-x-0 font-extrabold ${getDiseaseGradient(diseaseIndex)}`}
                  >
                    {diseases[diseaseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              {suffix && <span>{suffix}</span>}
            </div>

            <div className="mt-4 sm:mt-6 text-white/95">
              {lines.slice(1).map((line, idx) => (
                <span key={idx} className={`block ${idx > 0 ? 'mt-2 sm:mt-3' : ''}`}>
                  {line}
                </span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-2xl drop-shadow-md mb-12 sm:mb-16 leading-relaxed font-medium"
          >

          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1"
          >
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all duration-200 hover:scale-105"
            >
              {t('hero.cta1')}
            </Link>
            <Link
              href="/quiq-ai"
              className="px-8 py-3.5 rounded-full border-2 border-white/20 text-white/90 font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              {t('hero.cta2')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
