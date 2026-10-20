import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons/Tag'

// One topic a blog post is filed under (GLOSSARY.md: Blog category). Each has a page at /blog/category/<slug>.
export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'The page address: /blog/category/<slug>. Changing it breaks old links.',
      options: { source: 'title', maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Position in the /blog tabs (1 = first).',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 2,
      description: 'One sentence. Used as the page description in search results.',
      validation: (rule) => rule.required().max(170),
    }),
    defineField({
      name: 'intro',
      type: 'text',
      rows: 5,
      description: 'A short paragraph shown at the top of the category page.',
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare: ({ title, order }) => ({ title, subtitle: order ? `#${order}` : undefined }),
  },
})
