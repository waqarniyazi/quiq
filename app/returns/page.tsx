'use client'
import { LegalPage } from '@/components/legal-page'

export default function ReturnsPage() {
    return (
        <LegalPage
            title="Returns Policy"
            subtitle="Support"
            sections={[
                { heading: 'Return Eligibility', content: 'You may return unopened and unused QUIQ test kits within 15 days of delivery. The product must be in its original sealed packaging, undamaged and unused.' },
                { heading: 'Non-Returnable Items', content: 'For hygiene and safety reasons, opened test kits cannot be returned or exchanged. This includes any kit where the sealed packaging has been broken, as these are medical diagnostic products.' },
                { heading: 'How to Initiate a Return', content: 'To initiate a return:\n1. Email us at info@quiq.health with your order number\n2. Include the reason for return\n3. We will send you a return shipping label\n4. Pack the product securely and ship it back' },
                { heading: 'Refund Timeline', content: 'Once we receive and verify your return, refunds will be processed within 5-7 business days to your original payment method. UPI payments may be refunded faster (2-3 days).' },
                { heading: 'Damaged or Defective Products', content: 'If you receive a damaged or defective kit, contact us within 48 hours of delivery with photos. We will send a free replacement immediately at no additional cost.' },
                { heading: 'Contact', content: 'Returns Team: info@quiq.health\nPhone: +91 22 6725 8000\nAddress: 6C3, Gundecha Enclave, Kherani Road, Saki Naka, Andheri East, Mumbai – 400072' },
            ]}
        />
    )
}
