'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

interface LegalPageProps {
    title: string
    subtitle: string
    sections: { heading: string; content: string }[]
}

export function LegalPage({ title, subtitle, sections }: LegalPageProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                        <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">{subtitle}</p>
                        <h1 className="text-3xl sm:text-4xl font-bold gradient-text">{title}</h1>
                    </motion.div>

                    <div className="space-y-8">
                        {sections.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                viewport={{ once: true }}
                                className="pb-8 border-b border-white/[0.04] last:border-0"
                            >
                                <h2 className="text-base font-semibold text-white/70 mb-3">{s.heading}</h2>
                                <p className="text-sm text-white/40 leading-relaxed whitespace-pre-line">{s.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-xs text-white/20 mt-12">
                        © {new Date().getFullYear()} Santa Clara Wellness Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
