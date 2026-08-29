import { FlaskConical } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const testingLabs: ResearchCategory = {
    slug: 'testing-labs',
    number: 14,
    title: 'Labs for Testing',
    icon: FlaskConical,
    summary:
        'The accredited laboratories that produce the comparator results a self-test is validated against — and the accreditation scope that decides whether those results count.',
    deepDive:
        'A rapid test claim is always a claim relative to something else. Sensitivity and specificity are measured against a reference method run in an accredited laboratory, which means the choice of laboratory is part of the validation design rather than a procurement detail. Two things matter more than reputation. First, accreditation is scoped: NABL and CAP certificates cover named tests at named sites, and a laboratory can be excellent and accredited while the specific assay needed sits outside its accredited scope. Second, sample handling between the fingerprick and the analyser introduces its own variability, so the comparator protocol — collection, transport, time to analysis — has to be specified as tightly as the test protocol. NABL is the only government-authorised laboratory accreditation body in India and works to ISO 15189:2012.',
    items: [
        {
            slug: 'neuberg-diagnostics',
            name: 'Neuberg Diagnostics',
            vendor: 'Neuberg Diagnostics',
            origin: 'Chennai, India (with UAE, South Africa and USA operations)',
            tagline:
                'CAP and NABL accredited, 6,000+ investigations, and — unusually — approved by US DAIDS and ACTG to run clinical trials supporting FDA approvals.',
            whatItIs:
                'Neuberg Diagnostics is headquartered in Chennai and operates across India, the UAE, South Africa and the USA. The group was formed in 2018 by an alliance uniting laboratories from India, the UAE, Sri Lanka and South Africa. Its laboratories are accredited by CAP and NABL, with capability across more than 6,000 pathological investigations.',
            whyItMatters:
                'Neuberg\'s clinical-trial credentials are what distinguish it for validation work specifically. It has held approval from the USA Division of AIDS (DAIDS) and the ACTG organisation to conduct clinical trials supporting FDA approvals since 2013, and one of its laboratories serves as a Quality Assurance Facility for validation of HIV Dried Blood Spot Viral Load testing for the US CDC. A laboratory that already operates to that standard is a materially different validation partner from one that is merely accredited for routine diagnostics.',
            keyFacts: [
                'Headquartered in Chennai; operations in India, the UAE, South Africa and the USA.',
                'Formed in 2018 through an alliance uniting laboratories from India, the UAE, Sri Lanka and South Africa.',
                'Laboratories accredited by CAP and NABL; capability across 6,000+ pathological investigations.',
                'Approved by the USA Division of AIDS (DAIDS) and the ACTG organisation to conduct clinical trials for FDA approvals since 2013.',
                'One laboratory serves as a Quality Assurance Facility for validation of HIV Dried Blood Spot Viral Load testing for the US CDC.',
                'Official NABL certificate listings are publicly available on the NABL/QCI portal.',
            ],
            considerations: [
                'Open question: no specifics were found on IVD kit validation studies, CDSCO registration support, or contract validation services offered to diagnostic manufacturers. This needs a direct conversation rather than an inference from the trial credentials.',
                'Accreditation is per-site and per-scope. Confirm the specific assay needed is within the accredited scope at the specific laboratory that will run it.',
                'Suburban Diagnostics is part of the Neuberg group — two of the three laboratories named in the internal deck are one organisation.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Neuberg Diagnostics', url: 'https://neubergdiagnostics.com/' },
                { title: 'Neuberg Global', url: 'https://www.neubergglobal.com/' },
                { title: 'NABL — accredited laboratory certificate listings (QCI portal)', url: 'https://nablwp.qci.org.in/' },
            ],
        },
        {
            slug: 'suburban-diagnostics',
            name: 'Suburban Diagnostics',
            vendor: 'Suburban Diagnostics (part of the Neuberg group)',
            origin: 'Mumbai, India',
            tagline:
                'NABL and CAP accredited Mumbai laboratory network, now within Neuberg — and notably transparent about what falls outside its accredited scope.',
            whatItIs:
                'Suburban Diagnostics is a Mumbai-based diagnostic laboratory network, now part of the Neuberg group. Its laboratories hold NABL and CAP accreditation. NABL is the only government-authorised laboratory accreditation body in India and works to ISO 15189:2012.',
            whyItMatters:
                'Suburban publishes lists of the tests that fall outside the scope of NABL and CAP accreditation at specific laboratories. That transparency is directly useful and rarely offered: it means the accredited scope for a given assay at a given site can be checked before designing a validation study around it, rather than discovered afterwards. It is also a reminder that "NABL accredited laboratory" is not the same statement as "this test is accredited here".',
            keyFacts: [
                'Mumbai-based laboratory network, now part of the Neuberg group.',
                'NABL and CAP accredited.',
                'NABL is the only government-authorised laboratory accreditation body in India, working to ISO 15189:2012.',
                'Publishes explicit lists of tests outside the scope of NABL and CAP accreditation at specific laboratories.',
            ],
            considerations: [
                'Always check the published out-of-scope list for the specific assay and site before relying on accreditation for a validation claim.',
                'Group consolidation with Neuberg means the two are not independent comparator sources for a study requiring genuine independence.',
            ],
            status: 'evaluating',
            sources: [
                { title: 'Suburban Diagnostics', url: 'https://www.suburbandiagnostics.com/' },
                { title: 'Suburban Diagnostics — accreditation', url: 'https://www.suburbandiagnostics.com/accreditation' },
            ],
        },
        {
            slug: 'comparator-study-design',
            name: 'Comparator study design',
            tagline:
                'Choosing the reference method, controlling sample handling, and matching accredited scope to the claim being made.',
            whatItIs:
                'The design decisions that determine whether a validation study supports the claim it is meant to support: which reference method, at which accredited site, with what sample handling between collection and analysis.',
            whyItMatters:
                'A study can be run flawlessly and still fail to support a regulatory claim if the comparator method or the accredited scope is wrong. These are cheap decisions to get right in advance and expensive to correct afterwards, because the correction is another study.',
            keyFacts: [
                'The reference method has to be one a regulator will accept as the comparator for the specific claim, not simply the laboratory\'s routine assay.',
                'Fingerprick capillary blood and venous blood are not interchangeable for all analytes; the comparator design has to account for the sample type the product actually uses.',
                'Time from collection to analysis, transport temperature and tube type all affect the comparator result and must be specified and recorded.',
                'Accredited scope is per-test and per-site — confirm before enrolling, not after.',
            ],
            considerations: [
                'Independent comparator sites are needed where a study design requires independence; group-affiliated laboratories may not satisfy that.',
                'The deck also lists "Jariwalla" in this category. It was not researched in this pass and is recorded as an outstanding item rather than characterised on assumption.',
            ],
            status: 'reference',
            sources: [
                { title: 'NABL — accredited laboratory certificate listings (QCI portal)', url: 'https://nablwp.qci.org.in/' },
                { title: 'Suburban Diagnostics — accreditation', url: 'https://www.suburbandiagnostics.com/accreditation' },
            ],
        },
    ],
}
