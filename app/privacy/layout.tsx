import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How QUIQ (Santa Clara Wellness Pvt. Ltd.) collects, uses, and safeguards your personal information. Your health data stays private.',
  alternates: {
    canonical: 'https://quiqhealth.in/privacy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
