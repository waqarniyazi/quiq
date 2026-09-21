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
            slug: 'genteel',
            name: 'Genteel vacuum-assisted lancing device',
            origin: 'United States',
            tagline:
                'Reusable lancing device that uses vacuum plus vibration so blood flows without squeezing. FDA-cleared for alternate-site testing.',
            whatItIs:
                'A reusable lancing device that applies vacuum, together with vibration, at the puncture site so that blood comes out without the user squeezing the finger. It is FDA-cleared for alternate-site testing and uses standard square-shaft lancets. A pet version (PetTest Genteel) is sold at around $85.',
            whyItMatters:
                'Genteel is not viable for launch: it is a reusable device, not a per-kit component. The idea worth borrowing is no-squeeze blood flow — squeezing is where users both hurt themselves and dilute the sample with tissue fluid.',
            keyFacts: [
                'Vacuum plus vibration draws blood without squeezing.',
                'FDA-cleared for alternate-site testing.',
                'Uses standard square-shaft lancets.',
                'Pet version (PetTest Genteel) listed at ~$85.',
            ],
            considerations: [
                'Reusable device — does not fit a single-use ₹99 kit.',
                'No peer-reviewed study was found during this research pass.',
                'Official manufacturer site not yet located.',
            ],
            status: 'reference',
            sources: [
                {
                    title: 'Providence — New Genteel: the "ouch-free" lancet (overview)',
                    url: 'https://blog.providence.org/oregon-news/new-genteel-the-ouch-free-lancet',
                },
            ],
            resources: [
                { label: 'PetTest Genteel (pet version, price reference) — Chewy', href: 'https://www.chewy.com/pettest-genteel-painless-dog-cat/dp/382050', type: 'link' },
                { label: 'Video — PetTest Genteel demo', href: 'https://youtu.be/ACnvtu4jcIM', type: 'link' },
            ],
        },
        {
            slug: 'erbilite-laser',
            name: 'ERBILITE laser lancet',
            vendor: 'NSL',
            origin: 'Moscow, Russia',
            tagline:
                'Er:YAG laser that punches a micro-hole in the skin without a needle. Six depth levels. Clinic device.',
            whatItIs:
                'ERBILITE is an Er:YAG laser (2.94 µm) that creates a micro-hole in the skin instead of using a needle, with six depth levels. It is a clinic device. The founder has said a home version is in development. Note the correct name is ERBILITE, made by NSL — not "EBILITE" or "NCL".',
            whyItMatters:
                'Not viable for QUIQ: it is a capital device for clinic use. Kept on the watch list because published work on laser lancing (a different device) reports substantially less pain than a lancet in people with diabetes.',
            keyFacts: [
                'Er:YAG laser, 2.94 µm wavelength; needle-free.',
                'Six depth levels.',
                'Founder interview (2018) states a home version is in development.',
                'Laser vs lancet study in diabetes reported 75% less pain (separate study, not specific to ERBILITE).',
            ],
            considerations: [
                'Capital equipment, clinic use — not a kit component.',
                'The laser-lancing evidence cited is for the LaMeditech LMT-1000 and other devices, not ERBILITE itself.',
            ],
            status: 'reference',
            sources: [
                { title: 'Gazeta.ru — founder interview (six depth levels, home version in development)', url: 'https://www.gazeta.ru/science/2018/06/27_a_11817709.shtml' },
                { title: 'Laser lancing evidence — LaMeditech LMT-1000 (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/34268735/' },
                { title: 'Laser vs lancet in diabetes — 75% less pain (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9723205/' },
            ],
            resources: [
                { label: 'ERBILITE — GK Vector (Russian distributor)', href: 'https://gkvector.com/catalog/laboratornoe-oborudovanie/gematologiya/sistemy-dlya-zabora-krovi/skarifikatory-i-lancety/erbilite/', type: 'link' },
                { label: 'ERBILITE — Planeta-Med (alternate distributor)', href: 'https://www.planeta-med.ru/catalog/med/perf/erbi1', type: 'link' },
            ],
        },
        {
            slug: 'eth-leech-suction-cup',
            name: 'Leech-style suction cup (ETH Zurich)',
            vendor: 'ETH Zurich — Leroux group',
            origin: 'Switzerland',
            tagline:
                'A 2.5 cm silicone suction cup with ~12 microneedles, worn on the upper arm or back. ~195 µL in animal tests. ETH is seeking partners.',
            whatItIs:
                'A 2.5 cm silicone suction cup containing around twelve steel microneedles, modelled on how leeches draw blood. It is applied to the upper arm or back and collected ~195 µL in animal tests. A biodegradable version is in development. It is a prototype and is not for sale.',
            whyItMatters:
                'Our best innovation candidate. Not a launch component, but a partnership or licensing candidate for a future Integrated Pen: it combines the off-finger site and low pain of premium upper-arm collectors with a very simple part. ETH has publicly sought partners.',
            keyFacts: [
                '2.5 cm silicone suction cup with ~12 steel microneedles.',
                'Site: upper arm or back.',
                '~195 µL collected in animal tests.',
                'Biodegradable version in development.',
                'Published: Zoratto et al., Advanced Science 2024 (DOI 10.1002/advs.202308809).',
                'Contact: Prof. Jean-Christophe Leroux group (Drug Formulation & Delivery); lead author Nicole Zoratto.',
            ],
            considerations: [
                'Prototype — not for sale; volume data is from animal tests only.',
                'Licensing terms and timelines unknown until ETH is approached.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'ETH News — Blood diagnostics modelled on leeches', url: 'https://ethz.ch/en/news-and-events/eth-news/news/2024/05/blood-diagnostics-modelled-on-leeches.html' },
                { title: 'Zoratto et al., Advanced Science 2024', url: 'https://doi.org/10.1002/advs.202308809' },
                { title: 'Advanced Science News — explainer (partner-seeking quote)', url: 'https://www.advancedsciencenews.com/a-blood-sampling-device-inspired-by-leeches/' },
                { title: '360Dx — industry coverage', url: 'https://www.360dx.com/hematologycoagulation/inspired-leeches-eth-zurich-researchers-develop-blood-collection-device' },
            ],
        },
        {
            slug: 'unistik-3-extra',
            name: 'Unistik 3 Extra',
            vendor: 'Owen Mumford',
            origin: 'United Kingdom',
            tagline:
                '21G × 2.0 mm side-firing safety lancet with Comfort Zone — eight raised dots that help mask pain.',
            whatItIs:
                'A single-use, side-firing safety lancet at 21G × 2.0 mm. Its Comfort Zone design uses eight raised dots around the puncture point to help mask the sensation of the prick.',
            whyItMatters:
                'The high-flow end of the range: most blood, but a coarser gauge and deeper puncture than our 28G × 1.8 mm launch spec. The side trigger is the least intuitive activation style for a first-time self-tester.',
            keyFacts: [
                '21G × 2.0 mm, side-firing.',
                'Comfort Zone: 8 raised dots to mask pain.',
                'Price: ₹11/pc (internal figure). UK reference: £12.65 per 100 ex VAT.',
            ],
            considerations: ['Side-button activation is the least intuitive type for self-test users.'],
            status: 'evaluating',
            sources: [
                { title: 'FDA GUDID — Unistik 3 Extra spec record', url: 'https://accessgudid.nlm.nih.gov/devices/00384701012013' },
                { title: 'CLP — Comfort Zone explainer', url: 'https://clpmag.com/miscellaneous/single-use-safety-lancet/' },
            ],
            resources: [
                { label: 'DS Medical — Unistik 3 Extra, box of 100', href: 'https://dsmedical.co.uk/treatment/needles-lancets/owen-mumford-unistik-3-extra-lancet-box-of-100/', type: 'link' },
            ],
        },
        {
            slug: 'accu-chek-safe-t-pro-uno',
            name: 'Accu-Chek Safe-T-Pro Uno',
            vendor: 'Roche',
            tagline: 'Single-use push-button safety lancet, pre-set to 1.5 mm. Widely available in India.',
            whatItIs:
                'A single-use safety lancet with a pre-set 1.5 mm depth, activated with a push button.',
            whyItMatters:
                'The India-availability benchmark: already stocked by mainstream pharmacies, which makes it an easy reference for pricing and user familiarity.',
            keyFacts: [
                'Pre-set 1.5 mm depth; push-button; single use.',
                'MRP ₹3,000 per 200 (₹15/pc); online ₹1,850 per 200 (~₹9/pc); wholesale listing ₹4.85/pc.',
                'Working estimate at volume: ₹5–9/pc (estimate, pending supplier quotes).',
            ],
            considerations: ['Push-button rather than contact-activated — a step more for the user than our preferred type.'],
            status: 'evaluating',
            sources: [],
            resources: [
                { label: 'Apollo Pharmacy — Safe-T-Pro Uno', href: 'https://www.apollopharmacy.in/otc/accu-chek-safe-t-pro-uno', type: 'link' },
                { label: 'Colmed — box of 200 (₹1,850)', href: 'https://www.colmed.in/accu-chek-safe-t-pro-uno-lancing-device-box-of-200.html', type: 'link' },
                { label: 'IndiaMART — wholesale listing (₹4.85/pc)', href: 'https://www.indiamart.com/proddetail/accu-check-safe-t-pro-uno-safety-lancet-24142483062.html', type: 'link' },
            ],
        },
        {
            slug: 'accu-chek-safe-t-pro-plus',
            name: 'Accu-Chek Safe-T-Pro Plus',
            vendor: 'Roche',
            tagline: '23G push-button safety lancet with three depths — 1.3, 1.8 and 2.3 mm — in one SKU.',
            whatItIs:
                'An adjustable single-use safety lancet: 23G, with three selectable depths (1.3 / 1.8 / 2.3 mm), activated by push button.',
            whyItMatters:
                'Three depths in one SKU is a useful way to test which depth gives enough blood for our 20–25 µL sample, but the unit price is the highest of the contenders.',
            keyFacts: [
                '23G; depths 1.3 / 1.8 / 2.3 mm; push button.',
                'US ~$0.36/pc (~₹30); UK £45.74 per 200 ex VAT (~₹27/pc).',
                'India estimate ₹15–25/pc (estimate, pending supplier quotes).',
            ],
            considerations: ['Highest unit cost of the contenders — better suited to a bench study than a ₹99 kit.'],
            status: 'evaluating',
            sources: [],
            resources: [
                { label: 'Carewell (US) — Safe-T-Pro Plus', href: 'https://carewell.com/product/accu-chek-safe-t-pro-plus-adjustable-depth-lancet', type: 'link' },
                { label: 'MidMeds (UK) — depth specs', href: 'https://www.midmeds.co.uk/shop/md04547-roche-accu-chek-safe-t-pro-plus-lancets-x-200-67863', type: 'link' },
            ],
        },
        {
            slug: 'sterilance',
            name: 'SteriLance safety lancets',
            vendor: 'SteriLance',
            origin: 'Suzhou, China',
            tagline:
                'OEM/ODM safety lancet maker — ISO 13485, 5-year sterility, pressure- and button-activated models, QUIQ branding possible.',
            whatItIs:
                'A Chinese OEM/ODM manufacturer of safety lancets with ISO 13485 certification and 5-year sterility. The range includes pressure-activated (Press, Press Plus, Impress), button-activated (Elite, Lite3, Lite4) and adjustable-depth (Elite Pro, Flex3) models. Press2 comes in 30G / 28G / 26G × 1.8 mm; Press in 23G / 28G × 1.8 mm.',
            whyItMatters:
                'The only contender that offers our launch spec — 28G × 1.8 mm pressure-activated — with QUIQ branding and the lowest estimated cost.',
            keyFacts: [
                'OEM/ODM, ISO 13485, 5-year sterility.',
                'Press2: 30G / 28G / 26G × 1.8 mm. Press: 23G / 28G × 1.8 mm.',
                'Estimated ₹3–6/pc at 10–50k units (estimate, pending supplier quotes).',
            ],
            considerations: ['Pricing is an estimate until quotes at 10k and 50k units are received.'],
            status: 'evaluating',
            sources: [
                { title: 'SteriLance — pressure-activated vs push-button safety lancets', url: 'https://en.sterilance.com/Insights/Pressure-Activated-Safety-Lancets-Vs-Push-Button-Designs-How-To-Compare-Them.html' },
            ],
            resources: [{ label: 'SteriLance safety lancet catalogue', href: 'https://en.sterilance.com/safety_lancet', type: 'link' }],
        },
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
