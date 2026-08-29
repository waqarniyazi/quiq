import type { ResearchCategory, ResearchItem } from './types'

import { testStrip } from './categories/test-strip'
import { testDesign } from './categories/test-design'
import { testCassette } from './categories/test-cassette'
import { conjugate } from './categories/conjugate'
import { lancet } from './categories/lancet'
import { pipetteBuffer } from './categories/pipette-buffer'
import { swabs } from './categories/swabs'
import { reader } from './categories/reader'
import { selfTestPlayers } from './categories/self-test-players'
import { b2bMarketplace } from './categories/b2b-marketplace'
import { cdmoCro } from './categories/cdmo-cro'
import { rapidPrototyping } from './categories/rapid-prototyping'
import { researchOrganisations } from './categories/research-organisations'
import { testingLabs } from './categories/testing-labs'
import { packagingDesign } from './categories/packaging-design'
import { testTiming } from './categories/test-timing'
import { b2cChannels } from './categories/b2c-channels'
import { lancingEfficacy } from './categories/lancing-efficacy'

/**
 * The 18 key areas, in deck order. Each lives in its own file under
 * `categories/` so an area can be edited without touching the rest.
 */
export const researchCategories: ResearchCategory[] = [
    testStrip,
    testDesign,
    testCassette,
    conjugate,
    lancet,
    pipetteBuffer,
    swabs,
    reader,
    selfTestPlayers,
    b2bMarketplace,
    cdmoCro,
    rapidPrototyping,
    researchOrganisations,
    testingLabs,
    packagingDesign,
    testTiming,
    b2cChannels,
    lancingEfficacy,
]

export function getCategory(slug: string): ResearchCategory | undefined {
    return researchCategories.find((category) => category.slug === slug)
}

export function getItem(
    categorySlug: string,
    itemSlug: string
): { category: ResearchCategory; item: ResearchItem } | undefined {
    const category = getCategory(categorySlug)
    if (!category) return undefined

    const item = category.items.find((entry) => entry.slug === itemSlug)
    if (!item) return undefined

    return { category, item }
}

/** Previous and next item within the same category, for detail-page navigation. */
export function getItemNeighbours(
    category: ResearchCategory,
    itemSlug: string
): { previous?: ResearchItem; next?: ResearchItem } {
    const index = category.items.findIndex((entry) => entry.slug === itemSlug)
    if (index === -1) return {}

    return {
        previous: index > 0 ? category.items[index - 1] : undefined,
        next: index < category.items.length - 1 ? category.items[index + 1] : undefined,
    }
}

export const totalResearchItems = researchCategories.reduce(
    (count, category) => count + category.items.length,
    0
)

export type { ResearchCategory, ResearchItem }
