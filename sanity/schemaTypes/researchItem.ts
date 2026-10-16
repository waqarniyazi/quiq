import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons/Document'
import { STATUS_LABELS } from '../../lib/research/types'
import { cardImageField } from './cardImage'

const stringList = (name: string, title: string, description: string) =>
  defineField({ name, title, description, type: 'array', of: [defineArrayMember({ type: 'text', rows: 2 })] })

export const researchItem = defineType({
  name: 'researchItem',
  title: 'Research item',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'researchCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Position within the category (lower comes first).',
      initialValue: 100,
    }),
    defineField({ name: 'vendor', type: 'string' }),
    defineField({ name: 'origin', type: 'string' }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: Object.entries(STATUS_LABELS).map(([value, title]) => ({ value, title })),
        layout: 'radio',
      },
    }),
    defineField({
      name: 'tagline',
      type: 'text',
      rows: 2,
      description: 'One line, shown on the category list card.',
      validation: (rule) => rule.required(),
    }),
    cardImageField('Shown on the entry card (4:3) and as the cover of the entry page (16:9).'),
    defineField({
      name: 'whatItIs',
      title: 'What it is',
      type: 'text',
      rows: 6,
      description: 'Plain-language explanation — written for the public reader.',
    }),
    defineField({
      name: 'whyItMatters',
      title: 'Why it matters to QUIQ',
      type: 'text',
      rows: 6,
    }),
    stringList('keyFacts', 'Key facts', 'One fact per entry.'),
    stringList('considerations', 'Considerations', 'Trade-offs, risks, and open questions.'),
    defineField({
      name: 'sources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'source',
          fields: [
            defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'url', type: 'url', validation: (rule) => rule.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'resources',
      type: 'array',
      description: 'Whitepapers, spec sheets or vendor pages. Hidden on the page when empty.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'resource',
          fields: [
            defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'href',
              type: 'url',
              validation: (rule) => rule.required().uri({ allowRelative: true }),
            }),
            defineField({
              name: 'type',
              type: 'string',
              options: { list: ['link', 'pdf'], layout: 'radio' },
              initialValue: 'link',
            }),
          ],
        }),
      ],
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', category: 'category.title', vendor: 'vendor' },
    prepare: ({ title, category, vendor }) => ({
      title,
      subtitle: [category, vendor].filter(Boolean).join(' · '),
    }),
  },
})
