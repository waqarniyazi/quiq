'use client'

import Link from 'next/link'
import type { Post } from '@/lib/blog/posts'
import { BlurImage } from '@/components/ui/blur-image'
import { ArrowRight } from 'lucide-react'

type ContinueReadingProps = {
    currentSlug: string
    allPosts: Post[]
    maxPosts?: number
}

export function ContinueReading({ currentSlug, allPosts, maxPosts = 3 }: ContinueReadingProps) {
    // Filter out current post and get related posts
    const otherPosts = allPosts
        .filter(p => p.slug !== currentSlug)
        .slice(0, maxPosts)

    if (otherPosts.length === 0) return null

    return (
        <section className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Continue Reading</h2>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                >
                    Show all posts
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((post) => (
                    <ContinueReadingCard key={post.slug} {...post} />
                ))}
            </div>
        </section>
    )
}

function ContinueReadingCard({ slug, title, summary, date }: Post) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <Link
            href={`/blog/${slug}`}
            className="group rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
        >
            <div className="p-2 overflow-hidden">
                <BlurImage
                    src={`/images/blog/${slug}/cover.png`}
                    className="rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    width={1200}
                    height={630}
                    alt={title}
                />
            </div>
            <div className="flex items-center gap-2 px-4 pt-2 text-sm text-white/50">
                {formattedDate}
            </div>
            <div className="flex flex-col px-4 pb-4 pt-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-white/60 mt-2 text-sm line-clamp-2">{summary}</p>
            </div>
        </Link>
    )
}
