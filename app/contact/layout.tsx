import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact QUIQ – Get in Touch',
  description: 'Have questions about our self-test kits? Contact the QUIQ team via email, phone, or visit our office in Mumbai. We respond within 24 hours.',
  openGraph: {
    title: 'Contact QUIQ – Get in Touch',
    description: 'Questions about self-test kits? Reach the QUIQ team. We respond within 24 hours.',
    url: 'https://quiqhealth.in/contact',
  },
  twitter: {
    title: 'Contact QUIQ – Get in Touch',
    description: 'Questions about self-test kits? Reach the QUIQ team. We respond within 24 hours.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
