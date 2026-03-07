'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import {
  ShoppingCart, BookOpen, Droplets, FlaskConical, Clock, Palette, Trash2,
  HelpCircle
} from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    title: 'Order Your Test',
    description: 'Choose from our range of CE & IVD certified self-tests. Order online and get it delivered to your doorstep across India.',
    details: [
      'All tests priced under ₹99',
      'Free shipping across India',
      'Discreet, secure packaging',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/30',
    iconColor: 'group-hover:text-blue-400',
  },
  {
    icon: BookOpen,
    title: 'Read the Instructions',
    description: 'Each kit comes with clear, illustrated instructions. No medical knowledge needed — anyone can do it.',
    details: [
      'Step-by-step illustrated guide',
      'Available in English & Hindi',
      'Video tutorials on our website',
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/30',
    iconColor: 'group-hover:text-violet-400',
  },
  {
    icon: Droplets,
    title: 'Prick Your Finger',
    description: 'Use the safety lancet provided for a quick, painless finger-prick. Collect a small blood sample with the pipette.',
    details: [
      'Safety lancet — one-time use',
      'Virtually painless process',
      'Takes less than 30 seconds',
    ],
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'hover:border-rose-500/30',
    iconColor: 'group-hover:text-rose-400',
  },
  {
    icon: FlaskConical,
    title: 'Apply Sample to Cassette',
    description: 'Use the pipette to place your blood sample in the test cassette well. Add a few drops of buffer solution.',
    details: [
      'Pre-measured pipette included',
      'Buffer solution provided',
      'Each step is clearly marked',
    ],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'hover:border-amber-500/30',
    iconColor: 'group-hover:text-amber-400',
  },
  {
    icon: Clock,
    title: 'Wait for Results',
    description: 'Set a timer and wait 10–15 minutes for the test lines to develop. Grab a cup of chai while you wait!',
    details: [
      'Results in 10-15 minutes',
      'Do not read after 20 minutes',
      'Timer reminder in instructions',
    ],
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'hover:border-emerald-500/30',
    iconColor: 'group-hover:text-emerald-400',
  },
  {
    icon: Palette,
    title: 'Read with Shade Card',
    description: 'Compare the color intensity of your test line with the shade card provided, or check for line presence.',
    details: [
      'Clear shade card included',
      'Reference guide for interpretation',
      'Photo your results for records',
    ],
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'hover:border-teal-500/30',
    iconColor: 'group-hover:text-teal-400',
  },
  {
    icon: Trash2,
    title: 'Dispose Safely',
    description: 'Place all used components in the disposable biohazard bag provided. Seal and discard in household waste.',
    details: [
      'Biohazard disposal bag included',
      'Safe for household waste',
      'Eco-conscious packaging',
    ],
    color: 'from-gray-400/20 to-gray-500/20',
    borderColor: 'hover:border-gray-400/30',
    iconColor: 'group-hover:text-gray-300',
  },
]

const faqs = [
  { q: 'How accurate are the tests?', a: 'All QUIQ tests are CE & IVD certified with clinical validation. Sensitivity and specificity are above 95% for most tests.' },
  { q: 'How long does delivery take?', a: 'We deliver across India within 3-5 business days. Metro cities often receive orders in 1-2 days.' },
  { q: 'Do I need a prescription?', a: 'No. Our self-tests are designed for home use and do not require a prescription. However, we recommend consulting a doctor for any positive results.' },
  { q: 'Is my data private?', a: 'Absolutely. Your test results are only known to you. We do not store or transmit any personal health data.' },
  { q: 'Can I use this for official medical records?', a: 'Our tests are for screening purposes. For official medical records, please visit a certified laboratory. However, our results can guide your next steps.' },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Simple Process</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">How QUIQ Works</h1>
              <p className="text-base text-white/40 max-w-xl mx-auto">
                From ordering to results — 7 simple steps. No lab visits, no appointments, no hassle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-gradient-to-br ${step.color} ${step.borderColor} transition-all duration-500`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                      <Icon className={`w-5 h-5 text-white/40 ${step.iconColor} transition-colors duration-300`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
                        <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-white/30 group-hover:text-white/50 transition-colors">
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold gradient-text">Common Questions</h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white/70 mb-1">{faq.q}</h3>
                      <p className="text-xs text-white/40 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
