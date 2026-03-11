'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'

const cardDefs = [
    { image: '/story-cards/1-worried.png', titleKey: 'storyCards.card1Title', textKey: 'storyCards.card1Text' },
    { image: '/story-cards/2-home.png', titleKey: 'storyCards.card2Title', textKey: 'storyCards.card2Text' },
    { image: '/story-cards/3-quiq.png', titleKey: 'storyCards.card3Title', textKey: 'storyCards.card3Text' },
    { image: '/story-cards/4-tests.png', titleKey: 'storyCards.card4Title', textKey: 'storyCards.card4Text' },
    { image: '/story-cards/5-expensive.png', titleKey: 'storyCards.card5Title', textKey: 'storyCards.card5Text' },
    { image: '/story-cards/6-affordable.png', titleKey: 'storyCards.card6Title', textKey: 'storyCards.card6Text', isHighlight: true },
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

    const REGULAR_CARDS = cards.slice(0, 5)
    const LAST_CARD = cards[5]

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

                const totalSlots = cards.length
                const rawIndex = prog * totalSlots
                const idx = Math.min(totalSlots - 1, Math.floor(rawIndex))
                const sub = rawIndex - idx
                setActiveIndex(idx)
                setSubProgress(sub)
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    const isLastCard = activeIndex >= REGULAR_CARDS.length

    // Reel helper: current card slides up, next is revealed below (clipped by overflow-hidden)
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
            zIndex: REGULAR_CARDS.length - i,
        }
    }

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${(cards.length + 1) * 100}vh` }}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden md:flex items-center justify-center w-full h-full">

                    {/* Two-panel layout for cards 0-4 */}
                    <div
                        className="max-w-6xl w-full flex items-stretch gap-8 lg:gap-12 px-8 lg:px-16 transition-all duration-700"
                        style={{
                            opacity: isLastCard ? 0 : 1,
                            transform: isLastCard ? 'scale(0.95) translateY(30px)' : 'scale(1) translateY(0)',
                            pointerEvents: isLastCard ? 'none' : 'auto',
                            height: '500px',
                        }}
                    >
                        {/* LEFT — Image reel */}
                        <div className="flex-1 relative rounded-3xl overflow-hidden">
                            {REGULAR_CARDS.map((card, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0"
                                    style={getReelStyle(i)}
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.title || 'Quiq'}
                                        fill
                                        className="object-cover"
                                        sizes="550px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                </div>
                            ))}
                        </div>

                        {/* RIGHT — Text reel (same scroll animation as image) */}
                        <div className="flex-1 relative overflow-hidden">
                            {REGULAR_CARDS.map((card, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 flex items-center"
                                    style={getReelStyle(i)}
                                >
                                    <div className="p-8 lg:p-10 rounded-3xl border border-white/[0.06] bg-black w-full h-full flex flex-col justify-center">
                                        {/* Step indicator */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-xs text-white/20 font-mono">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <div className="w-8 h-px bg-white/10" />
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold text-white/90 mb-4 leading-tight">
                                            {card.title}
                                        </h3>

                                        <p className="text-base text-white/40 leading-relaxed whitespace-pre-line">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Full-width card for the last one */}
                    <div
                        className="absolute inset-x-8 lg:inset-x-16 top-1/2 max-w-5xl mx-auto transition-all duration-700"
                        style={{
                            opacity: isLastCard ? 1 : 0,
                            transform: isLastCard ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.9) translateY(40px)',
                            pointerEvents: isLastCard ? 'auto' : 'none',
                        }}
                    >
                        <div className="h-[420px] rounded-3xl border border-white/[0.15] bg-white/[0.04] overflow-hidden flex flex-row">
                            <div className="relative w-1/2 flex-shrink-0">
                                <Image
                                    src={LAST_CARD.image}
                                    alt={LAST_CARD.title}
                                    fill
                                    className="object-cover"
                                    sizes="600px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                            </div>
                            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    {LAST_CARD.title}
                                </h3>
                                <p className="text-base text-white/50 leading-relaxed mb-6">
                                    {LAST_CARD.text}
                                </p>
                                <div>
                                    <span className="text-5xl font-bold text-white">₹99</span>
                                    <span className="text-lg text-white/40 ml-3">{t('storyCards.perTest')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="flex md:hidden flex-col items-center justify-center w-full h-full px-5 py-16">
                    <div className="relative w-full max-w-sm h-[520px]">
                        {cards.map((card, i) => {
                            const isCurrent = i === activeIndex
                            const isPrev = i < activeIndex

                            return (
                                <div
                                    key={i}
                                    className="absolute inset-0 transition-all duration-700 ease-out"
                                    style={{
                                        transform: isCurrent
                                            ? 'translateY(0) scale(1)'
                                            : isPrev
                                                ? 'translateY(-30px) scale(0.95)'
                                                : 'translateY(60px) scale(0.92)',
                                        opacity: isCurrent ? 1 : 0,
                                        zIndex: isCurrent ? 10 : 1,
                                    }}
                                >
                                    <div className={`h-full rounded-3xl border overflow-hidden flex flex-col ${card.isHighlight ? 'border-white/20 bg-white/[0.06]' : 'border-white/[0.08] bg-white/[0.03]'}`}>
                                        <div className="relative h-60 flex-shrink-0">
                                            <Image src={card.image} alt={card.title || 'Quiq'} fill className="object-cover" sizes="350px" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        </div>
                                        <div className="flex-1 p-5 flex flex-col justify-center">
                                            <h3 className={`text-lg font-bold mb-2 ${card.isHighlight ? 'text-white' : 'text-white/90'}`}>{card.title}</h3>
                                            <p className={`text-[13px] leading-relaxed ${card.isHighlight ? 'text-white/70' : 'text-white/45'}`}>{card.text}</p>
                                            {card.isHighlight && (
                                                <div className="mt-3">
                                                    <span className="text-3xl font-bold text-white">₹99</span>
                                                    <span className="text-xs text-white/40 ml-2">{t('storyCards.perTest')}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        {cards.map((_, i) => (
                            <div
                                key={i}
                                className="h-1 rounded-full transition-all duration-300"
                                style={{
                                    width: i === activeIndex ? 20 : 6,
                                    background: i === activeIndex ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress dots (desktop) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 z-20">
                    {cards.map((_, i) => (
                        <div
                            key={i}
                            className="h-1 rounded-full transition-all duration-300"
                            style={{
                                width: i === activeIndex ? 20 : 6,
                                background: i === activeIndex ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)',
                            }}
                        />
                    ))}
                </div>

                {/* Gradient fades */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
