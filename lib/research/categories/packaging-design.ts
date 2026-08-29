import { PackageOpen } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const packagingDesign: ResearchCategory = {
    slug: 'packaging-design',
    number: 15,
    title: 'Packaging Design',
    icon: PackageOpen,
    summary:
        'Water vapour is the main thing standing between a working assay and a shelf life. Barrier film, desiccant and storage conditions decide how long the product survives.',
    deepDive:
        'Lateral flow devices are dried-reagent products. Once dried, the conjugate is stable for many months or years provided it is not exposed to moisture — and the reagent pads are designed to react only when the specimen arrives. Humidity breaks that arrangement: it degrades the paper components, the membrane and the pads, and it starts the reaction the product was engineered to defer. Packaging is therefore not downstream of the assay, it is part of it. The three levers are barrier film with a low enough water vapour transmission rate, desiccant sized correctly for the package, and storage conditions the distribution chain can actually hold. In Indian conditions, with ambient temperatures regularly above 30 °C and monsoon humidity, this is the category most likely to quietly determine whether a product works at the point of use.',
    items: [
        {
            slug: 'barrier-film',
            name: 'Barrier film and pouch construction',
            tagline:
                'Foil laminate with a WVTR below 0.0005 g/100 in² per 24 hrs — the specific recommendation for lateral flow devices.',
            whatItIs:
                'The foil laminate pouch that isolates the device from atmospheric moisture. Ultra-low water vapour transmission rate (WVTR) structures are combined with desiccants and heat sealers under precise temperature control, since a poorly formed seal defeats an excellent film.',
            whyItMatters:
                'WVTR is the single number that determines how quickly moisture reaches the strip, and it sets the ceiling on achievable shelf life regardless of how good the chemistry is. A specific recommendation exists for lateral flow devices — a 4.5 mil laminate with WVTR below 0.0005 g/100 in² per 24 hrs — which gives a concrete specification to hold suppliers to rather than a vague requirement for "foil".',
            keyFacts: [
                'Recommended for lateral flow devices: 4.5 mil laminate with WVTR below 0.0005 g/100 in² per 24 hrs.',
                'Ultra-low WVTR structures are used together with desiccants and precise-temperature sealers.',
                'Seal integrity is as important as film specification — sealing temperature control is part of the packaging process validation.',
                'Once dried, the conjugate is stable for months or years provided moisture is excluded; reagent pads are designed to react only on specimen application.',
            ],
            considerations: [
                'A damaged or poorly sealed pouch invalidates the shelf life entirely; users must be instructed never to use a test from a damaged pouch.',
                'Removing tests from original packaging shortens usable life — relevant to any multi-test carton design.',
                'Film cost scales with barrier performance; the specification should be driven by the target shelf life and climate, not chosen by default.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
                { title: 'Impak Corporation — diagnostics packaging', url: 'https://www.impakcorporation.com/diagnostics' },
            ],
        },
        {
            slug: 'desiccant-sizing',
            name: 'Desiccant selection and sizing',
            tagline:
                'Desiccant mass must be scaled to package surface area via WVTR. Reusing a small stability-study pouch is "not a fair fight".',
            whatItIs:
                'The desiccant packet or polymer desiccant film included inside the pouch to absorb residual and ingressing moisture across the product\'s shelf life. Emerging polymer and sheet desiccants use an aluminium desiccant film cover that isolates external air and absorbs internal moisture, adhered to the interior wall of a standard foil pouch.',
            whyItMatters:
                'Desiccant sizing is the most commonly mishandled part of stability work, and the failure mode is systematic rather than random. Using the same desiccant pouch in a small stability container as in large commercial packaging does not represent commercial conditions, because the smaller bag has far less surface area and therefore transmits far less moisture — the study passes, and the commercial product does not. Desiccant mass has to be calculated from package surface area and film WVTR over the intended shelf life.',
            keyFacts: [
                'Desiccant mass should be scaled to package surface area through a WVTR-based calculation over the intended shelf life.',
                'A small stability container with the same desiccant as a large commercial pack is "not a fair fight" — it understates moisture ingress.',
                'Polymer and sheet desiccants adhere an aluminium desiccant film to the pouch interior wall, isolating external air and absorbing internal moisture.',
                'Typical accelerated stability conditions are 40 °C / 75% RH, run alongside non-desiccant control packages.',
                'Real-time lateral flow aging studies use foil pouches with desiccant at room temperature or 37 °C, tracking signal-to-background ratio.',
                'Despite all of this, the shelf life of most diagnostic reagents still sits at only about one year.',
            ],
            considerations: [
                'Stability data generated in non-representative packaging is worse than no data, because it produces false confidence.',
                'Users must be told to leave desiccant packets in unopened packages — removing them is a common consumer behaviour.',
                'Desiccant capacity is finite; a pouch opened and resealed has consumed capacity that cannot be recovered.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Stability Hub — desiccant impact on stability studies',
                    url: 'https://www.stabilityhub.com/desiccant-impact-on-stability/',
                },
                {
                    title: 'WiseNano — polymer desiccant in lateral flow immunoassay test packaging',
                    url: 'https://www.wisenano.com/polymer-desiccant-in-lateral-flow-immunoassay-test-packaging/',
                },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
        {
            slug: 'storage-conditions',
            name: 'Storage conditions and shelf life',
            tagline:
                'Membrane stock at 10–25 °C and 30–70% RH; finished kits sealed and dry. Heat accelerates chemical breakdown, and Indian ambient conditions are the design case.',
            whatItIs:
                'The temperature and humidity conditions specified for raw material, work in progress and finished product, and the consumer-facing storage instructions that follow from them.',
            whyItMatters:
                'For a self-test sold in India, the storage condition specification has to be honest about where the product will actually sit: a pharmacy shelf without air conditioning, a courier van, a bathroom cabinet. Heat-stable reagent formulations and long shelf life are the design responses, and they reduce the resupply burden on distribution networks at the same time.',
            keyFacts: [
                'Nitrocellulose membrane stock should be stored long-term at 10–25 °C and 30–70% RH, avoiding condensing atmospheres and direct sunlight, sealed in foil pouches.',
                'Finished kits: keep sealed until use, leave desiccant packets in unopened packages, store dry, and avoid bathrooms and damp basements.',
                'Prolonged high temperature accelerates chemical breakdown of the reagents.',
                'For LMIC markets, heat-stable reagent formulations targeting ambient temperatures regularly above 30 °C, plus long shelf life, reduce the resupply burden.',
            ],
            considerations: [
                'Membrane stability does not predict finished-strip stability — the membrane\'s storage profile is a raw material specification, not a product claim.',
                'Consumer storage behaviour cannot be controlled, only instructed; the specification should assume the instruction is partly ignored.',
                'Indian monsoon humidity and unconditioned retail storage are the realistic design case, not a temperate laboratory.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
                {
                    title: 'DCN Dx — Designing lateral flow assays for low-resource settings',
                    url: 'https://www.dcndx.com/insights/designing-lateral-flow-assays-for-low-resource/',
                },
            ],
        },
    ],
}
