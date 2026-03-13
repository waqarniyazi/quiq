"use client"

import { useMemo } from "react"
import { useScrollSpy } from "@/hooks/use-scrollspy"

type Heading = { id: string; text: string; level: number }

export function extractHeadingsFromDOM(): Heading[] {
  if (typeof document === "undefined") return []
  const nodes = Array.from(document.querySelectorAll("article h1, article h2, article h3")) as HTMLElement[]
  return nodes
    .filter((n) => n.id)
    .map((n) => ({ id: n.id, text: n.innerText, level: Number(n.tagName.substring(1)) }))
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const ids = useMemo(() => headings.map((h) => h.id), [headings])
  const activeId = useScrollSpy(ids, 120)

  return (
    <nav className="hidden lg:block max-h-[50vh] pr-4">
      <div className="text-white text-sm mb-4">On this page</div>
      <div className="relative">
        {/* Active indicator line */}
        <div className="absolute left-0 top-0 w-0.5 h-full bg-white/10"></div>
        <div
          className="absolute left-0 w-0.5 bg-blue-500 transition-all duration-300 ease-out"
          style={{
            top: `${headings.findIndex(h => h.id === activeId) * 40}px`,
            height: activeId ? '32px' : '0px'
          }}
        ></div>

        {/* Scrollable content */}
        <div className="overflow-auto max-h-[60vh]">
          <ul className="space-y-2">
            {headings.map((h) => {
              const isActive = h.id === activeId
              const indent = h.level === 1 ? "pl-4" : h.level === 2 ? "pl-7" : "pl-10"
              return (
                <li key={h.id} className={`${indent} relative`}>
                  <a
                    href={`#${h.id}`}
                    className={`block text-sm py-2 transition-colors ${isActive ? "text-blue-400 font-medium" : "text-white/60 hover:text-white/80"
                      }`}
                  >
                    {h.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
