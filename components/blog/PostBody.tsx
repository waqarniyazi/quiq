import type { ComponentType } from 'react'
import { PortableText, toPlainText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import { useMDXComponents } from '@/mdx-components'
import { urlFor } from '@/sanity/lib/image'

// Same id scheme the MDX headings used, so the TOC and old #anchors keep working.
const headingId = (block: PortableTextBlock) =>
  toPlainText(block).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

/** Renders a Sanity post body with the same element styles as the old MDX posts. */
export default function PostBody({ value }: { value: PortableTextBlock[] }) {
  const el = useMDXComponents() as Record<string, ComponentType<any>>

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <el.p>{children}</el.p>,
      h2: ({ children, value }) => <el.h2 id={headingId(value)}>{children}</el.h2>,
      h3: ({ children, value }) => <el.h3 id={headingId(value)}>{children}</el.h3>,
      h4: ({ children }) => <el.h4>{children}</el.h4>,
      blockquote: ({ children }) => <el.blockquote>{children}</el.blockquote>,
    },
    list: {
      bullet: ({ children }) => <el.ul>{children}</el.ul>,
      number: ({ children }) => <el.ol>{children}</el.ol>,
    },
    listItem: ({ children }) => <el.li>{children}</el.li>,
    marks: {
      strong: ({ children }) => <el.strong>{children}</el.strong>,
      em: ({ children }) => <el.em>{children}</el.em>,
      code: ({ children }) => <el.code>{children}</el.code>,
      link: ({ children, value }) => <el.a href={value?.href}>{children}</el.a>,
    },
    types: {
      image: ({ value }) => <el.img src={urlFor(value).width(1600).url()} alt={value.alt ?? ''} />,
    },
  }

  return <PortableText value={value} components={components} />
}
