'use client'

import { Children, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginatedGridProps {
  children: React.ReactNode
  /** Keep this a multiple of 6 so pages fill both the 2- and 3-column grids. */
  pageSize?: number
}

/**
 * Splits server-rendered cards into pages. Only the current page is mounted,
 * so images on later pages are not fetched until the reader gets there
 * (`hidden` cards are not enough — Chrome still fetches their lazy images).
 * The page is mirrored in `?page=` so a reload or shared link keeps it.
 */
export default function PaginatedGrid({ children, pageSize = 12 }: PaginatedGridProps) {
  const cards = Children.toArray(children)
  const totalPages = Math.max(1, Math.ceil(cards.length / pageSize))
  const [page, setPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fromUrl = Number(new URLSearchParams(window.location.search).get('page'))
    if (Number.isInteger(fromUrl) && fromUrl >= 1 && fromUrl <= totalPages) setPage(fromUrl)
  }, [totalPages])

  const goTo = (next: number) => {
    setPage(next)
    const url = new URL(window.location.href)
    if (next === 1) url.searchParams.delete('page')
    else url.searchParams.set('page', String(next))
    window.history.replaceState(null, '', url)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gridRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    // Move focus to the new page so keyboard and screen-reader users land on it.
    gridRef.current?.focus({ preventScroll: true })
  }

  const start = (page - 1) * pageSize
  const end = start + pageSize

  return (
    <div>
      <div
        ref={gridRef}
        tabIndex={-1}
        aria-label={totalPages > 1 ? `Research areas, page ${page} of ${totalPages}` : 'Research areas'}
        className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 scroll-mt-28 outline-none"
      >
        {cards.slice(start, end)}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Research pages" className="flex items-center justify-center gap-2 pt-10">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-label={`Page ${n}`}
              aria-current={n === page ? 'page' : undefined}
              className={`w-11 h-11 rounded-lg text-sm font-medium transition-all ${
                n === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </nav>
      )}
    </div>
  )
}
