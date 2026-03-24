'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag, Globe } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/lib/cart'
import { useLanguage, Locale } from '@/lib/i18n/context'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { totalItems } = useCart()
  const { locale, setLocale, t, labels, names } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navItems = [
    { label: t('header.about'), href: '/about' },
    { label: t('header.integratedTest'), href: '/integrated-test' },
    { label: t('header.investments'), href: '/investments' },
    { label: t('header.contact'), href: '/contact' },
  ]

  const locales: Locale[] = ['en', 'hi', 'mr']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          flex items-center px-3 sm:px-6 py-2.5 rounded-full w-[calc(100%-8px)] sm:w-auto
          transition-all duration-500
          ${scrolled
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50'
            : 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]'
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Image
            src="/quiq-logo.png"
            alt="QUIQ Logo"
            width={32}
            height={32}
            className="h-7 w-auto transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Spacer — pushes everything after it to the right */}
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 mr-2">
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

        {/* Right-side actions */}
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {/* Language Toggle */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">{labels[locale]}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 min-w-[120px] shadow-2xl z-50"
                >
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLocale(l); setLangOpen(false) }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${locale === l
                        ? 'text-white bg-white/[0.06]'
                        : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                        }`}
                    >
                      <span className="font-medium">{labels[l]}</span>
                      <span className="text-white/30 ml-2 text-xs">{names[l]}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative p-2 text-white/60 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
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
            className="hidden sm:inline-flex text-[13px] font-medium text-black bg-white hover:bg-white/90 px-4 py-1.5 rounded-full transition-all duration-200"
          >
            {t('header.shopNow')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-3 right-3 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden"
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
                {t('header.cart')}
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
                {t('header.shopNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
