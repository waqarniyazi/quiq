import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How QUIQ Works – 7 Simple Steps to Self-Testing',
  description: 'From ordering to results in minutes. Learn how to use QUIQ self-test kits at home — no lab visits, no appointments, no hassle. Step-by-step guide included.',
  openGraph: {
    title: 'How QUIQ Works – 7 Simple Steps',
    description: 'From ordering to results in minutes. Self-test at home with no lab visits needed.',
    url: 'https://quiqhealth.in/how-it-works',
  },
  twitter: {
    title: 'How QUIQ Works – 7 Simple Steps',
    description: 'From ordering to results in minutes. Self-test at home with no lab visits needed.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/how-it-works',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How accurate are the tests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All QUIQ tests are CE & IVD certified with clinical validation. Sensitivity and specificity are above 95% for most tests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does delivery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver across India within 3-5 business days. Metro cities often receive orders in 1-2 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a prescription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our self-tests are designed for home use and do not require a prescription. However, we recommend consulting a doctor for any positive results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Your test results are only known to you. We do not store or transmit any personal health data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this for official medical records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tests are for screening purposes. For official medical records, please visit a certified laboratory. However, our results can guide your next steps.',
      },
    },
  ],
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
