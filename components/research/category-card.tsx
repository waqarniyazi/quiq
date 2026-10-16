import Link from 'next/link'
import type { ResearchCategory } from '@/lib/research/types'

/** Two columns on phones, ~360px on desktop — lets the browser pick the right srcSet entry. */
const IMAGE_SIZES = '(min-width: 1024px) 360px, 50vw'

interface CategoryCardProps {
  category: ResearchCategory
  /** Load eagerly for cards likely above the fold; everything else is lazy. */
  priority?: boolean
}

export default function CategoryCard({ category, priority = false }: CategoryCardProps) {
  const Icon = category.icon
  const { image } = category

  return (
    <Link
      href={`/research/${category.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden bg-white/[0.04] bg-cover bg-center"
        style={image?.lqip ? { backgroundImage: `url(${image.lqip})` } : undefined}
      >
        {image ? (
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
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-8 h-8 text-white/20" />
          </div>
        )}
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 rounded-md bg-black/60 backdrop-blur px-1.5 py-0.5 text-[10px] sm:text-xs text-white/70 tabular-nums">
          {String(category.number).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
          <Icon className="hidden sm:block w-4 h-4 flex-shrink-0 text-white/40 group-hover:text-white/70 transition-colors" />
          <h2 className="text-sm sm:text-lg font-semibold leading-snug text-white group-hover:text-blue-400 transition-colors duration-300">
            {category.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-white/50 leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none">
          {category.summary}
        </p>

        <p className="mt-3 sm:mt-5 text-[11px] sm:text-xs text-white/30">
          {category.items.length} {category.items.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>
    </Link>
  )
}
