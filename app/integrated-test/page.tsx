'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { IntegratedHero } from '@/components/integrated-test/hero'
import { KeySpecs } from '@/components/integrated-test/key-specs'
import { ExplodedView } from '@/components/integrated-test/exploded-view'
import { HowItWorks } from '@/components/integrated-test/how-it-works'
import { Performance } from '@/components/integrated-test/performance'

export default function IntegratedTestPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main>
                <IntegratedHero />
                <KeySpecs />
                <ExplodedView />
                <HowItWorks />
                <Performance />
            </main>
            <Footer />
        </div>
    )
}
