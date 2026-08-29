import { ScanLine } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const reader: ResearchCategory = {
    slug: 'reader',
    number: 8,
    title: 'Reader',
    icon: ScanLine,
    summary:
        'Instruments that turn a visual line into a number. They remove reader subjectivity, extend the usable range downward, and make results transmissible.',
    deepDive:
        'A rapid test read by eye returns one bit of information: line or no line. A reader returns a value. That matters in three distinct ways. First, faint lines near the limit of detection are exactly where human interpretation is least reliable and where a camera is most useful. Second, quantification turns a screening test into a monitoring test — a number that can be tracked over time is clinically different from a yes/no. Third, a reader can capture, timestamp, store and transmit a result, which is what makes population-level data possible at all. The cost is a second product: an instrument with its own regulatory, supply, calibration and support burden. The decisive question is not whether a reader improves the assay — it does — but whether the product is a test or a system.',
    items: [
        {
            slug: 'chembio-dpp',
            name: 'Chembio DPP and DPP Micro Reader',
            vendor: 'Chembio Diagnostics',
            origin: 'United States',
            tagline:
                'Dual Path Platform — two separate flow paths instead of one, plus a palm-sized camera reader. Better sensitivity, less prozone, native multiplexing.',
            whatItIs:
                'DPP is Chembio\'s patented Dual Path Platform. Unlike conventional lateral flow, where sample and conjugate travel the same path, DPP separates them: roughly 10 µL of whole blood travels one path while the conjugate travels another, meeting at the test line. The DPP Micro Reader (now Micro Reader II) is a palm-sized, battery-operated, single-button image sensor that photographs the cassette and interprets it quantitatively, capturing, recording, transmitting and storing the result.',
            whyItMatters:
                'DPP is the clearest commercial demonstration that changing the fluid architecture — not the antibodies — improves assay performance. Separating the paths enhances sensitivity, minimises non-specific interactions, mitigates the high-dose hook (prozone) effect, and makes multiplexing native rather than bolted on. The economics are also instructive for India: a typhoid application ran at roughly $2 per cassette against a one-time reader cost of around $250, which is the shape of a viable point-of-care model in a low-resource setting.',
            keyFacts: [
                'Two distinct flow paths: sample (~10 µL whole blood) and conjugate travel separately and converge at the test line.',
                'Claimed benefits: higher sensitivity, reduced non-specific interaction, mitigated prozone effect, and support for quantitative and multiplexed readout.',
                'DPP Micro Reader: palm-sized, battery-operated, one-button camera system giving definitive reads on faint low-concentration lines; captures, records, transmits and stores results. A Micro Reader II is currently listed.',
                'Typhoid application: anti-hemolysin E and anti-LPS IgA, 10 µL of serum, plasma, venous or fingerprick blood, qualitative and quantitative in 15–20 minutes; ~$2/cassette plus a one-time ~$250 reader; 90% sensitivity and 96% specificity against febrile controls in archived plasma.',
                'Multiplex panels in the field: DPP Fever Panel II covers scrub typhus, murine typhus, Leptospira, B. pseudomallei, dengue, chikungunya and Zika.',
                'Also deployed for HIV-Syphilis dual testing, leptospirosis using recombinant rLig proteins to avoid whole-cell cross-reactivity, Candida albicans (LOD ~7.94 × 10⁵ cells/mL, up to 3.9× sensitivity gain), and the DPP AAV8 TAb assay — the first point-of-care test for AAV8 binding antibodies, at 20 minutes.',
            ],
            considerations: [
                'The platform advantage is not universal. One assessment of the DPP HIV-1/2 assay found no significant improvement in detecting early infections over other US lateral flow rapid tests — architecture helps some assays more than others.',
                'A reader is a second regulated product with its own service, calibration and warranty obligations.',
                'Deck correction: the "Cube reader" listed in this category is SOMA Bioscience\'s iPro Cube, not a Chembio product. Chembio\'s reader is the DPP Micro Reader / Micro Reader II.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Chembio Diagnostics — Dual Path Platform', url: 'https://chembio.com/innovation/dual-platform/' },
                {
                    title: 'GlobeNewswire — Chembio launches DPP Micro Reader',
                    url: 'https://www.globenewswire.com/news-release/2015/10/21/778547/0/en/Chembio-Diagnostics-Launches-DPP-Micro-Reader.html',
                },
                {
                    title: 'A novel dual path platform point-of-care test for typhoid fever (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3486890/',
                },
                {
                    title: 'Evaluation of the DPP HIV-1/2 assay (ScienceDirect)',
                    url: 'https://www.sciencedirect.com/science/article/pii/S1386653215002954',
                },
            ],
        },
        {
            slug: 'cube-reader',
            name: 'Cube reader (iPro Cube)',
            vendor: 'SOMA Bioscience',
            origin: 'United Kingdom',
            tagline:
                'Compact quantitative strip reader paired with SOMA\'s saliva assays — the reader half of the Swabs entry.',
            whatItIs:
                'The iPro Cube is SOMA Bioscience\'s compact reader for its quantitative lateral flow strips. The user applies saliva and buffer to the strip, inserts it, and the Cube quantifies the test line optically instead of relying on visual interpretation.',
            whyItMatters:
                'The Cube demonstrates the low end of the reader spectrum: small, inexpensive relative to a bench analyser, and tightly coupled to one assay family. That coupling is the point — a reader designed against a known strip geometry and a known batch calibration can be far simpler than a general-purpose instrument.',
            keyFacts: [
                'Reads SOMA\'s quantitative saliva lateral flow strips for cortisol, IgA, IgG and α-amylase.',
                'Batch-level calibration means the reader does not need per-run standards.',
                'Independently validated in a 2023 Japanese Psychological Research paper on Cube Reader salivary measurement.',
            ],
            considerations: [
                'Tied to SOMA\'s own strip format and batch calibration — not a general-purpose reader.',
                'Inherits the research-use-only status of the SOMA assay range; not an IVD.',
                'Listed in the deck as a distinct vendor from "Soma Biosciences". It is the same company.',
            ],
            status: 'reference',
            sources: [
                { title: 'SOMA Bioscience', url: 'https://www.somabioscience.com/' },
                {
                    title: 'Japanese Psychological Research — Cube Reader validation',
                    url: 'https://onlinelibrary.wiley.com/doi/10.1111/jpr.12402',
                },
            ],
        },
        {
            slug: 'smartphone-readers',
            name: 'Smartphone and app-based readers',
            tagline:
                'The phone in the user\'s hand is already a calibrated camera and a connected device. The hard part is controlling the lighting.',
            whatItIs:
                'Instead of shipping an instrument, the cassette is photographed by the user\'s smartphone and interpreted in an app. Some implementations add a small passive cradle or a printed colour reference on the cassette to normalise for ambient lighting and camera variation.',
            whyItMatters:
                'This is the only reader approach with zero marginal hardware cost, which is decisive at consumer price points in India. It also solves result capture and transmission for free — the result is already on a connected device with an identity attached.',
            keyFacts: [
                'No instrument to manufacture, distribute, calibrate or service.',
                'Result capture, timestamping and transmission are inherent rather than added.',
                'A printed colour reference on the cassette allows white-balance and exposure normalisation across handsets.',
            ],
            considerations: [
                'Ambient lighting is the dominant error source and is entirely outside the manufacturer\'s control; a physical cradle or on-cassette reference is close to mandatory for quantitative claims.',
                'Handset camera variation across thousands of Android models is a real validation burden.',
                'Software that interprets a diagnostic result is itself a regulated medical device in most jurisdictions.',
                'The deck also lists Qassay, Dx365 and SpotDx in this category. None resolved to verifiable product documentation during research — open questions pending confirmation of the intended vendors.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays: a review',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
    ],
}
