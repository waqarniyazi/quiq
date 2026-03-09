'use client'

import { motion } from 'framer-motion'
import { Clock, Droplets, Thermometer, Target } from 'lucide-react'

// IVD and CE SVGs instead of lucide shields
const IvdIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="4" />
        <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">IVD</text>
    </svg>
)

const CeIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" />
        <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">CE</text>
    </svg>
)

const specs = [
    { icon: Clock, value: '10', unit: 'min', label: 'Time to Result' },
    { icon: CeIcon, value: 'CE', unit: 'Mark', label: 'Certified' },
    { icon: IvdIcon, value: 'IVD', unit: '', label: 'Diagnostic' },
    { icon: Droplets, value: '1', unit: 'drop', label: 'Blood Sample' },
    { icon: Thermometer, value: '2-30', unit: '°C', label: 'Storage Temp' },
    { icon: Target, value: '>99', unit: '%', label: 'Accuracy' },
]

export function KeySpecs() {
    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="max-w-4xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-3">Key Specs</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                        Designed For Simplicity
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden">
                    {specs.map((spec, i) => {
                        const Icon = spec.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-black p-8 sm:p-10 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors"
                            >
                                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/20 mb-4 group-hover:text-white/60 transition-colors" />
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-3xl sm:text-4xl font-light tracking-tight text-white/90">{spec.value}</span>
                                    {spec.unit && <span className="text-sm font-medium text-white/30">{spec.unit}</span>}
                                </div>
                                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mt-1 inline-block text-center mx-auto" style={{ maxWidth: 100 }}>{spec.label}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
