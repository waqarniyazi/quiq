'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplets, ArrowRight, Target, Palette } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

// Steps 1-3 frames
const FRAMES_STEPS_1_3 = 93
const FRAME_PATH_1_3 = '/test-working/ezgif-frame-'

// Step 4 frames
const FRAMES_STEP_4 = 241
const FRAME_PATH_4 = '/read%20results/ezgif-frame-'

function getFrameSrc13(index: number): string {
    const padded = String(index).padStart(3, '0')
    return `${FRAME_PATH_1_3}${padded}.webp`
}

function getFrameSrc4(index: number): string {
    const padded = String(index).padStart(3, '0')
    return `${FRAME_PATH_4}${padded}.webp`
}

const stepDefs = [
    {
        label: '01',
        titleKey: 'testWorking.step1Title',
        descKey: 'testWorking.step1Desc',
        icon: Droplets,
        startFrame: 1,
        endFrame: 28,
        weight: 1.5,
        sequence: 'steps13' as const,
    },
    {
        label: '02',
        titleKey: 'testWorking.step2Title',
        descKey: 'testWorking.step2Desc',
        icon: ArrowRight,
        startFrame: 29,
        endFrame: 93,
        weight: 2,
        sequence: 'steps13' as const,
    },
    {
        label: '03',
        titleKey: 'testWorking.step3Title',
        descKey: 'testWorking.step3Desc',
        icon: Target,
        startFrame: 94,
        endFrame: 258,
        weight: 1.5,
        sequence: 'steps13' as const,
    },
    {
        label: '04',
        titleKey: 'testWorking.step4Title',
        descKey: 'testWorking.step4Desc',
        icon: Palette,
        startFrame: 1,
        endFrame: 202,
        weight: 1.5,
        sequence: 'step4' as const,
    },
]

export function TestWorking() {
    const containerRef = useRef<HTMLDivElement>(null)
    const desktopCanvasRef = useRef<HTMLCanvasElement>(null)
    const mobileCanvasRef = useRef<HTMLCanvasElement>(null)
    const images13Ref = useRef<HTMLImageElement[]>([])
    const images4Ref = useRef<HTMLImageElement[]>([])
    const [loaded13, setLoaded13] = useState(false)
    const [loaded4, setLoaded4] = useState(false)
    const currentFrameRef = useRef(0)
    const currentSequenceRef = useRef<'steps13' | 'step4'>('steps13')
    const rafRef = useRef<number>(0)
    const [activeStep, setActiveStep] = useState(0)
    const [progress, setProgress] = useState(0)
    const { t } = useLanguage()

    const steps = stepDefs.map(s => ({
        ...s,
        title: t(s.titleKey),
        description: t(s.descKey),
    }))

    const totalWeight = steps.reduce((sum: number, s: { weight: number }) => sum + s.weight, 0)

    // Preload steps 1-3 frames
    useEffect(() => {
        let loadedCount = 0
        const images: HTMLImageElement[] = []
        for (let i = 1; i <= FRAMES_STEPS_1_3; i++) {
            const img = new window.Image()
            img.src = getFrameSrc13(i)
            img.onload = () => {
                loadedCount++
                if (loadedCount === FRAMES_STEPS_1_3) {
                    images13Ref.current = images
                    setLoaded13(true)
                }
            }
            img.onerror = () => {
                loadedCount++
                if (loadedCount === FRAMES_STEPS_1_3) {
                    images13Ref.current = images
                    setLoaded13(true)
                }
            }
            images.push(img)
        }
    }, [])

    // Preload step 4 frames
    useEffect(() => {
        let loadedCount = 0
        const images: HTMLImageElement[] = []
        for (let i = 1; i <= FRAMES_STEP_4; i++) {
            const img = new window.Image()
            img.src = getFrameSrc4(i)
            img.onload = () => {
                loadedCount++
                if (loadedCount === FRAMES_STEP_4) {
                    images4Ref.current = images
                    setLoaded4(true)
                }
            }
            img.onerror = () => {
                loadedCount++
                if (loadedCount === FRAMES_STEP_4) {
                    images4Ref.current = images
                    setLoaded4(true)
                }
            }
            images.push(img)
        }
    }, [])

    const drawFrame = useCallback((frameIndex: number, sequence: 'steps13' | 'step4') => {
        const imagesArr = sequence === 'steps13' ? images13Ref.current : images4Ref.current
        const img = imagesArr[frameIndex]
        if (!img || !img.complete) return

        const canvases = [desktopCanvasRef.current, mobileCanvasRef.current]
        canvases.forEach(canvas => {
            if (!canvas) return
            const ctx = canvas.getContext('2d')
            if (!ctx) return
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0)
        })
    }, [])

    useEffect(() => {
        if (loaded13) drawFrame(0, 'steps13')
    }, [loaded13, drawFrame])

    // Scroll-driven animation
    useEffect(() => {
        if (!loaded13) return
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current
                if (!container) return

                const rect = container.getBoundingClientRect()
                const scrollHeight = container.offsetHeight - window.innerHeight
                const scrolled = -rect.top
                const prog = Math.max(0, Math.min(1, scrolled / scrollHeight))
                setProgress(prog)

                let accWeight = 0
                let currentStep = 0
                let frameIndex = 0
                let sequence: 'steps13' | 'step4' = 'steps13'

                for (let i = 0; i < steps.length; i++) {
                    const stepStart = accWeight / totalWeight
                    const stepEnd = (accWeight + steps[i].weight) / totalWeight
                    accWeight += steps[i].weight

                    if (prog >= stepStart && prog < stepEnd) {
                        currentStep = i
                        const stepProgress = (prog - stepStart) / (stepEnd - stepStart)
                        sequence = steps[i].sequence

                        const startF = steps[i].startFrame - 1
                        const endF = steps[i].endFrame - 1
                        frameIndex = Math.min(endF, Math.floor(startF + stepProgress * (endF - startF)))
                        break
                    } else if (prog >= (accWeight / totalWeight)) {
                        currentStep = Math.min(steps.length - 1, i + 1)
                        sequence = steps[i].sequence
                        frameIndex = steps[i].endFrame - 1
                    }
                }

                if (prog >= 0.99) {
                    currentStep = steps.length - 1
                    sequence = 'step4'
                    frameIndex = FRAMES_STEP_4 - 1
                }

                setActiveStep(currentStep)

                // Only draw if frame or sequence changed
                if (frameIndex !== currentFrameRef.current || sequence !== currentSequenceRef.current) {
                    currentFrameRef.current = frameIndex
                    currentSequenceRef.current = sequence

                    // For step 4, only draw if those frames are loaded
                    if (sequence === 'step4' && !loaded4) {
                        // Show last frame of steps 1-3 as fallback
                        drawFrame(FRAMES_STEPS_1_3 - 1, 'steps13')
                    } else {
                        drawFrame(frameIndex, sequence)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [loaded13, loaded4, drawFrame])

    const loaded = loaded13

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: '600vh' }}
        >
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Section header */}
                <div className="pt-10 sm:pt-14 pb-4 text-center px-4 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">{t('testWorking.subtitle')}</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                            {t('testWorking.title')}
                        </h2>
                    </motion.div>
                </div>

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden md:flex flex-1 items-center max-w-7xl mx-auto w-full px-6 lg:px-12 gap-8 lg:gap-16">
                    {/* Visual — left */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <canvas
                            ref={desktopCanvasRef}
                            className="max-w-full max-h-[75vh] w-auto h-auto object-contain transition-opacity duration-500"
                            style={{ opacity: loaded ? 1 : 0 }}
                        />
                    </div>

                    {/* Steps — right */}
                    <div className="w-[340px] lg:w-[400px] flex-shrink-0">
                        <div className="space-y-4">
                            {steps.map((step, i) => {
                                const Icon = step.icon
                                const isActive = i === activeStep
                                return (
                                    <div
                                        key={i}
                                        className="p-5 rounded-2xl border transition-all duration-500"
                                        style={{
                                            background: isActive ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)',
                                            borderColor: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
                                            opacity: isActive ? 1 : 0.4,
                                            transform: isActive ? 'scale(1)' : 'scale(0.97)',
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                                                style={{
                                                    background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                                                }}
                                            >
                                                <Icon
                                                    className="w-5 h-5 transition-colors duration-500"
                                                    style={{ color: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)' }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] text-white/20 font-mono">{step.label}</span>
                                                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="flex md:hidden flex-col flex-1 px-4 pb-6">
                    {/* Visual — top */}
                    <div className="flex-1 flex items-center justify-center min-h-0 relative">
                        <canvas
                            ref={mobileCanvasRef}
                            className="max-w-full max-h-[50vh] w-auto h-auto object-contain transition-opacity duration-500"
                            style={{ opacity: loaded ? 1 : 0 }}
                        />
                    </div>

                    {/* Active step — bottom */}
                    <div className="mt-4 space-y-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                {(() => {
                                    const step = steps[activeStep]
                                    const Icon = step.icon
                                    return (
                                        <div className="p-4 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-4 h-4 text-white/50" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[9px] text-white/20 font-mono">{step.label}</span>
                                                        <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                                                    </div>
                                                    <p className="text-[11px] text-white/40 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })()}
                            </motion.div>
                        </AnimatePresence>

                        {/* Step indicators */}
                        <div className="flex items-center justify-center gap-2">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className="h-1 rounded-full transition-all duration-300"
                                    style={{
                                        width: i === activeStep ? 20 : 6,
                                        background: i === activeStep ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress bar (desktop) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className="w-32 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white/20 rounded-full transition-all duration-100"
                            style={{ width: `${progress * 100}%` }}
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
