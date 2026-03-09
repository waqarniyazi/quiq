'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
    Hand,
    Droplets,
    Timer,
    Eye,
} from 'lucide-react'

const steps = [
    {
        icon: Hand,
        number: '01',
        title: 'Prick',
        description: 'Clean fingertip. Press safety lancet.',
        gradient: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(236,72,153,0.2))',
        border: 'rgba(244,63,94,0.3)',
        iconColor: '#fb7185',
    },
    {
        icon: Droplets,
        number: '02',
        title: 'Apply',
        description: 'Touch absorbent tip to blood. Window turns red.',
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.2))',
        border: 'rgba(245,158,11,0.3)',
        iconColor: '#fbbf24',
    },
    {
        icon: Timer,
        number: '03',
        title: 'Wait',
        description: 'Close cap. Place flat. 10 minutes.',
        gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
        border: 'rgba(59,130,246,0.3)',
        iconColor: '#60a5fa',
    },
    {
        icon: Eye,
        number: '04',
        title: 'Read',
        description: 'One line = negative. Two lines = positive.',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,197,94,0.2))',
        border: 'rgba(16,185,129,0.3)',
        iconColor: '#34d399',
    },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: '-30% 0px -30% 0px' })
    const [isMobile, setIsMobile] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const Icon = step.icon

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col items-center text-center"
        >
            {/* Connector line */}
            {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[2.75rem] left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-white/[0.06] to-white/[0.02]" />
            )}

            {/* Icon container */}
            <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 border"
                style={{
                    background: active ? step.gradient : 'rgba(255,255,255,0.02)',
                    borderColor: active ? step.border : 'rgba(255,255,255,0.06)',
                }}
            >
                <Icon
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: active ? step.iconColor : 'rgba(255,255,255,0.3)' }}
                />
            </div>

            {/* Step number */}
            <span className="text-[10px] text-white/20 font-mono mb-2">{step.number}</span>

            {/* Title */}
            <h3
                className="text-lg font-semibold mb-1 transition-colors duration-300"
                style={{ color: active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)' }}
            >
                {step.title}
            </h3>

            {/* Description */}
            <p
                className="text-xs max-w-[160px] transition-colors duration-300"
                style={{ color: active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}
            >
                {step.description}
            </p>
        </motion.div>
    )
}

export function HowItWorks() {
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
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Simple Process</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
                        Four Steps. That&apos;s It.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
