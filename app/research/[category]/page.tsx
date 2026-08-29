import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Breadcrumbs from '@/components/research/breadcrumbs'
import ItemCard from '@/components/research/item-card'
import { getCategory, researchCategories } from '@/lib/research/data'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return researchCategories.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)

  if (!category) return { title: 'Not found' }

  const url = `https://quiqhealth.in/research/${category.slug}`

  return {
    title: `${category.title} – QUIQ Research`,
    description: category.summary,
    openGraph: { title: category.title, description: category.summary, url },
    twitter: { title: category.title, description: category.summary },
    alternates: { canonical: url },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = getCategory(slug)

  if (!category) notFound()

  const Icon = category.icon

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl pt-10">
            <Breadcrumbs
              crumbs={[
                { label: 'Research', href: '/research' },
                { label: category.title },
              ]}
            />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white/50" />
              </div>
              <span className="text-sm text-white/25 tabular-nums">
                {String(category.number).padStart(2, '0')} / {researchCategories.length}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {category.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">{category.summary}</p>

            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] mb-14">
              <p className="text-[15px] text-white/55 leading-[1.8]">{category.deepDive}</p>
            </div>

            <h2 className="text-sm font-medium uppercase tracking-wider text-white/30 mb-6">
              {category.items.length} {category.items.length === 1 ? 'Entry' : 'Entries'}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <ItemCard key={item.slug} item={item} categorySlug={category.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
