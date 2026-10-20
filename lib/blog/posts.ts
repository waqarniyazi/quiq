import { cache } from 'react'
import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'
import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { LEGACY_TO_SLUG } from '@/lib/blog/categories'

export type Post = {
  slug: string
  title: string
  summary: string
  date: string
  modifiedTime?: string
  /** Slug of the post's blog category (its own, or mapped from the old category while it has none). */
  categorySlug?: string
  author?: string
  image?: string
}

export type PostWithBody = Post & { body: PortableTextBlock[] }

type RawPost = Omit<Post, 'image' | 'categorySlug'> & {
  coverImage?: SanityImageSource
  body?: PortableTextBlock[]
  categoryRef?: string
  legacyCategory?: string
}

const POST_FIELDS = `
  "slug": slug.current,
  title,
  summary,
  "date": publishedAt,
  "modifiedTime": modifiedAt,
  "categoryRef": coalesce(blogCategory->slug.current, string::split(blogCategory._ref, "blogCategory-")[1]),
  "legacyCategory": category,
  author,
  coverImage
`

function toPost({ coverImage, categoryRef, legacyCategory, body: _body, ...post }: RawPost): Post {
  return {
    ...post,
    categorySlug: categoryRef ?? (legacyCategory ? LEGACY_TO_SLUG[legacyCategory] : undefined),
    image: coverImage ? urlFor(coverImage).width(1600).url() : undefined,
  }
}

/** All published posts, newest first. Content lives in Sanity (edit at /studio). */
export const getAllPosts = cache(async (): Promise<Post[]> => {
  const posts = await sanityFetch<RawPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${POST_FIELDS} }`,
    {},
    ['post']
  )
  return posts.map(toPost)
})

export const getPost = cache(async (slug: string): Promise<PostWithBody | null> => {
  const post = await sanityFetch<RawPost | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS}, body }`,
    { slug },
    ['post']
  )
  return post ? { ...toPost(post), body: post.body ?? [] } : null
})
