'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const TOTAL_FRAMES = 114
const FRAME_PATH = '/integrated-test/hero/ezgif-frame-'

function getFrameSrc(index: number): string {
    const padded = String(index).padStart(3, '0')
    return `${FRAME_PATH}${padded}.webp`
}

export function IntegratedHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imagesRef = useRef<HTMLImageElement[]>([])
    const [loaded, setLoaded] = useState(false)
    const currentFrameRef = useRef(0)
    const rafRef = useRef<number>(0)

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
                const progress = Math.max(0, Math.min(1, scrolled / scrollHeight))
                const frameIndex = Math.min(
                    TOTAL_FRAMES - 1,
                    Math.floor(progress * (TOTAL_FRAMES - 1))
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

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: '300vh' }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Ambient gradient orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                            top: '-10%',
                            left: '-10%',
                        }}
                        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
                            bottom: '-5%',
                            right: '-5%',
                        }}
                        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                </div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative z-10 text-center mb-8"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Self-Test</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] gradient-text">
                        Integrated Pen Test
                    </h1>
                    <p className="text-sm sm:text-base text-white/30 mt-4 max-w-md mx-auto">
                        All-in-one rapid diagnostic. Reimagined.
                    </p>
                </motion.div>

                {/* Canvas for frame animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-10 w-full max-w-3xl px-4"
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full h-auto"
                        style={{ maxHeight: '50vh' }}
                    />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-1.5 rounded-full bg-white/30" />
                    </motion.div>
                </motion.div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>
        </section>
    )
}
