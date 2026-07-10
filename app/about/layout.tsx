import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About QUIQ – Our Mission, Story & Values',
  description: 'Empowering every Indian with affordable, accessible self-testing diagnostics. Learn about QUIQ\'s mission, values, and journey to democratise healthcare across India.',
  openGraph: {
    title: 'About QUIQ – Our Mission & Story',
    description: 'Empowering every Indian with affordable diagnostics. CE & IVD certified self-test kits under ₹99.',
    url: 'https://quiqhealth.in/about',
  },
  twitter: {
    title: 'About QUIQ – Our Mission & Story',
    description: 'Empowering every Indian with affordable diagnostics. CE & IVD certified self-test kits under ₹99.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
