'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, IndianRupee, Zap, Home, Coins, X, Check, EyeOff, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const cardDefs = [

    {
        icon: IndianRupee,
        labelKey: 'problemSolution.affordability',
        problemKey: 'problemSolution.affordProblem',
        solutionIcon: Coins,
        solutionKey: 'problemSolution.affordSolution',
    },
    {
        icon: MapPin,
        labelKey: 'problemSolution.accessibility',
        problemKey: 'problemSolution.accessProblem',
        solutionIcon: Home,
        solutionKey: 'problemSolution.accessSolution',
    },

    {
        icon: Clock,
        labelKey: 'problemSolution.speed',
        problemKey: 'problemSolution.speedProblem',
        solutionIcon: Zap,
        solutionKey: 'problemSolution.speedSolution',
    },
    {
        icon: EyeOff,
        labelKey: 'problemSolution.privacy',
        problemKey: 'problemSolution.privacyProblem',
        solutionIcon: ShieldCheck,
        solutionKey: 'problemSolution.privacySolution',
    },
]

export function ProblemSolution() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isFlipped, setIsFlipped] = useState(false)
    const [titleProgress, setTitleProgress] = useState(0)
    const rafRef = useRef<number>(0)
    const { t } = useLanguage()

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

                setTitleProgress(prog)
                setIsFlipped(prog > 0.45)
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: '300vh' }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Title — crossfades between Problem and Solution */}
                <div className="text-center mb-6 sm:mb-16 relative h-20 sm:h-32 w-full">
                    {/* Problem title */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
                        style={{
                            opacity: isFlipped ? 0 : 1,
                            transform: isFlipped ? 'translateY(-20px)' : 'translateY(0)',
                        }}
                    >
                        <p className="text-[10px] sm:text-xs text-white/30 tracking-[0.3em] uppercase mb-2 sm:mb-4">{t('problemSolution.problemSubtitle')}</p>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text">
                            {t('problemSolution.problemTitle')}
                        </h2>
                    </div>

                    {/* Solution title */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
                        style={{
                            opacity: isFlipped ? 1 : 0,
                            transform: isFlipped ? 'translateY(0)' : 'translateY(20px)',
                        }}
                    >
                        <p className="text-[10px] sm:text-xs text-white/30 tracking-[0.3em] uppercase mb-2 sm:mb-4">{t('problemSolution.solutionSubtitle')}</p>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text">
                            {t('problemSolution.solutionTitle')}
                        </h2>
                    </div>
                </div>

                {/* Flippable cards */}
                <div className="max-w-6xl w-full grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 md:gap-6">
                    {cardDefs.map((card, i) => {
                        const ProbIcon = card.icon
                        const SolIcon = card.solutionIcon
                        const label = t(card.labelKey)
                        const problemText = t(card.problemKey)
                        const solutionText = t(card.solutionKey)
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative h-[150px] sm:h-[220px]"
                                style={{ perspective: '1000px' }}
                            >
                                <div
                                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    }}
                                >
                                    {/* FRONT — Problem card */}
                                    <div
                                        className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-8 flex flex-col"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-5">
                                            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/[0.04] flex items-center justify-center shrink-0">
                                                <ProbIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white/30" />
                                            </div>
                                            <span className="text-xs sm:text-lg font-semibold text-white/50 truncate flex-1">{label}</span>
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                                                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500/70" />
                                            </div>
                                        </div>

                                        <p className="text-[11px] sm:text-sm text-white/40 leading-snug sm:leading-relaxed flex-1 overflow-hidden">
                                            {problemText}
                                        </p>
                                    </div>

                                    {/* BACK — Solution card */}
                                    <div
                                        className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/[0.12] bg-white/[0.04] p-4 sm:p-8 flex flex-col"
                                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-5">
                                            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                                                <SolIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                                            </div>
                                            <span className="text-xs sm:text-lg font-semibold text-white/80 truncate flex-1">{label}</span>
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500/70" />
                                            </div>
                                        </div>

                                        <p className="text-[11px] sm:text-sm text-white/50 leading-snug sm:leading-relaxed flex-1 overflow-hidden">
                                            {solutionText}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quote — appears on solution side */}
                <div
                    className="max-w-4xl w-full mt-4 sm:mt-12 transition-all duration-700"
                    style={{
                        opacity: isFlipped ? 1 : 0,
                        transform: isFlipped ? 'translateY(0)' : 'translateY(20px)',
                    }}
                >
                    <div className="relative py-4 px-6 sm:p-12 rounded-xl sm:rounded-2xl border border-white/[0.06]">
                        <span className="text-3xl sm:text-5xl text-white/10 absolute top-1 left-2 sm:top-2 sm:left-6 font-serif">&ldquo;</span>
                        <p className="text-xs sm:text-2xl font-light text-white/50 italic text-center px-4 sm:px-6">
                            {t('problemSolution.quote')}
                        </p>
                        <span className="text-3xl sm:text-5xl text-white/10 absolute bottom-1 right-2 sm:bottom-2 sm:right-6 font-serif">&rdquo;</span>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-24 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white/20 rounded-full transition-all duration-100"
                            style={{ width: `${titleProgress * 100}%` }}
                        />
                    </div>
                </div>

                {/* Gradient fades */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
