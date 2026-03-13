"use client"

import Link from 'next/link'
import { BlurImage } from '@/components/ui/blur-image'
import ImageZoom from '@/components/image-zoom'
import { SITE_LINKEDIN_URL } from '@/lib/constants'

type Props = {
  title: string
  date: string
  slug: string
  summary?: string
}

export default function PostHeader({ title, date, slug, summary }: Props) {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : ''

  return (
    <div className="space-y-16 py-10 md:py-16">
      <div className="space-y-8 mx-auto max-w-6xl px-4">
        <h1 className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl md:leading-[64px]">
          {title}
        </h1>
        {summary && (
          <p className="text-center text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            {summary}
          </p>
        )}
        <div className="grid grid-cols-2 text-sm gap-4 max-w-2xl mx-auto text-center">
          <div className="space-y-1">
            <div className="text-white/60">Written by</div>
            <Link href={SITE_LINKEDIN_URL} className="flex items-center justify-center gap-2 text-white/90 hover:text-white">
              QUIQ Team
            </Link>
          </div>
          <div className="space-y-1">
            <div className="text-white/60">Published on</div>
            <div className="text-white/90">{formattedDate}</div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <ImageZoom>
          <BlurImage
            src={`/images/blog/${slug}/cover.png`}
            className="rounded-lg"
            width={1200}
            height={630}
            lazy={false}
            alt={title}
          />
        </ImageZoom>
      </div>
    </div>
  )
}
