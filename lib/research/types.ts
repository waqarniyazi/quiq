import type { LucideIcon } from 'lucide-react'

/** An external reference backing a claim in an item. */
export interface ResearchSource {
    title: string
    url: string
}

/**
 * A downloadable or linked artefact attached to an item — a whitepaper, spec
 * sheet, or vendor page. Files live in `/public/research/<category>/`.
 * Optional by design: the UI hides the section entirely when there are none.
 */
export interface ResearchResource {
    label: string
    href: string
    type: 'pdf' | 'link'
}

/** Where an item sits in QUIQ's evaluation pipeline. */
export type ResearchStatus = 'evaluating' | 'shortlisted' | 'in-use' | 'reference'

export interface ResearchItem {
    slug: string
    name: string
    vendor?: string
    origin?: string
    /** One line, shown on the category list card. */
    tagline: string
    /** Plain-language explanation — written for the public reader. */
    whatItIs: string
    /** Relevance to QUIQ specifically — written for the team. */
    whyItMatters: string
    keyFacts: string[]
    /** Trade-offs, risks, and open questions. */
    considerations: string[]
    status?: ResearchStatus
    sources: ResearchSource[]
    resources?: ResearchResource[]
}

export interface ResearchCategory {
    slug: string
    number: number
    title: string
    icon: LucideIcon
    /** One or two sentences, shown on the index card. */
    summary: string
    /** Longer orientation, shown at the top of the category page. */
    deepDive: string
    items: ResearchItem[]
}

export const STATUS_LABELS: Record<ResearchStatus, string> = {
    evaluating: 'Evaluating',
    shortlisted: 'Shortlisted',
    'in-use': 'In use',
    reference: 'Reference',
}

export const STATUS_STYLES: Record<ResearchStatus, string> = {
    evaluating: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    shortlisted: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    'in-use': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    reference: 'bg-white/5 text-white/60 border-white/10',
}
