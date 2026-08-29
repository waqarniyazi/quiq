import { Pipette } from 'lucide-react'
import type { ResearchCategory } from '../types'

export const pipetteBuffer: ResearchCategory = {
    slug: 'pipette-buffer',
    number: 6,
    title: 'Pipette + Buffer',
    icon: Pipette,
    summary:
        'How sample and running buffer actually reach the strip. The most under-designed part of most kits, and the source of most invalid results.',
    deepDive:
        'In a conventional kit the user pricks a finger, fills a capillary tube or squeezes a plastic pipette, transfers the drop to a sample well, then counts drops of buffer from a separate vial. Three quantities have to be right — blood volume, buffer volume, and their order — and none of them is enforced by the hardware. Integrated designs remove the decision: buffer is pre-filled in a blister with a frangible seal, released by a single press once sample is loaded, so the volume is fixed at manufacture rather than counted by the user. This is the same insight that drives integrated test design, applied to the fluid path specifically. It also has a shelf-life dimension — a pre-filled liquid blister must not lose water to the surrounding foil pouch or dry out over two years on a shelf.',
    items: [
        {
            slug: 'integrated-buffer-blister',
            name: 'Integrated pre-filled buffer blister',
            tagline:
                'Buffer volume fixed at manufacture and released by one press, instead of drops counted by the user.',
            whatItIs:
                'A sealed blister of running buffer built into the device, closed by a frangible seal that ruptures under thumb pressure and delivers a metered volume onto the conjugate pad. The user performs one action; the volume is a manufacturing parameter, not a user decision.',
            whyItMatters:
                'Buffer volume is the variable that most directly determines whether a strip runs correctly. Too little and the front stalls before reaching the control line; too much and the sample is diluted below the limit of detection. Fixing it in hardware is why integrated devices show over 90% fewer blood delivery errors than multi-component kits in untrained hands — the volume error mode is engineered out rather than instructed against.',
            keyFacts: [
                'Volume is set by blister fill during manufacture, removing drop-counting from the user workflow.',
                'Frangible seal opens under a defined force, giving a consistent release event.',
                'Reduces the kit from five loose components to one device, cutting both packaging volume and instruction complexity.',
                'Commercially proven — the approach is central to the Atomo Elion/Pascal platform (see Test Design).',
            ],
            considerations: [
                'Long-term liquid containment is the hard part: the blister must not lose water vapour across a two-year shelf life while sharing a pouch with a desiccant that is actively trying to dry everything.',
                'Blister tooling and fill-seal equipment is a capital commitment; not a change to make late.',
                'Actuation force has to work for elderly and arthritic users without opening in transit.',
            ],
            status: 'shortlisted',
            sources: [
                { title: 'Atomo Diagnostics — integrated device technology', url: 'https://www.atomodiagnostics.com/our-technology/' },
                {
                    title: 'StabilityHub — Desiccant impact on stability',
                    url: 'https://stabilityhub.com/2023/12/02/desiccant-impact-on-stability/',
                },
            ],
        },
        {
            slug: 'sparkdx',
            name: 'SparkDx',
            tagline:
                'Named internally as an integrated pipette-and-buffer approach — vendor details not independently verified.',
            whatItIs:
                'Listed in the internal QUIQ deck under integrated pipette and buffer solutions. Web research did not return a verifiable manufacturer profile, product specification or regulatory listing that could be cited with confidence.',
            whyItMatters:
                'Recorded here so the reference from the deck is not lost, and so the next person to research it starts from a known gap rather than repeating the same search. The underlying concept — integrated sample and buffer delivery — is covered by the integrated buffer blister entry above.',
            keyFacts: [],
            considerations: [
                'Open question: confirm the correct company name and spelling from the original source of the deck before this entry is cited externally.',
                'No sources are listed deliberately — nothing verifiable was found, and plausible-sounding detail has not been invented.',
            ],
            status: 'evaluating',
            sources: [],
        },
        {
            slug: 'reszon',
            name: 'Reszon Diagnostics',
            vendor: 'Reszon Diagnostics International',
            origin: 'Malaysia',
            tagline:
                'Malaysian IVD manufacturer producing rapid test kits and associated consumables for regional markets.',
            whatItIs:
                'Reszon Diagnostics International is a Malaysia-based in vitro diagnostics manufacturer producing rapid test kits, notably in infectious disease, for South-East Asian and export markets. In the internal deck it appears as a source of pipette and buffer componentry alongside finished assays.',
            whyItMatters:
                'Regional IVD manufacturers matter to QUIQ for two reasons: they are potential component suppliers at cost structures closer to India\'s than European suppliers offer, and they are a comparison point for what a mid-size Asian IVD operation looks like in terms of certification and product range.',
            keyFacts: [
                'Malaysia-based in vitro diagnostic manufacturer with a rapid-test product line.',
                'Operates in the South-East Asian regional market, a comparable regulatory and price environment to India.',
            ],
            considerations: [
                'Detailed product specifications, certification scope and component-supply capability were not confirmed in public sources during this pass — treat the profile above as outline only.',
                'Next step: request a current product catalogue and certification pack directly rather than relying on web sources.',
            ],
            status: 'evaluating',
            sources: [{ title: 'Reszon Diagnostics International', url: 'https://www.reszon.com/' }],
        },
    ],
}
