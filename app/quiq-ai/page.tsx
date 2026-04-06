'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
    Brain, Heart, Bone, Activity, Eye, Apple, Shield, FlaskConical,
    ChevronRight, ArrowLeft, Sparkles, RotateCcw
} from 'lucide-react'

// ——— Data ———

interface Category {
    id: string
    label: string
    icon: typeof Brain
    color: string
    symptoms: Symptom[]
}

interface Symptom {
    id: string
    label: string
    tests: string[] // product slugs
}

const categories: Category[] = [
    {
        id: 'general', label: 'General Wellness', icon: Activity, color: 'from-blue-500/20 to-cyan-500/20',
        symptoms: [
            { id: 'fatigue', label: 'Persistent fatigue', tests: ['vitamin-d', 'vitamin-b12', 'iron-deficiency', 'tsh', 'hba1c'] },
            { id: 'weakness', label: 'Muscle weakness', tests: ['vitamin-d', 'vitamin-b12', 'iron-deficiency'] },
            { id: 'weight-change', label: 'Unexplained weight change', tests: ['tsh', 'hba1c', 'cholesterol'] },
            { id: 'frequent-illness', label: 'Getting sick often', tests: ['vitamin-d', 'vitamin-b12', 'crp'] },
            { id: 'hair-loss', label: 'Hair loss', tests: ['iron-deficiency', 'tsh', 'vitamin-d'] },
        ],
    },
    {
        id: 'digestive', label: 'Digestive Health', icon: Apple, color: 'from-emerald-500/20 to-green-500/20',
        symptoms: [
            { id: 'bloating', label: 'Bloating after meals', tests: ['lactose-intolerance', 'h-pylori'] },
            { id: 'acidity', label: 'Frequent acidity / heartburn', tests: ['h-pylori'] },
            { id: 'stomach-pain', label: 'Chronic stomach pain', tests: ['h-pylori', 'crp'] },
            { id: 'nausea', label: 'Nausea', tests: ['h-pylori', 'iron-deficiency'] },
            { id: 'dairy-issues', label: 'Discomfort after dairy', tests: ['lactose-intolerance'] },
        ],
    },
    {
        id: 'cardiac', label: 'Heart & Circulation', icon: Heart, color: 'from-rose-500/20 to-pink-500/20',
        symptoms: [
            { id: 'chest-pain', label: 'Chest discomfort', tests: ['troponin-i', 'troponin-t', 'crp'] },
            { id: 'shortness-breath', label: 'Shortness of breath', tests: ['troponin-i', 'iron-deficiency'] },
            { id: 'palpitations', label: 'Palpitations', tests: ['tsh', 'troponin-i'] },
            { id: 'high-cholesterol', label: 'Concerned about cholesterol', tests: ['cholesterol', 'triglycerides'] },
        ],
    },
    {
        id: 'bone-joint', label: 'Bones & Joints', icon: Bone, color: 'from-amber-500/20 to-orange-500/20',
        symptoms: [
            { id: 'bone-pain', label: 'Bone pain', tests: ['vitamin-d', 'crp'] },
            { id: 'joint-stiffness', label: 'Joint stiffness', tests: ['crp', 'vitamin-d'] },
            { id: 'muscle-cramps', label: 'Muscle cramps', tests: ['vitamin-d', 'iron-deficiency'] },
            { id: 'fracture-risk', label: 'Worried about bone health', tests: ['vitamin-d'] },
        ],
    },
    {
        id: 'mental', label: 'Mental & Neurological', icon: Brain, color: 'from-violet-500/20 to-purple-500/20',
        symptoms: [
            { id: 'brain-fog', label: 'Brain fog', tests: ['vitamin-b12', 'tsh', 'iron-deficiency'] },
            { id: 'tingling', label: 'Numbness / tingling', tests: ['vitamin-b12', 'hba1c'] },
            { id: 'mood-swings', label: 'Mood swings', tests: ['tsh', 'vitamin-d', 'vitamin-b12'] },
            { id: 'poor-concentration', label: 'Poor concentration', tests: ['iron-deficiency', 'tsh', 'vitamin-b12'] },
        ],
    },
    {
        id: 'allergy', label: 'Allergies & Respiratory', icon: Eye, color: 'from-teal-500/20 to-cyan-500/20',
        symptoms: [
            { id: 'sneezing', label: 'Frequent sneezing', tests: ['dust-allergy', 'pet-allergy'] },
            { id: 'watery-eyes', label: 'Watery / itchy eyes', tests: ['dust-allergy', 'pet-allergy'] },
            { id: 'nasal-congestion', label: 'Nasal congestion indoors', tests: ['dust-allergy'] },
            { id: 'pet-reaction', label: 'Symptoms around pets', tests: ['pet-allergy'] },
        ],
    },
    {
        id: 'infection', label: 'Infection Screening', icon: Shield, color: 'from-red-500/20 to-rose-500/20',
        symptoms: [
            { id: 'fever-monsoon', label: 'High fever (monsoon season)', tests: ['dengue', 'malaria'] },
            { id: 'chills', label: 'Fever with chills', tests: ['malaria', 'procalcitonin'] },
            { id: 'body-aches', label: 'Body aches with fever', tests: ['dengue', 'malaria', 'crp'] },

        ],
    },
    {
        id: 'mens-health', label: 'Men\'s Health', icon: FlaskConical, color: 'from-gray-400/20 to-gray-500/20',
        symptoms: [
            { id: 'urinary', label: 'Urinary issues (over 50)', tests: ['psa'] },
            { id: 'prostate-worry', label: 'Prostate health concern', tests: ['psa'] },
            { id: 'screening', label: 'General health screening', tests: ['vitamin-d', 'vitamin-b12', 'cholesterol', 'hba1c', 'tsh'] },
        ],
    },
]

// Product name lookup
const productNames: Record<string, string> = {
    'vitamin-d': 'Vitamin D Test', 'vitamin-b12': 'Vitamin B12 Test', 'iron-deficiency': 'Iron Deficiency Test',
    'tsh': 'TSH Thyroid Test', 'hba1c': 'HbA1c Diabetes Test', 'cholesterol': 'Cholesterol Test',
    'triglycerides': 'Triglycerides Test', 'lactose-intolerance': 'Lactose Intolerance Test',
    'h-pylori': 'H. pylori Test', 'pet-allergy': 'Pet Allergy Test', 'dust-allergy': 'Dust Allergy Test',
    'psa': 'PSA Prostate Test', 'crp': 'CRP Inflammation Test', 'dengue': 'Dengue Test',
    'malaria': 'Malaria Test', 'procalcitonin': 'Procalcitonin Test',
    'troponin-i': 'Troponin I Test', 'troponin-t': 'Troponin T Test',
    'ferritin': 'Ferritin Test',
}

export default function QuiqAIPage() {
    const [step, setStep] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

    // Deduplicate recommended tests based on selected symptoms
    const recommendedTests = (() => {
        if (!selectedCategory) return []
        const testSet = new Set<string>()
        selectedCategory.symptoms
            .filter(s => selectedSymptoms.includes(s.id))
            .forEach(s => s.tests.forEach(t => testSet.add(t)))
        return Array.from(testSet)
    })()

    const reset = () => {
        setStep(1)
        setSelectedCategory(null)
        setSelectedSymptoms([])
    }

    const toggleSymptom = (id: string) => {
        setSelectedSymptoms(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-white/30" />
                            <p className="text-xs text-white/30 tracking-[0.3em] uppercase">AI Symptom Checker</p>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">QUIQ AI</h1>
                        <p className="text-sm text-white/40">Tell us how you feel. We&apos;ll recommend the right tests.</p>
                    </motion.div>

                    {/* Progress */}
                    <div className="flex items-center justify-center gap-2 mb-10">
                        {[1, 2, 3].map(s => (
                            <div key={s} className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${step >= s ? 'bg-white text-black' : 'bg-white/[0.06] text-white/30'
                                    }`}>
                                    {s}
                                </div>
                                {s < 3 && <div className={`w-8 h-px ${step > s ? 'bg-white/40' : 'bg-white/10'}`} />}
                            </div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {/* Step 1: Category */}
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                <h2 className="text-lg font-semibold text-white/70 mb-6 text-center">What area concerns you?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {categories.map((cat) => {
                                        const Icon = cat.icon
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => {
                                                    setSelectedCategory(cat)
                                                    setSelectedSymptoms([])
                                                    setStep(2)
                                                }}
                                                className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-gradient-to-br ${cat.color} hover:border-white/[0.12] transition-all duration-300 text-left`}
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                                                    <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{cat.label}</h3>
                                                    <p className="text-[10px] text-white/30">{cat.symptoms.length} symptoms</p>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                                            </button>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Symptoms */}
                        {step === 2 && selectedCategory && (
                            <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>
                                <h2 className="text-lg font-semibold text-white/70 mb-2 text-center">{selectedCategory.label}</h2>
                                <p className="text-xs text-white/30 mb-6 text-center">Select all symptoms that apply</p>

                                <div className="space-y-2 mb-8">
                                    {selectedCategory.symptoms.map((symptom) => {
                                        const active = selectedSymptoms.includes(symptom.id)
                                        return (
                                            <button
                                                key={symptom.id}
                                                onClick={() => toggleSymptom(symptom.id)}
                                                className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${active
                                                        ? 'bg-white/[0.06] border-white/[0.15] text-white'
                                                        : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/[0.04]'
                                                    }`}
                                            >
                                                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${active ? 'bg-white border-white' : 'border-white/20'
                                                    }`}>
                                                    {active && <span className="text-black text-xs font-bold">✓</span>}
                                                </div>
                                                <span className="text-sm">{symptom.label}</span>
                                            </button>
                                        )
                                    })}
                                </div>

                                <button
                                    onClick={() => setStep(3)}
                                    disabled={selectedSymptoms.length === 0}
                                    className="w-full py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4" /> Get Recommendations
                                </button>
                            </motion.div>
                        )}

                        {/* Step 3: Results */}
                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                <button onClick={() => setStep(2)} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>

                                <div className="text-center mb-8">
                                    <Sparkles className="w-6 h-6 text-white/30 mx-auto mb-3" />
                                    <h2 className="text-xl font-bold text-white/80 mb-2">Recommended Tests</h2>
                                    <p className="text-xs text-white/30">Based on your symptoms, we recommend these {recommendedTests.length} tests</p>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {recommendedTests.map((slug, i) => (
                                        <motion.div
                                            key={slug}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                        >
                                            <Link
                                                href={`/products/${slug}`}
                                                className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
                                                        <FlaskConical className="w-4 h-4 text-white/40" />
                                                    </div>
                                                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                                        {productNames[slug] || slug}
                                                    </span>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-6">
                                    <p className="text-[11px] text-white/30 leading-relaxed">
                                        ⚕️ <strong className="text-white/50">Disclaimer:</strong> QUIQ AI provides general guidance based on common symptoms. It is not a medical diagnosis. Always consult a qualified healthcare professional for medical advice.
                                    </p>
                                </div>

                                <button
                                    onClick={reset}
                                    className="w-full py-3 rounded-xl border border-white/[0.08] text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-all flex items-center justify-center gap-2"
                                >
                                    <RotateCcw className="w-4 h-4" /> Start Over
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </div>
    )
}
