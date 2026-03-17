'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'

const cardDefs = [
    { image: '/story-1-new.png', titleKey: 'storyCards.card1Title', textKey: 'storyCards.card1Text' },
    { image: '/story-2-new.png', titleKey: 'storyCards.card2Title', textKey: 'storyCards.card2Text' },
    { image: '/story-3-new.png', titleKey: 'storyCards.card3Title', textKey: 'storyCards.card3Text' },
    { image: '/story-4.png', titleKey: 'storyCards.card4Title', textKey: 'storyCards.card4Text', isHighlight: true },
]

export function StoryCards() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [subProgress, setSubProgress] = useState(0)
    const rafRef = useRef<number>(0)
    const { t } = useLanguage()

    const cards = cardDefs.map(d => ({
        image: d.image,
        title: t(d.titleKey),
        text: t(d.textKey),
        isHighlight: d.isHighlight,
    }))

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 768) return // Only for desktop
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current
                if (!container) return
                const rect = container.getBoundingClientRect()
                const scrollHeight = container.offsetHeight - window.innerHeight
                const scrolled = Math.max(0, -rect.top)
                const prog = scrollHeight > 0 ? Math.min(1, scrolled / scrollHeight) : 0

                const totalSlots = Math.max(1, cards.length - 1)
                const rawIndex = prog * totalSlots
                let idx = Math.floor(rawIndex)
                let sub = rawIndex - idx

                if (idx >= totalSlots) {
                    idx = totalSlots
                    sub = 0
                }

                setActiveIndex(idx)
                setSubProgress(sub)
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [cards.length])

    function getReelStyle(i: number) {
        let yOffset = 0
        let opacity = 0

        if (i < activeIndex) {
            yOffset = -100
            opacity = 0
        } else if (i === activeIndex) {
            yOffset = -subProgress * 100
            opacity = 1
        } else if (i === activeIndex + 1) {
            yOffset = 0
            opacity = 1
        } else {
            yOffset = 0
            opacity = 0
        }

        return {
            transform: `translateY(${yOffset}%)`,
            opacity,
            zIndex: cards.length - i,
        }
    }

    return (
        <section
            className="relative bg-black h-fit"
        >
            {/* Desktop Layout (Sticky Reel) */}
            <div ref={containerRef} className="hidden md:block h-[400vh] relative">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                    {/* Dark gradient mapping down for text background behind cards */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent z-0 opacity-50 pointer-events-none" />


                    <div
                        className="max-w-4xl w-full mx-auto relative rounded-3xl overflow-hidden transition-all duration-700 shadow-2xl border border-white/10 z-10"
                        style={{ height: '600px' }}
                    >
                        {cards.map((card, i) => (
                            <div key={i} className="absolute inset-0 bg-[#111]" style={getReelStyle(i)}>
                                {/* Image */}
                                <Image src={card.image} alt={card.title || 'Quiq'} fill className="object-cover" sizes="1200px" />
                                {/* Overlay gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${i === 1 || i === 3 ? 'from-black/10 via-black/60 to-black' : 'from-black/0 via-black/20 to-black/95'}`} />

                                {/* Overlay Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-sm text-white/50 font-mono tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                                        <div className="w-12 h-px bg-white/30" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-5 leading-tight">{card.title}</h3>
                                    <p className="text-xl text-white/80 leading-relaxed whitespace-pre-line drop-shadow-md max-w-3xl font-medium">{card.text}</p>

                                    {card.isHighlight && (
                                        <div className="mt-8 pt-6 border-t border-white/20">
                                            <span className="text-4xl font-bold text-white">₹99</span>
                                            <span className="text-lg text-white/60 ml-3">{t('storyCards.perTest')}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Horizontal Snap Layout (No vertical hijack) */}
            <div className="md:hidden w-full py-20 px-4">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scroll::-webkit-scrollbar { display: none; }
                    .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                `}} />

                <h2 className="text-3xl font-bold text-center text-white mb-10 pb-2">Our Story</h2>

                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-5 px-4 -mx-4 pb-4">
                    {cards.map((card, i) => (
                        <div key={i} className="snap-center shrink-0 w-[85vw] h-[550px] relative rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover object-center"
                                sizes="85vw"
                            />
                            {/* Dark gradient mapping down for text */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${i === 1 || i === 3 ? 'from-black/10 via-black/60 to-black' : 'from-black/0 via-black/20 to-black/95'}`} />

                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end min-h-[50%] z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-white/60 font-mono tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="w-8 h-px bg-white/40" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{card.title}</h3>
                                <p className="text-[15px] text-white/90 leading-relaxed whitespace-pre-line font-medium drop-shadow-md">
                                    {card.text}
                                </p>

                                {card.isHighlight && (
                                    <div className="mt-5 pt-4 border-t border-white/20">
                                        <span className="text-3xl font-bold text-white">₹99</span>
                                        <span className="text-sm text-white/70 ml-2">{t('storyCards.perTest')}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-[13px] uppercase tracking-wider font-semibold">
                    <span>Swipe</span>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                        →
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
