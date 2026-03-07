'use client'

import { motion } from 'framer-motion'
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
        color: 'from-amber-500/20 to-orange-500/20',
        borderColor: 'group-hover:border-amber-500/40',
        iconColor: 'group-hover:text-amber-400',
        href: '/products?category=Vitamins',
    },
    {
        name: 'Hormones',
        icon: Zap,
        color: 'from-violet-500/20 to-purple-500/20',
        borderColor: 'group-hover:border-violet-500/40',
        iconColor: 'group-hover:text-violet-400',
        href: '/products?category=Hormones',
    },
    {
        name: 'Metabolic',
        icon: Activity,
        color: 'from-emerald-500/20 to-green-500/20',
        borderColor: 'group-hover:border-emerald-500/40',
        iconColor: 'group-hover:text-emerald-400',
        href: '/products?category=Metabolic',
    },
    {
        name: 'Immunity',
        icon: Shield,
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'group-hover:border-blue-500/40',
        iconColor: 'group-hover:text-blue-400',
        href: '/products?category=Immunity',
    },
    {
        name: 'Heart Health',
        icon: Heart,
        color: 'from-rose-500/20 to-pink-500/20',
        borderColor: 'group-hover:border-rose-500/40',
        iconColor: 'group-hover:text-rose-400',
        href: '/products?category=Heart',
    },
    {
        name: 'Blood Work',
        icon: Droplets,
        color: 'from-red-500/20 to-orange-500/20',
        borderColor: 'group-hover:border-red-500/40',
        iconColor: 'group-hover:text-red-400',
        href: '/products?category=Blood',
    },
]

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
                    {categories.map((cat, index) => {
                        const Icon = cat.icon
                        return (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={cat.href}
                                    className={`group relative block p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-gradient-to-br ${cat.color} ${cat.borderColor} transition-all duration-500 overflow-hidden`}
                                >
                                    <div className="relative z-10">
                                        <Icon className={`w-8 h-8 text-white/30 ${cat.iconColor} transition-colors duration-500 mb-4`} />
                                        <h3 className="text-base sm:text-lg font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                            {cat.name}
                                        </h3>
                                        <span className="text-xs text-white/20 group-hover:text-white/50 transition-colors duration-300 mt-1 block">
                                            View tests →
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
