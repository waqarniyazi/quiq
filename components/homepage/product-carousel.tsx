'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Shield, Star, Droplets, Microscope, Wind } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const tests = [
    {
        name: 'Vitamin D',
        slug: 'vitamin-d',
        image: '/product home/vitamin-d.webp',
        price: '₹99',
        rating: 4.8,
        features: ['10 min', 'CE & IVD', 'Finger-prick'],
        description: 'Bone health & immunity',
        icon: Clock,
    },
    {
        name: 'Vitamin B12',
        slug: 'vitamin-b12',
        image: '/product home/vitamin-b12.webp',
        price: '₹89',
        rating: 4.7,
        features: ['10 min', 'CE & IVD', 'B12 detection'],
        description: 'Nerve health & energy',
        icon: Shield,
    },
    {
        name: 'Ferritin',
        slug: 'iron-deficiency',
        image: '/product home/ferritin.webp',
        price: '₹89',
        rating: 4.7,
        features: ['10 min', 'CE & IVD', 'Iron levels'],
        description: 'Iron deficiency screening',
        icon: Droplets,
    },
    {
        name: 'TSH Thyroid',
        slug: 'tsh',
        image: '/product home/tsh.webp',
        price: '₹79',
        rating: 4.9,
        features: ['10 min', 'CE & IVD', 'Clinically accurate'],
        description: 'Thyroid function check',
        icon: Star,
    },
    {
        name: 'CRP Inflammation',
        slug: 'crp',
        image: '/product home/crp.webp',
        price: '₹89',
        rating: 4.6,
        features: ['10 min', 'CE & IVD', 'CRP marker'],
        description: 'Body inflammation levels',
        icon: Microscope,
    },
    {
        name: 'Dust Allergy',
        slug: 'dust-allergy',
        image: '/product home/dust-allergy.webp',
        price: '₹79',
        rating: 4.6,
        features: ['10 min', 'CE & IVD', 'IgE detection'],
        description: 'Dust mite allergy test',
        icon: Wind,
    },
]

// Ferris wheel 1/4 arc: bottom-left → top-center → bottom-right
// t goes from 0 (entering from bottom-left) to 1 (exiting bottom-right)
// Peak at t=0.5 (top center)
function getArcTransform(t: number, isMobile: boolean) {
    if (isMobile) {
        const opacity = Math.sin(t * Math.PI)
        const y = (1 - Math.sin(t * Math.PI)) * 40
        return { x: 0, y, scale: 0.85 + Math.sin(t * Math.PI) * 0.15, opacity: Math.max(0, Math.min(1, opacity)) }
    }

    // Desktop: arc sweeps on the left side
    const angle = t * Math.PI
    const x = -15 + Math.cos(angle) * 25
    const y = 12 + -Math.sin(angle) * 28
    const scale = 0.65 + Math.sin(angle) * 0.35
    const opacity = Math.sin(angle)
    return { x, y, scale, opacity: Math.max(0, Math.min(1, opacity)) }
}

export function ProductCarousel() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const rafRef = useRef<number>(0)
    const { t } = useLanguage()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current
                if (!container) return
                const rect = container.getBoundingClientRect()
                const scrollHeight = container.offsetHeight - window.innerHeight
                const scrolled = -rect.top
                const prog = Math.max(0, Math.min(1, scrolled / scrollHeight))
                setProgress(prog)

                const totalTests = tests.length
                const rawIndex = prog * totalTests
                const idx = Math.min(totalTests - 1, Math.floor(rawIndex))
                setActiveIndex(idx)
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    const totalTests = tests.length
    const rawIndex = progress * totalTests
    const localProgress = rawIndex - Math.floor(rawIndex)


    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${(totalTests + 1) * 100}vh` }}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Section header */}
                <div className="absolute top-12 sm:top-16 left-0 right-0 z-20 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">{t('testRange.subtitle')}</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                            {t('testRange.title')}
                        </h2>
                    </motion.div>
                </div>

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden md:flex relative w-full max-w-7xl h-[70vh] items-center justify-center">
                    {/* Image stage — left half, all images on the arc */}
                    <div className="relative w-[50%] h-full flex items-center justify-center">
                        {tests.map((test, i) => {
                            // Compute arc position t for each test
                            let t: number
                            if (i < activeIndex - 1) t = 1      // long gone
                            else if (i === activeIndex - 1) {
                                // Previous: sits at exit position, faded
                                t = 0.92 + localProgress * 0.08
                            } else if (i === activeIndex) {
                                // Current: sweeps through the arc
                                t = 0.15 + localProgress * 0.7   // 0.15 → 0.85
                            } else if (i === activeIndex + 1) {
                                // Next: sits at entry position, faded
                                t = 0.02 + localProgress * 0.13
                            } else {
                                t = 0                              // not yet visible
                            }

                            const { x, y, scale, opacity: arcOpacity } = getArcTransform(t, false)

                            // Override opacity: prev/next are faded, current is full
                            let finalOpacity = 0
                            if (i === activeIndex) {
                                finalOpacity = arcOpacity
                            } else if (i === activeIndex - 1) {
                                finalOpacity = Math.max(0, 0.15 - localProgress * 0.15) // fades out
                            } else if (i === activeIndex + 1) {
                                finalOpacity = 0.15 // faded hint
                            }

                            return (
                                <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        transform: `translate(${x}%, ${y}%) scale(${scale})`,
                                        opacity: finalOpacity,
                                        zIndex: i === activeIndex ? 10 : 1,
                                        willChange: 'transform, opacity',
                                    }}
                                >
                                    <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                                        <Image
                                            src={test.image}
                                            alt={test.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            sizes="(max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Info panel — right side, well clear of arc */}
                    <div className="relative w-[38%] h-full flex items-center ml-[8%]">
                        {tests.map((test, i) => {
                            const Icon = test.icon
                            const isCurrent = i === activeIndex

                            return (
                                <div
                                    key={i}
                                    className="absolute inset-0 flex items-center transition-all duration-500 ease-out"
                                    style={{
                                        opacity: isCurrent ? 1 : 0,
                                        transform: isCurrent
                                            ? 'translateX(0)'
                                            : i < activeIndex
                                                ? 'translateX(-30px)'
                                                : 'translateX(30px)',
                                        pointerEvents: isCurrent ? 'auto' : 'none',
                                    }}
                                >
                                    <div className="w-full max-w-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-white/40" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{test.name}</h3>
                                                <p className="text-xs text-white/30">{test.description}</p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/[0.06] my-5" />

                                        <div className="mb-5">
                                            <span className="text-3xl font-bold text-white">{test.price}</span>
                                            <span className="text-sm text-white/30 ml-2">{t('testRange.perTest')}</span>
                                        </div>

                                        <div className="flex items-center gap-2 mb-5">
                                            <div className="flex gap-0.5">
                                                {Array.from({ length: 5 }).map((_, j) => (
                                                    <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(test.rating) ? 'fill-white/50 text-white/50' : 'text-white/15'}`} />
                                                ))}
                                            </div>
                                            <span className="text-xs text-white/40">{test.rating}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {test.features.map((f, j) => (
                                                <span key={j} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/40">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/products/${test.slug}`}
                                            className="inline-flex px-6 py-3 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.12] transition-all duration-200"
                                        >
                                            {t('testRange.viewTest')}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="flex md:hidden flex-col items-center justify-center w-full h-full px-6 pt-24 pb-20">
                    <div className="relative w-full flex-1 flex items-center justify-center">
                        {tests.map((test, i) => {
                            let t: number
                            if (i < activeIndex) t = 1
                            else if (i > activeIndex) t = 0
                            else t = localProgress
                            if (i === activeIndex - 1) t = 1

                            const { y, scale, opacity } = getArcTransform(t, true)

                            return (
                                <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        transform: `translateY(${y}px) scale(${scale})`,
                                        opacity,
                                        zIndex: i === activeIndex ? 10 : 1,
                                        willChange: 'transform, opacity',
                                    }}
                                >
                                    <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                                        <Image
                                            src={test.image}
                                            alt={test.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            sizes="(max-width: 640px) 256px, 288px"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl mb-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
                                            {(() => {
                                                const Icon = tests[activeIndex].icon
                                                return <Icon className="w-4 h-4 text-white/40" />
                                            })()}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">{tests[activeIndex].name}</h3>
                                            <p className="text-[10px] text-white/30">{tests[activeIndex].description}</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-white">{tests[activeIndex].price}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <div className="flex gap-0.5">
                                                {Array.from({ length: 5 }).map((_, j) => (
                                                    <Star key={j} className={`w-2.5 h-2.5 ${j < Math.floor(tests[activeIndex].rating) ? 'fill-white/50 text-white/50' : 'text-white/15'}`} />
                                                ))}
                                            </div>
                                            <span className="text-[9px] text-white/30">{tests[activeIndex].rating}</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {tests[activeIndex].features.slice(0, 2).map((f, j) => (
                                                <span key={j} className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[9px] text-white/30">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/products/${tests[activeIndex].slug}`}
                                        className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-medium text-white/60 hover:text-white transition-all"
                                    >
                                        View →
                                    </Link>
                                </div>
                            </div>

                            {/* View All Tests button placed under card for mobile */}
                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/products"
                                    className="inline-flex px-5 py-2 rounded-full text-white font-medium text-sm transition-all duration-200 hover:scale-105"
                                >
                                    {t('testRange.viewAll')}
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress dots - centered at bottom */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {tests.map((_, i) => (
                        <div
                            key={i}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                                width: i === activeIndex ? 24 : 6,
                                background: i === activeIndex ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.1)',
                            }}
                        />
                    ))}
                </div>

                {/* Gradient fades */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
