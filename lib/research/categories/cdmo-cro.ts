import { Factory } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const cdmoCro: ResearchCategory = {
    slug: 'cdmo-cro',
    number: 11,
    title: 'CDMO / CRO',
    icon: Factory,
    summary:
        'The partners who develop and manufacture the assay so QUIQ does not have to build a factory first — and the terms on which that is a good idea.',
    deepDive:
        'Building an IVD manufacturing operation from scratch means a cleanroom, ISO 13485 certification, a quality management system, striping and cutting equipment, environmental control and a validated supply chain — years of capital before the first commercial test. A contract development and manufacturing organisation lets a product reach market on someone else\'s certified line. The trade-offs are structural rather than technical: the CDMO owns the process knowledge, holds the equipment, and often controls the regulatory file for the manufacturing site. That is acceptable, even correct, for a first product — but the terms under which process knowledge and design history transfer back, and whether a second source is contractually possible, are decisions best made at contract signature rather than discovered during a supply failure.',
    items: [
        {
            slug: 'qawach-bio',
            name: 'Qawach Bio',
            vendor: 'Qawach Bio',
            origin: 'India',
            tagline:
                'Indian diagnostics developer with the Q-Plat platform and Q-probe detection molecules, manufacturing through a GMP and ISO 13485 certified facility.',
            whatItIs:
                'Qawach Bio develops diagnostic assays around its Q-Plat platform, which uses proprietary Q-probe detection molecules. Manufacturing runs through Anamol Laboratories\' 27,000 square foot facility at Palghar, which holds GMP, ISO 9001:2015 and ISO 13485:2016 certification.',
            whyItMatters:
                'Qawach is the most directly relevant partner profile in this category: an Indian developer with both platform technology and access to a certified manufacturing site. That combination — domestic, certified, and technically capable — is the shortest path from a QUIQ assay design to a compliant manufactured product without building a facility.',
            keyFacts: [
                'Q-Plat detection platform built on proprietary Q-probe detection molecules.',
                'Manufacturing through Anamol Laboratories, Palghar — a 27,000 sq ft facility.',
                'Certifications at the manufacturing site: GMP, ISO 9001:2015 and ISO 13485:2016.',
                'India-based, so regulatory work sits within CDSCO rather than requiring import pathways.',
            ],
            considerations: [
                'Manufacturing is through a partner facility rather than owned — capacity allocation and priority in a supply crunch depend on a relationship Qawach controls, not QUIQ.',
                'Platform-based partners typically want the assay built on their platform; confirm what is transferable if the relationship ends.',
                'Verify the current certification scope directly — certification is per-scope and per-site, and scopes change.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Qawach Bio', url: 'https://www.qawachbio.com/' },
                { title: 'Anamol Laboratories', url: 'https://www.anamol.com/' },
            ],
        },
        {
            slug: 'dcndx',
            name: 'DCN Diagnostics (DCNDx)',
            vendor: 'DCN Dx',
            origin: 'United States',
            tagline:
                'Lateral flow CDMO publishing substantive technical guidance on assay design for low-resource settings — a useful signal of positioning.',
            whatItIs:
                'DCN Dx is a contract development and manufacturing organisation specialising in lateral flow and rapid diagnostic assays, covering feasibility, development, scale-up and manufacturing. It publishes technical content on its Insights channel, including detailed guidance on designing lateral flow assays for low-resource settings.',
            whyItMatters:
                'That published guidance is directly on point for QUIQ\'s market. It addresses heat-stable reagent formulations for ambient temperatures that regularly exceed 30 °C in low- and middle-income countries, and long shelf life to reduce the resupply burden on distribution networks. A CDMO that has already articulated the LMIC design constraints in public is more likely to have solved them in practice than one that has not.',
            keyFacts: [
                'Full-service lateral flow CDMO: feasibility through development, scale-up and manufacturing.',
                'Publishes technical guidance specifically on lateral flow design for low-resource settings.',
                'Explicitly addresses heat-stable reagent formulation for ambient temperatures regularly above 30 °C in LMICs.',
                'Treats long shelf life as a design goal to reduce resupply frequency in constrained distribution networks.',
            ],
            considerations: [
                'US-based, so unit economics and logistics differ materially from an Indian partner; likely better suited to development than to volume manufacture for the Indian market.',
                'Published thought leadership is a positioning signal, not evidence of capacity — confirm current capacity, lead times and minimum order quantities directly.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'DCN Dx — Designing lateral flow assays for low-resource settings',
                    url: 'https://www.dcndx.com/insights/designing-lateral-flow-assays-for-low-resource/',
                },
                { title: 'DCN Dx', url: 'https://www.dcndx.com/' },
            ],
        },
        {
            slug: 'partner-selection-criteria',
            name: 'CDMO selection criteria',
            tagline:
                'What to actually check before signing: certification scope, technology transfer terms, second sourcing, and who owns the design history file.',
            whatItIs:
                'A working checklist for evaluating contract partners in this category, derived from what distinguishes the profiles above and from the standard failure modes of outsourced IVD manufacture.',
            whyItMatters:
                'Most of the risk in a CDMO relationship is contractual rather than technical. Assays get built; the problems arrive at scale-up, at second sourcing, and at the point where the relationship needs to end. Deciding these terms while there is still choice is far cheaper than renegotiating under supply pressure.',
            keyFacts: [
                'Certification scope: ISO 13485 is per-site and per-scope. Confirm the certificate covers the specific device class and process, not just the company.',
                'Technology transfer: establish in the contract what process knowledge, specifications and validation data transfer back to QUIQ, and on what trigger.',
                'Second sourcing: confirm whether a second manufacturer is contractually permitted and technically feasible before it is needed.',
                'Design history file and regulatory ownership: establish who holds the file and who is the legal manufacturer on the declaration of conformity.',
                'Minimum order quantities and lead times determine working capital more than unit price does.',
            ],
            considerations: [
                'Platform-based partners may make the assay inseparable from their technology; scrutinise exit terms specifically.',
                'The deck also lists DeNovo and MDTL in this category. Neither was researched in this pass — recorded as an outstanding item rather than characterised on assumption.',
            ],
            status: 'reference',
            sources: [
                {
                    title: 'DCN Dx — Designing lateral flow assays for low-resource settings',
                    url: 'https://www.dcndx.com/insights/designing-lateral-flow-assays-for-low-resource/',
                },
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
            ],
        },
    ],
}
