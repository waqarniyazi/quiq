'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/context'

export function Certifications() {
    const { t } = useLanguage()

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">{t('certifications.subtitle')}</p>
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                        {t('certifications.title')}
                    </h2>
                </motion.div>

                {/* Certification Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
                >
                    {/* IVD Badge */}
                    <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 w-full sm:w-auto sm:min-w-[200px]">
                        <div className="w-20 h-20 rounded-2xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white/50 group-hover:text-white/80 transition-colors duration-300">
                                <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                                <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">IVD</text>
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                {t('certifications.ivd')}
                            </p>
                            <p className="text-xs text-white/30 mt-1">{t('certifications.ivdDesc')}</p>
                        </div>
                    </div>

                    {/* CE Badge */}
                    <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 w-full sm:w-auto sm:min-w-[200px]">
                        <div className="w-20 h-20 rounded-2xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white/50 group-hover:text-white/80 transition-colors duration-300">
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                                <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">CE</text>
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                {t('certifications.ce')}
                            </p>
                            <p className="text-xs text-white/30 mt-1">{t('certifications.ceDesc')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
