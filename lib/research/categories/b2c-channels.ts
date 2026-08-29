import { ShoppingBag } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const b2cChannels: ResearchCategory = {
    slug: 'b2c-channels',
    number: 17,
    title: 'B2C Channels',
    icon: ShoppingBag,
    summary:
        'How a self-test actually reaches a person — pharmacy, e-commerce, direct-to-consumer, and the diagnostic networks that already own the relationship.',
    deepDive:
        'A self-test has an unusual channel problem: it is bought rarely, chosen on trust, and often needed the same day. That combination does not fit any single channel cleanly. Pharmacy offers immediacy and pharmacist endorsement but limited shelf space and thin per-unit economics. E-commerce offers reach and content depth but delivery lag and a discovery problem in a category nobody browses. Direct-to-consumer offers the full margin and the customer relationship but requires building demand from nothing. The existing diagnostic networks — the franchise collection centres described in the B2B Marketplace category — already have physical presence in exactly the towns a self-test is meant to serve, and a commercial interest that partly conflicts with it. Channel strategy here is inseparable from positioning: whether the product is framed as replacing a lab test or as the step before one determines which doors are open.',
    items: [
        {
            slug: 'pharmacy-retail',
            name: 'Pharmacy and retail',
            tagline:
                'Immediate availability and pharmacist endorsement, against limited shelf space and a category with no browsing behaviour.',
            whatItIs:
                'Sale through chemist shops and organised pharmacy chains, either over the counter or from behind it. In India this covers a very long tail of independent chemists alongside a growing organised chain presence and the pharmacy arms of e-commerce health platforms.',
            whyItMatters:
                'Pharmacy is the only channel that delivers a test on the day it is wanted, and the pharmacist\'s recommendation carries weight that no advertisement matches. It is also the channel where the product competes for a few centimetres of counter space against much faster-moving goods — which makes packaging, price point and the pharmacist\'s own margin the deciding variables rather than product quality.',
            keyFacts: [
                'Same-day availability is the structural advantage no online channel can match for an urgent test.',
                'Pharmacist recommendation is a high-trust signal in the Indian market, particularly outside metros.',
                'Shelf and counter space is scarce; the pharmacist\'s margin and turnover expectation govern stocking decisions.',
            ],
            considerations: [
                'A self-test consumers do not know exists will not be asked for by name — pull has to be created before pharmacy stocking is sustainable.',
                'Fragmentation of the independent chemist channel makes distribution reach expensive to build directly.',
                'Regulatory classification determines whether the product can be sold over the counter at all, and that decision precedes channel planning.',
            ],
            status: 'evaluating',
            sources: [],
        },
        {
            slug: 'ecommerce',
            name: 'E-commerce and health platforms',
            tagline:
                'National reach and room to explain the product, against delivery lag and a discovery problem in a category nobody searches for casually.',
            whatItIs:
                'Sale through horizontal marketplaces and vertical health platforms, including the pharmacy and diagnostics arms of digital health companies. This channel carries product detail, reviews and content in a way physical retail cannot.',
            whyItMatters:
                'For a product that has to be explained before it is bought, e-commerce is the only channel with room for the explanation. It also reaches towns where no organised pharmacy presence exists. The constraint is discovery: a self-test is not a browsed category, so demand has to arrive from content, search or referral rather than from the storefront.',
            keyFacts: [
                'Unlimited space for product explanation, instructions, video and reviews — decisive for an unfamiliar category.',
                'National reach without building physical distribution.',
                'Health platforms already hold the customer relationship for medicines and lab tests, making them a natural adjacency.',
            ],
            considerations: [
                'Delivery lag rules this channel out for urgent testing needs.',
                'Marketplace listing does not create demand; the acquisition cost sits upstream in content and search.',
                'Health platforms that also sell lab tests have the same incentive conflict as the diagnostic franchise networks.',
            ],
            status: 'evaluating',
            sources: [],
        },
        {
            slug: 'diagnostic-networks-as-channel',
            name: 'Diagnostic collection networks as a channel',
            tagline:
                '10,000+ franchise collection points already reach the towns a self-test targets — and sell the lab test it displaces.',
            whatItIs:
                'Using the existing franchise collection-centre networks described in the B2B Marketplace category as a retail and referral channel for self-tests, rather than treating them purely as competition.',
            whyItMatters:
                'These networks represent the largest existing physical distribution surface for anything diagnostic in India — Thyrocare alone reported over 10,100 active partners as of Q2 FY26 — and their franchisees are independent business owners motivated by margin rather than loyalty to the lab. A self-test positioned as a screening step that generates confirmatory lab referrals aligns with, rather than threatens, that economics. Positioned as a replacement, it does the opposite.',
            keyFacts: [
                'Thyrocare reported 10,100+ active partners as of Q2 FY26, with collection-centre franchisees receiving up to 90–95% of the B2B price.',
                'Franchisees are independent operators whose stocking decisions follow their own margin, not the parent laboratory\'s product strategy.',
                'These networks already reach smaller towns where organised pharmacy and reliable delivery are both weak.',
            ],
            considerations: [
                'The incentive conflict is real: a self-test that removes the need for a lab test removes the franchisee\'s revenue on that test. Framing as a screening-and-referral step is the alignment that makes the channel viable.',
                'A shift toward at-home collection and digital-first platforms is already pressuring walk-in franchise economics — the channel is changing while being evaluated.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'Thyrocare — TSP franchisee programme', url: 'https://lead.thyrocare.com/tsp-franchisee/' },
                {
                    title: 'Tradejini — Thyrocare Technologies business and financial analysis',
                    url: 'https://tradejini.com/blogs/thyrocare-technologies-share-price-target/',
                },
            ],
        },
    ],
}
