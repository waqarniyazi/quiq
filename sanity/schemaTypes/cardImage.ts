import { defineField } from 'sanity'

/** Image with alt text and credit, shared by research categories and items. */
export const cardImageField = (description: string) =>
  defineField({
    name: 'image',
    type: 'image',
    description,
    options: { hotspot: true },
    fields: [
      defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (rule) => rule.required() }),
      defineField({ name: 'credit', type: 'string', description: 'Photographer / source, e.g. "Pexels".' }),
    ],
  })
