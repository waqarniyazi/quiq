import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Breadcrumbs from '@/components/research/breadcrumbs'
import SourceList from '@/components/research/source-list'
import ResourceLinks from '@/components/research/resource-links'
import { getItem, getItemNeighbours, researchCategories } from '@/lib/research/data'
import { STATUS_LABELS, STATUS_STYLES } from '@/lib/research/types'

interface ItemPageProps {
  params: Promise<{ category: string; item: string }>
}

export function generateStaticParams() {
  return researchCategories.flatMap((category) =>
    category.items.map((item) => ({ category: category.slug, item: item.slug }))
  )
}

export async function generateMetadata({ params }: ItemPageProps): Promise<Metadata> {
  const { category: categorySlug, item: itemSlug } = await params
  const found = getItem(categorySlug, itemSlug)

  if (!found) return { title: 'Not found' }

  const { category, item } = found
  const url = `https://quiqhealth.in/research/${category.slug}/${item.slug}`
  const title = `${item.name} – ${category.title} – QUIQ Research`

  return {
    title,
    description: item.tagline,
    openGraph: { title: item.name, description: item.tagline, url },
    twitter: { title: item.name, description: item.tagline },
    alternates: { canonical: url },
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium uppercase tracking-wider text-white/30 mb-4">{title}</h2>
      {children}
    </section>
  )
}

function FactList({ entries }: { entries: string[] }) {
  return (
    <ul className="space-y-3">
      {entries.map((entry, index) => (
        <li key={index} className="flex gap-3 text-[15px] text-white/60 leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
          <span>{entry}</span>
        </li>
      ))}
    </ul>
  )
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { category: categorySlug, item: itemSlug } = await params
  const found = getItem(categorySlug, itemSlug)

  if (!found) notFound()

  const { category, item } = found
  const { previous, next } = getItemNeighbours(category, item.slug)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-10">
            <Breadcrumbs
              crumbs={[
                { label: 'Research', href: '/research' },
                { label: category.title, href: `/research/${category.slug}` },
                { label: item.name },
              ]}
            />

            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {item.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              {(item.vendor || item.origin) && (
                <span className="text-sm text-white/40">
                  {[item.vendor, item.origin].filter(Boolean).join(' · ')}
                </span>
              )}
              {item.status && (
                <span
                  className={`px-2.5 py-1 rounded-full border text-[11px] font-medium ${STATUS_STYLES[item.status]}`}
                >
                  {STATUS_LABELS[item.status]}
                </span>
              )}
            </div>

            <p className="text-lg text-white/60 leading-relaxed mb-14">{item.tagline}</p>

            <Section title="What it is">
              <p className="text-[15px] text-white/60 leading-[1.8]">{item.whatItIs}</p>
            </Section>

            <Section title="Why it matters to QUIQ">
              <p className="text-[15px] text-white/60 leading-[1.8]">{item.whyItMatters}</p>
            </Section>

            {item.keyFacts.length > 0 && (
              <Section title="Key facts">
                <FactList entries={item.keyFacts} />
              </Section>
            )}

            {item.considerations.length > 0 && (
              <Section title="Considerations and open questions">
                <FactList entries={item.considerations} />
              </Section>
            )}

            {item.resources && item.resources.length > 0 && (
              <Section title="Resources">
                <ResourceLinks resources={item.resources} />
              </Section>
            )}

            {item.sources.length > 0 && (
              <Section title="Sources">
                <SourceList sources={item.sources} />
              </Section>
            )}

            <div className="grid gap-4 sm:grid-cols-2 pt-8 border-t border-white/[0.06]">
              {previous ? (
                <Link
                  href={`/research/${category.slug}/${previous.slug}`}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                >
                  <span className="flex items-center gap-2 text-xs text-white/30 mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous
                  </span>
                  <span className="block text-sm font-medium text-white/80 group-hover:text-blue-400 transition-colors">
                    {previous.name}
                  </span>
                </Link>
              ) : (
                <span />
              )}

              {next && (
                <Link
                  href={`/research/${category.slug}/${next.slug}`}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 sm:text-right"
                >
                  <span className="flex items-center gap-2 text-xs text-white/30 mb-2 sm:justify-end">
                    Next
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="block text-sm font-medium text-white/80 group-hover:text-blue-400 transition-colors">
                    {next.name}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
