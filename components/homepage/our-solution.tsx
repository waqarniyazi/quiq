'use client'

import { motion } from 'framer-motion'
import { IndianRupee, Microscope, Heart, Globe } from 'lucide-react'

const pillars = [
    { icon: IndianRupee, title: 'Under ₹99', desc: 'Quality diagnostics for every household.' },
    { icon: Microscope, title: 'Lab-Grade', desc: 'CE & IVD certified accuracy.' },
    { icon: Heart, title: 'Accessible', desc: 'No prescriptions. No lab visits.' },
    { icon: Globe, title: 'Made for India', desc: 'Designed for Indian health needs.' },
]

export function OurSolution() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Our Solution</p>
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Democratising Healthcare</h2>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative text-center mb-14"
                >
                    <div className="relative p-8 sm:p-10 rounded-3xl border border-white/[0.06]">
                        <span className="text-5xl text-white/10 absolute top-2 left-6 font-serif">&ldquo;</span>
                        <p className="text-lg sm:text-2xl font-light text-white/60 italic">
                            Quiq™ aims to provide affordable and high quality self testing diagnostics to everyone in India
                        </p>
                        <span className="text-5xl text-white/10 absolute bottom-2 right-6 font-serif">&rdquo;</span>
                    </div>
                </motion.blockquote>

                {/* Pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {pillars.map((p, i) => {
                        const Icon = p.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 text-center"
                            >
                                <Icon className="w-5 h-5 text-white/30 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
                                <h3 className="text-sm font-semibold text-white/70 mb-1">{p.title}</h3>
                                <p className="text-[11px] text-white/30">{p.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
