'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Shield, Award, Globe } from 'lucide-react'

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => {
        const num = Number(v.toFixed(1))
        const display = num % 1 === 0 ? Math.round(num) : num.toFixed(1)
        return prefix + display + suffix
    })
    const ref = useRef<HTMLSpanElement>(null)
    const done = useRef(false)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && !done.current) {
                    done.current = true
                    animate(count, value, { duration: 2.5, ease: 'easeOut' })
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
    {
        value: 99.9,
        suffix: '%',
        label: 'Sensitivity',
        sub: 'HIV-1 & HIV-2 detection',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,197,94,0.15))',
        border: 'rgba(16,185,129,0.2)',
    },
    {
        value: 99.7,
        suffix: '%',
        label: 'Specificity',
        sub: 'True negative rate',
        gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))',
        border: 'rgba(59,130,246,0.2)',
    },
    {
        value: 99.8,
        suffix: '%',
        label: 'Accuracy',
        sub: 'Compared to ELISA',
        gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.15))',
        border: 'rgba(139,92,246,0.2)',
    },
]

const certifications = [
    { icon: Shield, title: 'CE Marked', sub: 'European Conformity' },
    { icon: Award, title: 'IVD Certified', sub: 'In Vitro Diagnostic' },
    { icon: Globe, title: 'WHO Standards', sub: 'Global compliance' },
]

export function Performance() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Clinical Performance</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                        Numbers Don&apos;t Lie
                    </h2>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl border text-center transition-all duration-500"
                            style={{
                                background: stat.gradient,
                                borderColor: stat.border,
                            }}
                        >
                            <div className="text-4xl sm:text-5xl font-bold text-white/90 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} prefix=">" />
                            </div>
                            <p className="text-sm font-semibold text-white/60 mb-1">{stat.label}</p>
                            <p className="text-[11px] text-white/30">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {certifications.map((cert, i) => {
                        const Icon = cert.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 w-full sm:w-auto sm:min-w-[200px]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300 flex-shrink-0">
                                    <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                        {cert.title}
                                    </p>
                                    <p className="text-[11px] text-white/30">{cert.sub}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-[10px] text-white/15 mt-12 max-w-xl mx-auto"
                >
                    This test provides preliminary results only. Always seek guidance from a qualified healthcare provider.
                    Results validated against commercial ELISA with 410 clinical specimens.
                </motion.p>
            </div>
        </section>
    )
}
