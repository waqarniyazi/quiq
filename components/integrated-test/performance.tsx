'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Microscope, Activity, CheckSquare } from 'lucide-react'

// Using raw icons from certificates requested
const IvdIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="4" />
        <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">IVD</text>
    </svg>
)

const CeIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" />
        <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">CE</text>
    </svg>
)

function Counter({ value }: { value: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => v.toFixed(1))
    const ref = useRef<HTMLSpanElement>(null)
    const done = useRef(false)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && !done.current) {
                    done.current = true
                    animate(count, value, { duration: 2, ease: 'easeOut' })
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [count, value])

    return <motion.span ref={ref}>{rounded}</motion.span>
}

const stats = [
    { value: 99.9, label: 'Sensitivity', icon: Microscope },
    { value: 99.7, label: 'Specificity', icon: Activity },
    { value: 99.8, label: 'Accuracy', icon: CheckSquare },
]

export function Performance() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">Clinically Proven</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                        Clinical Performance
                    </h2>
                </motion.div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-4 border-y border-white/[0.05] py-16">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center flex-1 w-full"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.02] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-white/40" />
                                    </div>
                                </div>
                                <div className="text-6xl sm:text-7xl font-light text-white mb-2 tracking-tighter flex items-center justify-center">
                                    <Counter value={stat.value} />
                                    <span className="text-3xl sm:text-4xl text-white/20 ml-1">%</span>
                                </div>
                                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium pt-2 border-t border-white/[0.05] inline-block px-4">
                                    {stat.label}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-[10px] text-white/25 mt-12 max-w-lg mx-auto leading-relaxed"
                >
                    Results are based on clinical evaluations compared to leading commercial ELISA kits across 410 specimens.
                    Always seek guidance from a qualified health provider.
                </motion.p>
            </div>
        </section>
    )
}
