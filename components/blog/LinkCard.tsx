"use client"

import Link from "next/link"

export default function LinkCard({ href, hostname, title }: { href: string; hostname?: string; title?: string }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="block">
      <div className="mt-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-white hover:border-white/20 hover:bg-white/10 transition-colors">
        <div className="text-sm text-white/60">{hostname || new URL(href).hostname}</div>
        <div className="text-lg font-semibold">{title || href}</div>
      </div>
    </Link>
  )
}
