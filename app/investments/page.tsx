'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import {
    TrendingUp, Factory, FlaskConical, Handshake, Mail, ArrowRight,
    Building2, Globe, Users, Target, ImageIcon
} from 'lucide-react'

const useFunds = [
    {
        icon: Factory,
        title: 'Manufacturing Facility',
        description: 'Setting up an in-house manufacturing unit in India to reduce costs and increase capacity.',
        allocation: '45%',
    },
    {
        icon: FlaskConical,
        title: 'Research & Development',
        description: 'Developing next-generation rapid diagnostics for cancer screening, fertility, and metabolic disorders.',
        allocation: '40%',
    },
    {
        icon: Globe,
        title: 'Regulatory & Compliance',
        description: 'Expanding certifications for international markets and NABL accreditation.',
        allocation: '15%',
    },
]

export default function InvestmentsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="pt-24 pb-16">
                {/* Hero */}
                <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Partnership Opportunity</p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
                                Invest in QUIQ
                            </h1>
                            <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto">
                                We are seeking strategic partners who share our vision of democratising healthcare diagnostics in India.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Investment Highlights */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
                            >
                                <Handshake className="w-8 h-8 text-white/30 mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-white/80 mb-1">3</h3>
                                <p className="text-sm text-white/40">Strategic Investors Sought</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
                            >
                                <TrendingUp className="w-8 h-8 text-white/30 mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-white/80 mb-1">10%</h3>
                                <p className="text-sm text-white/40">Equity per Investor</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
                            >
                                <Target className="w-8 h-8 text-white/30 mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-white/80 mb-1">$2M</h3>
                                <p className="text-sm text-white/40">Investment per Investor</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Not Just Money */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 sm:p-12 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">Beyond Capital</h2>
                            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-6">
                                We seek investments not just for money — but for <strong className="text-white/80">strategic alliance</strong>.
                                We are looking for partners who can bring value beyond capital:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Factory, text: 'Manufacturing & supply chain expertise' },
                                    { icon: FlaskConical, text: 'R&D and scientific partnerships' },
                                    { icon: Globe, text: 'Distribution network in India & beyond' },
                                    { icon: Users, text: 'Healthcare industry connections' },
                                ].map((item, i) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                            <Icon className="w-4 h-4 text-white/30 flex-shrink-0" />
                                            <span className="text-sm text-white/50">{item.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Use of Funds */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold gradient-text mb-3">Use of Funds</h2>
                            <p className="text-sm text-white/40">Not marketing. Manufacturing & research.</p>
                        </motion.div>

                        <div className="space-y-4">
                            {useFunds.map((fund, index) => {
                                const Icon = fund.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                                                <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="text-base font-semibold text-white/70 group-hover:text-white transition-colors">{fund.title}</h3>
                                                    <span className="text-sm font-mono text-white/30">{fund.allocation}</span>
                                                </div>
                                                <p className="text-sm text-white/40 leading-relaxed">{fund.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Office Renovation Gallery */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold gradient-text mb-3">Our Renovated Office</h2>
                            <p className="text-sm text-white/40">State-of-the-art workspace in Andheri East, Mumbai</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { label: 'Reception & Lobby', desc: 'Modern visitor welcome area' },
                                { label: 'R&D Laboratory', desc: 'Advanced diagnostics research lab' },
                                { label: 'Conference Room', desc: 'Board meetings & investor presentations' },
                                { label: 'Open Office', desc: 'Collaborative team workspace' },
                                { label: 'Quality Control Lab', desc: 'Product testing & validation' },
                                { label: 'Warehouse', desc: 'Inventory management & fulfillment' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
                                >
                                    <div className="aspect-video flex items-center justify-center bg-white/[0.01]">
                                        <div className="text-center">
                                            <ImageIcon className="w-8 h-8 text-white/10 mx-auto mb-2" />
                                            <p className="text-[10px] text-white/20">Photo placeholder</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-white/60 mb-0.5">{item.label}</h3>
                                        <p className="text-xs text-white/30">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center p-8 sm:p-12 rounded-3xl border border-white/[0.06] bg-white/[0.02]"
                        >
                            <Building2 className="w-8 h-8 text-white/30 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-white/80 mb-3">Interested in Partnering?</h2>
                            <p className="text-sm text-white/40 mb-6 max-w-md mx-auto">
                                Contact <span className="text-white/70">Mr. Abhijit Bhabhe</span> to discuss partnership opportunities.
                            </p>
                            <a
                                href="mailto:abhijit@quiq.health"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all"
                            >
                                <Mail className="w-4 h-4" />
                                abhijit@quiq.health
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <p className="text-xs text-white/30 mt-4">
                                Santa Clara Wellness Pvt. Ltd. · Mumbai, India
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
