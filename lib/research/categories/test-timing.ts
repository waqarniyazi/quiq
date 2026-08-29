import { Timer } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const testTiming: ResearchCategory = {
    slug: 'test-timing',
    number: 16,
    title: 'Test Timing',
    icon: Timer,
    summary:
        'How long the user waits, why the window has both a floor and a ceiling, and what happens when they read the cassette too early or too late.',
    deepDive:
        'Every rapid test carries a read window — commonly something like "read at 15 minutes, do not read after 20". Both ends of that window are real constraints, and both are routinely violated by users. Read too early and a genuinely positive low-concentration line has not developed, producing a false negative. Read too late and non-specific binding, drying artefacts and evaporation edges can produce marks that look like lines, producing a false positive. The window is set empirically during development against the slowest-developing true positive and the earliest-appearing artefact, and it is one of the few assay parameters the user personally controls. That makes it a usability problem as much as a chemistry one: a window the user cannot reliably observe is a window that does not exist in practice.',
    items: [
        {
            slug: 'read-window',
            name: 'The read window',
            tagline:
                'A floor set by the slowest true positive and a ceiling set by the earliest artefact. Both ends produce a wrong answer.',
            whatItIs:
                'The defined interval after sample application within which the result is valid. It is determined during development by tracking line development over time across the full concentration range, including samples near the limit of detection, and by observing when non-specific artefacts begin to appear.',
            whyItMatters:
                'The read window is where assay performance and user behaviour meet. A test with excellent analytical sensitivity delivers false negatives in the field if users read it at eight minutes because nothing appeared to be happening. The design response is to make the window wide enough to tolerate real behaviour, and to make the timing unmissable rather than relying on the leaflet.',
            keyFacts: [
                'The floor is set by the development time of the weakest true positive near the limit of detection.',
                'The ceiling is set by the onset of non-specific binding, drying artefacts and evaporation marks that can be mistaken for lines.',
                'Reading early biases toward false negatives; reading late biases toward false positives.',
                'The control line appearing confirms flow occurred — it does not confirm the read window has been reached.',
            ],
            considerations: [
                'A narrow window is a usability failure waiting to happen; widening it during development is worth real chemistry effort.',
                'Users interpret a slowly appearing faint line as "becoming positive" and keep watching — instructions need to address this explicitly.',
                'Any reader-based product should timestamp the read and refuse or flag out-of-window images.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
            ],
        },
        {
            slug: 'timing-mechanisms',
            name: 'Helping the user keep time',
            tagline:
                'A leaflet instruction is the weakest possible timer. An app, a QR code or an on-cassette indicator is a design decision, not a nicety.',
            whatItIs:
                'The mechanisms by which a self-test communicates and enforces its read window: printed instructions, a companion app timer, a QR code on the cassette that starts a timer when scanned, or a physical or chemical indicator on the device itself.',
            whyItMatters:
                'Timing is the assay parameter most fully delegated to the user, and the delegation is usually unsupported. Moving the timer into the product — a scan that starts a countdown, a reader that knows when the image was taken — converts a compliance hope into a controlled variable, and it produces a timestamp that is useful for the result record as well.',
            keyFacts: [
                'A QR code scanned at sample application both starts an accurate timer and identifies the lot.',
                'A reader or app can enforce the window by refusing to interpret an image taken outside it.',
                'Timestamping the read makes the result auditable, which matters for any transmitted or recorded result.',
            ],
            considerations: [
                'Any app that interprets or gates a diagnostic result is itself a regulated medical device in most jurisdictions.',
                'A product that requires a phone excludes users without one — the unaided path must still work.',
                'On-cassette chemical timing indicators add cost and a further stability variable to validate.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays: a review',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
            ],
        },
        {
            slug: 'flow-rate-control',
            name: 'What sets the timing in the first place',
            tagline:
                'Membrane capillary flow time, strip compression, sample viscosity and temperature — the physical variables behind the number on the leaflet.',
            whatItIs:
                'The physical determinants of how long the assay takes: the nitrocellulose membrane\'s rated capillary flow time, the compression applied to the strip inside the cassette, sample viscosity and haematocrit, and ambient temperature.',
            whyItMatters:
                'The read window is a consequence, not a choice. Understanding what sets it means it can be moved deliberately — a faster membrane shortens the window but reduces antibody–antigen contact time and can cost sensitivity. This is the same trade-off that appears in the Test Strip and Test Cassette categories, seen from the timing side.',
            keyFacts: [
                'Nitrocellulose membranes are specified by capillary flow time; slower membranes give longer binding contact and generally better sensitivity at the cost of a longer test.',
                'Cassette rib compression on the strip alters flow rate — a housing change can shift the read window.',
                'High haematocrit increases viscosity and slows flow; sample type matters to timing, not just to chemistry.',
                'Ambient temperature affects flow rate and reaction kinetics, which matters where the product will be used in a wide temperature range.',
            ],
            considerations: [
                'Any change to housing, membrane lot or sample pad requires the read window to be re-confirmed, not assumed.',
                'Temperature effects mean a window validated in a temperate laboratory may not hold in Indian summer conditions — worth testing across the intended use range.',
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
