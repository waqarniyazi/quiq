import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart'
import { LanguageProvider } from '@/lib/i18n/context'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://quiqhealth.in'),
  title: {
    default: 'QUIQ – Affordable At-Home Self-Test Diagnostics | Know Your Health',
    template: '%s | QUIQ',
  },
  description: 'Premium at-home self-test kits under ₹99. CE & IVD certified rapid diagnostics with results in minutes. Democratising healthcare across India.',
  keywords: [
    'self-test kits', 'at-home diagnostics', 'rapid test India', 'health test kit',
    'CE certified', 'IVD certified', 'affordable diagnostics', 'QUIQ', 'quiqhealth',
    'home blood test', 'self testing', 'health screening India', 'rapid diagnostics',
    'vitamin test', 'cholesterol test', 'diabetes test', 'thyroid test',
  ],
  authors: [{ name: 'QUIQ', url: 'https://quiqhealth.in' }],
  creator: 'Santa Clara Wellness Private Limited',
  publisher: 'QUIQ',
  category: 'health',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://quiqhealth.in',
    siteName: 'QUIQ',
    title: 'QUIQ – Affordable At-Home Self-Test Diagnostics',
    description: 'Premium at-home self-test kits under ₹99. CE & IVD certified rapid diagnostics with results in minutes.',
    images: [
      {
        url: '/quiq-logo.png',
        width: 1200,
        height: 630,
        alt: 'QUIQ – Self-Test Diagnostics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUIQ – Affordable At-Home Self-Test Diagnostics',
    description: 'Premium at-home self-test kits under ₹99. CE & IVD certified. Results in minutes.',
    images: ['/quiq-logo.png'],
  },
  alternates: {
    canonical: 'https://quiqhealth.in',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QUIQ',
  legalName: 'Santa Clara Wellness Private Limited',
  url: 'https://quiqhealth.in',
  logo: 'https://quiqhealth.in/quiq-logo.png',
  sameAs: [
    'https://www.linkedin.com/company/quiqhealth',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-22-6725-8000',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6C3, Gundecha Enclave, Kherani Road, Saki Naka',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400072',
    addressCountry: 'IN',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QUIQ',
  url: 'https://quiqhealth.in',
  description: 'Affordable at-home self-test diagnostics under ₹99. CE & IVD certified.',
  publisher: {
    '@type': 'Organization',
    name: 'QUIQ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
