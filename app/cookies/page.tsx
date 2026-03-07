'use client'
import { LegalPage } from '@/components/legal-page'

export default function CookiePage() {
    return (
        <LegalPage
            title="Cookie Policy"
            subtitle="Legal"
            sections={[
                { heading: 'What Are Cookies', content: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience and understand how our website is used.' },
                { heading: 'Cookies We Use', content: 'Essential Cookies: Required for the website to function (shopping cart, navigation). These cannot be disabled.\n\nAnalytics Cookies: Help us understand how visitors use our website (page views, traffic sources). We use Vercel Analytics.\n\nMarketing Cookies: Used to deliver relevant advertisements. Currently, we do not use marketing cookies.' },
                { heading: 'Third-Party Cookies', content: 'Our payment processors (Razorpay) may set cookies during the checkout process. These are subject to their respective privacy policies.' },
                { heading: 'Managing Cookies', content: 'You can control cookies through your browser settings. Most browsers allow you to:\n• View stored cookies\n• Delete specific or all cookies\n• Block all cookies\n• Allow cookies from specific sites\n\nNote: Blocking essential cookies may affect website functionality.' },
                { heading: 'Updates', content: 'We may update this Cookie Policy periodically. Changes will be posted on this page with an updated effective date.' },
                { heading: 'Contact', content: 'Questions about cookies? Email us at info@quiq.health' },
            ]}
        />
    )
}
