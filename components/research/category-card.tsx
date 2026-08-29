import Link from 'next/link'
import type { ResearchCategory } from '@/lib/research/types'

export default function CategoryCard({ category }: { category: ResearchCategory }) {
  const Icon = category.icon

  return (
    <Link
      href={`/research/${category.slug}`}
      className="group flex flex-col h-full p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
          <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
        </div>
        <span className="text-xs text-white/25 tabular-nums">
          {String(category.number).padStart(2, '0')}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
        {category.title}
      </h2>
      <p className="text-sm text-white/50 leading-relaxed flex-1">{category.summary}</p>

      <p className="mt-5 text-xs text-white/30">
        {category.items.length} {category.items.length === 1 ? 'entry' : 'entries'}
      </p>
    </Link>
  )
}
