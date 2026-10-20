import { cache } from 'react'
import { sanityFetch } from '@/sanity/lib/client'

// Blog categories live in Sanity (type blogCategory, edited in /studio); each has a page at /blog/category/<slug>.
export type BlogCategory = { slug: string; title: string; summary: string; intro?: string }

// The three categories used before October 2026, still stored on older posts until they are re-sorted.
export const LEGACY_CATEGORIES = ['Product', 'Research', 'Industry News'] as const
export const LEGACY_TO_SLUG: Record<string, string> = {
  Product: 'quiq-updates',
  Research: 'rapid-test-science',
  'Industry News': 'industry-funding',
}

// Used until the categories exist in Sanity (QUIQ-Agents: blog_categories.py seed), so the tabs, pages and
// breadcrumbs never disappear. Sanity's own records win as soon as there are any.
const FALLBACK: BlogCategory[] = [
  { slug: 'self-testing', title: 'Self-Testing', summary: 'Home tests and how to use them well: pregnancy, fertility, thyroid, infections and more.' },
  { slug: 'rapid-test-science', title: 'Rapid Test Science', summary: 'New research on lateral flow and rapid tests: how they work and how they are getting better.' },
  { slug: 'diagnostics-research', title: 'Diagnostics Research', summary: 'Studies on new ways to test for disease, beyond rapid strips.' },
  { slug: 'industry-funding', title: 'Industry & Funding', summary: 'Deals, launches and funding in diagnostics, in India and worldwide.' },
  { slug: 'policy-regulation', title: 'Policy & Regulation', summary: 'Rules, approvals, pricing and tax that shape testing in India.' },
  { slug: 'health-guides', title: 'Health Guides', summary: 'Plain-language explainers on health conditions and the tests that check for them.' },
  { slug: 'quiq-updates', title: 'QUIQ Updates', summary: 'News about QUIQ, our products and our team.' },
]

/** All categories, in tab order. */
export const getBlogCategories = cache(async (): Promise<BlogCategory[]> => {
  const fromSanity = await sanityFetch<BlogCategory[]>(
    `*[_type == "blogCategory" && defined(slug.current)] | order(order asc) { "slug": slug.current, title, summary, intro }`,
    {},
    ['blogCategory']
  )
  return fromSanity.length ? fromSanity : FALLBACK
})

export const getBlogCategory = cache(async (slug: string): Promise<BlogCategory | null> =>
  (await getBlogCategories()).find((c) => c.slug === slug) ?? null
)

export const categoryHref = (slug: string) => `/blog/category/${slug}`
