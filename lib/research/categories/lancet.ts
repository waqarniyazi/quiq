import { Syringe } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const lancet: ResearchCategory = {
    slug: 'lancet',
    number: 5,
    title: 'Lancet',
    icon: Syringe,
    summary:
        'The one part of the kit that hurts. Gauge, depth and site determine both how much blood the user gets and whether they will ever use the product again.',
    deepDive:
        'Lancet selection looks like a commodity decision and is not. Gauge numbering runs backwards — a higher number is a thinner needle — and thinner needles yield smaller drops. Published comparison of three lancing devices across 90 people with diabetes and 360 lancing procedures found that penetration depth drove both blood volume and pain significantly, while lancet gauge on its own did not show a significant effect; the device itself, however, did. The practical conclusion is that depth is the primary lever and should be set to the minimum that yields an adequate sample, and that the lancing mechanism matters more than the needle specification alone. Site is the third variable: upper-arm and alternate-site collection is consistently rated less painful than fingertip.',
    items: [
        {
            slug: 'colour-coded-gauge',
            name: 'Colour-coded lancets by gauge',
            tagline:
                'Colour tells the user which lancet they are holding. There is no industry standard mapping — every manufacturer defines its own.',
            whatItIs:
                'Safety lancets are moulded in different colours to distinguish gauge and penetration depth at a glance, so a user or a nurse can pick the right one without reading fine print. Common clinical ranges run from 21G and 23G for larger-volume draws down to 28G–33G for glucose monitoring.',
            whyItMatters:
                'For a self-test kit the colour is the instruction. A user who cannot tell which lancet is in the box will not reason about gauge. Standardising a colour across the QUIQ range — and matching it to the instruction leaflet artwork — removes a whole class of user error at essentially zero cost.',
            keyFacts: [
                'Higher gauge number = thinner needle. 30G–32G is typical for routine glucose self-monitoring; 28G–30G where a larger drop is needed or fingertips are callused.',
                'Modern meters need only ~0.3–0.6 µL, permitting shallow punctures with fine gauges.',
                'A 30G safety lancet at 1.2–1.5 mm depth typically yields 18–32 µL within 20 seconds — comfortably above lateral flow sample requirements.',
                'Shallow 0.6–0.7 mm punctures with 31G–33G target capillaries while avoiding deeper nerve endings.',
            ],
            considerations: [
                'Colour coding is brand-specific, not an industry standard. Switching lancet supplier can silently invert the colour language on the instruction leaflet.',
                'If artwork depends on a supplier colour, that supplier becomes a single point of failure for the printed carton, not just the component.',
                'Confirm the exact gauge/depth/colour mapping against the chosen supplier\'s current catalogue before artwork sign-off — mappings change between product generations.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Evaluation of three lancing devices: what do blood volume and lancing pain depend on? (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8442193/',
                },
                {
                    title: 'ClinicalTrials.gov — Comparison of three lancing devices regarding capillary blood volume and lancing pain intensity',
                    url: 'https://clinicaltrials.gov/study/NCT03479619',
                },
            ],
        },
        {
            slug: 'tasso',
            name: 'Tasso blood collection devices',
            vendor: 'Tasso, Inc.',
            origin: 'United States',
            tagline:
                'Push-button upper-arm collector using a retractable lancet plus light vacuum. 200–600 µL, and consistently lower pain scores than fingerstick.',
            whatItIs:
                'A small device applied to the skin of the upper arm. Pressing a button drives a retractable lancet through the skin; a slight vacuum then draws capillary blood into a detachable reservoir. The Tasso-SST collects roughly 300 µL into a tube with clot activator and serum separator gel; the Tasso+ and Tasso micro collect 200–600 µL of whole blood depending on tube type.',
            whyItMatters:
                'Tasso proves that moving the puncture off the fingertip solves the two hardest problems in blood self-testing at once: pain and volume. A meta-analytic comparison found capillary self-collection significantly less painful than venipuncture, with upper-arm devices scoring lower than fingerprick methods. For QUIQ this is the reference design for any product where fingerstick volume is marginal or where repeat testing depends on the first experience not being unpleasant.',
            keyFacts: [
                'Mechanism: button-actuated retractable lancet plus low vacuum (reported at 40 kPa for the SST) drawing blood into a detachable reservoir.',
                'Volume: ~300 µL (Tasso-SST); 200–600 µL depending on tube type (Tasso+ / micro).',
                'Regulatory: Tasso+ is a 510(k)-cleared Class II lancet, CE marked, MHRA registered and Health Canada licensed.',
                'Capillary self-collection showed significantly lower pain than venipuncture (SMD −0.65, 95% CI −0.96 to −0.35), with upper-arm devices lower than fingerprick.',
                'Validated in published work against venous phlebotomy for anti-SARS-CoV-2 antibody measurement and for endogenous uracil levels.',
            ],
            considerations: [
                'Terminology across sources is inconsistent — one study describes a 16-gauge lancet in the SST while Tasso\'s own material for the + and micro lines uses "microneedle". The puncture element differs across product generations; confirm against the current IFU for the specific model rather than citing a gauge.',
                'Unit cost is far above a simple safety lancet. This is a premium collection path, not a ₹99 kit component as it stands.',
                'Collected volume vastly exceeds what a lateral flow strip needs; the value here is usability and pain, not volume.',
            ],
            status: 'reference',
            sources: [
                { title: 'Tasso, Inc. — FAQ and product specifications', url: 'https://www.tassoinc.com/faq' },
                {
                    title: 'Comparison of capillary blood self-collection using the Tasso-SST device with venous phlebotomy (medRxiv)',
                    url: 'https://www.medrxiv.org/content/10.1101/2023.03.13.23286935.full.pdf',
                },
                {
                    title: 'Feasibility, acceptability and safety of a novel self-collection device in clinical trials (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11135758/',
                },
            ],
        },
        {
            slug: 'microneedle-arrays',
            name: 'Microneedle array collectors',
            tagline:
                'Arrays of sub-millimetre needles instead of one lance — shallower, less painful, and the basis of the TAP and Onflow devices.',
            whatItIs:
                'Instead of a single lancet penetrating a few millimetres, a microneedle array uses many very short needles to breach only the outermost skin layers, opening capillaries while largely avoiding the deeper dermal nerve endings that generate sharp pain. Blood is then drawn out by vacuum into a reservoir.',
            whyItMatters:
                'This is the frontier of painless collection and the most likely direction for consumer self-testing over the next few years. Comparable devices already report very high acceptability: the needle-free Onflow serum gel device was rated more acceptable than venepuncture with lower pain, and 96.5% of participants said they would use it again — the kind of number that changes repeat-purchase behaviour.',
            keyFacts: [
                'YourBio Health TAP II collects up to 350 µL and TAP micro up to 600 µL from the upper arm using a microneedle array plus vacuum.',
                'Onflow (needle-free) reported 96.5% of participants willing to use it again, with lower pain ratings than venepuncture.',
                'Shallow penetration targets capillary beds while avoiding deeper nerve endings.',
            ],
            considerations: [
                'Manufacturing microneedle arrays at low unit cost is the unsolved problem; these are currently clinical-trial and premium-consumer price points.',
                'Volume yield is more sensitive to skin type, hydration and application pressure than a conventional lance.',
                'Worth monitoring rather than specifying — revisit when a supplier reaches commodity pricing.',
            ],
            status: 'reference',
            sources: [
                {
                    title: 'MDPI Diagnostics — Painless capillary blood collection: a rapid evaluation of the Onflow device',
                    url: 'https://www.mdpi.com/2075-4418/13/10/1754',
                },
                {
                    title: 'Feasibility, acceptability and safety of a novel self-collection device in clinical trials (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11135758/',
                },
            ],
        },
    ],
}
