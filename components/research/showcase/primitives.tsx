import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

/** Deck accent — the yellow used for highlights on the QUIQ research slides. */
export const ACCENT = 'text-amber-400'

/** "Lancet: Research" style title — first part white, second part accent. */
export function SlideTitle({ lead, accent, as = 'h2' }: { lead: string; accent: string; as?: 'h1' | 'h2' }) {
  const Tag = as
  return (
    <Tag className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
      {lead}: <span className={ACCENT}>{accent}</span>
    </Tag>
  )
}

/** Small grey caps label followed by a hairline, as on the slides. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45 whitespace-nowrap">
        {children}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  )
}

export type TagTone = 'accent' | 'muted'

export function Tag({ children, tone = 'accent', href }: { children: React.ReactNode; tone?: TagTone; href?: string }) {
  const className = `text-xs md:text-sm font-bold uppercase tracking-wide ${
    tone === 'accent' ? ACCENT : 'text-white/55'
  }`
  if (!href) return <span className={className}>{children}</span>
  return (
    <ExternalAnchor href={href} className={`${className} underline underline-offset-4 decoration-current/40 hover:decoration-current`}>
      {children}
    </ExternalAnchor>
  )
}

export function ExternalAnchor({
  href,
  className = '',
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

/** Muted underlined link with an external icon — "Product Rsrch", source domains. */
export function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <ExternalAnchor
      href={href}
      className="inline-flex items-center gap-1 text-sm text-sky-300/70 underline underline-offset-4 decoration-sky-300/30 hover:text-sky-300 hover:decoration-sky-300/70 transition-colors"
    >
      {children}
      <ExternalLink className="w-3 h-3 opacity-60" />
    </ExternalAnchor>
  )
}

/** Transparent product cut-out on the dark card — images come from the QUIQ deck. */
export function Cutout({
  src,
  alt,
  className = '',
  sizes = '(min-width: 768px) 240px, 40vw',
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
    </div>
  )
}

export function Card({
  highlight = false,
  className = '',
  children,
}: {
  highlight?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-2xl border bg-[#141414] ${
        highlight ? 'border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.25)]' : 'border-white/[0.09]'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/** Link to the long-form item page. */
export function ReadMore({ href, label = 'Full notes' }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white transition-colors"
    >
      {label}
      <ArrowUpRight className="w-3.5 h-3.5" />
    </Link>
  )
}

/** Collapsible extra context under a slide-level highlight. */
export function More({ summary = 'More context', children }: { summary?: string; children: React.ReactNode }) {
  return (
    <details className="group mt-3">
      <summary className="cursor-pointer list-none text-xs font-medium text-white/40 hover:text-white/70 transition-colors [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">+ {summary}</span>
        <span className="hidden group-open:inline">− Hide</span>
      </summary>
      <div className="mt-3 space-y-2 text-sm text-white/55 leading-relaxed">{children}</div>
    </details>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-amber-400/40 ${className}`} />
}
