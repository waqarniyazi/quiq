'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function RepurposeCTA({ variant = 'sidebar' }: { variant?: 'sidebar' | 'inline' }) {
    if (variant === 'inline') {
        return (
            <div className="my-12 py-12 border-t border-white/[0.06]">
                <div className="flex flex-col items-center text-center gap-4">
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase">Take Control</p>
                    <h3 className="text-2xl sm:text-3xl font-bold gradient-text">
                        Know Your Health
                    </h3>
                    <p className="text-sm text-white/40 max-w-md leading-relaxed">
                        Premium at-home self-test kits under ₹99. CE & IVD certified results in minutes. No lab visits, no appointments.
                    </p>
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105 mt-2"
                    >
                        Shop Now
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase mb-3">Explore</p>
            <h3 className="text-white font-semibold gradient-text text-lg mb-2">QUIQ Self-Tests</h3>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Affordable diagnostics at home. CE & IVD certified. Results in minutes.
            </p>
            <Link
                href="/products"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
            >
                Shop Now
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    )
}
