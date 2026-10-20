import { notFound } from "next/navigation"
import { getAllPosts, getPost } from "@/lib/blog/posts"
import PostBody from "@/components/blog/PostBody"
import ProgressBar from "@/components/blog/ProgressBar"
import { DesktopTOCWrapper, MobileTOCWrapper } from "@/components/blog/TOCWrappers"
import { SITE_NAME, SITE_URL, SITE_SAME_AS } from "@/lib/constants"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import PostHeader from "@/components/blog/PostHeader"
import { RepurposeCTA } from "@/components/blog/RepurposeCTA"
import { ContinueReading } from "@/components/blog/ContinueReading"
import Breadcrumbs, { type Crumb } from "@/components/research/breadcrumbs"
import { categoryHref, getBlogCategories } from "@/lib/blog/categories"
import { breadcrumbJsonLd } from "@/lib/blog/breadcrumbs"
import { faqJsonLd, splitFaq } from "@/lib/blog/faq"

type Params = { params: any }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} – QUIQ Blog`,
    description: post.summary,
    openGraph: {
      title: `${post.title} – QUIQ Blog`,
      description: post.summary,
      url: `https://quiqhealth.in/blog/${slug}`,
      type: 'article',
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      title: `${post.title} – QUIQ Blog`,
      description: post.summary,
    },
    alternates: {
      canonical: `https://quiqhealth.in/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const [post, allPosts, categories] = await Promise.all([getPost(slug), getAllPosts(), getBlogCategories()])
  if (!post) return notFound()

  const category = categories.find((c) => c.slug === post.categorySlug)
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    ...(category ? [{ label: category.title, href: categoryHref(category.slug) }] : []),
  ]
  const faq = splitFaq(post.body).items

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/blog/${post.slug}`,
    sameAs: SITE_SAME_AS,
  }

  return (
    <div className="min-h-[60vh] bg-black">
      <Header />
      <div className="px-4 md:px-8 py-12 pt-24">
        <Script id="org-jsonld-post" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Script id="breadcrumb-jsonld-post" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([...crumbs, { label: post.title }])) }} />
        {faq.length > 0 && (
          <Script id="faq-jsonld-post" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }} />
        )}
        <ProgressBar />

        <div className="mx-auto max-w-6xl">
          <Breadcrumbs crumbs={crumbs} />
        </div>

        {/* Title + meta header with cover image zoom */}
        <PostHeader title={post.title} date={post.date} slug={post.slug} summary={post.summary} image={post.image} />

        {/* Content + TOC + CTA */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          <article className="max-w-3xl">
            <MobileTOCWrapper />
            <PostBody value={post.body} />

            {/* Mobile CTA - shown at end of article on mobile */}
            <div className="lg:hidden">
              <RepurposeCTA variant="inline" />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <DesktopTOCWrapper />
              {/* Desktop CTA - shown below TOC */}
              <RepurposeCTA variant="sidebar" />
            </div>
          </aside>
        </div>

        {/* Continue Reading Section */}
        <div className="mx-auto max-w-6xl">
          <ContinueReading currentSlug={post.slug} allPosts={allPosts} maxPosts={3} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
