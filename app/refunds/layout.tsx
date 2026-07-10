import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refunds Policy',
  description: 'QUIQ refund process: request within 24 hours, approved within 48 hours, refund in 5-7 business days. Fair and transparent refund policy.',
  alternates: {
    canonical: 'https://quiqhealth.in/refunds',
  },
}

export default function RefundsLayout({ children }: { children: React.ReactNode }) {
  return children
}
