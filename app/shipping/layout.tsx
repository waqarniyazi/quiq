import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Free shipping across India on all QUIQ self-test kits. Delivery in 3-5 business days. Metro cities: 1-2 days. Discreet, secure packaging.',
  alternates: {
    canonical: 'https://quiqhealth.in/shipping',
  },
}

export default function ShippingLayout({ children }: { children: React.ReactNode }) {
  return children
}
