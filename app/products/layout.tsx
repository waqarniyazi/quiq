import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Test Kits – Browse All Products',
  description: 'Explore QUIQ\'s range of CE & IVD certified at-home self-test kits. From vitamin tests to cancer markers, all priced under ₹99 with free delivery across India.',
  openGraph: {
    title: 'Self-Test Kits – Browse All Products | QUIQ',
    description: 'CE & IVD certified at-home test kits under ₹99. Vitamins, cholesterol, thyroid, diabetes & more.',
    url: 'https://quiqhealth.in/products',
  },
  twitter: {
    title: 'Self-Test Kits – Browse All Products | QUIQ',
    description: 'CE & IVD certified at-home test kits under ₹99. Vitamins, cholesterol, thyroid, diabetes & more.',
  },
  alternates: {
    canonical: 'https://quiqhealth.in/products',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
