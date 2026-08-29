import { LayoutTemplate } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const testDesign: ResearchCategory = {
    slug: 'test-design',
    number: 2,
    title: 'Test Design',
    icon: LayoutTemplate,
    summary:
        'How the whole device is architected around the user — integrated all-in-one formats, flow direction, and the number of steps a person has to get right.',
    deepDive:
        'A self-test fails in the hands, not in the lab. The dominant format is a loose collection of parts: a lancet, an alcohol swab, a capillary tube or pipette, a cassette, and a buffer vial. Each hand-off is an opportunity for the user to apply too little blood, too much buffer, or the wrong sequence. Integrated designs collapse those steps into one device — lancing, collection and buffer delivery happen in a fixed order because the hardware permits no other order. Separately, flow direction is a design axis: lateral flow moves sample horizontally along a strip, while vertical (flow-through) formats push it down through a stacked membrane, which is faster and less prone to hook effect but harder to manufacture cheaply.',
    items: [
        {
            slug: 'atomo-diagnostics',
            name: 'Atomo integrated devices (Elion, Pascal)',
            vendor: 'Atomo Diagnostics',
            origin: 'Australia',
            tagline:
                'All-in-one blood self-test platform — lancet, collection and pre-filled buffer in a single device. Over 90% reduction in blood delivery errors in untrained hands.',
            whatItIs:
                'Atomo makes an integrated rapid-test platform rather than individual assays. Elion is the self-test configuration and Pascal the professional point-of-care configuration. Both combine a safety lancet, a blood collection mechanism and a patented pre-filled buffer blister with a frangible seal into one housing, so the user presses, collects and releases buffer without handling separate components. Assay developers licence the platform and put their own strip inside it.',
            whyItMatters:
                'This is the clearest published evidence that device architecture — not assay chemistry — is where self-test accuracy is won or lost. An independent study comparing the integrated device against a conventional multi-component CE-marked kit with untrained users found over a 90% reduction in blood delivery errors. For a product sold to first-time users at low cost, that is the difference between a valid result and an invalid one. Atomo also demonstrates the licensing model: a platform owner and an assay owner can be different companies.',
            keyFacts: [
                'Integrates safety lancet, blood collection and a pre-filled buffer blister with a frangible seal into a single housing.',
                'Independent evaluation with untrained users showed over 90% reduction in blood delivery errors versus a traditional multi-component CE-marked kit.',
                'Delivered the world\'s first integrated blood-based HIV rapid self-test, reported at 99.6% accuracy.',
                'Approved or registered in 40+ countries, spanning US FDA, CE, Australian TGA and WHO prequalification pathways.',
                'Platform is licensed to assay partners — publicly announced work includes RPS Diagnostics (FebriDx) and Access Bio (COVID-19).',
            ],
            considerations: [
                'Integration raises bill-of-materials cost. The trade-off is fewer invalid results and fewer wasted kits — worth modelling explicitly rather than assuming.',
                'Licensing a third-party platform ties product roadmap and supply to another company\'s tooling and injection moulds.',
                'The published error-reduction figure comes from comparison against one specific conventional kit; it is directional evidence for integration, not a universal constant.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Atomo Diagnostics', url: 'https://www.atomodiagnostics.com/' },
                {
                    title: 'Atomo Diagnostics — Elion / Pascal integrated device platform',
                    url: 'https://www.atomodiagnostics.com/our-technology/',
                },
            ],
        },
        {
            slug: 'vertical-flow',
            name: 'Vertical (flow-through) tests',
            tagline:
                'Sample moves down through stacked membranes rather than along a strip. Faster, less hook effect, harder to make cheaply.',
            whatItIs:
                'In a vertical or flow-through immunoassay the sample is dropped into a hole in the lid of a shallow cassette and passes downward through a membrane that sits on top of an absorbent pad. Capture reagent is immobilised as a spot on that membrane. Because the fluid path is millimetres rather than centimetres, the reaction completes far faster than lateral flow, and the shorter path reduces the high-dose hook effect that can make very high analyte concentrations read as negative.',
            whyItMatters:
                'Vertical flow is the natural answer when read time matters or when the analyte concentration range is very wide. It is also structurally different enough that it changes the cassette, the reader and the user instructions — so it is a platform decision, not a variant.',
            keyFacts: [
                'Format is a shallow "matchbox" cassette: membrane over absorbent pad, sample introduced through a lid injection hole.',
                'Shorter fluid path gives faster time-to-result and reduces high-dose hook effect relative to lateral flow.',
                'Commercially proven at scale — bioLytical Laboratories\' flow-through HIV test holds both WHO prequalification and US FDA approval.',
            ],
            considerations: [
                'The internal QUIQ deck lists INDICAID under "vertical test". Published product literature describes INDICAID as a lateral flow immunoassay. Treat bioLytical as the reference vertical-flow example and correct the deck.',
                'Manufacturing is less commoditised than lateral flow: fewer contract manufacturers, fewer off-the-shelf cassettes, higher tooling cost.',
                'Each drop is user-metered through a hole, so volume control depends more heavily on the pipette or dropper design.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'bioLytical Laboratories — INSTI flow-through rapid tests', url: 'https://www.biolytical.com/' },
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays: a review',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
            ],
        },
        {
            slug: 'indicaid',
            name: 'INDICAID',
            vendor: 'PHASE Scientific',
            origin: 'Hong Kong',
            tagline:
                'Consumer-facing rapid test brand with strong packaging and instruction design — listed in the deck under vertical tests, but in fact lateral flow.',
            whatItIs:
                'INDICAID is PHASE Scientific\'s consumer rapid-test line, best known for its COVID-19 antigen self-test which reached US FDA emergency use authorisation and wide retail distribution. The devices are lateral flow immunoassays presented with unusually consumer-grade packaging, colour-coded instructions and swab-and-vial workflow.',
            whyItMatters:
                'INDICAID is most useful to QUIQ as a benchmark for consumer presentation rather than for assay architecture. It shows what a rapid test looks like when it is designed as a retail product — box, instruction card, colour language — which is directly relevant to the packaging and B2C channel work.',
            keyFacts: [
                'Lateral flow immunoassay format, retailed as a consumer self-test.',
                'Consumer packaging and pictogram-led instructions rather than clinical leaflet style.',
                'Achieved US regulatory authorisation and mass retail distribution for its COVID-19 antigen self-test.',
            ],
            considerations: [
                'Deck correction: listed under "vertical test" in the internal slide, but product literature describes a lateral flow assay. Recorded here so the correction does not get lost.',
                'Retail-grade packaging is a meaningful cost line; benchmark it before assuming it fits a ₹99 unit economics model.',
            ],
            status: 'reference',
            sources: [
                { title: 'INDICAID — PHASE Scientific', url: 'https://indicaid.com/' },
                { title: 'PHASE Scientific', url: 'https://www.phasescientific.com/' },
            ],
        },
        {
            slug: 'format-families',
            name: 'Format families — Type 2, Type 3, patch and wearable collection',
            tagline:
                'The broader design space the deck gestures at: staged-cassette variants, adhesive patch collectors, and where each is appropriate.',
            whatItIs:
                'Beyond the classic cassette, several format families exist. Staged cassette variants ("Type 2", "Type 3" in internal shorthand) add a second user action — a buffer release or a valve — to separate sample application from chromatography, improving control over how much fluid reaches the strip. Patch formats are adhesive devices worn briefly on the skin that collect capillary blood or interstitial fluid with minimal user skill, then either read in place or transfer to a strip.',
            whyItMatters:
                'These define the option space before committing to a housing. Patch and wearable collection in particular address the single biggest usability barrier in blood self-testing — getting an adequate, clean sample from a person who has never done it before.',
            keyFacts: [
                'Staged cassettes trade one extra user step for better fluid control and reduced background.',
                'Patch collectors move the puncture off the fingertip, where nerve density is highest, to sites with lower pain perception.',
                'Patch and upper-arm collectors are an active commercial area — Tasso and YourBio Health both ship devices in this space (see the Lancet category).',
            ],
            considerations: [
                'The deck names "Malacheck" and "The Patch" in this category. Neither resolved to a verifiable manufacturer during research. Flagged as an open question — confirm the intended vendors internally before either is cited externally.',
                'Every additional user step is an additional failure mode. Staged designs need usability testing, not just bench validation.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'MDPI Diagnostics — Painless capillary blood collection: evaluation of the Onflow device',
                    url: 'https://www.mdpi.com/2075-4418/13/10/1754',
                },
            ],
        },
    ],
}
