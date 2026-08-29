import { Users } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const selfTestPlayers: ResearchCategory = {
    slug: 'self-test-players',
    number: 9,
    title: 'Self-Test Players',
    icon: Users,
    summary:
        'Who else is in the market, what they actually manufacture, and how much of the branded landscape is the same product under different labels.',
    deepDive:
        'The self-test market looks more diverse than it is. A large share of European and US "manufacturers" are relabellers: they buy finished kits from a small number of Chinese producers, apply their own brand, and place them on the market under their own declaration of conformity. This is legal in many jurisdictions provided the importer performs its own quality control and repackaging and discloses the original manufacturer on request — but it means that competitive analysis by brand is misleading, and that a supply relationship with one factory can quietly be a relationship with half a dozen brands. Understanding who really makes what is therefore a sourcing question, a competitive question, and a reputational question at once.',
    items: [
        {
            slug: 'alltest',
            name: 'AllTest (Hangzhou AllTest Biotech)',
            vendor: 'Hangzhou AllTest Biotech Co., Ltd',
            origin: 'Hangzhou, Zhejiang, China',
            tagline:
                'High-volume Chinese rapid-test manufacturer whose products reach many markets under other companies\' brands.',
            whatItIs:
                'Hangzhou AllTest Biotech manufactures rapid diagnostic tests for healthcare and food safety, using monoclonal antibody–colloidal gold and latex techniques alongside gene engineering, compound antigens and immunoassay methods. Its catalogue spans pregnancy, ovulation and infectious disease cassettes; current European distribution includes HMPV, Bordetella pertussis and a stool combo covering noro-, rota-, adeno- and astrovirus. Its research and production team was established in 2011 by IVD professionals.',
            whyItMatters:
                'AllTest is the clearest illustration of how the branded self-test market actually works, and it matters to QUIQ in two directions. As a potential supplier, a factory at this scale offers cost structures that are hard to match. As a cautionary case, an OCCRP investigation ("Uncertain Diagnosis") found that the Biozek-branded test sold by Dutch company Inzek International Trading was one of at least three European and US "manufacturer" brands that were in fact relabellings of a single Chinese AllTest model, with many rebranders removing AllTest\'s name from their sites and kits entirely. ScreenItalia\'s own EC declaration of conformity listed itself as manufacturer of three tests bearing AllTest reference numbers — including two variants of INCP-402, the same kit relabelled by Biozek — and it registered with Italy\'s Ministry of Health as manufacturer.',
            keyFacts: [
                'Founded as an IVD manufacturer with a research and production team established in 2011; based in Hangzhou, Zhejiang.',
                'Uses monoclonal antibody–colloidal gold and latex techniques, gene engineering, compound antigens and immunoassays.',
                'Product range spans pregnancy, ovulation, gonorrhea, HMPV, Bordetella pertussis and multiplex stool panels.',
                'OCCRP identified at least three European and US brands selling relabelled AllTest kits, with the original manufacturer\'s name removed from kits and sites.',
                'Millions of units sold worldwide, reaching health services and governments in Spain, Italy, Great Britain, Indonesia, Russia and the Vatican.',
            ],
            considerations: [
                'Accuracy claims did not hold up under independent review. AllTest\'s own validation claimed 92.9% IgM and 98.6% IgG accuracy, while a Príncipe de Asturias University Hospital study found false negatives in more than half of cases; the UK government reportedly cancelled a multi-million-dollar order after an Oxford-led review found the kits failed basic accuracy standards.',
                'Some relabelled product reached online retailers selling directly to non-healthcare professionals in violation of safe-use guidance.',
                'Sourcing implication: if QUIQ ever sources finished kits rather than manufacturing, the declaration of conformity and the underlying validation data need to be traced to the actual producer, not the brand on the box.',
                'Reputational implication: a low unit cost obtained by relabelling carries the original manufacturer\'s performance record with it, whether or not the name appears.',
            ],
            status: 'reference',
            sources: [
                { title: 'Hangzhou AllTest Biotech', url: 'https://www.alltests.com.cn/' },
                {
                    title: 'OCCRP — Uncertain Diagnosis: the rebranded coronavirus tests',
                    url: 'https://www.occrp.org/en/investigation/uncertain-diagnosis',
                },
            ],
        },
        {
            slug: 'oraquick',
            name: 'OraQuick',
            vendor: 'OraSure Technologies',
            origin: 'United States',
            tagline:
                'The reference consumer self-test: oral fluid, no blood, FDA-approved for home HIV testing and the benchmark for at-home usability.',
            whatItIs:
                'OraQuick is OraSure\'s oral-fluid rapid test line, best known as the first FDA-approved in-home HIV self-test. The user sweeps a flat absorbent pad along the upper and lower gums, places it in a developer vial, and reads the result after a defined wait. It is a lateral flow immunoassay throughout.',
            whyItMatters:
                'OraQuick is the closest thing the industry has to a proof that consumers can perform a diagnostic test unsupervised and act on the result. It set the regulatory precedent for home testing of a serious infectious disease, and it did so by removing blood from the workflow entirely. For QUIQ, it is the usability benchmark and the argument for taking the Swabs category seriously.',
            keyFacts: [
                'Oral fluid collection via a flat absorbent pad swept along the gums, developed in a buffer vial.',
                'First FDA-approved in-home HIV self-test, establishing the consumer self-testing regulatory precedent.',
                'Lateral flow immunoassay format with visual read and no instrument required.',
            ],
            considerations: [
                'Oral-fluid HIV tests have a longer window period than blood-based tests — a usability gain paid for in sensitivity during early infection.',
                'The support infrastructure (helpline, confirmatory-testing pathway) was part of the approval, not an optional extra. Serious self-tests need a route to follow-up.',
            ],
            status: 'reference',
            sources: [
                { title: 'OraQuick — OraSure Technologies', url: 'https://www.oraquick.com/' },
                { title: 'OraSure Technologies', url: 'https://www.orasure.com/' },
            ],
        },
        {
            slug: 'relabelled-brands',
            name: 'Relabelled and distributor brands',
            tagline:
                'Biozek, ScreenItalia, Prima, Touchbio, Royal Sense and others — brands whose manufacturing origin needs tracing before any conclusion is drawn.',
            whatItIs:
                'A cluster of European, Australian and Indian brands that appear in market listings as manufacturers but are, in whole or in part, distributors placing product from third-party factories under their own name. The internal deck lists Biozek, Prima, Touchbio and Royal Sense / Dr Manya in this category alongside genuine manufacturers.',
            whyItMatters:
                'Competitive mapping by brand produces a wrong picture. Two "competitors" may be the same factory with different cartons; a supplier being courted may already be supplying a competitor. Tracing the declaration of conformity to the actual producer is the only reliable way to know what is really in the market — and it is the same discipline that protects QUIQ from inheriting someone else\'s validation data.',
            keyFacts: [
                'Biozek, sold by Dutch company Inzek International Trading, was identified by OCCRP as a relabelling of a Hangzhou AllTest model.',
                'ScreenItalia\'s EC declaration of conformity listed itself as manufacturer of three tests carrying AllTest reference numbers, including two INCP-402 variants — the same kit relabelled by Biozek.',
                'Italian law permits buying and relabelling imported tests provided the importer performs its own QC and repackaging and discloses the original manufacturer on request.',
            ],
            considerations: [
                'Prima (likely Prima Lab SA, Switzerland), Touchbio, and Royal Sense / Dr Manya did not return verifiable company documentation during research. These are recorded as open questions rather than characterised on assumption.',
                'The correct diligence step for any of these names is to obtain the declaration of conformity and identify the actual manufacturer, rather than relying on web presence.',
            ],
            status: 'evaluating',
            sources: [
                {
                    title: 'OCCRP — Uncertain Diagnosis: the rebranded coronavirus tests',
                    url: 'https://www.occrp.org/en/investigation/uncertain-diagnosis',
                },
            ],
        },
    ],
}
