import { Download, Link2 } from 'lucide-react'
import type { ResearchResource } from '@/lib/research/types'

/** Renders nothing until real files exist — no dead UI on the detail page. */
export default function ResourceLinks({ resources }: { resources?: ResearchResource[] }) {
  if (!resources || resources.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3">
      {resources.map((resource) => {
        const Icon = resource.type === 'pdf' ? Download : Link2
        return (
          <a
            key={resource.href}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
          >
            <Icon className="w-4 h-4 text-white/40" />
            {resource.label}
          </a>
        )
      })}
    </div>
  )
}
