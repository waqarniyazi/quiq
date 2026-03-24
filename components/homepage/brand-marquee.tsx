'use client'

import Image from 'next/image'

const brands = [
    { name: 'Blinkit', logo: '/brands/blinkit.png' },
    { name: 'Zepto', logo: '/brands/zepto.png' },
    { name: 'PharmEasy', logo: '/brands/PharmEasy.png' },
    { name: 'Tata 1mg', logo: '/brands/Tata_1mg.svg' },
    { name: 'Flipkart', logo: '/brands/Flipkart.svg' },
    { name: 'Amazon', logo: '/brands/Amazon.png' },
]

export function BrandMarquee() {
    // Duplicate brands for seamless infinite scroll
    const allBrands = [...brands, ...brands, ...brands, ...brands]

    return (
        <section className="relative bg-black py-16 sm:py-20 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-10 sm:mb-14 px-4">
                <p className="text-xs sm:text-sm text-white/30 tracking-[0.3em] uppercase mb-3">
                    Available On
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white/90">
                    Get QUIQ on your favourite platform
                </h2>
            </div>

            {/* Marquee */}
            <div className="relative">
                {/* Left/Right fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee">
                    {allBrands.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center"
                            style={{ minWidth: '140px' }}
                        >
                            <div className="flex items-center justify-center h-14 sm:h-16 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={120}
                                    height={40}
                                    className="h-7 sm:h-8 w-auto object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-300 brightness-0 invert"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline keyframes for marquee animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    )
}
