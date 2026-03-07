'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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
  { icon: ShoppingCart, title: 'Order our test', description: 'Choose your test and order online. Delivered to your doorstep.', number: '01', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))', border: 'rgba(59,130,246,0.3)', iconColor: '#60a5fa' },
  { icon: BookOpen, title: 'Follow the instructions', description: 'Clear step-by-step guide included in every kit.', number: '02', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(168,85,247,0.2))', border: 'rgba(139,92,246,0.3)', iconColor: '#a78bfa' },
  { icon: Droplets, title: 'Prick your finger', description: 'A painless prick with the safety lancet provided.', number: '03', gradient: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(236,72,153,0.2))', border: 'rgba(244,63,94,0.3)', iconColor: '#fb7185' },
  { icon: FlaskConical, title: 'Add sample to cassette', description: 'Use the pipette to apply blood. Add buffer drops.', number: '04', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.2))', border: 'rgba(245,158,11,0.3)', iconColor: '#fbbf24' },
  { icon: Clock, title: 'Wait for results', description: '10–15 minutes. Grab a chai while you wait.', number: '05', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,197,94,0.2))', border: 'rgba(16,185,129,0.3)', iconColor: '#34d399' },
  { icon: Palette, title: 'Read with shade card', description: 'Match the test line color to the shade card.', number: '06', gradient: 'linear-gradient(135deg, rgba(20,184,166,0.2), rgba(6,182,212,0.2))', border: 'rgba(20,184,166,0.3)', iconColor: '#2dd4bf' },
  { icon: Trash2, title: 'Dispose safely', description: 'Use the disposable bag provided for safe disposal.', number: '07', gradient: 'linear-gradient(135deg, rgba(156,163,175,0.2), rgba(107,114,128,0.2))', border: 'rgba(156,163,175,0.3)', iconColor: '#d1d5db' },
]

function StepCard({ step, index, isLeft }: { step: typeof steps[0]; index: number; isLeft: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-35% 0px -35% 0px' })
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const Icon = step.icon

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const active = isMobile ? isInView : isHovered

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative lg:flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-8`}
    >
      <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-5 sm:p-6 rounded-2xl border transition-all duration-500"
          style={{
            background: active ? step.gradient : 'rgba(255,255,255,0.02)',
            borderColor: active ? step.border : 'rgba(255,255,255,0.06)',
          }}
        >
          <div className={`flex items-start gap-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              style={{ background: active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)' }}
            >
              <Icon
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: active ? step.iconColor : 'rgba(255,255,255,0.4)' }}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-white/20 font-mono">{step.number}</span>
              </div>
              <h3
                className="text-base font-semibold transition-colors duration-300 mb-1"
                style={{ color: active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.8)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm transition-colors duration-300"
                style={{ color: active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center w-8">
        <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
      </div>
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Simple Process</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">How It Works</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent" />
          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
