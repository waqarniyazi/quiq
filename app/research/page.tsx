import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import CategoryCard from '@/components/research/category-card'
import ResearchSearch from '@/components/research/research-search'
import type { SearchIndexCategory } from '@/components/research/research-search'
import { researchCategories, totalResearchItems } from '@/lib/research/data'

export default function ResearchPage() {
  // Icons cannot cross to the client component, so the search index is text-only.
  const searchIndex: SearchIndexCategory[] = researchCategories.map((category) => ({
    slug: category.slug,
    number: category.number,
    title: category.title,
    summary: category.summary,
    items: category.items.map((item) => ({
      name: item.name,
      slug: item.slug,
      tagline: item.tagline,
      vendor: item.vendor,
    })),
  }))

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-16">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center pt-12 pb-14">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-[1.1] pb-2">
                Research
              </h1>
              <p className="max-w-2xl mx-auto text-base md:text-lg text-white/50 leading-relaxed">
                What we have learned building a rapid self-test — {researchCategories.length} areas
                of the diagnostics stack, {totalResearchItems} entries, every claim traced to a
                source. Open to anyone who wants to understand how these tests actually work.
              </p>
            </div>

            <ResearchSearch index={searchIndex}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {researchCategories.map((category) => (
                  <CategoryCard key={category.slug} category={category} />
                ))}
              </div>
            </ResearchSearch>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
