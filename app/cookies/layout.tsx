import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How QUIQ uses cookies on quiqhealth.in. Learn about the types of cookies we use and how to manage your preferences.',
  alternates: {
    canonical: 'https://quiqhealth.in/cookies',
  },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
