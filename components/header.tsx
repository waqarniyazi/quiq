'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/lib/cart'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Integrated Test', href: '/integrated-test' },
    { label: 'Investments', href: '/investments' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-full
          transition-all duration-500
          ${scrolled
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50'
            : 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]'
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-2 sm:mr-4">
          <Image
            src="/quiq-logo.png"
            alt="QUIQ Logo"
            width={32}
            height={32}
            className="h-7 w-auto transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-white/60 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <Link
          href="/cart"
          className="relative p-2 text-white/60 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200 ml-1"
        >
          <ShoppingBag className="w-4 h-4" />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* CTA Button */}
        <Link
          href="/products"
          className="hidden sm:inline-flex ml-1 text-[13px] font-medium text-black bg-white hover:bg-white/90 px-4 py-1.5 rounded-full transition-all duration-200"
        >
          Shop Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors ml-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/cart"
                className="text-sm text-white/70 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                Cart
                {totalItems > 0 && (
                  <span className="w-5 h-5 bg-white text-black text-[11px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                href="/products"
                className="mt-2 text-sm font-medium text-center text-black bg-white hover:bg-white/90 py-3 px-4 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
