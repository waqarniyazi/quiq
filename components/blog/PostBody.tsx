import type { ComponentType } from 'react'
import { PortableText, toPlainText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import { useMDXComponents } from '@/mdx-components'
import { urlFor } from '@/sanity/lib/image'
import { splitFaq } from '@/lib/blog/faq'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Same id scheme the MDX headings used, so the TOC and old #anchors keep working.
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
const headingId = (block: PortableTextBlock) => slugify(toPlainText(block))

/** Renders a Sanity post body with the same element styles as the old MDX posts. The FAQ section
 * ("## Frequently asked questions" + "### question" blocks) becomes an accordion: questions closed,
 * a chevron to open each one. */
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

  const { before, heading, lead, items, after } = splitFaq(value)
  if (!heading || !items.length) return <PortableText value={value} components={components} />

  return (
    <>
      <PortableText value={before} components={components} />
      <PortableText value={[heading, ...lead]} components={components} />
      <Accordion type="multiple" className="not-prose my-6 rounded-2xl border border-white/10 bg-white/[0.02] px-5">
        {items.map((item, index) => (
          <AccordionItem key={`${item.question}-${index}`} id={slugify(item.question)} value={`faq-${index}`}
            className="scroll-mt-28 border-white/10">
            <AccordionTrigger className="py-5 text-base font-semibold text-white hover:no-underline [&>svg]:size-5 [&>svg]:text-white/50">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-white/70 [&_p]:mb-3 [&_p:last-child]:mb-0">
              <PortableText value={item.answer} components={components} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <PortableText value={after} components={components} />
    </>
  )
}
