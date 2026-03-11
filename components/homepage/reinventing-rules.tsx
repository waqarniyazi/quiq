'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'Self-tests are only for Covid or Pregnancy, right?',
        prefix: 'Wrong',
        answer: 'Quiq tests for Cancer markers, Cardiac health, Malaria, Thyroid, Vitamin deficiencies, and more.',
    },
    {
        question: 'Can I actually trust a self-diagnosis?',
        prefix: 'Yes',
        answer: 'Quiq uses the same Lateral Flow technology trusted by hospitals, just without the waiting room.',
    },
    {
        question: "Don't I need a doctor to run these tests?",
        prefix: 'No',
        answer: 'If you can follow three steps, you can diagnose yourself in under 10 minutes.',
    },
    {
        question: 'Surely I need a lab or a machine for accurate results?',
        prefix: 'Not anymore',
        answer: 'Decades of diagnostic technology have been compressed into a single strip you hold in your hand.',
    },
    {
        question: "This all sounds expensive — is it really accessible?",
        prefix: '',
        answer: 'All of this, at home, for under ₹99.',
    },
]

export function ReinventingRules() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Rethink Everything</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                        Quiq™ Reinventing the Rules
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4"
                                    style={{
                                        background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                                        borderColor: isOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                    }}
                                >
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm sm:text-base font-medium text-white/80 leading-relaxed">
                                            {faq.question}
                                        </p>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="mt-4 text-sm text-white/45 leading-relaxed">
                                                        {faq.prefix && (
                                                            <span className="text-white font-semibold">{faq.prefix} — </span>
                                                        )}
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex-shrink-0 mt-0.5">
                                        <ChevronDown
                                            className="w-5 h-5 text-white/30 transition-transform duration-300"
                                            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                                        />
                                    </div>
                                </button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
