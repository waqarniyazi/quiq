import { Atom } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const conjugate: ResearchCategory = {
    slug: 'conjugate',
    number: 4,
    title: 'Conjugate',
    icon: Atom,
    summary:
        'The label particle that makes an invisible antibody–antigen binding event visible. Choosing it sets the limit of detection, the cost per test, and whether the result can be read by eye at all.',
    deepDive:
        'Antibodies binding their target produce no signal on their own. The conjugate is a coloured or otherwise detectable particle chemically attached to the detection antibody, so that when antibody accumulates at the test line, the particle accumulates with it and becomes visible. Forty-nanometre colloidal gold is the industry default because it is cheap, stable, well-characterised and produces the familiar red line. But it is not the most sensitive option available, and for low-abundance markers — cardiac troponin, some hormones — the default is not sufficient. The alternatives trade cost, manufacturability and colour for sensitivity: gold nanoshells push detection down by roughly an order of magnitude, carbon nanoparticles offer the strongest contrast per rupee, and fluorescent or upconversion labels require a reader but extend dynamic range.',
    items: [
        {
            slug: 'gold-nanoshells',
            name: 'Gold nanoshells',
            tagline:
                'Silica-core, gold-shell particles at ~150 nm. Reported Troponin I detection at 0.05 ng/mL (50 pg/mL) versus 0.5 ng/mL for conventional 40 nm gold.',
            whatItIs:
                'A gold nanoshell is a dielectric core — typically silica — coated with a thin gold layer by electroless deposition. Because the optical resonance depends on the core-to-shell ratio rather than only on diameter, nanoshells can be made much larger than conventional colloidal gold while retaining strong, tunable optical extinction. Larger particle, more extinction per binding event, stronger visible line.',
            whyItMatters:
                'This is the direct route to a visually readable low-abundance test. Published comparison for cardiac Troponin I puts 40 nm colloidal gold at a limit of detection around 0.5 ng/mL and 150 nm gold nanoshells at 0.05 ng/mL — a tenfold improvement, and precisely the 50 pg/mL figure carried in the internal deck. Achieving that sensitivity without adding a reader keeps the product in self-test territory rather than instrument territory.',
            keyFacts: [
                'Structure: silica core with an electroless-deposited gold shell; optical resonance tuned by core:shell ratio.',
                'Reported LOD for Troponin I: 0.05 ng/mL (50 pg/mL) with 150 nm nanoshells versus 0.5 ng/mL with 40 nm colloidal gold.',
                'Generally reported as 5–20× more sensitive than 40 nm gold spheres across model assays.',
                'Retains gold surface chemistry, so established thiol and passive-adsorption conjugation protocols carry over.',
            ],
            considerations: [
                'Cross-study LOD comparisons are confounded by antibody pair, conjugation chemistry, membrane and readout method. Treat the 10× figure as a strong directional signal, not a number to quote in a specification.',
                'Larger particles flow more slowly through nitrocellulose and are more prone to non-specific trapping; membrane pore size may need re-selection.',
                'Cost per milligram is substantially above colloidal gold. The sensitivity has to be needed, not merely available.',
                'Colloidal stability of large shells is more sensitive to buffer ionic strength than 40 nm spheres.',
            ],
            status: 'shortlisted',
            sources: [
                {
                    title: 'nanoComposix — Gold nanoshells for lateral flow assays',
                    url: 'https://nanocomposix.com/pages/gold-nanoshells',
                },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
        {
            slug: 'carbon-nanoparticles',
            name: 'Carbon nanoparticles',
            tagline:
                'The cheapest high-contrast label. Black on white paper is the strongest visual contrast available, and reported sensitivity beats streptavidin–gold in head-to-head work.',
            whatItIs:
                'Colloidal carbon particles used as a detection label in place of gold. They are produced from carbon black, are chemically inert, and coat with protein by passive adsorption. Their signal is pure optical absorbance across the visible spectrum — a dense black line on a white membrane.',
            whyItMatters:
                'Black-on-white is the highest-contrast combination the human eye can resolve on paper, which raises the visual limit of detection without any change to assay chemistry. Carbon is also dramatically cheaper than gold per test, which matters at a ₹99 price point more than at a €15 one. In published nucleic-acid lateral flow work, avidin–carbon nanoparticle conjugate detected at 2.2 × 10⁻² pg/µL versus 8.4 × 10⁻² pg/µL for streptavidin–gold — roughly four times more sensitive at lower cost.',
            keyFacts: [
                'Reported detection of 2.2 × 10⁻² pg/µL (avidin–carbon) versus 8.4 × 10⁻² pg/µL (streptavidin–gold) in a comparative nucleic-acid lateral flow assay.',
                'Broad-spectrum absorbance gives maximal contrast against white nitrocellulose.',
                'Chemically inert and non-photobleaching; no optical fading over shelf life.',
                'Substantially lower raw-material cost than colloidal gold or nanoshells.',
            ],
            considerations: [
                'Carbon colloids are polydisperse and harder to size-control than gold; batch-to-batch consistency is the main manufacturing risk.',
                'Passive adsorption gives less control over antibody orientation than thiol chemistry on gold, which can cost activity.',
                'Black lines carry a different consumer association than the familiar red line; usability testing is warranted.',
                'Fewer commercial suppliers of validated conjugation-ready carbon than of gold — supply concentration risk.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays for salivary biomarker assessment: a review',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
                {
                    title: 'nanoComposix — Measuring the performance of lateral flow assays',
                    url: 'https://nanocomposix.com/pages/testing-methods-for-measuring-the-performance-of-lateral-flow-assays',
                },
            ],
        },
        {
            slug: 'colloidal-gold-baseline',
            name: 'Colloidal gold — the 40 nm baseline',
            tagline:
                'The default label the whole industry is calibrated to. Worth stating explicitly so alternatives are measured against something.',
            whatItIs:
                'Spherical gold nanoparticles, conventionally around 40 nm, conjugated to detection antibody by passive adsorption or thiol chemistry. Their surface plasmon resonance produces the characteristic red line of a pregnancy or COVID test.',
            whyItMatters:
                'Every supplier, every contract manufacturer and every regulatory reviewer understands 40 nm gold. It is the lowest-risk, fastest-to-market option and the correct default for any marker abundant enough to support it. It is also the benchmark against which nanoshells and carbon must justify their added cost.',
            keyFacts: [
                'Typical reported LOD around 0.5 ng/mL for cardiac Troponin I in a model lateral flow assay.',
                'Mature conjugation chemistry, wide supplier base, well-characterised stability.',
                'Produces the red line users already recognise from consumer tests.',
            ],
            considerations: [
                'Insufficient sensitivity for genuinely low-abundance markers without signal amplification or a reader.',
                'Gold price exposure is a real input-cost variable at volume.',
            ],
            status: 'in-use',
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
    ],
}
