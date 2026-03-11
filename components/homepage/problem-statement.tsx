'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, IndianRupee } from 'lucide-react'

const metrics = [
    {
        icon: Clock,
        label: 'Speed',
        problem: 'It takes 2–3 days just to test and diagnose Malaria in Tier 2 cities.',
    },
    {
        icon: MapPin,
        label: 'Accessibility',
        problem: 'In parts of India, people have to travel 2 hours just to get a simple test done.',
    },
    {
        icon: IndianRupee,
        label: 'Affordability',
        problem: 'Simple lab tests cost over ₹500 — making routine screening a luxury for most.',
    },
]

export function ProblemStatement() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">The Problem</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                        Diagnostics in India is Broken
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {metrics.map((m, i) => {
                        const Icon = m.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                className="group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" />
                                    </div>
                                    {/* Crossed-out label */}
                                    <div className="relative">
                                        <span className="text-lg font-semibold text-white/50">{m.label}</span>
                                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-500/70 -translate-y-1/2" />
                                    </div>
                                </div>

                                <p className="text-sm text-white/40 leading-relaxed">
                                    {m.problem}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
