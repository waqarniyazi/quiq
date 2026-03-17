'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const TOTAL_FRAMES = 151
const FRAME_PATH = '/homepage/hero/ezgif-frame-'

function getFrameSrc(index: number): string {
    const padded = String(index).padStart(3, '0')
    return `${FRAME_PATH}${padded}.webp`
}

export function TestShowcase() {
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

    const text1Visible = progress < 0.4
    const text2Visible = progress > 0.4

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: '350vh' }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Ambient glow behind the product */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full transition-opacity duration-500"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
                        opacity: progress < 0.8 ? 0.6 : 0,
                    }}
                />

                {/* Canvas for frame animation */}
                <div className="relative z-10 w-full flex justify-center items-center px-4">
                    <canvas
                        ref={canvasRef}
                        className="w-auto max-w-full max-h-[75vh] md:max-h-[85vh] object-contain"
                        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
                    />
                </div>

                {/* Text label 1 */}
                <div
                    className="absolute bottom-[15%] sm:bottom-[12%] z-20 transition-all duration-700"
                    style={{
                        opacity: text1Visible ? 1 : 0,
                        transform: text1Visible ? 'translateY(0)' : 'translateY(20px)',
                        pointerEvents: text1Visible ? 'auto' : 'none'
                    }}
                >
                    <p className="text-xs sm:text-sm text-white/40 tracking-[0.3em] uppercase text-center">
                        Premium Self-Test Kit
                    </p>
                    <p className="text-white/20 text-xs text-center mt-1">
                        Everything you need. One elegant package.
                    </p>
                </div>

                {/* Text label 2 */}
                <div
                    className="absolute bottom-[15%] sm:bottom-[12%] z-20 transition-all duration-700"
                    style={{
                        opacity: text2Visible ? 1 : 0,
                        transform: text2Visible ? 'translateY(0)' : 'translateY(20px)',
                        pointerEvents: text2Visible ? 'auto' : 'none'
                    }}
                >
                    <p className="text-xs sm:text-sm text-white/40 tracking-[0.3em] uppercase text-center">
                        What&apos;s Inside
                    </p>
                    <p className="text-white/20 text-xs text-center mt-1">
                        Lancet · Pipette · Cassette · Buffer · Shade Card · Disposal Bag
                    </p>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-24 h-[1px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white/20 rounded-full transition-all duration-100"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>
                </div>

                {/* Gradient fades */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
