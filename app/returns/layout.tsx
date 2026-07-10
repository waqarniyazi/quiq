import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns Policy',
  description: 'Easy returns on QUIQ self-test kits. Learn how to initiate a return, eligibility conditions, and our hassle-free return process.',
  alternates: {
    canonical: 'https://quiqhealth.in/returns',
  },
}

export default function ReturnsLayout({ children }: { children: React.ReactNode }) {
  return children
}
