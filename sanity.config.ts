'use client'

import { defineConfig, type Template } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'quiq',
  title: 'QUIQ',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Lets "new item" inside a category pane pre-fill that category.
    templates: (prev: Template[]) => [
      ...prev,
      {
        id: 'researchItem-in-category',
        title: 'Research item in category',
        schemaType: 'researchItem',
        parameters: [{ name: 'categoryId', type: 'string' }],
        value: ({ categoryId }: { categoryId: string }) => ({
          category: { _type: 'reference', _ref: categoryId },
        }),
      },
    ],
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('post').title('Blog posts'),
            S.divider(),
            S.documentTypeListItem('researchCategory').title('Research categories'),
            S.listItem()
              .title('Research items by category')
              .child(
                S.documentTypeList('researchCategory')
                  .title('Categories')
                  .defaultOrdering([{ field: 'number', direction: 'asc' }])
                  .child((categoryId) =>
                    S.documentList()
                      .title('Items')
                      .filter('_type == "researchItem" && category._ref == $categoryId')
                      .params({ categoryId })
                      .defaultOrdering([{ field: 'order', direction: 'asc' }])
                      .initialValueTemplates([
                        S.initialValueTemplateItem('researchItem-in-category', { categoryId }),
                      ])
                  )
              ),
            S.documentTypeListItem('researchItem').title('All research items'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
