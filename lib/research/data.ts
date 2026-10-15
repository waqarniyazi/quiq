import { cache } from 'react'
import { sanityFetch } from '@/sanity/lib/client'
import { researchIcon } from './icons'
import type { ResearchCategory, ResearchItem } from './types'

type RawCategory = Omit<ResearchCategory, 'icon'> & { icon?: string }

const RESEARCH_QUERY = `*[_type == "researchCategory" && defined(slug.current)] | order(number asc) {
  "slug": slug.current,
  number,
  title,
  icon,
  summary,
  "deepDive": coalesce(deepDive, ""),
  "items": *[_type == "researchItem" && references(^._id) && defined(slug.current)] | order(order asc, name asc) {
    "slug": slug.current,
    name,
    vendor,
    origin,
    tagline,
    "whatItIs": coalesce(whatItIs, ""),
    "whyItMatters": coalesce(whyItMatters, ""),
    "keyFacts": coalesce(keyFacts, []),
    "considerations": coalesce(considerations, []),
    status,
    "sources": coalesce(sources[]{ title, url }, []),
    resources[]{ label, href, type }
  }
}`

/**
 * The key areas in display order, each with its items. Content lives in
 * Sanity (edit at /studio); one query feeds every research page.
 */
export const getResearchCategories = cache(async (): Promise<ResearchCategory[]> => {
  const categories = await sanityFetch<RawCategory[]>(RESEARCH_QUERY, {}, ['research'])
  return categories.map((category) => ({ ...category, icon: researchIcon(category.icon) }))
})

export async function getCategory(slug: string): Promise<ResearchCategory | undefined> {
  const categories = await getResearchCategories()
  return categories.find((category) => category.slug === slug)
}

export async function getItem(
  categorySlug: string,
  itemSlug: string
): Promise<{ category: ResearchCategory; item: ResearchItem } | undefined> {
  const category = await getCategory(categorySlug)
  if (!category) return undefined

  const item = category.items.find((entry) => entry.slug === itemSlug)
  if (!item) return undefined

  return { category, item }
}

/** Previous and next item within the same category, for detail-page navigation. */
export function getItemNeighbours(
  category: ResearchCategory,
  itemSlug: string
): { previous?: ResearchItem; next?: ResearchItem } {
  const index = category.items.findIndex((entry) => entry.slug === itemSlug)
  if (index === -1) return {}

  return {
    previous: index > 0 ? category.items[index - 1] : undefined,
    next: index < category.items.length - 1 ? category.items[index + 1] : undefined,
  }
}

export function countResearchItems(categories: ResearchCategory[]): number {
  return categories.reduce((count, category) => count + category.items.length, 0)
}

export type { ResearchCategory, ResearchItem }
