import { Microscope } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const researchOrganisations: ResearchCategory = {
    slug: 'research-organisations',
    number: 13,
    title: 'Research Organisations',
    icon: Microscope,
    summary:
        'Institutional infrastructure — incubators, government programmes and technology platforms that a small diagnostics team can use instead of building.',
    deepDive:
        'A diagnostics startup needs capabilities that are absurd to buy outright at an early stage: high-end analytical instrumentation, cleanroom access, regulatory expertise, and the credibility that comes from institutional association. India has built a specific answer to this in the form of government-backed bio-incubators, which provide lab space, shared instrumentation, early-stage funding and mentorship in exchange for residency. The practical value is not the subsidy but the compression of time — access to a mass spectrometer, a MedTech prototyping bay and a regulatory advisor in the same building removes months from a development cycle. The relationship is also a signal: incubation at a recognised centre changes how investors, partners and regulators read a young company.',
    items: [
        {
            slug: 'c-camp',
            name: 'C-CAMP (Centre for Cellular and Molecular Platforms)',
            vendor: 'C-CAMP',
            origin: 'Bangalore, India',
            tagline:
                'DBT-backed bio-incubator with a 44,000 sq ft facility, close to 200 resident start-ups, and dedicated Diagnostics and MedTech programmes.',
            whatItIs:
                'C-CAMP is an initiative of the Department of Biotechnology, Ministry of Science and Technology, Government of India, and a member of the Bangalore Life Sciences Cluster (BLiSC) alongside NCBS and inStem, located at GKVK Post on Bellary Road in Bangalore. It runs a 44,000 square foot high-end bio-incubation facility and has supported close to 200 resident incubatee start-ups, plus more virtually, providing technology platforms, workshops, networking and mentorship.',
            whyItMatters:
                'C-CAMP runs programmes specifically targeting Diagnostics and Med-tech, alongside Maternal & Child Health, Antimicrobial Resistance, Agriculture and Digital Health — which puts a QUIQ-shaped company squarely inside its stated remit rather than at the edge of it. The offering combines the three things hardest to buy separately: lab space and shared high-end instrumentation, early-stage capital through its Investment Program, and scientific plus business mentorship. Its MedTech facility also connects directly to the Rapid Prototyping category — prototyping access without capital commitment.',
            keyFacts: [
                'An initiative of the Department of Biotechnology, Ministry of Science and Technology, Government of India.',
                'Member of the Bangalore Life Sciences Cluster (BLiSC) with NCBS and inStem; located at GKVK Post, Bellary Road, Bangalore.',
                '44,000 sq ft high-end bio-incubation facility; close to 200 resident incubatee start-ups supported, with more supported virtually.',
                'Programme areas include Diagnostics, Med-tech, Maternal & Child Health, Antimicrobial Resistance, COVID-19, Agriculture and Digital Health.',
                'Offering spans lab space and infrastructure, early-stage funding through the C-CAMP Investment Program, and scientific and business mentorship.',
                'Visitors are given tours of both the incubation and MedTech facilities.',
                'Portfolio includes Strand Life Sciences; one summary describes 350+ startups supported with five exits including one IPO. Eyestem Research\'s Eyecyte-RPE went bench-to-bedside in roughly seven years.',
                'Ramaswamy S was founding CEO, May 2009 – May 2016.',
            ],
            considerations: [
                'Incubation involves residency and a formal application cycle — it is a commitment of location and time, not a service purchased on demand.',
                'Shared instrumentation means scheduling; access is real but not exclusive.',
                'Confirm current programme intake, terms and any equity or IP conditions directly, as these change between cohorts.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'C-CAMP', url: 'https://www.ccamp.res.in/' },
                { title: 'C-CAMP — Incubation', url: 'https://www.ccamp.res.in/incubation' },
                {
                    title: 'India Science, Technology & Innovation — C-CAMP',
                    url: 'https://www.indiascienceandtechnology.gov.in/organisations/centre-cellular-and-molecular-platforms-c-camp',
                },
            ],
        },
        {
            slug: 'institutional-access-model',
            name: 'Using institutional infrastructure',
            tagline:
                'What to take from an incubator, what to keep in-house, and the IP and equity questions to settle before signing.',
            whatItIs:
                'A working view of how a small diagnostics team should use research-institution infrastructure: which capabilities are worth accessing externally, which are core enough to own, and what contractual terms matter.',
            whyItMatters:
                'Institutional access saves capital and time, but the terms attached to it can constrain a company for years. Deciding in advance what is being bought — instrument time, credibility, capital, mentorship — makes it possible to evaluate the price properly rather than accepting a bundle.',
            keyFacts: [
                'Access-worthy: high-end analytical instrumentation, cleanroom and MedTech prototyping bays, regulatory advisory, and specialist characterisation.',
                'Keep in-house: assay design decisions, antibody and conjugate selection, and anything constituting core product knowledge.',
                'Institutional association is itself a signal to investors, partners and regulators, independent of the technical access.',
            ],
            considerations: [
                'Clarify IP ownership for work done on shared infrastructure before any development starts.',
                'Understand whether incubation carries equity, revenue-share or milestone obligations.',
                'Residency requirements can conflict with where the team and the manufacturing partner actually are.',
                'The deck also lists "Medtech" in this category. It is treated here as the general MedTech access route via C-CAMP; if a specific organisation was intended, the name needs confirming internally.',
            ],
            status: 'reference',
            sources: [
                { title: 'C-CAMP — Incubation', url: 'https://www.ccamp.res.in/incubation' },
            ],
        },
    ],
}
