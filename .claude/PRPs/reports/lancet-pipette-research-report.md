# Implementation Report: Lancet + Pipette research pages (21 Sep 2026)

## Summary
Updated /research/lancet and /research/pipette-buffer from `Lancet - Pippete Prompt .md` (Part 1). Extended the shared category route with optional sections (summary box, tables, gallery, next steps, category sources, grouped items, tags, images). Branch `research/lancet-pipette-sep21`, uncommitted.

## Validation
| Check | Result |
|---|---|
| tsc --noEmit | Pass |
| lint | Not runnable — ESLint not installed / no config in repo (pre-existing) |
| Tests | None in repo |
| next build | Pass; 61 item pages (48 + 13 new) |
| Dev server | Both pages + item pages 200, images load, no app console errors (one hydration warning from the ColorZilla browser extension) |
| Mobile 375px | No page overflow; tables scroll in container; cards stack |

## Files
Updated: lib/research/types.ts, app/research/[category]/page.tsx, app/research/[category]/[item]/page.tsx, components/research/item-card.tsx, lib/research/categories/lancet.ts, lib/research/categories/pipette-buffer.ts
Created: components/research/{summary-box,data-table,gallery,image-placeholder,next-steps,tag-list}.tsx, public/images/research/{lancet,pipette}/ (+ SOURCES.md)

## Images
Downloaded (10): 8 SteriLance models, Unistik 3 Extra, Foshan Yuyang sampler.
Placeholders (9): Safe-T-Pro Uno, Safe-T-Pro Plus, Genteel, ERBILITE, ETH suction cup, conical cup, Minivette, Microsafe, Mitra. (Colmed/Sarstedt returned logos; ETH's image is a leech photo, not the device.)

## Deviations
- 7 transfer device types shown as a ranked table, not a 7-card grid (types have no item-level content for detail pages).
- Existing lancet items kept under "Earlier research" (none outdated; nothing removed).
- SparkDx: added a consideration pointing to Spark-D / UniSampler as a possible match; entry otherwise unchanged.
- Pack file not renamed to research-pack.md.

## Not placed
- [NF] items (videos, Genteel official site) intentionally omitted.
- Inverted cup "170M+ used in malaria kits" appears only in the PPTX prompt, not Part 1 — omitted.
