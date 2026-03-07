'use client'
import { LegalPage } from '@/components/legal-page'

export default function ShippingPage() {
    return (
        <LegalPage
            title="Shipping Policy"
            subtitle="Support"
            sections={[
                { heading: 'Delivery Coverage', content: 'We deliver across all of India — all 28 states and 8 union territories. We use trusted courier partners to ensure safe and timely delivery of your diagnostic kits.' },
                { heading: 'Delivery Timelines', content: 'Metro cities (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad): 1-3 business days\nTier 2 cities: 3-5 business days\nRemote areas: 5-7 business days\n\nPlease note that delivery times may vary during holidays and extreme weather conditions.' },
                { heading: 'Shipping Cost', content: 'Free shipping on all orders! There are no hidden charges. The price you see on the product page is the final price delivered to your door.' },
                { heading: 'Order Tracking', content: 'Once your order is shipped, you will receive an email and SMS with a tracking number. You can track your order status through the courier partner\'s website.' },
                { heading: 'Packaging', content: 'All QUIQ test kits are shipped in discreet, tamper-proof packaging. There are no markings indicating the nature of the product. Your privacy is our priority.' },
                { heading: 'Contact', content: 'For shipping inquiries: info@quiq.health\nPhone: +91 22 6725 8000' },
            ]}
        />
    )
}
