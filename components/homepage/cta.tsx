'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 -z-10 rounded-3xl" />

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Take Control of Your Health Today
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/60 max-w-2xl mx-auto mb-8"
          >
            Start your health journey with QUIQ. Premium diagnostics, delivered to your door. Premium results in 24-48 hours.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-3 rounded-full"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 rounded-full border-foreground/20 hover:bg-muted"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
