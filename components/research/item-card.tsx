import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ResearchItem } from '@/lib/research/types'
import { STATUS_LABELS, STATUS_STYLES } from '@/lib/research/types'

interface ItemCardProps {
  item: ResearchItem
  categorySlug: string
}

export default function ItemCard({ item, categorySlug }: ItemCardProps) {
  return (
    <Link
      href={`/research/${categorySlug}/${item.slug}`}
      className="group block p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {item.name}
          </h3>
          {(item.vendor || item.origin) && (
            <p className="mt-1 text-xs text-white/35">
              {[item.vendor, item.origin].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-white/20 group-hover:text-white/60 transition-colors duration-300" />
      </div>

      <p className="text-sm text-white/50 leading-relaxed">{item.tagline}</p>

      {item.status && (
        <span
          className={`inline-block mt-4 px-2.5 py-1 rounded-full border text-[11px] font-medium ${STATUS_STYLES[item.status]}`}
        >
          {STATUS_LABELS[item.status]}
        </span>
      )}
    </Link>
  )
}
