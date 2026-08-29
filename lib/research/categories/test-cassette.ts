import { Box } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const testCassette: ResearchCategory = {
    slug: 'test-cassette',
    number: 3,
    title: 'Test Cassette',
    icon: Box,
    summary:
        'The plastic housing that holds the strip, meters the sample and frames the result window — and the growing pressure to make it out of something other than plastic.',
    deepDive:
        'The cassette does more work than it appears to. It holds the strip stack under consistent compression so capillary flow is reproducible, it positions the sample well over the sample pad, it defines the read window that crops what the user sees, and it protects the membrane from fingers and light. Two design directions are currently live. Transparent housings expose the full strip rather than a cropped window, which is useful for readers and for troubleshooting but exposes faint background to untrained eyes. Eco-friendly housings replace virgin ABS or polystyrene with paper-based, moulded-pulp or bio-derived materials, which is increasingly a procurement requirement in Europe and a differentiator in consumer retail — but which interacts badly with the moisture control the test depends on.',
    items: [
        {
            slug: 'transparent-cassette',
            name: 'Transparent cassettes',
            tagline:
                'Clear housing showing the full strip instead of a cropped result window — better for readers, riskier for untrained eyes.',
            whatItIs:
                'A cassette moulded in clear polymer so the whole nitrocellulose strip is visible rather than only the section framed by a conventional window. Some designs keep a printed window outline on the surface as a visual guide while leaving the substrate clear.',
            whyItMatters:
                'Optical readers benefit: a camera can see the full strip, locate the control line, correct for flow-front position and measure background alongside signal rather than assuming it. For manufacturing and QC, a transparent housing makes flow defects visible without dismantling the device.',
            keyFacts: [
                'Gives readers access to background regions for normalisation, improving quantitative accuracy.',
                'Makes flow anomalies — incomplete wetting, edge flow, trapped air — visible during QC.',
                'Removes the need for precise window-to-line registration during assembly.',
            ],
            considerations: [
                'Untrained users read faint non-specific background as a positive. A cropped window is partly a usability feature, not only a cost saving.',
                'Clear polymers offer no light protection; some conjugates and enzyme labels are light-sensitive.',
                'Clear mouldings show flow lines and cosmetic defects that an opaque housing hides, tightening moulding tolerances.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
        {
            slug: 'eco-friendly-cassette',
            name: 'Eco-friendly / non-plastic cassettes',
            tagline:
                'Moulded pulp, paperboard and bio-derived housings replacing virgin ABS — a real procurement lever with a real moisture problem.',
            whatItIs:
                'Housings made from moulded paper pulp, folded paperboard, or bio-based and recycled polymers instead of virgin styrenics. In the simplest versions the "cassette" is a laminated card that sandwiches the strip; in more developed versions it is a pulp moulding matching conventional cassette geometry.',
            whyItMatters:
                'A rapid test is a single-use plastic object produced in very high volume. Reducing that is both an ESG position and, increasingly, a procurement requirement for institutional buyers in Europe. For a consumer brand, it is also visible on shelf in a way that most engineering choices are not.',
            keyFacts: [
                'Card and pulp formats remove the largest single plastic component of a test kit.',
                'Paperboard housings can be printed directly, removing a label operation.',
                'Bio-derived and recycled-content polymers are a lower-risk intermediate step that keeps existing tooling geometry.',
            ],
            considerations: [
                'Cellulose-based housings absorb and hold moisture. Lateral flow is a dried-reagent product where water vapour is the primary stability threat — an eco housing can shorten shelf life unless the foil pouch and desiccant strategy compensates. See Packaging Design.',
                'Dimensional stability under humidity affects strip compression, which affects flow rate, which affects result timing.',
                'Regulatory: biocompatibility and stability data are generated against the housing material. Changing it is a device change requiring fresh stability studies.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Sigma-Aldrich — Lateral flow test design, materials and manufacturing insights',
                    url: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/clinical-testing-and-diagnostics-manufacturing/ivd-manufacturing/lateral-flow-test-insights',
                },
                {
                    title: 'StabilityHub — Desiccant impact on stability',
                    url: 'https://stabilityhub.com/2023/12/02/desiccant-impact-on-stability/',
                },
            ],
        },
    ],
}
