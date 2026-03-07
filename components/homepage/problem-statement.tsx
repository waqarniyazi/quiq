'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { AlertTriangle, Clock, Users, Stethoscope } from 'lucide-react'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.round(v) + suffix)
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

const data = [
    { icon: Users, stat: 70, suffix: '%', label: 'lack basic diagnostics' },
    { icon: Clock, stat: 65, suffix: '%', label: 'diagnosed too late' },
    { icon: Stethoscope, stat: 1, suffix: ':1500', label: 'doctor-patient ratio' },
    { icon: AlertTriangle, stat: 60, suffix: '%', label: 'out-of-pocket costs' },
]

export function ProblemStatement() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">The Problem</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                        Healthcare in India is Broken
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.map((d, i) => {
                        const Icon = d.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 text-center"
                            >
                                <Icon className="w-5 h-5 text-white/20 mx-auto mb-3 group-hover:text-white/50 transition-colors" />
                                <div className="text-3xl font-bold text-white/70 mb-1">
                                    <Counter value={d.stat} suffix={d.suffix} />
                                </div>
                                <p className="text-[11px] text-white/30">{d.label}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
