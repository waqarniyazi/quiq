'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { products, categories } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { useState } from 'react'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { addToCart } = useCart()

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-4">Our products</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
                Self-Test Kits
              </h1>
              <p className="text-base text-white/40 max-w-xl mx-auto">
                CE & IVD certified diagnostics. Results in minutes. All under ₹99.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                      ? 'bg-white text-black'
                      : 'bg-white/[0.04] text-white/50 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col ${!product.availableNow ? 'opacity-80' : ''}`}
                >
                  {/* Image */}
                  <Link href={`/products/${product.slug}`} className="relative h-56 overflow-hidden bg-white/[0.02]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${product.availableNow ? 'group-hover:scale-105' : 'grayscale-[30%]'}`}
                    />
                    {product.availableNow && product.originalPrice && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                    {!product.availableNow && product.launchDate && (
                      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        product.launchDate === 'Coming Soon'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-sky-500/20 text-sky-400'
                      }`}>
                        {product.launchDate === 'Coming Soon' ? '🔜 Coming Soon' : `📅 ${product.launchDate}`}
                      </span>
                    )}
                    {/* Wishlist */}
                    <button
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 transition-all"
                      onClick={(e) => { e.preventDefault() }}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </Link>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <span className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{product.category}</span>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-base font-semibold text-white/80 group-hover:text-white transition-colors mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-white/40 mb-3 flex-1 line-clamp-2">{product.shortDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-white/60 text-white/60' : 'text-white/15'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-white/30">{product.rating} ({product.reviewCount})</span>
                    </div>

                    {/* Price + Add to Cart */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-white">{product.currency}{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-white/30 line-through">{product.currency}{product.originalPrice}</span>
                        )}
                      </div>
                      {product.availableNow ? (
                        <button
                          onClick={() => addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            currency: product.currency,
                            image: product.image,
                          })}
                          className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white text-white/60 hover:text-black flex items-center justify-center transition-all duration-300"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="text-[10px] text-white/25 uppercase tracking-wider font-medium">
                          {product.launchDate === 'Coming Soon' ? 'Soon' : 'Pre-order'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
