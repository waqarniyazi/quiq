import { TestTube } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const testStrip: ResearchCategory = {
    slug: 'test-strip',
    number: 1,
    title: 'Test Strip',
    icon: TestTube,
    summary:
        'The nitrocellulose membrane and the machine that lays reagent onto it. Everything downstream — sensitivity, line clarity, cost per test — is bounded by decisions made here.',
    deepDive:
        'A lateral flow test strip is a stack of paper: a sample pad, a conjugate pad, a nitrocellulose membrane carrying the test and control lines, and an absorbent wick that pulls fluid across it. The membrane is the expensive, temperamental layer. Its pore structure sets capillary flow rate, which sets how long the antibody at the test line has to capture its target — slower membranes are more sensitive but take longer to read and are more prone to non-specific binding. How reagent is deposited onto that membrane is a second, largely independent lever: a contact striper draws a continuous line, while a piezo dispenser places discrete picolitre droplets. The same antibody, the same membrane, and a different dispensing method can move a limit of detection by an order of magnitude.',
    items: [
        {
            slug: 'sartorius-unisart-structsure',
            name: 'Unisart StructSure + Scienion dispensing',
            vendor: 'Sartorius (membrane) · Scienion / CELLINK (dispenser)',
            origin: 'Germany',
            tagline:
                'Structured nitrocellulose with hydrophobic barriers, combined with picolitre non-contact dispensing — the "dots vs. line" question.',
            whatItIs:
                'Unisart StructSure is a nitrocellulose membrane that has hydrophobic barriers laser-defined into it, so the sample is confined into narrow microfluidic channels rather than spreading across the full membrane width. Scienion sciFLEXARRAYER instruments are piezoelectric non-contact dispensers that eject picolitre droplets of antibody onto a defined coordinate without ever touching the membrane. Used together, they let you place discrete reagent spots ("dots") inside a channel instead of striping one continuous line across the strip.',
            whyItMatters:
                'This is the single highest-leverage combination on the strip. Concentrating the same mass of capture antibody into a smaller area raises local signal density, so a faint line becomes a readable dot — which matters most at the low end of the range, exactly where a self-test either works or does not. It also opens multiplexing: several analytes can be spotted in one channel and read independently, which is how one strip becomes a panel rather than a single marker. Because the dispenser is non-contact and coordinate-driven, changing a layout is a software change, not a retooling — which makes it the right tool for a prototyping phase.',
            keyFacts: [
                'Hydrophobic barriers convert an open membrane into defined microfluidic channels, reducing lateral sample spread and the reagent volume needed per test.',
                'Piezo dispensing places picolitre droplets without contacting the membrane, so there is no mechanical damage to the nitrocellulose and no tip-to-membrane variability.',
                'Discrete spots concentrate signal into a smaller area, improving visual contrast at low analyte concentrations compared with a striped line of identical total reagent mass.',
                'Multiple capture reagents can be arrayed within a single channel, enabling multiplex panels on one strip — demonstrated in published multiplex marine-toxin work from Queen\'s University Belfast.',
                'Layout changes are made in software, so iteration cycles during development are hours rather than weeks.',
            ],
            considerations: [
                'Spot pitch is a real failure mode, not a theoretical one: spots placed too close together deflect the flow front around them, causing uneven wetting and inconsistent signal. Patent literature on structured membranes treats pitch as a controlled design parameter.',
                'Capital cost and throughput: a piezo arrayer is excellent for development and low-volume production, but high-volume manufacturing economics usually still favour contact striping. Plan the transition rather than discovering it at scale.',
                'Dots read differently to a human eye than lines. A user trained by a decade of pregnancy tests expects a line. Any dot-based layout needs its own usability testing, not an assumption.',
                'Structured membrane is a premium consumable. The sensitivity gain has to be worth the per-unit cost against a ₹99 price point.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Sartorius — Unisart nitrocellulose membranes for lateral flow',
                    url: 'https://www.sartorius.com/en/products/lateral-flow-membranes',
                },
                {
                    title: 'Scienion — sciFLEXARRAYER non-contact picolitre dispensing',
                    url: 'https://www.scienion.com/products/sciflexarrayer/',
                },
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
            ],
            resources: [],
        },
        {
            slug: 'dots-vs-lines',
            name: 'Dots vs. lines — the deposition decision',
            tagline:
                'The same antibody deposited two ways gives two different tests. A framing note for the whole category.',
            whatItIs:
                'Reagent reaches the membrane one of two ways. Contact striping draws a continuous line of antibody solution across the strip width using a dispensing tip in contact with (or very near) the membrane. Non-contact picolitre dispensing fires discrete droplets from a piezo nozzle at defined coordinates. The first is fast, cheap and the industry default; the second is precise, programmable and better suited to concentrating or multiplexing signal.',
            whyItMatters:
                'Every category downstream inherits this choice. Reader design depends on whether it is looking for a line or a spot array. Cassette window geometry depends on where signal appears. User instructions depend on what a positive looks like. Deciding early — and deliberately — avoids re-deriving the whole product later.',
            keyFacts: [
                'Striping: high throughput, low consumable cost, mature supply chain, well-understood by contract manufacturers.',
                'Spotting: lower reagent consumption per test, higher local signal density, native support for multiplexing, software-defined layouts.',
                'The two are not mutually exclusive — a control line can be striped while test spots are dispensed.',
            ],
            considerations: [
                'Reader compatibility: most commodity strip readers are built around line detection. A spot layout may require a camera-based reader rather than a reflectance reader.',
                'Regulatory dossiers describe the deposition method. Changing it after submission is a change to the device, not a manufacturing tweak.',
            ],
            status: 'reference',
            sources: [
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
    ],
}
