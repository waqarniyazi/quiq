'use client'
import { LegalPage } from '@/components/legal-page'

export default function RefundsPage() {
    return (
        <LegalPage
            title="Refund Policy"
            subtitle="Support"
            sections={[
                { heading: 'Refund Eligibility', content: 'Refunds are available for:\n• Unopened, unused kits returned within 15 days\n• Damaged or defective products\n• Orders cancelled before shipping\n• Incorrect products received' },
                { heading: 'Refund Process', content: '1. Contact us at info@quiq.health with your order number\n2. We review your request within 24 hours\n3. If approved, refund is initiated within 48 hours\n4. Refund appears in your account within 5-7 business days' },
                { heading: 'Refund Methods', content: 'Refunds are processed to the original payment method:\n• UPI payments: 2-3 business days\n• Credit/Debit cards: 5-7 business days\n• Net banking: 5-7 business days\n• Wallet payments: 1-2 business days' },
                { heading: 'Non-Refundable', content: 'Opened test kits cannot be refunded for hygiene and safety reasons. This is in compliance with medical device regulations.' },
                { heading: 'Cancellations', content: 'Orders can be cancelled for a full refund if they have not yet been shipped. Once shipped, the standard return policy applies.' },
                { heading: 'Contact', content: 'Refunds Team: info@quiq.health\nPhone: +91 22 6725 8000' },
            ]}
        />
    )
}
