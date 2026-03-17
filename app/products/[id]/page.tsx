'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Package, Truck, Shield, RotateCcw } from 'lucide-react'
import { getProduct, getRelatedProducts } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { useState, useEffect, use } from 'react'
import { TestWorking } from '@/components/homepage/test-working'

function ImageCarousel({ slug, fallback, media }: { slug: string; fallback: string; media?: string[] }) {
  const [items, setItems] = useState<string[]>(media && media.length > 0 ? media : [fallback])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (media && media.length > 0) {
      setItems(media)
      return
    }

    let isMounted = true
    const loaded: string[] = []
    let n = 1

    const checkNext = async () => {
      if (!isMounted) return

      const extensions = ['.webp', '.png', '.jpg', '.mp4']
      let found = false

      for (const ext of extensions) {
        const src = `/product/${slug}/${n}${ext}`
        try {
          const res = await fetch(src, { method: 'HEAD' })
          if (res.ok) {
            found = true
            loaded.push(src)
            if (isMounted) setItems([...loaded])
            n++
            checkNext()
            break
          }
        } catch (e) {
          // proceed to check other extensions
        }
      }
    }

    checkNext()

    return () => {
      isMounted = false
    }
  }, [slug, media])

  const renderMedia = (src: string) => {
    if (src.endsWith('.mp4')) {
      return <video src={src} autoPlay loop muted playsInline className="object-cover w-full h-full absolute inset-0" />
    }
    return <Image src={src} alt="Product" fill className="object-cover" priority />
  }

  return (
    <div className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] aspect-square">
      {renderMedia(items[current])}
      {items.length > 1 && (
        <>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 z-10 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((current - 1 + items.length) % items.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white transition-all z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => setCurrent((current + 1) % items.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white transition-all z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  )
}

const paymentIcons = [
  { name: 'Visa', src: '/visa.svg' },
  { name: 'RuPay', src: '/rupay.svg' },
  { name: 'BHIM UPI', src: '/bhim.svg' },
  { name: 'PhonePe', src: '/phonepe.svg' },
  { name: 'CRED', src: '/credpay.svg' },
]

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProduct(id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'who' | 'howToTest' | 'howToRead'>('description')

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Product Not Found</h1>
          <Link href="/products" className="text-white/50 hover:text-white">← Back to Products</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-white/30 flex items-center gap-2">
            <Link href="/products" className="hover:text-white/60 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white/50">{product.name}</span>
          </div>

          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Image Carousel */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <ImageCarousel slug={product.slug} fallback={product.image} media={product.media} />
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col">
              <span className="text-[11px] text-white/30 uppercase tracking-wider mb-2">{product.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-white/60 text-white/60' : 'text-white/15'}`} />
                  ))}
                </div>
                <span className="text-sm text-white/40">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl font-bold text-white">{product.currency}{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-white/30 line-through">{product.currency}{product.originalPrice}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm text-white/50 mb-5">{product.shortDescription}</p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.features.map((f, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">{f}</span>
                ))}
              </div>

              {/* Highlight Icons */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { icon: Package, text: 'Complete kit included' },
                  { icon: Truck, text: 'Free delivery' },
                  { icon: Shield, text: 'CE & IVD certified' },
                  { icon: RotateCcw, text: 'Easy returns' },
                ].map((h, i) => {
                  const Icon = h.icon
                  return (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <Icon className="w-3.5 h-3.5 text-white/30" />
                      <span className="text-[11px] text-white/40">{h.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Quantity + Cart */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center border border-white/[0.1] rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.06] transition-all">−</button>
                  <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.06] transition-all">+</button>
                </div>
                <button
                  onClick={() => { for (let i = 0; i < quantity; i++) addToCart({ id: product.id, name: product.name, price: product.price, currency: product.currency, image: product.image }) }}
                  className="flex-1 py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${isFavorite ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'border-white/[0.1] text-white/40 hover:text-white'}`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Payment Icons */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/30 mb-2">Accepted Payments</p>
                <div className="flex items-center gap-3">
                  {paymentIcons.map((pm) => (
                    <div key={pm.name} className="w-10 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-1 hover:bg-white/[0.08] transition-colors" title={pm.name}>
                      <Image src={pm.src} alt={pm.name} width={28} height={20} className="h-4 w-auto object-contain opacity-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Offer */}
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10">
                <p className="text-xs text-emerald-400 font-medium">🎉 Use code <span className="font-mono text-white/70">QUIQ20</span> for 20% off on 2+ kits</p>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/[0.06] pb-4">
              {[
                { key: 'description' as const, label: 'About This Test' },
                { key: 'who' as const, label: 'Who Is It For?' },
                { key: 'howToTest' as const, label: 'How To Test' },
                { key: 'howToRead' as const, label: 'Reading Results' },
              ].map((t) => (
                <button key={t.key} onClick={() => setActiveTab(t.key)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === t.key ? 'bg-white text-black' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'}`}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="max-w-3xl">
              {activeTab === 'description' && <p className="text-sm text-white/50 leading-relaxed">{product.description}</p>}
              {activeTab === 'who' && <ul className="space-y-3">{product.whoIsItFor.map((x, i) => <li key={i} className="flex items-start gap-3 text-sm text-white/50"><span className="text-white/20 mt-0.5">•</span>{x}</li>)}</ul>}
              {activeTab === 'howToTest' && <ol className="space-y-4">{product.howToTest.map((s, i) => <li key={i} className="flex items-start gap-4 text-sm text-white/50"><span className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-xs text-white/40 flex-shrink-0">{i + 1}</span>{s}</li>)}</ol>}
              {activeTab === 'howToRead' && <ul className="space-y-3">{product.howToReadResults.map((x, i) => <li key={i} className="flex items-start gap-3 text-sm text-white/50"><span className="text-white/20 mt-0.5">→</span>{x}</li>)}</ul>}
            </div>
          </motion.div>

          {/* Test Working Section */}
          <TestWorking />

          {/* Video */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-2xl font-bold gradient-text mb-6">How To Use</h2>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Sz0QPwAuq2U"
                title="How to use QUIQ self-test kit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold gradient-text">Reviews</h2>
              <button className="px-5 py-2 rounded-full border border-white/[0.1] text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-all">Write a Review</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.reviews.map((r, i) => (
                <div key={i} className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-0.5 mb-2">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? 'fill-white/50 text-white/50' : 'text-white/15'}`} />)}</div>
                  <p className="text-sm text-white/50 mb-3">&ldquo;{r.comment}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60 font-medium">{r.name}</p>
                      <p className="text-[10px] text-white/30">{r.location}</p>
                    </div>
                    {r.verified && <span className="text-[10px] text-emerald-400/60 px-2 py-0.5 rounded-full border border-emerald-400/20">Verified</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold gradient-text mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`} className="group p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/[0.02] flex-shrink-0">
                    <Image src={rp.image} alt={rp.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{rp.name}</h3>
                    <p className="text-xs text-white/30 mt-0.5">{rp.currency}{rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
