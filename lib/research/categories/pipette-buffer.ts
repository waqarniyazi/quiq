import { Pipette } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const pipetteBuffer: ResearchCategory = {
    slug: 'pipette-buffer',
    number: 6,
    title: 'Pipette + Buffer',
    icon: Pipette,
    summary:
        'How sample and running buffer actually reach the strip. The most under-designed part of most kits, and the source of most invalid results.',
    deepDive:
        'In a conventional kit the user pricks a finger, fills a capillary tube or squeezes a plastic pipette, transfers the drop to a sample well, then counts drops of buffer from a separate vial. Three quantities have to be right — blood volume, buffer volume, and their order — and none of them is enforced by the hardware. Integrated designs remove the decision: buffer is pre-filled in a blister with a frangible seal, released by a single press once sample is loaded, so the volume is fixed at manufacture rather than counted by the user. This is the same insight that drives integrated test design, applied to the fluid path specifically. It also has a shelf-life dimension — a pre-filled liquid blister must not lose water to the surrounding foil pouch or dry out over two years on a shelf.',
    items: [
        {
            slug: 'conical-cup',
            name: 'Conical cup (FIND)',
            vendor: 'FIND',
            origin: 'Geneva, Switzerland',
            tagline:
                'Capillary cup that fills itself to ~23 µL and deposits on touch. Filled correctly 92.4% of the time vs 74.2% for a pipette.',
            whatItIs:
                'A small moulded conical cup developed with FIND that fills by capillary action when touched to the blood drop (~23 µL, 22.76 µL mean) and deposits the sample when touched to the sample well. The published paper gives moulder-ready dimensions. It is not sold as a catalogue item; the original was made with Injection 74 (France).',
            whyItMatters:
                'Ranked #1 for QUIQ: it removes the user from volume control entirely, which is exactly what our shade card needs. A single cheap moulded part, so it is viable for launch through a moulder.',
            keyFacts: [
                'Volume: 22.76 µL mean (~23 µL).',
                'Filled correctly 92.4% of the time vs 74.2% for a pipette.',
                '79% of users preferred it.',
                'Touch-to-fill, touch-to-deposit; fills automatically by capillary action.',
                'Published: Incardona et al. 2018, AJTMH.',
            ],
            considerations: [
                'Not a catalogue product — needs tooling at a moulder from the published dimensions.',
                'Contact: Sandra Incardona, FIND Geneva, for the design files.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Incardona et al. 2018, AJTMH — conical cup blood transfer device (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/' },
            ],
            resources: [
                { label: 'Paper PDF (Incardona et al. 2018)', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/pdf/tpmd170716.pdf', type: 'pdf' },
            ],
        },
        {
            slug: 'unisampler',
            name: 'UniSampler and China generics',
            vendor: 'Affimedix (USA); Foshan Yuyang, Jiangsu Kehua (China)',
            tagline:
                'Fixed-volume sampler that locks into the buffer vial. Already sold in India inside the Spark-D Vitamin D kit.',
            whatItIs:
                'A fixed-volume blood sampler that is filled at the fingertip and then inserted into the buffer vial, where it locks in place. In the Spark D kit protocol the user fills the UniSampler, inserts it into the buffer vial, shakes, and dispenses 3 drops. Chinese equivalents exist, e.g. Foshan Yuyang (10 µL with reagent tube) and Jiangsu Kehua (2–50 µL range).',
            whyItMatters:
                'Viable for launch: it fixes the volume and combines sample transfer with buffer mixing, and it is already in a kit sold in India — proof the format works with Indian consumers and supply chains.',
            keyFacts: [
                'Fixed-volume sampler that locks into the buffer vial.',
                'Spark D protocol: fill UniSampler → insert into buffer vial → shake → 3 drops.',
                'Sold in India in Spark Vitamin D Quantitative (pack of 25).',
                'Generics: Foshan Yuyang 10 µL + reagent tube; Jiangsu Kehua 2–50 µL range.',
            ],
            considerations: ['Order samples from Yuyang and Kehua to check fill accuracy against our shade card.'],
            status: 'shortlisted',
            sources: [
                { title: 'Spark D kit protocol (UniSampler)', url: 'https://restore-surgical.co.uk/?p=24378' },
            ],
            resources: [
                { label: 'Medikabazaar — Spark Vitamin D Quantitative (India)', href: 'https://www.medikabazaar.com/products/spark-vitamin-d-quantitative-test', type: 'link' },
                { label: 'Foshan Yuyang — 10 µL fixed-volume collector', href: 'https://yuyang-bio.en.made-in-china.com/product/nEXpZSgTszka/China-Micro-Fixed-Volume-Peripheral-Blood-Sample-Collector-10UL-for-Sample-Collection-with-Reagent-Tube.html', type: 'link' },
                { label: 'Jiangsu Kehua — 2–50 µL range', href: 'https://jskehua.en.made-in-china.com/', type: 'link' },
            ],
        },
        {
            slug: 'minivette-poct',
            name: 'Minivette POCT',
            vendor: 'Sarstedt',
            origin: 'Germany',
            tagline: 'Capillary fills to a stop filter, piston dispenses. 10 / 20 / 50 / 100 / 200 µL.',
            whatItIs:
                'A capillary collection pipette that fills up to an internal filter, which stops the fill at a fixed volume; a piston then dispenses the sample. Available in 10, 20, 50, 100 and 200 µL.',
            whyItMatters:
                'The quality benchmark for fixed-volume capillary transfer — the device to measure cheaper options against.',
            keyFacts: ['Volumes: 10 / 20 / 50 / 100 / 200 µL.', 'Capillary fill to a stop filter; piston dispense.'],
            considerations: ['Benchmark rather than launch part.'],
            status: 'reference',
            sources: [],
            resources: [
                { label: 'Sarstedt — Minivette POCT', href: 'https://www.sarstedt.com/en/US/c/pre-analytics/capillary-blood-collection/minivette-poct/p/minivette-poct', type: 'link' },
                { label: 'Catalogue PDF (MedicalExpo)', href: 'https://pdf.medicalexpo.com/pdf/sarstedt/minivette-poct/69921-152650.html', type: 'link' },
            ],
        },
        {
            slug: 'microsafe',
            name: 'Microsafe',
            vendor: 'Safe-Tec',
            origin: 'United States',
            tagline: 'One-piece, fixed-volume, drop-free capillary tube that both collects and dispenses.',
            whatItIs: 'A one-piece fixed-volume capillary tube that collects blood and dispenses it without a separate bulb.',
            whyItMatters: 'A second benchmark for one-piece fixed-volume transfer.',
            keyFacts: ['One-piece fixed-volume collect + dispense.', 'Drop-free.'],
            considerations: ['Benchmark rather than launch part.'],
            status: 'reference',
            sources: [],
            resources: [
                { label: 'CLIAwaived — Microsafe 10 µL tubes', href: 'https://www.cliawaived.com/microsafe-capillary-10ul-tubes.html', type: 'link' },
            ],
        },
        {
            slug: 'absorptive-tip-vams',
            name: 'Absorptive tip / VAMS (Mitra)',
            vendor: 'Trajan',
            tagline:
                'Porous polymer tip that absorbs a fixed 10–30 µL in 2–4 seconds with under 5% variation. Wet release into buffer is unproven.',
            whatItIs:
                'Volumetric absorptive microsampling (VAMS): a hydrophilic porous polymer tip that wicks up a fixed volume — 10, 20 or 30 µL — in 2–4 seconds, with under 5% RSD. It could be used swab-style, dipped into the buffer.',
            whyItMatters:
                'New tech worth watching: very precise volume with no user judgement. But it was built for dried lab samples, so releasing the blood wet into a buffer has not been shown.',
            keyFacts: [
                'Volumes: 10 / 20 / 30 µL; <5% RSD.',
                'Absorbs in 2–4 seconds.',
                'Tip material from porous-polymer makers such as Porex.',
            ],
            considerations: [
                'Built for dried samples — wet release into buffer is unproven and needs a bench test.',
                'Patent flag: US patent for a pen-shaped sintered PE nib absorbing 25 µL — check freedom to operate.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'VAMS review paper (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9821248/' },
                { title: 'Patent flag — pen-shaped sintered PE nib, 25 µL (USPTO)', url: 'https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9696241' },
            ],
            resources: [
                { label: 'VWR — Mitra microsamplers', href: 'https://b2b-si.vwr.com/store/product/45262978/mitra-microsamplers-clamshell-format', type: 'link' },
                { label: 'Product overview (LabRulez)', href: 'https://lcms.labrulez.com/products/1282', type: 'link' },
                { label: 'Spec sheet (LabRulez)', href: 'https://lcms.labrulez.com/paper/27988', type: 'link' },
                { label: 'Porex — sample collection materials', href: 'https://www.porex.com/life-sciences/diagnostics/sample-collection/', type: 'link' },
            ],
        },
        {
            slug: 'integrated-buffer-blister',
            name: 'Integrated pre-filled buffer blister',
            tagline:
                'Buffer volume fixed at manufacture and released by one press, instead of drops counted by the user.',
            whatItIs:
                'A sealed blister of running buffer built into the device, closed by a frangible seal that ruptures under thumb pressure and delivers a metered volume onto the conjugate pad. The user performs one action; the volume is a manufacturing parameter, not a user decision.',
            whyItMatters:
                'Buffer volume is the variable that most directly determines whether a strip runs correctly. Too little and the front stalls before reaching the control line; too much and the sample is diluted below the limit of detection. Fixing it in hardware is why integrated devices show over 90% fewer blood delivery errors than multi-component kits in untrained hands — the volume error mode is engineered out rather than instructed against.',
            keyFacts: [
                'Volume is set by blister fill during manufacture, removing drop-counting from the user workflow.',
                'Frangible seal opens under a defined force, giving a consistent release event.',
                'Reduces the kit from five loose components to one device, cutting both packaging volume and instruction complexity.',
                'Commercially proven — the approach is central to the Atomo Elion/Pascal platform (see Test Design).',
            ],
            considerations: [
                'Long-term liquid containment is the hard part: the blister must not lose water vapour across a two-year shelf life while sharing a pouch with a desiccant that is actively trying to dry everything.',
                'Blister tooling and fill-seal equipment is a capital commitment; not a change to make late.',
                'Actuation force has to work for elderly and arthritic users without opening in transit.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Atomo Diagnostics — integrated device technology', url: 'https://www.atomodiagnostics.com/our-technology/' },
                {
                    title: 'StabilityHub — Desiccant impact on stability',
                    url: 'https://stabilityhub.com/2023/12/02/desiccant-impact-on-stability/',
                },
            ],
        },
        {
            slug: 'sparkdx',
            name: 'SparkDx',
            tagline:
                'Named internally as an integrated pipette-and-buffer approach — vendor details not independently verified.',
            whatItIs:
                'Listed in the internal QUIQ deck under integrated pipette and buffer solutions. Web research did not return a verifiable manufacturer profile, product specification or regulatory listing that could be cited with confidence.',
            whyItMatters:
                'Recorded here so the reference from the deck is not lost, and so the next person to research it starts from a known gap rather than repeating the same search. The underlying concept — integrated sample and buffer delivery — is covered by the integrated buffer blister entry above.',
            keyFacts: [],
            considerations: [
                'Open question: confirm the correct company name and spelling from the original source of the deck before this entry is cited externally.',
                'No sources are listed deliberately — nothing verifiable was found, and plausible-sounding detail has not been invented.',
                'Possible match (Sep 2026 research): the Spark-D Vitamin D kit, which uses the Affimedix UniSampler — see UniSampler under Top contenders. Not yet confirmed as the one named in the deck.',
            ],
            status: 'evaluating',
            sources: [],
        },
        {
            slug: 'reszon',
            name: 'Reszon Diagnostics',
            vendor: 'Reszon Diagnostics International',
            origin: 'Malaysia',
            tagline:
                'Malaysian IVD manufacturer producing rapid test kits and associated consumables for regional markets.',
            whatItIs:
                'Reszon Diagnostics International is a Malaysia-based in vitro diagnostics manufacturer producing rapid test kits, notably in infectious disease, for South-East Asian and export markets. In the internal deck it appears as a source of pipette and buffer componentry alongside finished assays.',
            whyItMatters:
                'Regional IVD manufacturers matter to QUIQ for two reasons: they are potential component suppliers at cost structures closer to India\'s than European suppliers offer, and they are a comparison point for what a mid-size Asian IVD operation looks like in terms of certification and product range.',
            keyFacts: [
                'Malaysia-based in vitro diagnostic manufacturer with a rapid-test product line.',
                'Operates in the South-East Asian regional market, a comparable regulatory and price environment to India.',
            ],
            considerations: [
                'Detailed product specifications, certification scope and component-supply capability were not confirmed in public sources during this pass — treat the profile above as outline only.',
                'Next step: request a current product catalogue and certification pack directly rather than relying on web sources.',
            ],
            status: 'evaluating',
            sources: [{ title: 'Reszon Diagnostics International', url: 'https://www.reszon.com/' }],
        },
    ],
}
