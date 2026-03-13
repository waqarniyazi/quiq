import { allPosts } from "@/lib/blog/posts"
import { SITE_NAME, SITE_URL, SITE_SAME_AS } from "@/lib/constants"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PostCards from "@/components/blog/PostCards"
import Script from "next/script"

export const metadata = {
  title: "Blog • QUIQ",
  description: "Health insights, wellness tips, and the latest updates from the QUIQ team. Discover how to take control of your health with at-home diagnostics.",
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/blog`,
    sameAs: SITE_SAME_AS,
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="px-4 md:px-8 py-16">
        <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20 pt-16">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-[1.1] pb-2">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Health insights, wellness tips, and the latest updates from the QUIQ team. 
              Discover how to take control of your health with at-home diagnostics.
            </p>
          </div>

          {/* Posts Grid */}
          <PostCards posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
