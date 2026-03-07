'use client'
import { LegalPage } from '@/components/legal-page'

export default function PrivacyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            subtitle="Legal"
            sections={[
                { heading: 'Introduction', content: 'Santa Clara Wellness Private Limited ("QUIQ", "we", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website quiq.health and purchase our self-test diagnostic kits.' },
                { heading: 'Information We Collect', content: 'We collect information you provide directly: name, email, shipping address, phone number, and payment details when placing an order. We also collect technical data such as IP address, browser type, and device information through cookies and analytics.' },
                { heading: 'How We Use Your Information', content: 'We use your information to:\n• Process and deliver your orders\n• Send order confirmations and shipping updates\n• Respond to your inquiries and support requests\n• Improve our products and website experience\n• Send marketing communications (with your consent)' },
                { heading: 'Health Data Privacy', content: 'QUIQ self-test kits are used at home and your test results are visible only to you. We do NOT collect, store, or transmit any health data or test results. Your health information remains completely private and under your control.' },
                { heading: 'Data Sharing', content: 'We do not sell your personal data. We share information only with:\n• Payment processors to complete transactions\n• Shipping partners to deliver your orders\n• Analytics providers to improve our services\nAll third-party providers are bound by data protection agreements.' },
                { heading: 'Data Security', content: 'We implement industry-standard security measures including SSL encryption, secure payment gateways, and restricted data access. However, no method of transmission over the Internet is 100% secure.' },
                { heading: 'Your Rights', content: 'Under applicable Indian data protection laws, you have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time by contacting info@quiq.health.' },
                { heading: 'Contact', content: 'Santa Clara Wellness Private Limited\n6C3, Gundecha Enclave, Kherani Road, Saki Naka, Andheri East, Mumbai – 400072, INDIA\nEmail: info@quiq.health\nPhone: +91 22 6725 8000' },
            ]}
        />
    )
}
