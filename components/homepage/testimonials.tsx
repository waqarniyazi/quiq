'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    title: 'General Physician',
    quote: 'QUIQ brings lab-grade testing to patients\' homes. The accuracy is on par with clinical diagnostics, and the ease of use is remarkable.',
    rating: 5,
    type: 'doctor',
  },
  {
    name: 'Dr. Arjun Mehta',
    title: 'Endocrinologist',
    quote: 'I recommend QUIQ to my patients for routine Vitamin D and thyroid monitoring. It reduces clinic visits while maintaining diagnostic standards.',
    rating: 5,
    type: 'doctor',
  },
  {
    name: 'Neha Kapoor',
    title: 'Working Professional',
    quote: 'No more taking half-days off for lab visits. QUIQ gives me accurate results in minutes, right at home. Absolute game-changer.',
    rating: 5,
    type: 'customer',
  },
  {
    name: 'Rahul Verma',
    title: 'Fitness Enthusiast',
    quote: 'I track my health markers monthly with QUIQ. The process is painless and the packaging is surprisingly premium for a self-test kit.',
    rating: 5,
    type: 'customer',
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">{t('testimonials.subtitle')}</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/[0.06] absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-white/40 text-white/40"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-sm font-semibold text-white/50">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/30">
                    {testimonial.title}
                  </p>
                </div>
                {testimonial.type === 'doctor' && (
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30">
                    {t('testimonials.doctor')}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
