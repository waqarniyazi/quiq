'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export function Newsletter() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const { t } = useLanguage()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
            setEmail('')
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">{t('newsletter.subtitle')}</p>
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
                        {t('newsletter.title')}
                    </h2>
                    <p className="text-sm text-white/40 mb-8">
                        {t('newsletter.desc')}
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('newsletter.placeholder')}
                            required
                            className="flex-1 px-5 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-200"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                        >
                            {submitted ? t('newsletter.subscribed') : (
                                <>
                                    {t('newsletter.subscribe')}
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-[11px] text-white/20 mt-4">
                        {t('newsletter.noSpam')}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
