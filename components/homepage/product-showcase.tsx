'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/lib/animations'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Vitamin-D Self Test',
    description: 'Check your Vitamin D levels instantly. Low D levels indicate deficiency, which our tests can help diagnose.',
    price: '$49.99',
    features: ['Results in Minutes', 'Finger-Prick Collection', 'Clinically Tested'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product%20Image.png-ZHJRxoLD0ng09cw9Mqcyer5MZvZzSK.jpeg',
  },
  {
    id: 2,
    name: 'Complete Blood Panel',
    description: 'Comprehensive blood work including cholesterol, glucose, and liver function tests.',
    price: '$99.99',
    features: ['10+ Biomarkers', 'Lab Results in 24h', 'Professional Analysis'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product%20Image.png-ZHJRxoLD0ng09cw9Mqcyer5MZvZzSK.jpeg',
  },
  {
    id: 3,
    name: 'Immunity Strength Test',
    description: 'Measure your immune system strength and get personalized recommendations to boost immunity.',
    price: '$79.99',
    features: ['Immune Health Score', 'Personalized Recommendations', 'Trend Tracking'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product%20Image.png-ZHJRxoLD0ng09cw9Mqcyer5MZvZzSK.jpeg',
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Top Tests
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose from our range of premium diagnostic tests, all designed for simplicity and accuracy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-muted h-64">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-6 flex-1">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {product.price}
                  </span>
                  <Button
                    asChild
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-accent/50 text-accent hover:bg-accent/10"
          >
            <Link href="/products">Browse All Tests</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
