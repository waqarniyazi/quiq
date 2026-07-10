import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrated Test Kit – All-in-One Diagnostics',
  description: 'Explore QUIQ\'s integrated self-test kit. Multiple tests in one compact device. See key specs, exploded view, and performance data.',
  openGraph: {
    title: 'Integrated Test Kit – QUIQ',
    description: 'Multiple tests in one compact device. Next-generation diagnostics by QUIQ.',
    url: 'https://quiqhealth.in/integrated-test',
  },
  twitter: {
    title: 'Integrated Test Kit – QUIQ',
    description: 'Multiple tests in one compact device. Next-generation diagnostics by QUIQ.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/integrated-test',
  },
}

export default function IntegratedTestLayout({ children }: { children: React.ReactNode }) {
  return children
}
