'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

/**
 * Serialisable shape of the catalogue. Icons are LucideIcon components and
 * cannot cross the server/client boundary, so the index carries text only —
 * the icon-bearing grid is passed through as `children` and rendered
 * untouched whenever the query is empty.
 */
export interface SearchIndexItem {
  name: string
  slug: string
  tagline: string
  vendor?: string
}

export interface SearchIndexCategory {
  slug: string
  number: number
  title: string
  summary: string
  items: SearchIndexItem[]
}

interface ResearchSearchProps {
  index: SearchIndexCategory[]
  children: React.ReactNode
}

export default function ResearchSearch({ index, children }: ResearchSearchProps) {
  const [query, setQuery] = useState('')
  const trimmed = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!trimmed) return []

    return index
      .map((category) => {
        const categoryMatches =
          category.title.toLowerCase().includes(trimmed) ||
          category.summary.toLowerCase().includes(trimmed)

        const items = category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(trimmed) ||
            item.tagline.toLowerCase().includes(trimmed) ||
            (item.vendor ?? '').toLowerCase().includes(trimmed)
        )

        // A category match keeps all of its entries visible.
        return { category, items: categoryMatches ? category.items : items, categoryMatches }
      })
      .filter((entry) => entry.categoryMatches || entry.items.length > 0)
  }, [index, trimmed])

  const matchCount = results.reduce((count, entry) => count + entry.items.length, 0)

  return (
    <div>
      <div className="relative max-w-xl mx-auto mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search categories, vendors, technologies…"
          aria-label="Search the research repository"
          className="w-full pl-11 pr-11 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all duration-300"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {!trimmed && children}

      {trimmed && (
        <div>
          <p className="text-sm text-white/40 mb-8">
            {results.length === 0
              ? `No matches for “${query.trim()}”.`
              : `${matchCount} ${matchCount === 1 ? 'entry' : 'entries'} across ${results.length} ${
                  results.length === 1 ? 'category' : 'categories'
                }.`}
          </p>

          <div className="space-y-10">
            {results.map(({ category, items }) => (
              <div key={category.slug}>
                <Link
                  href={`/research/${category.slug}`}
                  className="inline-flex items-baseline gap-3 mb-4 group"
                >
                  <span className="text-xs text-white/25 tabular-nums">
                    {String(category.number).padStart(2, '0')}
                  </span>
                  <span className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </span>
                </Link>

                <div className="grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/research/${category.slug}/${item.slug}`}
                      className="group block p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-white/45 leading-relaxed">{item.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
