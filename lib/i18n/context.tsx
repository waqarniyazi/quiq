'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Locale = 'en' | 'hi' | 'mr'

const LOCALE_LABELS: Record<Locale, string> = {
    en: 'EN',
    hi: 'हि',
    mr: 'मा',
}

const LOCALE_NAMES: Record<Locale, string> = {
    en: 'English',
    hi: 'हिन्दी',
    mr: 'मराठी',
}

type LanguageContextType = {
    locale: Locale
    setLocale: (l: Locale) => void
    t: (key: string) => string
    labels: typeof LOCALE_LABELS
    names: typeof LOCALE_NAMES
}

const LanguageContext = createContext<LanguageContextType | null>(null)

// Deep nested key access: t('hero.title') → translations.hero.title
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNestedValue(obj: any, path: string): string {
    const val = path.split('.').reduce((o, k) => o?.[k], obj)
    return typeof val === 'string' ? val : path
}

import en from '@/lib/i18n/en.json'
import hi from '@/lib/i18n/hi.json'
import mr from '@/lib/i18n/mr.json'

const translations: Record<Locale, typeof en> = { en, hi, mr }

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en')

    const t = (key: string): string => {
        return getNestedValue(translations[locale], key)
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, labels: LOCALE_LABELS, names: LOCALE_NAMES }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
    return ctx
}
