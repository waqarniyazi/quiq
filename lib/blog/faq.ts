import { toPlainText, type PortableTextBlock } from '@portabletext/react'

// Articles end with a "## Frequently asked questions" section of "### question" + answer paragraphs
// (the quiq-post agent always uses that heading). The post page shows it as an accordion and tells
// search engines about it with FAQPage data.
export type FaqItem = { question: string; answer: PortableTextBlock[] }
export type FaqSplit = {
  before: PortableTextBlock[]
  heading?: PortableTextBlock
  lead: PortableTextBlock[]
  items: FaqItem[]
  after: PortableTextBlock[]
}

const FAQ_HEADING = /^(frequently asked questions|faqs?)$/i
const isStyle = (b: PortableTextBlock, style: string) => b._type === 'block' && (b as { style?: string }).style === style

export function splitFaq(body: PortableTextBlock[]): FaqSplit {
  const start = body.findIndex((b) => isStyle(b, 'h2') && FAQ_HEADING.test(toPlainText(b).trim()))
  if (start < 0) return { before: body, lead: [], items: [], after: [] }
  const next = body.findIndex((b, i) => i > start && isStyle(b, 'h2'))
  const end = next < 0 ? body.length : next
  const lead: PortableTextBlock[] = []
  const items: FaqItem[] = []
  for (const block of body.slice(start + 1, end)) {
    if (isStyle(block, 'h3')) items.push({ question: toPlainText(block).trim(), answer: [] })
    else if (items.length) items[items.length - 1].answer.push(block)
    else lead.push(block)
  }
  return { before: body.slice(0, start), heading: body[start], lead, items, after: body.slice(end) }
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: toPlainText(item.answer) },
    })),
  }
}
