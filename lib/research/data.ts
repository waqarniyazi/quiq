import { cache } from 'react'
import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { researchIcon } from './icons'
import type { ResearchCardImage, ResearchCategory, ResearchItem } from './types'

interface RawImage {
  alt?: string
  crop?: Record<string, number>
  hotspot?: Record<string, number>
  asset?: { _id: string; lqip?: string }
}

type RawItem = Omit<ResearchItem, 'image' | 'cover'> & { image?: RawImage }
type RawCategory = Omit<ResearchCategory, 'icon' | 'image' | 'items'> & {
  icon?: string
  image?: RawImage
  items: RawItem[]
}

interface ImageShape {
  /** Height ÷ width. */
  ratio: number
  /** Widths requested from the Sanity CDN, which crops and serves AVIF/WebP. */
  widths: number[]
  fallbackWidth: number
}

const CARD_SHAPE: ImageShape = { ratio: 3 / 4, widths: [320, 480, 640, 800], fallbackWidth: 640 }
const COVER_SHAPE: ImageShape = { ratio: 9 / 16, widths: [640, 960, 1280, 1600], fallbackWidth: 1280 }

function sanityImage(image: RawImage | undefined, fallbackAlt: string, shape: ImageShape): ResearchCardImage | undefined {
  if (!image?.asset?._id) return undefined

  const source = { asset: { _ref: image.asset._id }, crop: image.crop, hotspot: image.hotspot }
  const sized = (width: number) =>
    urlFor(source).width(width).height(Math.round(width * shape.ratio)).fit('crop').quality(70).url()

  return {
    src: sized(shape.fallbackWidth),
    srcSet: shape.widths.map((width) => `${sized(width)} ${width}w`).join(', '),
    alt: image.alt ?? fallbackAlt,
    lqip: image.asset.lqip,
  }
}

const IMAGE_PROJECTION = `image{ alt, crop, hotspot, "asset": asset->{ _id, "lqip": metadata.lqip } }`

const RESEARCH_QUERY = `*[_type == "researchCategory" && defined(slug.current)] | order(number asc) {
  "slug": slug.current,
  number,
  title,
  icon,
  "image": ${IMAGE_PROJECTION},
  summary,
  "deepDive": coalesce(deepDive, ""),
  "items": *[_type == "researchItem" && references(^._id) && defined(slug.current)] | order(order asc, name asc) {
    "slug": slug.current,
    name,
    vendor,
    origin,
    tagline,
    "image": ${IMAGE_PROJECTION},
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
  return categories.map((category) => ({
    ...category,
    icon: researchIcon(category.icon),
    image: sanityImage(category.image, category.title, CARD_SHAPE),
    items: category.items.map((item) => ({
      ...item,
      image: sanityImage(item.image, item.name, CARD_SHAPE),
      cover: sanityImage(item.image, item.name, COVER_SHAPE),
    })),
  }))
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
