import { Target } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const lancingEfficacy: ResearchCategory = {
    slug: 'lancing-efficacy',
    number: 18,
    title: 'Efficacy of the Lancing Process',
    icon: Target,
    summary:
        'What the evidence actually says about pain and blood volume — depth matters, device matters, and lancet gauge matters less than everyone assumes.',
    deepDive:
        'Lancing is the step users dread and the step that decides whether the assay gets enough sample. The intuition in the industry is that a finer lancet hurts less and yields less, and that the trade-off between the two is the design problem. A controlled study of 90 participants with diabetes across three devices and three lancet gauges found something more useful than that intuition: both blood volume and pain were significantly higher at maximum than at minimum lancing depth, while the aggregated comparison found no significant effect of lancet size on either volume or pain. Device choice, meanwhile, did produce significant pain differences. The practical conclusion is unusually clean — use the minimum depth that yields an adequate sample, choose the device carefully, and treat gauge as a secondary variable rather than the primary lever.',
    items: [
        {
            slug: 'depth-versus-gauge',
            name: 'Depth versus gauge — what the evidence shows',
            tagline:
                '360 lancing procedures across 90 participants: depth drove both volume and pain (P < .001); lancet size showed no significant effect on either.',
            whatItIs:
                'A controlled comparison of three lancing devices — Glucoject Dual PLUS, droplet, and Microlet Next — crossed with 28G, 30G and 33G lancets, across 90 participants with diabetes and 360 lancing procedures. Blood volume was measured with calibrated capillaries and pain scored on a visual analogue scale.',
            whyItMatters:
                'This reframes the design problem. Both blood volume and pain were higher at maximum versus minimum lancing depth (P < .001), while the aggregated comparison found no significant effect of lancet size on either volume or pain. Pain did differ significantly between devices (P ≤ .001). So the levers that matter, in order, are depth setting and device mechanism — not the gauge printed on the lancet, which is where product marketing concentrates.',
            keyFacts: [
                'Study design: 3 devices (Glucoject Dual PLUS, droplet, Microlet Next) × 3 lancet gauges (28G, 30G, 33G), 90 participants with diabetes, 360 lancing procedures.',
                'Blood volume and pain were both significantly higher at maximum versus minimum lancing depth (P < .001).',
                'The aggregated comparison found no significant effect of lancet size on either blood volume or pain.',
                'Pain differed significantly between devices (P ≤ .001) — the mechanism matters more than the needle.',
                'Practical takeaway: use the minimum depth that yields an adequate sample.',
            ],
            considerations: [
                'The finding is aggregate; individual users with callused fingertips may still need a coarser gauge or greater depth.',
                'The study population was people with diabetes, who lance frequently and have adapted skin — naive users may respond differently.',
                'Depth adjustment only helps if the device actually offers it and the user understands how to set it.',
            ],
            status: 'reference',
            sources: [
                {
                    title: 'Effect of lancing depth and lancet size on blood volume and pain (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8442193/',
                },
                { title: 'ClinicalTrials.gov — NCT03479619', url: 'https://clinicaltrials.gov/study/NCT03479619' },
            ],
        },
        {
            slug: 'volume-requirements',
            name: 'Blood volume requirements',
            tagline:
                'Modern meters need 0.3–0.6 µL. A 30G safety lancet at 1.2–1.5 mm yields 18–32 µL in 20 seconds. The gap is the design headroom.',
            whatItIs:
                'The relationship between what the assay needs and what a given lancing configuration delivers — the number that decides whether the depth can be reduced without failing the test.',
            whyItMatters:
                'The headroom is larger than it appears. Modern glucose meters need roughly 0.3–0.6 µL, while a 30G safety lancet at 1.2–1.5 mm depth yields 18–32 µL within 20 seconds. An assay designed to work at the low end of that range can afford a shallower, less painful lance — which converts an assay sensitivity gain directly into a user experience gain. That is the strongest argument for pushing conjugate sensitivity beyond what the clinical claim strictly requires.',
            keyFacts: [
                'Modern meters require approximately 0.3–0.6 µL of blood.',
                'A 30G safety lancet at 1.2–1.5 mm depth yields 18–32 µL within 20 seconds.',
                'A shallow 0.6–0.7 mm lance with 31G–33G targets superficial capillaries while avoiding the deeper nerve layer.',
                '21G and 23G safety lancets exist for applications needing a larger draw.',
            ],
            considerations: [
                'Milking the finger to increase yield dilutes the sample with interstitial fluid and can alter the result — instructions must discourage it, which raises the required yield.',
                'Cold hands substantially reduce capillary yield; usability testing should include realistic conditions.',
                'Higher assay sensitivity is the cleanest route to a less painful test — a chemistry investment that pays out in user experience.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Effect of lancing depth and lancet size on blood volume and pain (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8442193/',
                },
            ],
        },
        {
            slug: 'gauge-conventions',
            name: 'Gauge conventions and colour coding',
            tagline:
                'Higher gauge means thinner. 30G–32G is the daily-use range. Colour coding is brand-specific, not an industry standard.',
            whatItIs:
                'The practical conventions around lancet gauge selection and the colour coding used to distinguish gauges, which is frequently assumed to be standardised and is not.',
            whyItMatters:
                'Two things are worth getting right here. First, gauge selection has established practice even if the controlled evidence finds gauge less decisive than depth — most adults use 30G–32G for daily glucose monitoring, with 32G/33G producing smaller drops and 30G/31G more practical when a larger sample is needed. Second, colour coding is brand-specific rather than an industry standard, so a colour convention adopted for QUIQ is a design decision that will not match what users may have seen elsewhere.',
            keyFacts: [
                'Higher gauge number means a thinner needle — 33G is less painful than 28G.',
                'Most adults use 30G–32G for daily glucose monitoring.',
                '32G and 33G produce smaller drops; 30G and 31G are more practical when a larger sample is needed.',
                'Callused fingertips generally call for 28G or 30G.',
                'Colour coding is brand-specific, not standardised — for example Medlance uses dark blue and yellow for particular gauges, and MediSafe Solo has its own 23G variants.',
            ],
            considerations: [
                'Adopting a colour convention creates an expectation; if it conflicts with a widely used brand\'s scheme it can mislead rather than help.',
                'Colour coding is most valuable within a single product family where the user is choosing between QUIQ\'s own options.',
                'Gauge conventions reflect established practice and user expectation, which is a real constraint even where the controlled evidence finds the effect small.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'Effect of lancing depth and lancet size on blood volume and pain (PMC)',
                    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8442193/',
                },
                { title: 'ClinicalTrials.gov — NCT03752229', url: 'https://clinicaltrials.gov/study/NCT03752229' },
            ],
        },
    ],
}
