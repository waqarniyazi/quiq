'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Zap, Package, BarChart3, Lock } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const features = [
  {
    icon: Clock,
    title: 'Results in Minutes',
    description: 'Get rapid diagnostic results within minutes. Faster than traditional lab testing with the same accuracy.',
  },
  {
    icon: Shield,
    title: 'Clinically Validated',
    description: 'All tests are performed by certified professionals and validated by leading healthcare institutions.',
  },
  {
    icon: Zap,
    title: 'Easy to Use',
    description: 'Simple, step-by-step instructions with intuitive finger-prick collection. No complex procedures needed.',
  },
  {
    icon: Package,
    title: 'Premium Packaging',
    description: 'Beautifully designed test kits that feel premium. Includes all necessary components in one elegant package.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Insights',
    description: 'Comprehensive results with personalized health insights and recommendations from certified professionals.',
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    description: 'Your health data is encrypted and secure. Complete privacy guaranteed with HIPAA compliance.',
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose QUIQ
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Healthcare should be accessible, accurate, and empowering. Here's what makes QUIQ different.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
