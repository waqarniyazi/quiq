import { Brush } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const swabs: ResearchCategory = {
    slug: 'swabs',
    number: 7,
    title: 'Swabs',
    icon: Brush,
    summary:
        'Non-blood sample collection — saliva, oral fluid, nasal. The route to a genuinely painless test, at the cost of lower analyte concentrations.',
    deepDive:
        'Every barrier to self-testing that involves a needle disappears if the sample is saliva or oral fluid. The trade-off is concentration: salivary levels of most analytes are far below plasma levels, so the assay has to be more sensitive to reach the same clinical conclusion, and the correlation between the salivary and blood values has to be established rather than assumed. Swab design itself matters more than it looks — absorbency, release efficiency and the volume actually delivered to the strip vary substantially between materials, and a swab that holds sample tightly is a swab that gives the assay less of it. Cortisol is the best-developed salivary marker because free salivary cortisol tracks the biologically active unbound fraction in blood, which is arguably a better measure than total serum cortisol.',
    items: [
        {
            slug: 'soma-bioscience',
            name: 'SOMA Bioscience — salivary cortisol and stress markers',
            vendor: 'SOMA Bioscience (formerly iPRO Interactive)',
            origin: 'Wallingford, Oxfordshire, United Kingdom',
            tagline:
                'Quantitative saliva lateral flow assays for cortisol, IgA, IgG and α-amylase, read on the iPro Lab and iPro Cube devices. Research use only.',
            whatItIs:
                'SOMA Bioscience develops quantitative lateral flow immunoassays for saliva-based biomarkers — cortisol, immunoglobulin A and G, and alpha-amylase — together with two readers, the iPro Lab and the iPro Cube. The strip carries a test line that responds to gold-labelled anti-secretory antibodies; the user collects saliva, applies it with buffer, and the reader quantifies the line rather than the user interpreting it.',
            whyItMatters:
                'The operational advantage over ELISA is significant and directly relevant to point-of-care work. An ELISA plate must be calibrated for each run, covering up to 40 samples in duplicate. The SOMA lateral flow assay is calibrated once per batch of strips — typically 500 to 3,000 tests — and requires no specialised laboratory equipment or controlled environment. That is the difference between a laboratory method and a field-deployable one. It is also the clearest worked example of quantitative, reader-based saliva testing reaching real-world use.',
            keyFacts: [
                'Quantitative saliva lateral flow assays for cortisol, IgA, IgG and α-amylase.',
                'Two readers: iPro Lab and iPro Cube. The "Cube reader" listed separately in the internal deck is this same ecosystem, not a separate vendor.',
                'Calibration is per batch of strips (typically 500–3,000 tests) rather than per plate, unlike ELISA.',
                'No specialised equipment or controlled environment required at point of use.',
                'Used in sports science research and in a NASA-associated study measuring real-time salivary cortisol alongside blood cholesterol and urinary 6-sulphatoxymelatonin.',
                'Validated in a pre-registered PeerJ study and in a 2023 Cube Reader paper in Japanese Psychological Research.',
            ],
            considerations: [
                'Regulatory status is the critical caveat: the manufacturer states these products are for research or investigative purposes and explicitly are NOT in vitro diagnostic tests. Any clinical or consumer claim would require a separate regulatory pathway.',
                'Deck correction: "Cube reader" appears under Reader (category 8) and "Soma Biosciences" under Swabs (category 7). They are the same ecosystem — the Cube is SOMA\'s own reader.',
                'Salivary analyte concentrations are far lower than plasma; assay sensitivity, not sample collection, is the binding constraint.',
                'Saliva composition varies with flow rate, time of day, food and oral hygiene — collection protocol is part of the assay, not a detail.',
            ],
            status: 'reference',
            sources: [
                { title: 'SOMA Bioscience', url: 'https://www.somabioscience.com/' },
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays for salivary biomarker assessment: a review',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
                {
                    title: 'Quantitative lateral flow assays for salivary biomarker assessment (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5469882/',
                },
                {
                    title: 'Japanese Psychological Research — validation of the Cube Reader for salivary measurement',
                    url: 'https://onlinelibrary.wiley.com/doi/10.1111/jpr.12402',
                },
                {
                    title: 'PeerJ — pre-registered validation study of salivary lateral flow measurement',
                    url: 'https://peerj.com/articles/8366/',
                },
            ],
        },
        {
            slug: 'oral-fluid-collection',
            name: 'Oral fluid collection design',
            tagline:
                'The swab is part of the assay. Absorbency, release efficiency and delivered volume decide how much sample the strip actually sees.',
            whatItIs:
                'Oral fluid collection covers flat absorbent pads swept along the gum line, foam and flocked swabs, and passive drool collection into a tube. Each delivers a different volume, a different fraction of that volume back out into buffer, and a different mix of whole saliva versus gingival crevicular fluid.',
            whyItMatters:
                'Sample delivery variability shows up directly as result variability. A swab that absorbs 500 µL but releases only 40% of it into buffer hands the strip a different effective sample than one that absorbs 300 µL and releases 80%. For a self-test where the user cannot measure anything, that variation is invisible and uncorrectable — so it has to be designed out at the material level.',
            keyFacts: [
                'OraQuick uses a flat absorbent pad swept along the upper and lower gums, then placed into a developer vial — the reference design for consumer oral-fluid testing.',
                'Flocked swabs generally release a higher fraction of collected fluid than wound-fibre swabs.',
                'Gum-line sweeping collects gingival crevicular fluid, which is closer to serum composition than whole saliva for antibody targets.',
            ],
            considerations: [
                'Collection technique is user-dependent: sweep duration and pressure change delivered volume and therefore the result.',
                'Eating, drinking and oral hygiene before collection alter saliva composition; instructions have to specify a window, and users have to follow it.',
                'Swab material must not itself bind the analyte — a real and easily missed failure mode with proteins.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'OraQuick — OraSure Technologies', url: 'https://www.oraquick.com/' },
                {
                    title: 'Frontiers in Public Health — Quantitative lateral flow assays for salivary biomarker assessment',
                    url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00133/full',
                },
            ],
        },
    ],
}
