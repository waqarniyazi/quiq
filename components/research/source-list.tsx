import { ExternalLink } from 'lucide-react'
import type { ResearchSource } from '@/lib/research/types'

export default function SourceList({ sources }: { sources: ResearchSource[] }) {
  if (!sources.length) return null

  return (
    <ol className="space-y-2">
      {sources.map((source, index) => (
        <li key={source.url} className="flex gap-3 text-sm">
          <span className="text-white/25 tabular-nums pt-0.5">{index + 1}.</span>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-1.5 text-white/60 hover:text-blue-400 transition-colors duration-200"
          >
            <span className="underline decoration-white/15 underline-offset-4 group-hover:decoration-blue-400/50">
              {source.title}
            </span>
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-50" />
          </a>
        </li>
      ))}
    </ol>
  )
}
