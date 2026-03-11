'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context'
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
        nameKey: 'markers.vitamins',
        icon: Sun,
        gradient: 'linear-gradient(135deg, rgba(255,213,153,0.10), rgba(255,183,120,0.10))',
        border: 'rgba(255,213,153,0.25)',
        iconColor: '#fdd89b',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        nameKey: 'markers.hormones',
        icon: Zap,
        gradient: 'linear-gradient(135deg, rgba(196,181,253,0.10), rgba(216,180,254,0.10))',
        border: 'rgba(196,181,253,0.25)',
        iconColor: '#c4b5fd',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        nameKey: 'markers.metabolic',
        icon: Activity,
        gradient: 'linear-gradient(135deg, rgba(167,223,186,0.10), rgba(134,211,159,0.10))',
        border: 'rgba(167,223,186,0.25)',
        iconColor: '#a7dfba',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
    {
        nameKey: 'markers.immunity',
        icon: Shield,
        gradient: 'linear-gradient(135deg, rgba(165,200,254,0.10), rgba(147,217,230,0.10))',
        border: 'rgba(165,200,254,0.25)',
        iconColor: '#a5c8fe',
        href: '/products?category=Infectious+Diseases',
    },
    {
        nameKey: 'markers.heartHealth',
        icon: Heart,
        gradient: 'linear-gradient(135deg, rgba(253,164,175,0.10), rgba(249,168,212,0.10))',
        border: 'rgba(253,164,175,0.25)',
        iconColor: '#fda4af',
        href: '/products?category=Critical+%26+Emergency',
    },
    {
        nameKey: 'markers.bloodWork',
        icon: Droplets,
        gradient: 'linear-gradient(135deg, rgba(252,165,165,0.10), rgba(255,183,120,0.10))',
        border: 'rgba(252,165,165,0.25)',
        iconColor: '#fca5a5',
        href: '/products?category=Wellness+%26+Lifestyle',
    },
]

function CategoryCard({ cat, index, name }: { cat: typeof categories[0]; index: number; name: string }) {
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
            key={name}
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
                        {name}
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
    const { t } = useLanguage()

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
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">{t('markers.subtitle')}</p>
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
                        {t('markers.title')}
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {categories.map((cat, index) => (
                        <CategoryCard key={t(cat.nameKey)} cat={cat} index={index} name={t(cat.nameKey)} />
                    ))}
                </div>
            </div>
        </section>
    )
}
