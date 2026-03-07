'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Sun,
    Zap,
    Activity,
    Shield,
    Heart,
    Droplets,
} from 'lucide-react'

const categories = [
    {
        name: 'Vitamins',
        icon: Sun,
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.2))',
        border: 'rgba(245,158,11,0.4)',
        iconColor: '#fbbf24',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        name: 'Hormones',
        icon: Zap,
        gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(168,85,247,0.2))',
        border: 'rgba(139,92,246,0.4)',
        iconColor: '#a78bfa',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        name: 'Metabolic',
        icon: Activity,
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,197,94,0.2))',
        border: 'rgba(16,185,129,0.4)',
        iconColor: '#34d399',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        name: 'Immunity',
        icon: Shield,
        gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
        border: 'rgba(59,130,246,0.4)',
        iconColor: '#60a5fa',
        href: '/products?category=Infectious+Diseases',
    },
    {
        name: 'Heart Health',
        icon: Heart,
        gradient: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(236,72,153,0.2))',
        border: 'rgba(244,63,94,0.4)',
        iconColor: '#fb7185',
        href: '/products?category=Critical+%26+Emergency',
    },
    {
        name: 'Blood Work',
        icon: Droplets,
        gradient: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(249,115,22,0.2))',
        border: 'rgba(239,68,68,0.4)',
        iconColor: '#f87171',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
]

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: '-30% 0px -30% 0px' })
    const [isMobile, setIsMobile] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const Icon = cat.icon

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const active = isMobile ? isInView : isHovered

    return (
        <motion.div
            ref={ref}
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
        >
            <Link
                href={cat.href}
                className="relative block p-6 sm:p-8 rounded-2xl border transition-all duration-500 overflow-hidden"
                style={{
                    background: active ? cat.gradient : 'rgba(255,255,255,0.02)',
                    borderColor: active ? cat.border : 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative z-10">
                    <Icon
                        className="w-8 h-8 mb-4 transition-colors duration-500"
                        style={{ color: active ? cat.iconColor : 'rgba(255,255,255,0.3)' }}
                    />
                    <h3
                        className="text-base sm:text-lg font-semibold transition-colors duration-300"
                        style={{ color: active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)' }}
                    >
                        {cat.name}
                    </h3>
                    <span
                        className="text-xs mt-1 block transition-colors duration-300"
                        style={{ color: active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}
                    >
                        View tests →
                    </span>
                </div>
            </Link>
        </motion.div>
    )
}

export function Markers() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Categories</p>
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
                        What We Test
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {categories.map((cat, index) => (
                        <CategoryCard key={cat.name} cat={cat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
