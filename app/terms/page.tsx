'use client'
import { LegalPage } from '@/components/legal-page'

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms of Service"
            subtitle="Legal"
            sections={[
                { heading: 'Acceptance of Terms', content: 'By accessing and using quiq.health, you agree to these Terms of Service. If you do not agree, please discontinue use of our website and services.' },
                { heading: 'Products & Services', content: 'QUIQ offers self-test diagnostic kits for home use. Our products are CE and IVD certified for in-vitro diagnostic use only. They are designed for screening purposes and do not replace professional medical advice, diagnosis, or treatment.' },
                { heading: 'Ordering & Payment', content: 'All prices are listed in Indian Rupees (₹) and include applicable taxes. We accept payments via Visa, Mastercard, UPI, RuPay, PhonePe, CRED, and other methods displayed at checkout. Orders are confirmed upon successful payment.' },
                { heading: 'Medical Disclaimer', content: 'QUIQ self-test kits are intended for preliminary screening only. Results should be interpreted as guidance, not diagnosis. Always consult a qualified healthcare professional for medical advice. In case of emergency, call 108 or visit your nearest hospital.' },
                { heading: 'Intellectual Property', content: 'All content on this website, including logos, text, images, and designs, is the property of Santa Clara Wellness Private Limited and protected under Indian copyright laws.' },
                { heading: 'Limitation of Liability', content: 'QUIQ shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the purchase price of the product in question.' },
                { heading: 'Governing Law', content: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.' },
                { heading: 'Contact', content: 'For questions about these terms, contact us at info@quiq.health or call +91 22 6725 8000.' },
            ]}
        />
    )
}
