'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactCards = [
    { icon: Mail, title: 'Email', value: 'info@quiq.health', sub: 'We respond within 24 hours' },
    { icon: Phone, title: 'Phone', value: '+91 22 6725 8000', sub: 'Mon–Sat, 10am–6pm IST' },
    { icon: MapPin, title: 'Office', value: 'Mumbai, India', sub: '6C3, Gundecha Enclave, Saki Naka' },
    { icon: Clock, title: 'Working Hours', value: '10 AM – 6 PM IST', sub: 'Monday to Saturday' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Reach Out</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">Get in Touch</h1>
              <p className="text-base text-white/40 max-w-xl mx-auto">
                Have questions about our tests? We&apos;re here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center mx-auto mb-3 group-hover:bg-white/[0.1] transition-colors">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
                    </div>
                    <h3 className="text-sm font-semibold text-white/70 mb-1">{card.title}</h3>
                    <p className="text-sm text-white/50 mb-1">{card.value}</p>
                    <p className="text-xs text-white/30">{card.sub}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <h2 className="text-xl font-bold text-white/80 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-white/40 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col"
            >
              <h2 className="text-xl font-bold text-white/80 mb-6">Our Office</h2>
              <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.04] p-6 mb-6">
                <p className="text-sm text-white/60 font-medium mb-1">Santa Clara Wellness Private Limited</p>
                <p className="text-sm text-white/40 leading-relaxed">
                  6C3, Gundecha Enclave,<br />
                  Kherani Road, Saki Naka,<br />
                  Andheri East, Mumbai – 400072,<br />
                  INDIA
                </p>
              </div>
              <div className="space-y-3">
                <a href="tel:+912267258000" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 22 6725 8000
                </a>
                <a href="mailto:info@quiq.health" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  info@quiq.health
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
