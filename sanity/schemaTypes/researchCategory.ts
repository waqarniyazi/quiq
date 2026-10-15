import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons/Folder'
import { RESEARCH_ICONS } from '../../lib/research/icons'

export const researchCategory = defineType({
  name: 'researchCategory',
  title: 'Research category',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'number',
      type: 'number',
      description: 'Position on /research (1 = first).',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      options: { list: Object.keys(RESEARCH_ICONS) },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences, shown on the index card.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'deepDive',
      title: 'Deep dive',
      type: 'text',
      rows: 8,
      description: 'Longer orientation, shown at the top of the category page.',
    }),
  ],
  orderings: [{ title: 'Number', name: 'numberAsc', by: [{ field: 'number', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', number: 'number' },
    prepare: ({ title, number }) => ({ title, subtitle: number ? `#${number}` : undefined }),
  },
})
