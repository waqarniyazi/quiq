import { Store } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const b2bMarketplace: ResearchCategory = {
    slug: 'b2b-marketplace',
    number: 10,
    title: 'B2B Marketplace',
    icon: Store,
    summary:
        'How diagnostic volume actually moves in India — centralised labs, franchise collection networks, and the aggregators sitting between them and the patient.',
    deepDive:
        'India\'s diagnostics market is unusually shaped. Rather than a few vertically integrated chains serving patients directly, the dominant structure is a small number of very large centralised laboratories doing the analysis, connected to tens of thousands of independently owned collection points that do the sample gathering. The lab sells to those partners at a business-to-business price; the partner sets the retail price and keeps the margin. This asset-light arrangement is why Indian test prices are among the lowest in the world, and it is the distribution structure any new diagnostic product in India has to either use or deliberately bypass. For a self-test, that network is both a channel and a competitor — it can carry the product to a small town, and it also sells the lab test that the self-test replaces.',
    items: [
        {
            slug: 'thyrocare',
            name: 'Thyrocare Technologies',
            vendor: 'Thyrocare Technologies Ltd',
            origin: 'Navi Mumbai, India',
            tagline:
                'Pioneer of the centralised-lab, franchise-led B2B model in India. 10,100+ active partners; ₹687 crore FY25 revenue; NABL accreditation across all 29 owned labs.',
            whatItIs:
                'Founded in 1996 and headquartered in Navi Mumbai, Thyrocare pioneered the fully automated centralised laboratory model in India — concentrating analysis in a small number of very high-throughput labs to drive per-test cost down. It operates predominantly business-to-business, serving hospitals, laboratories, diagnostic centres, nursing homes, clinics and doctors rather than selling primarily to patients. Collection is handled by an asset-light network of authorised service providers: Thyrocare Aggregators (TAGs) and Thyrocare Service Providers (TSPs), who gather samples from hospitals, labs, referring doctors, walk-ins and home collection.',
            whyItMatters:
                'Thyrocare is the reference case for reaching diagnostic demand in India without owning the last mile. The franchise economics are strikingly favourable to the partner — reported revenue share to collection-centre franchisees runs as high as 90–95% of the B2B price — which is precisely why the network grew to over 10,100 active partners. For QUIQ, this network is the single largest existing distribution surface for anything diagnostic in India, and understanding its incentives is the difference between it being a channel and being an obstacle.',
            keyFacts: [
                'Founded 1996, Navi Mumbai; pioneered the fully automated centralised laboratory model in India.',
                'Predominantly B2B — serves hospitals, labs, diagnostic centres, nursing homes, clinics and doctors at very low per-test cost.',
                'Asset-light franchise network of authorised service providers: Thyrocare Aggregators (TAGs) and Thyrocare Service Providers (TSPs).',
                'Franchise formats: TSP and Good Quality Centre (GQC). Total investment typically ₹2–5 lakh; the TSP module starts at ₹2,00,000 including ₹1 lakh refundable and ₹35,000 of free benefits (₹25,000 materials, ₹10,000 training).',
                'Reported revenue share to collection-centre franchisees of up to 90–95% of the B2B price.',
                '10,100+ active partners as of Q2 FY26.',
                'FY2024-25: pathology ₹613 cr (89% of revenue, +20.7% YoY), radiology ₹54 cr, materials and other ₹19.8 cr; total ₹687 cr, +20.2% YoY.',
                'Full NABL accreditation across all 29 owned laboratories.',
                'Brands include FocusTB, Aarogyam and SugarScan; franchisees are branded "Thyrocare Aarogyam Center". Aarogyam packages have fallen to 35% of revenue from 40% as specialised and non-Aarogyam tests grow faster.',
            ],
            considerations: [
                'The sector is highly fragmented with low entry barriers, driving persistent price competition from regional labs and from chains such as Dr. Lal PathLabs and Metropolis.',
                'Revenue-concentration risk: API Holdings (PharmEasy) is both majority shareholder and a major B2B partner.',
                'A shift toward at-home collection and digital-first platforms could disrupt the walk-in franchise economics that the model depends on — which is the same shift a successful self-test would accelerate.',
                'Strategic tension for QUIQ: the franchise network is the best route to reach, and its economics depend on the lab test a self-test displaces. Partnership framing matters.',
            ],
            status: 'reference',
            sources: [
                { title: 'Thyrocare Technologies', url: 'https://www.thyrocare.com/' },
                { title: 'Thyrocare — TSP franchisee programme', url: 'https://lead.thyrocare.com/tsp-franchisee/' },
                {
                    title: 'Tradejini — Thyrocare Technologies business and financial analysis',
                    url: 'https://tradejini.com/blogs/thyrocare-technologies-share-price-target/',
                },
            ],
        },
    ],
}
