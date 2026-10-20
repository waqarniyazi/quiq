import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Breadcrumbs, { type Crumb } from "@/components/research/breadcrumbs"
import PostCards from "@/components/blog/PostCards"
import { getAllPosts } from "@/lib/blog/posts"
import { categoryHref, getBlogCategories, getBlogCategory } from "@/lib/blog/categories"
import { breadcrumbJsonLd } from "@/lib/blog/breadcrumbs"
import { SITE_URL } from "@/lib/constants"

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const categories = await getBlogCategories()
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const category = await getBlogCategory(slug)
  if (!category) return { title: "Not found" }
  const url = `${SITE_URL}${categoryHref(category.slug)}`
  const title = `${category.title} – QUIQ Blog`
  return {
    title,
    description: category.summary,
    openGraph: { title, description: category.summary, url },
    twitter: { title, description: category.summary },
    alternates: { canonical: url },
  }
}

export default async function BlogCategoryPage({ params }: Params) {
  const { slug } = await params
  const [category, allCategories, allPosts] = await Promise.all([getBlogCategory(slug), getBlogCategories(), getAllPosts()])
  if (!category) notFound()

  const posts = allPosts.filter((p) => p.categorySlug === category.slug)
  const tabs = allCategories.filter((c) => c.slug === category.slug || allPosts.some((p) => p.categorySlug === c.slug))
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Categories", href: "/blog" },
    { label: category.title },
  ]
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.summary,
    url: `${SITE_URL}${categoryHref(category.slug)}`,
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="px-4 md:px-8 py-16">
        <Script id="category-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <Script id="category-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs.filter((c) => c.label !== "Categories"))) }} />
        <div className="mx-auto max-w-6xl pt-16">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mb-14 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-5 leading-[1.1] pb-2">
              {category.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">{category.summary}</p>
            {category.intro && <p className="mt-5 text-base text-white/55 leading-relaxed">{category.intro}</p>}
          </div>

          {posts.length > 0 ? (
            <PostCards posts={posts} categories={tabs} activeSlug={category.slug} />
          ) : (
            <p className="text-white/60">No posts in {category.title} yet. New articles appear here as they are published.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
