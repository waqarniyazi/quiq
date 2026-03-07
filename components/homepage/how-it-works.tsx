'use client'

import { motion } from 'framer-motion'
import {
  ShoppingCart,
  BookOpen,
  Droplets,
  FlaskConical,
  Clock,
  Palette,
  Trash2,
} from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    title: 'Order our test',
    description: 'Choose your test and order online. Delivered to your doorstep.',
    number: '01',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderHover: 'hover:border-blue-500/30',
    iconHover: 'group-hover:text-blue-400',
  },
  {
    icon: BookOpen,
    title: 'Follow the instructions',
    description: 'Clear step-by-step guide included in every kit.',
    number: '02',
    color: 'from-violet-500/20 to-purple-500/20',
    borderHover: 'hover:border-violet-500/30',
    iconHover: 'group-hover:text-violet-400',
  },
  {
    icon: Droplets,
    title: 'Prick your finger',
    description: 'A painless prick with the safety lancet provided.',
    number: '03',
    color: 'from-rose-500/20 to-pink-500/20',
    borderHover: 'hover:border-rose-500/30',
    iconHover: 'group-hover:text-rose-400',
  },
  {
    icon: FlaskConical,
    title: 'Add sample to cassette',
    description: 'Use the pipette to apply blood. Add buffer drops.',
    number: '04',
    color: 'from-amber-500/20 to-orange-500/20',
    borderHover: 'hover:border-amber-500/30',
    iconHover: 'group-hover:text-amber-400',
  },
  {
    icon: Clock,
    title: 'Wait for results',
    description: '10–15 minutes. Grab a chai while you wait.',
    number: '05',
    color: 'from-emerald-500/20 to-green-500/20',
    borderHover: 'hover:border-emerald-500/30',
    iconHover: 'group-hover:text-emerald-400',
  },
  {
    icon: Palette,
    title: 'Read with shade card',
    description: 'Match the test line color to the shade card.',
    number: '06',
    color: 'from-teal-500/20 to-cyan-500/20',
    borderHover: 'hover:border-teal-500/30',
    iconHover: 'group-hover:text-teal-400',
  },
  {
    icon: Trash2,
    title: 'Dispose safely',
    description: 'Use the disposable bag provided for safe disposal.',
    number: '07',
    color: 'from-gray-400/20 to-gray-500/20',
    borderHover: 'hover:border-gray-400/30',
    iconHover: 'group-hover:text-gray-300',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Simple Process</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
            How It Works
          </h2>
        </motion.div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`group p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-gradient-to-br ${step.color} ${step.borderHover} transition-all duration-500`}
                    >
                      <div className={`flex items-start gap-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors duration-300">
                          <Icon className={`w-5 h-5 text-white/40 ${step.iconHover} transition-colors duration-300`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] text-white/20 font-mono">{step.number}</span>
                          </div>
                          <h3 className="text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center w-8">
                    <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
