import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invest in QUIQ – Investor Relations & Partnership',
  description: 'Join us in democratising healthcare diagnostics in India. QUIQ is seeking strategic investors and partners. Learn about investment opportunities.',
  openGraph: {
    title: 'Invest in QUIQ – Investor Relations',
    description: 'Strategic investment opportunities in India\'s healthcare diagnostics revolution.',
    url: 'https://quiqhealth.in/investments',
  },
  twitter: {
    title: 'Invest in QUIQ – Investor Relations',
    description: 'Strategic investment opportunities in India\'s healthcare diagnostics revolution.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/investments',
  },
}

export default function InvestmentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
