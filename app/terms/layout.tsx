import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using quiqhealth.in and QUIQ self-test diagnostic kits. Read our terms of service, medical disclaimer, and governing laws.',
  alternates: {
    canonical: 'https://quiqhealth.in/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
