'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Products: [
      { label: 'Vitamin D Test', href: '/products/vitamin-d' },
      { label: 'Iron Deficiency Test', href: '/products/iron-deficiency' },
      { label: 'TSH Thyroid Test', href: '/products/tsh' },
      { label: 'Vitamin B12 Test', href: '/products/vitamin-b12' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Blog', href: '/blog' },
      { label: 'Investments', href: '/investments' },
      { label: 'Contact', href: '/contact' },
    ],
    Support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Cart', href: '/cart' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  return (
    <footer className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-2xl" />
            <Image
              src="/quiq-logo.png"
              alt="QUIQ"
              width={200}
              height={200}
              className="w-48 sm:w-64 h-auto relative z-10 opacity-80"
            />
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Bottom */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/40">
              <a
                href="mailto:info@quiq.health"
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@quiq.health
              </a>
              <a
                href="tel:+912267258000"
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 22 6725 8000
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </span>
            </div>

            <p className="text-xs text-white/30">
              &copy; {currentYear} Santa Clara Wellness Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
