import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ResearchItem } from '@/lib/research/types'
import { STATUS_LABELS, STATUS_STYLES } from '@/lib/research/types'

/** One column on phones, two from `sm` inside a max-w-4xl container (~430px each). */
const IMAGE_SIZES = '(min-width: 640px) 430px, 100vw'

interface ItemCardProps {
  item: ResearchItem
  categorySlug: string
  /** Load eagerly for cards likely above the fold; everything else is lazy. */
  priority?: boolean
}

export default function ItemCard({ item, categorySlug, priority = false }: ItemCardProps) {
  const { image } = item

  return (
    <Link
      href={`/research/${categorySlug}/${item.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      {image && (
        <div
          className="relative aspect-[4/3] overflow-hidden bg-white/[0.04] bg-cover bg-center"
          style={image.lqip ? { backgroundImage: `url(${image.lqip})` } : undefined}
        >
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={IMAGE_SIZES}
            alt={image.alt}
            width={640}
            height={480}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
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

        <p className="text-sm text-white/50 leading-relaxed flex-1">{item.tagline}</p>

        {item.status && (
          <span
            className={`self-start mt-4 px-2.5 py-1 rounded-full border text-[11px] font-medium ${STATUS_STYLES[item.status]}`}
          >
            {STATUS_LABELS[item.status]}
          </span>
        )}
      </div>
    </Link>
  )
}
