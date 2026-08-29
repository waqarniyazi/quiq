import type { Metadata } from 'next'
import Script from 'next/script'

const title = 'Research – QUIQ\'s Rapid Diagnostics Repository'
const description =
  'QUIQ\'s open research repository across 18 areas of the rapid-diagnostics stack — test strips, cassettes, conjugates, lancets, readers, packaging, labs and channels — with sources.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://quiqhealth.in/research',
  },
  twitter: {
    title,
    description,
  },
  alternates: {
    canonical: 'https://quiqhealth.in/research',
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'QUIQ Research Repository',
  description,
  url: 'https://quiqhealth.in/research',
  isPartOf: {
    '@type': 'WebSite',
    name: 'QUIQ',
    url: 'https://quiqhealth.in',
  },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="research-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {children}
    </>
  )
}
