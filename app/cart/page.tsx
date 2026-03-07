'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart()

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">Your Cart</h1>
                        <p className="text-sm text-white/40 mb-10">
                            {totalItems === 0 ? 'Your cart is empty' : `${totalItems} item${totalItems > 1 ? 's' : ''} in your cart`}
                        </p>
                    </motion.div>

                    {items.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white/[0.04] flex items-center justify-center mx-auto mb-6">
                                <ShoppingBag className="w-8 h-8 text-white/20" />
                            </div>
                            <p className="text-white/40 mb-6">Nothing here yet</p>
                            <Link
                                href="/products"
                                className="inline-flex px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all"
                            >
                                Browse Products
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                                >
                                    {/* Image */}
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white/[0.02] flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm sm:text-base font-medium text-white/80 truncate">{item.name}</h3>
                                        <p className="text-sm text-white/40 mt-0.5">{item.currency}{item.price} each</p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex items-center border border-white/[0.1] rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="p-2 text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
                                        >
                                            <Minus className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-2 text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>

                                    {/* Subtotal */}
                                    <span className="text-sm font-semibold text-white w-16 text-right hidden sm:block">
                                        {item.currency}{item.price * item.quantity}
                                    </span>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-white/30 hover:text-rose-400 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}

                            {/* Summary */}
                            <div className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-white/40">Subtotal</span>
                                    <span className="text-sm text-white/70">₹{totalPrice}</span>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-white/40">Shipping</span>
                                    <span className="text-sm text-emerald-400/70">Free</span>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                                    <span className="text-base font-semibold text-white/80">Total</span>
                                    <span className="text-xl font-bold text-white">₹{totalPrice}</span>
                                </div>

                                <button
                                    className="w-full mt-6 py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <div className="flex items-center justify-center gap-4 mt-4">
                                    {['Visa', 'Mastercard', 'UPI', 'RuPay'].map((m) => (
                                        <span key={m} className="text-[10px] text-white/30">{m}</span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={clearCart}
                                className="text-xs text-white/30 hover:text-rose-400 transition-colors mt-4"
                            >
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
