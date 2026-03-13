"use client"

import { useMemo, useState } from "react"
import { useScrollSpy } from "@/hooks/use-scrollspy"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { AlignLeft } from "lucide-react"

type Heading = { id: string; text: string; level: number }

export default function MobileTableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-3 right-3 z-[60] bg-white/5 backdrop-blur-xl border-white/20 text-white gap-2"
          >
            <AlignLeft className="h-4 w-4" /> Table of contents
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          side="top"
          className="w-[calc(100vw-2rem)] max-w-md bg-white/5 backdrop-blur-xl border-white/10 text-white px-0 py-2"
        >
          <div className="text-white/60 text-sm mb-2 px-4">On this page</div>
          <ul className="space-y-2 max-h-[60vh] overflow-auto">
            {headings.map((h) => (
              <li key={h.id} className={h.level === 1 ? "" : h.level === 2 ? "pl-3" : "pl-6"}>
                <a
                  href={`#${h.id}`}
                  className="block text-sm text-white/80 hover:text-white py-2 pr-3"
                  onClick={() => setOpen(false)}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  )
}
