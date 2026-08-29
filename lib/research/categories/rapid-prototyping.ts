import { Wrench } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const rapidPrototyping: ResearchCategory = {
    slug: 'rapid-prototyping',
    number: 12,
    title: 'Rapid Prototyping',
    icon: Wrench,
    summary:
        'Getting from a drawing to something you can hold, in days rather than months — housings, jigs and reader electronics before any tooling is committed.',
    deepDive:
        'Injection mould tooling for a cassette costs lakhs and takes weeks, and it is not revisable. Everything that can be learned before that commitment should be. Additive manufacturing produces cassette housings good enough for fit checks, flow trials and usability sessions within a day; laser-cut acrylic makes assembly and strip-compression jigs; and single-board computers make reader prototypes that can be rebuilt in an afternoon. The discipline that matters is knowing what a prototype can and cannot tell you: a 3D-printed housing will answer questions about ergonomics, window placement and strip compression, and will not answer questions about long-term stability, because the material and its surface chemistry are wrong. Prototypes de-risk the geometry, not the chemistry.',
    items: [
        {
            slug: 'additive-housings',
            name: '3D-printed cassette housings and jigs',
            tagline:
                'A same-day housing that answers ergonomics, window placement and strip compression — and cannot answer stability.',
            whatItIs:
                'Cassette bodies, lids and assembly fixtures produced by resin (SLA/DLP) or filament (FDM) printing directly from CAD, iterated in hours. In practice this means printing several window geometries and sample-well depths at once and testing them against real strips before committing to a mould.',
            whyItMatters:
                'The expensive mistakes in cassette design are geometric: a sample well that meters the wrong volume, a window that crops the control line, a rib that compresses the strip unevenly and changes flow rate. All of these are visible in a printed part for a few hundred rupees, and invisible in a CAD render.',
            keyFacts: [
                'Resin printing resolves the fine detail needed for sample wells and window frames; filament printing is adequate for bulk fit checks and jigs.',
                'Multiple design variants can be printed simultaneously and compared side by side against the same strip lot.',
                'Laser-cut acrylic complements printing for assembly jigs and strip-compression fixtures.',
                'Iteration cycle is hours to days against weeks for tooling revision.',
            ],
            considerations: [
                'Printed materials are not the production material. Surface energy, outgassing and moisture behaviour all differ — printed housings must never be used for stability studies.',
                'Resin residues can inhibit protein binding and interfere with assay chemistry. Post-cure and clean thoroughly, and treat any assay result from a printed housing as indicative only.',
                'Layer lines change capillary behaviour at edges; flow observations from printed parts need confirming in moulded parts.',
            ],
            status: 'in-use',
            sources: [
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
            ],
        },
        {
            slug: 'raspberry-pi-readers',
            name: 'Raspberry Pi reader prototypes',
            vendor: 'Raspberry Pi Foundation',
            origin: 'United Kingdom',
            tagline:
                'A camera module, a controlled light source and a single-board computer — a quantitative reader bench for a few thousand rupees.',
            whatItIs:
                'A Raspberry Pi with a camera module, LED illumination and a 3D-printed light-tight enclosure, used to photograph cassettes under controlled lighting and quantify line intensity in software. Widely used in academic lateral flow work as a low-cost stand-in for a commercial reader.',
            whyItMatters:
                'Reader development normally waits on hardware. A Pi-based rig removes that dependency: the image processing, normalisation and calibration logic can be developed and validated on real cassettes long before an instrument exists, and the same rig doubles as a laboratory quantification tool for assay development — measuring line intensity objectively instead of by eye.',
            keyFacts: [
                'Fixed geometry and controlled LED illumination remove the ambient-light variability that dominates smartphone reading.',
                'Full software stack (OpenCV, Python) available for line detection, background normalisation and intensity quantification.',
                'Doubles as an objective measurement tool during assay development, replacing visual scoring.',
                'Total build cost is a small fraction of a commercial strip reader.',
            ],
            considerations: [
                'A development tool, not a product. A shipped reader needs a regulated design, EMC compliance, calibration traceability and service support.',
                'Consumer camera sensors drift with temperature and have limited dynamic range; absolute values are not comparable across rigs without a shared reference standard.',
                'Include a printed grey or colour reference in every image so results remain comparable across sessions.',
            ],
            status: 'in-use',
            sources: [
                { title: 'Raspberry Pi — camera modules', url: 'https://www.raspberrypi.com/products/camera-module-3/' },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
        {
            slug: 'medtech-prototyping-partners',
            name: 'Medtech prototyping partners',
            tagline:
                'Where to send work that exceeds in-house capability — precision moulding, electronics assembly and design-for-manufacture review.',
            whatItIs:
                'External partners covering the step between a printed prototype and a production part: soft tooling and low-volume moulding, precision machining, electronics prototyping and design-for-manufacture review. In India this capability sits partly with medtech incubators and partly with specialist job shops.',
            whyItMatters:
                'The gap between a working prototype and a manufacturable design is where most hardware timelines are lost. Design-for-manufacture review before tooling — draft angles, wall thickness, gate placement, ejection — is cheap and catches problems that are extremely expensive once a mould is cut. Institutional routes matter too: C-CAMP\'s MedTech facility (see Research Organisations) offers exactly this kind of access without capital commitment.',
            keyFacts: [
                'Soft or bridge tooling produces hundreds to low thousands of parts in production material before committing to hardened steel tooling.',
                'Design-for-manufacture review before tooling is the highest-return step in the sequence.',
                'C-CAMP runs a MedTech facility alongside its bio-incubation space, giving incubatees access to prototyping infrastructure.',
            ],
            considerations: [
                'The deck lists "Mefron" in this category. It did not resolve to a verifiable company profile during research — recorded as an open question pending internal confirmation of the intended name.',
                'Prototyping partners rarely hold ISO 13485. Parts from them are for development only and cannot enter a validated product without a qualified supplier.',
                'Tooling ownership should be explicit in the contract; a mould paid for but held by a supplier is a supply-chain lock-in.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'C-CAMP — incubation and MedTech facilities', url: 'https://www.ccamp.res.in/incubation' },
            ],
        },
    ],
}
