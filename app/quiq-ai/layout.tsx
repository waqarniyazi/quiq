import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QUIQ AI – Symptom Checker & Test Recommender',
  description: 'Tell us your symptoms and get personalised test recommendations. QUIQ AI helps you identify the right self-test kits based on how you feel.',
  openGraph: {
    title: 'QUIQ AI – Smart Symptom Checker',
    description: 'Get personalised test recommendations based on your symptoms. Powered by QUIQ.',
    url: 'https://quiqhealth.in/quiq-ai',
  },
  twitter: {
    title: 'QUIQ AI – Smart Symptom Checker',
    description: 'Get personalised test recommendations based on your symptoms. Powered by QUIQ.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/quiq-ai',
  },
}

export default function QuiqAILayout({ children }: { children: React.ReactNode }) {
  return children
}
