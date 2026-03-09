'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Target, Droplets, Thermometer, Package } from 'lucide-react'

const specs = [
    {
        icon: Clock,
        value: '10',
        unit: 'min',
        label: 'Results',
        gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))',
        border: 'rgba(59,130,246,0.2)',
        iconColor: '#60a5fa',
    },
    {
        icon: Target,
        value: '99.8',
        unit: '%',
        label: 'Accuracy',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,197,94,0.15))',
        border: 'rgba(16,185,129,0.2)',
        iconColor: '#34d399',
    },
    {
        icon: Shield,
        value: 'CE',
        unit: '& IVD',
        label: 'Certified',
        gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.15))',
        border: 'rgba(139,92,246,0.2)',
        iconColor: '#a78bfa',
    },
    {
        icon: Droplets,
        value: '1',
        unit: 'drop',
        label: 'Finger Prick',
        gradient: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(236,72,153,0.15))',
        border: 'rgba(244,63,94,0.2)',
        iconColor: '#fb7185',
    },
    {
        icon: Thermometer,
        value: '2–30',
        unit: '°C',
        label: 'Storage',
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.15))',
        border: 'rgba(245,158,11,0.2)',
        iconColor: '#fbbf24',
    },
    {
        icon: Package,
        value: 'All',
        unit: 'in one',
        label: 'Complete Kit',
        gradient: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(6,182,212,0.15))',
        border: 'rgba(20,184,166,0.2)',
        iconColor: '#2dd4bf',
    },
]

export function KeySpecs() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">At a Glance</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                        Precision. Simplified.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {specs.map((spec, i) => {
                        const Icon = spec.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group p-6 sm:p-8 rounded-2xl border transition-all duration-500 text-center cursor-default"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    borderColor: 'rgba(255,255,255,0.06)',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget
                                    el.style.background = spec.gradient
                                    el.style.borderColor = spec.border
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget
                                    el.style.background = 'rgba(255,255,255,0.02)'
                                    el.style.borderColor = 'rgba(255,255,255,0.06)'
                                }}
                            >
                                <Icon
                                    className="w-6 h-6 mx-auto mb-4 transition-colors duration-300"
                                    style={{ color: spec.iconColor }}
                                />
                                <div className="flex items-baseline justify-center gap-1 mb-1">
                                    <span className="text-2xl sm:text-3xl font-bold text-white/80">{spec.value}</span>
                                    <span className="text-sm text-white/40">{spec.unit}</span>
                                </div>
                                <p className="text-[11px] text-white/30 uppercase tracking-wider">{spec.label}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
