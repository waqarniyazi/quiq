'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const TOTAL_FRAMES = 240
const FRAME_PATH = '/integrated-test/exploded/ezgif-frame-'

function getFrameSrc(index: number): string {
    const padded = String(index).padStart(3, '0')
    return `${FRAME_PATH}${padded}.webp`
}

export function ExplodedView() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imagesRef = useRef<HTMLImageElement[]>([])
    const [loaded, setLoaded] = useState(false)
    const currentFrameRef = useRef(0)
    const rafRef = useRef<number>(0)
    const [progress, setProgress] = useState(0)

    // Preload all images
    useEffect(() => {
        let loadedCount = 0
        const images: HTMLImageElement[] = []

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image()
            img.src = getFrameSrc(i)
            img.onload = () => {
                loadedCount++
                if (loadedCount === TOTAL_FRAMES) {
                    imagesRef.current = images
                    setLoaded(true)
                }
            }
            img.onerror = () => {
                loadedCount++
                if (loadedCount === TOTAL_FRAMES) {
                    imagesRef.current = images
                    setLoaded(true)
                }
            }
            images.push(img)
        }
    }, [])

    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        const img = imagesRef.current[frameIndex]
        if (!canvas || !ctx || !img || !img.complete) return

        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
    }, [])

    // Draw first frame when loaded
    useEffect(() => {
        if (loaded) {
            drawFrame(0)
        }
    }, [loaded, drawFrame])

    // Scroll-driven animation
    useEffect(() => {
        if (!loaded) return

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

                const frameIndex = Math.min(
                    TOTAL_FRAMES - 1,
                    Math.floor(prog * (TOTAL_FRAMES - 1))
                )

                if (frameIndex !== currentFrameRef.current) {
                    currentFrameRef.current = frameIndex
                    drawFrame(frameIndex)
                }
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [loaded, drawFrame])

    // Labels that appear at different scroll positions
    const labels = [
        { text: 'Safety Lancet', sub: 'Sterile single-use', pos: 'left-[4%] sm:left-[8%] top-[35%] sm:top-[38%]', showAt: [0.05, 0.4] },
        { text: 'Absorbent Tip', sub: 'Smart collection', pos: 'right-[4%] sm:right-[8%] top-[30%] sm:top-[35%]', showAt: [0.05, 0.4] },
        { text: 'Test Strip', sub: 'HIV antigens', pos: 'left-[15%] sm:left-[30%] top-[20%]', showAt: [0.15, 0.5] },
        { text: 'Buffer Chamber', sub: 'Pre-loaded reagent', pos: 'right-[6%] sm:right-[10%] top-[60%] sm:top-[55%]', showAt: [0.1, 0.45] },
        { text: 'Result Window', sub: 'C & T lines', pos: 'left-[25%] sm:left-[35%] bottom-[25%]', showAt: [0.1, 0.5] },
    ]

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: '400vh' }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute top-20 sm:top-24 left-0 right-0 text-center z-20"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">Engineering</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                        What&apos;s Inside
                    </h2>
                </motion.div>

                {/* Canvas for frame animation */}
                <div className="relative z-10 w-full max-w-4xl px-4">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-auto"
                        style={{ maxHeight: '55vh', opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
                    />
                </div>

                {/* Animated labels */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {labels.map((label, i) => {
                        const visible = progress >= label.showAt[0] && progress <= label.showAt[1]
                        return (
                            <div
                                key={i}
                                className={`absolute ${label.pos} transition-all duration-500`}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                                }}
                            >
                                <div className="backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-xl shadow-black/50 text-center sm:text-left mx-auto max-w-[90px] sm:max-w-none">
                                    <p className="text-[10px] sm:text-xs font-semibold text-white/90 leading-tight">{label.text}</p>
                                    <p className="text-[8px] sm:text-[10px] text-white/40 mt-0.5 hidden sm:block">{label.sub}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-32 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white/20 rounded-full transition-all duration-100"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
            </div>
        </section>
    )
}
