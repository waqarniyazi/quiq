'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Shield, Star, Droplets, Microscope, Wind } from 'lucide-react'

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

// Ferris wheel arc on desktop: image sweeps from bottom-left → top-left → bottom-left exit
// On mobile: simple vertical slide in/out
function getArcTransform(t: number, isMobile: boolean) {
    if (isMobile) {
        // Mobile: simple fade up/down, centered
        const opacity = Math.sin(t * Math.PI)
        const y = (1 - Math.sin(t * Math.PI)) * 40
        return { x: 0, y, scale: 0.85 + Math.sin(t * Math.PI) * 0.15, opacity: Math.max(0, Math.min(1, opacity)) }
    }

    // Desktop: arc sweeps on the left side of the screen
    const angle = t * Math.PI
    // Shift x so image stays on the left half; cos goes from 1→-1→1
    const x = -15 + Math.cos(angle) * 25 // range: ~-40 to ~10
    const y = 12 + -Math.sin(angle) * 28 // +12 bias pushes center down to align with info card
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
                        <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">Our Tests</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                            Test Range
                        </h2>
                    </motion.div>
                </div>

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden md:flex relative w-full max-w-6xl h-[70vh] items-center justify-center">
                    {/* Image stage — left half */}
                    <div className="relative w-1/2 h-full flex items-center justify-center">
                        {tests.map((test, i) => {
                            let t: number
                            if (i < activeIndex) t = 1
                            else if (i > activeIndex) t = 0
                            else t = localProgress

                            if (i === activeIndex - 1) t = 1

                            const { x, y, scale, opacity } = getArcTransform(t, false)

                            return (
                                <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        transform: `translate(${x}%, ${y}%) scale(${scale})`,
                                        opacity,
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

                    {/* Info panel — right half */}
                    <div className="relative w-1/2 h-full flex items-center justify-start pl-8 lg:pl-16">
                        {(() => {
                            const test = tests[activeIndex]
                            const Icon = test.icon
                            const show = localProgress > 0.15 && localProgress < 0.85
                            return (
                                <div
                                    className="max-w-sm transition-all duration-500"
                                    style={{
                                        opacity: show ? 1 : 0,
                                        transform: `translateX(${show ? 0 : 30}px)`,
                                    }}
                                >
                                    <div className="p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-white/40" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{test.name}</h3>
                                                <p className="text-[11px] text-white/30">{test.description}</p>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <span className="text-2xl font-bold text-white">{test.price}</span>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1.5 mb-4">
                                            <div className="flex gap-0.5">
                                                {Array.from({ length: 5 }).map((_, j) => (
                                                    <Star key={j} className={`w-3 h-3 ${j < Math.floor(test.rating) ? 'fill-white/50 text-white/50' : 'text-white/15'}`} />
                                                ))}
                                            </div>
                                            <span className="text-[10px] text-white/30">{test.rating}</span>
                                        </div>

                                        {/* Feature pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {test.features.map((f, j) => (
                                                <span key={j} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-white/40">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/products/${test.slug}`}
                                            className="inline-flex px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.1] transition-all"
                                        >
                                            View Test →
                                        </Link>
                                    </div>
                                </div>
                            )
                        })()}
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="flex md:hidden flex-col items-center justify-center w-full h-full px-6 pt-24 pb-20">
                    {/* Image — top area */}
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
                                            sizes="(max-width: 640px) 208px, 240px"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Info card — bottom area */}
                    {(() => {
                        const test = tests[activeIndex]
                        const Icon = test.icon
                        const show = localProgress > 0.15 && localProgress < 0.85
                        return (
                            <div
                                className="w-full transition-all duration-500"
                                style={{
                                    opacity: show ? 1 : 0,
                                    transform: `translateY(${show ? 0 : 20}px)`,
                                }}
                            >
                                <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-white/40" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-white">{test.name}</h3>
                                                <p className="text-[10px] text-white/30">{test.description}</p>
                                            </div>
                                        </div>
                                        <span className="text-lg font-bold text-white">{test.price}</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {/* Rating */}
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, j) => (
                                                        <Star key={j} className={`w-2.5 h-2.5 ${j < Math.floor(test.rating) ? 'fill-white/50 text-white/50' : 'text-white/15'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-[9px] text-white/30">{test.rating}</span>
                                            </div>
                                            {/* Feature pills */}
                                            <div className="flex gap-1">
                                                {test.features.slice(0, 2).map((f, j) => (
                                                    <span key={j} className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[9px] text-white/30">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={`/products/${test.slug}`}
                                            className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-medium text-white/60 hover:text-white transition-all"
                                        >
                                            View →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })()}
                </div>

                {/* Progress dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
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

                {/* View All Tests button — visible near the end */}
                <div
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 transition-all duration-500"
                    style={{
                        opacity: progress > 0.88 ? 1 : 0,
                        transform: `translateX(-50%) translateY(${progress > 0.88 ? 0 : 20}px)`,
                    }}
                >
                    <Link
                        href="/products"
                        className="inline-flex px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105"
                    >
                        View All Tests
                    </Link>
                </div>

                {/* Gradient fades */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
