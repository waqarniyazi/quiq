'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function TestShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    // Image 1 (closed kit) animations
    const image1Scale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.6, 1.1, 0.8])
    const image1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.5], [0, 1, 1, 0])
    const image1Y = useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 0, -60])
    const image1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.4], [5, 0, -3])

    // Image 2 (exploded view) animations
    const image2Scale = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [0.7, 1.05, 0.95])
    const image2Opacity = useTransform(scrollYProgress, [0.35, 0.5, 0.7, 0.85], [0, 1, 1, 0])
    const image2Y = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [80, 0, -40])
    const image2Rotate = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [-5, 0, 2])

    // Text animations
    const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.35, 0.45], [0, 1, 1, 0])
    const text2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0])

    // Glow
    const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.6, 0.6, 0])

    return (
        <section ref={containerRef} className="relative bg-black" style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Ambient glow behind the product */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
                        opacity: glowOpacity,
                    }}
                />

                {/* Image 1 – Closed test kit */}
                <motion.div
                    className="absolute w-[320px] sm:w-[420px] md:w-[520px] lg:w-[600px]"
                    style={{
                        scale: image1Scale,
                        opacity: image1Opacity,
                        y: image1Y,
                        rotate: image1Rotate,
                    }}
                >
                    <Image
                        src="/first image.png"
                        alt="QUIQ Test Kit"
                        width={600}
                        height={600}
                        className="w-full h-auto drop-shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* Text label 1 */}
                <motion.div
                    className="absolute bottom-[15%] sm:bottom-[12%]"
                    style={{ opacity: text1Opacity }}
                >
                    <p className="text-xs sm:text-sm text-white/40 tracking-[0.3em] uppercase text-center">
                        Premium Self-Test Kit
                    </p>
                    <p className="text-white/20 text-xs text-center mt-1">
                        Everything you need. One elegant package.
                    </p>
                </motion.div>

                {/* Image 2 – Exploded view */}
                <motion.div
                    className="absolute w-[340px] sm:w-[450px] md:w-[560px] lg:w-[650px]"
                    style={{
                        scale: image2Scale,
                        opacity: image2Opacity,
                        y: image2Y,
                        rotate: image2Rotate,
                    }}
                >
                    <Image
                        src="/second image.png"
                        alt="QUIQ Test Kit – Contents"
                        width={650}
                        height={650}
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </motion.div>

                {/* Text label 2 */}
                <motion.div
                    className="absolute bottom-[15%] sm:bottom-[12%]"
                    style={{ opacity: text2Opacity }}
                >
                    <p className="text-xs sm:text-sm text-white/40 tracking-[0.3em] uppercase text-center">
                        What&apos;s Inside
                    </p>
                    <p className="text-white/20 text-xs text-center mt-1">
                        Lancet · Pipette · Cassette · Buffer · Shade Card · Disposal Bag
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
