// Blog categories: the Sanity schema's options and the /blog filter tabs both read this list.
export const BLOG_CATEGORIES = ['Product', 'Research', 'Industry News'] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

// Tab labels where the category name reads oddly as a filter ("Product" → "Products").
export const BLOG_CATEGORY_LABELS: Partial<Record<BlogCategory, string>> = { Product: 'Products' }
