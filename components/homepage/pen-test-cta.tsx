'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function PenTestCTA() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left – Info & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">New Product</p>
                        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                            Integrated Pen Test
                        </h2>
                        <p className="text-base sm:text-lg text-white/40 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Our most advanced testing device. A single pen-style device that simplifies sample collection and delivers results faster than ever.
                        </p>
                        <Link
                            href="/products/pen-test"
                            className="inline-flex px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </motion.div>

                    {/* Right – Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1 flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-3xl blur-3xl scale-110" />
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <Image
                                    src="/pen-test.png"
                                    alt="QUIQ Integrated Pen Test"
                                    width={400}
                                    height={400}
                                    className="w-full max-w-sm h-auto relative z-10 drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
