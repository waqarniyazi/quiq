'use client'

import { useState } from 'react'
import type { Post } from '@/lib/blog/posts'
import { BlurImage } from '@/components/ui/blur-image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

type PostCardsProps = {
  posts: Post[]
  showPagination?: boolean
  postsPerPage?: number
  showViewAll?: boolean
}

type PostCardProps = Post

const PostCards = ({ posts, showPagination = true, postsPerPage = 9, showViewAll = false }: PostCardsProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Product']

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = showPagination ? filteredPosts.slice(startIndex, endIndex) : filteredPosts

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      {!showViewAll && (
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1)
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {category} {category === 'Product' ? 's' : ''}
            </button>
          ))}
        </div>
      )}

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
        {currentPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>

      {/* View All Posts Button */}
      {showViewAll && (
        <div className="flex justify-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/80 hover:text-white transition-all group"
          >
            Show all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}

const PostCard = (props: PostCardProps) => {
  const { slug, title, summary, date, image } = props
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${slug}`} className='group rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden'>
      <div className="p-2 overflow-hidden">
        <BlurImage
          src={image || `/images/blog/${slug}/cover.png`}
          className='w-full aspect-[2/1] object-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105'
          width={800}
          height={400}
          alt={title}
        />
      </div>
      <div className='flex items-center justify-between gap-2 px-4 pt-2 text-sm text-white/50'>
        {formattedDate}
      </div>
      <div className='flex flex-col px-4 pb-4 pt-2'>
        <h3 className='text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2'>{title}</h3>
        <p className='text-white/60 mt-2 text-sm line-clamp-2'>{summary}</p>
      </div>
    </Link>
  )
}

export default PostCards
export { PostCard }
