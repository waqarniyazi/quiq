"use client"

import React from "react"
import TableOfContents, { extractHeadingsFromDOM } from "./TableOfContents"
import MobileTableOfContents from "./MobileTableOfContents"

type Heading = { id: string; text: string; level: number }

function useHeadings() {
  const [headings, setHeadings] = React.useState<Heading[]>([])
  React.useEffect(() => {
    setHeadings(extractHeadingsFromDOM())
  }, [])
  return headings
}

export function MobileTOCWrapper() {
  const headings = useHeadings()
  if (!headings.length) return null
  return <MobileTableOfContents headings={headings} />
}

export function DesktopTOCWrapper() {
  const headings = useHeadings()
  if (!headings.length) return null
  return <TableOfContents headings={headings} />
}
