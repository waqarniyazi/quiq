import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'Review your selected QUIQ self-test kits and proceed to checkout. Free shipping across India.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://quiqhealth.in/cart',
  },
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children
}
