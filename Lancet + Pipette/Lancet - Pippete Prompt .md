# QUIQ | Lancet + Pipette Research Pack | 21 Sep 2026

Three parts:
1. Link directory (product, paper, video, image) for every item
2. Prompt for Claude PPTX (2 lancet slides + 2 pipette slides)
3. Prompt for Claude Code (update quiqhealth.in/research/lancet and /research/pipette-buffer)

Legend: [EST] = estimate, not a quote. [NF] = not found in research, needs manual search.

---

## PART 1: LINK DIRECTORY

### A. LANCET

#### A1. New Tech

**1. Genteel (vacuum-assisted lancing device)**
- What it is: Reusable lancing device. Applies vacuum (plus vibration) so blood comes out without squeezing. FDA-cleared for alternate-site testing. Uses standard square-shaft lancets.
- Product (human, overview): https://blog.providence.org/oregon-news/new-genteel-the-ouch-free-lancet
- Product (pet version, price ref ~$85): https://www.chewy.com/pettest-genteel-painless-dog-cat/dp/382050
- Video (PetTest Genteel demo): https://youtu.be/ACnvtu4jcIM
- Official site: [NF] search "Genteel lancing device official"
- Paper: [NF] no peer-reviewed study found
- QUIQ verdict: Not viable for launch (reusable device, not per-kit). Borrow the idea: no-squeeze blood flow.

**2. Laser lancet: ERBILITE by NSL, Moscow** (note: correct name is ERBILITE, company NSL, not "EBILITE / NCL")
- What it is: Er:YAG laser (2.94 µm) that punches a micro-hole without a needle. 6 depth levels. Clinic device.
- Product (Russian distributor): https://gkvector.com/catalog/laboratornoe-oborudovanie/gematologiya/sistemy-dlya-zabora-krovi/skarifikatory-i-lancety/erbilite/
- Product (alt distributor): https://www.planeta-med.ru/catalog/med/perf/erbi1
- News (founder interview, 6 depth levels, home version in development): https://www.gazeta.ru/science/2018/06/27_a_11817709.shtml
- Paper (laser lancing evidence, LaMeditech LMT-1000, not Erbilite): https://pubmed.ncbi.nlm.nih.gov/34268735/
- Paper (laser vs lancet in diabetes, 75% less pain): https://pmc.ncbi.nlm.nih.gov/articles/PMC9723205/
- Video: [NF] search "Erbilite лазерный перфоратор видео"
- QUIQ verdict: Not viable (capital device, clinic use). Watch-list only.

**3. Leech-style suction cup, ETH Zurich [BEST INNOVATION CANDIDATE]**
- What it is: 2.5 cm silicone suction cup with ~12 steel microneedles inside. Upper arm or back. ~195 µL in animal tests. Biodegradable version in development. Prototype, not for sale. ETH sought partners.
- News (ETH): https://ethz.ch/en/news-and-events/eth-news/news/2024/05/blood-diagnostics-modelled-on-leeches.html
- Paper: Zoratto et al., Advanced Science 2024, DOI 10.1002/advs.202308809 → https://doi.org/10.1002/advs.202308809
- Explainer (partner-seeking quote): https://www.advancedsciencenews.com/a-blood-sampling-device-inspired-by-leeches/
- Industry coverage: https://www.360dx.com/hematologycoagulation/inspired-leeches-eth-zurich-researchers-develop-blood-collection-device
- Video: [NF] search "ETH Zurich leech blood sampling device video"
- Contact: Prof. Jean-Christophe Leroux group (Drug Formulation & Delivery), lead author Nicole Zoratto
- QUIQ verdict: Partnership / licensing candidate for Integrated Pen. Not launch.

#### A2. Lancet Types
| Type | How it fires | Fit | Reference |
|---|---|---|---|
| Pressure / contact-activated | Press on finger, fires automatically | Best for self-test | https://en.sterilance.com/Insights/Pressure-Activated-Safety-Lancets-Vs-Push-Button-Designs-How-To-Compare-Them.html |
| Push-button (top) | Remove tab, press button | Good backup | https://www.mountainside-medical.com/products/safety-lancets-push-button-with-retractable-needle-for-diabetes-testing |
| Side-button | Press side trigger | Least intuitive | Unistik 3 (below) is side-firing |

#### A3. Gauges + Depth guide (for 20-25 µL LFA sample)
| Spec | Pain | Blood | Note |
|---|---|---|---|
| 30G × 1.8 mm | Lowest | May fall short | |
| 28G × 1.8 mm | Low | Balanced | Recommended launch spec |
| 28G × 1.5 mm | Low | Less | |
| 26G × 1.8 mm | Moderate | More | |
| 23G × 1.5-1.8 mm | Moderate | Good | Accu-Chek Safe-T-Pro |
| 21G × 2.0 mm | Higher | High | Unistik 3 Extra |

#### A4. Existing Contenders

**1. Owen Mumford Unistik 3 Extra** | 21G × 2.0 mm | side-firing | Comfort Zone (8 raised dots mask pain)
- Price: ₹11/pc (your figure). UK ref: £12.65 per 100 ex VAT.
- Product: https://dsmedical.co.uk/treatment/needles-lancets/owen-mumford-unistik-3-extra-lancet-box-of-100/
- Spec record (FDA GUDID): https://accessgudid.nlm.nih.gov/devices/00384701012013
- Comfort Zone explainer: https://clpmag.com/miscellaneous/single-use-safety-lancet/
- Video: [NF] search "Unistik 3 how to use Owen Mumford"

**2. Roche Accu-Chek Safe-T-Pro Uno** | pre-set 1.5 mm | push-button | single use
- Price (India): MRP ₹3,000 / 200 = ₹15/pc; online ₹1,850 / 200 = ~₹9/pc; wholesale listing ₹4.85/pc. Working estimate ₹5-9/pc at volume [EST].
- Product (Apollo): https://www.apollopharmacy.in/otc/accu-chek-safe-t-pro-uno
- Product (Colmed, ₹1,850/200): https://www.colmed.in/accu-chek-safe-t-pro-uno-lancing-device-box-of-200.html
- Wholesale (IndiaMART, ₹4.85/pc): https://www.indiamart.com/proddetail/accu-check-safe-t-pro-uno-safety-lancet-24142483062.html
- Video: [NF] search "Accu-Chek Safe-T-Pro Uno how to use"

**3. Roche Accu-Chek Safe-T-Pro Plus (the adjustable one)** | 23G | 3 depths: 1.3 / 1.8 / 2.3 mm | push-button
- Price: US ~$0.36/pc (~₹30); UK £45.74 / 200 ex VAT (~₹27/pc). India estimate ₹15-25/pc [EST].
- Product (US): https://carewell.com/product/accu-chek-safe-t-pro-plus-adjustable-depth-lancet
- Product (UK, depth specs): https://www.midmeds.co.uk/shop/md04547-roche-accu-chek-safe-t-pro-plus-lancets-x-200-67863
- Video: [NF] search "Accu-Chek Safe-T-Pro Plus depth adjustment"

**4. SteriLance (Suzhou, China) {NEW}** | OEM/ODM, ISO 13485, 5-yr sterility | est. ₹3-6/pc at 10-50k [EST]
- Catalogue: https://en.sterilance.com/safety_lancet
- Known specs: Press2 in 30G / 28G / 26G × 1.8 mm; Press in 23G / 28G × 1.8 mm

| Model | Type | Page | Image URL |
|---|---|---|---|
| Press | Pressure-activated | https://en.sterilance.com/safety_lancet/press-model | https://en.sterilance.com/slyl1124/uploads/20230310/d5877e7c02626775f8c495572e35ecd9.jpg |
| Press Plus | Pressure-activated | https://en.sterilance.com/safety_lancet/press-plus | https://en.sterilance.com/slyl1124/uploads/20230918/28d91346a85d7bae5f3da03aa801027e.jpg |
| Impress series | Pressure-activated | https://en.sterilance.com/safety_lancet/impress-series | https://en.sterilance.com/slyl1124/uploads/20230918/20af25558ca5303ec85502679907f3d9.jpg |
| Elite | Button-activated | https://en.sterilance.com/safety_lancet/elite-model | https://en.sterilance.com/uploads/20250418/7a55cbcb27aa88cec9e5f19a8688d576.png |
| Elite Pro | Adjustable depth | https://en.sterilance.com/safety_lancet/elite-pro | https://en.sterilance.com/uploads/20250418/1a0b435756e65d4c2ff5328a869e5e84.png |
| Lite3 | Button-activated | https://en.sterilance.com/safety_lancet/lite3-model | https://en.sterilance.com/slyl1124/uploads/20230310/e146c71c32baa3377a020654dba8195a.jpg |
| Lite4 | Button-activated | https://en.sterilance.com/safety_lancet/275 | https://en.sterilance.com/uploads/20251017/093ad9e80f9368fda113a56ae466aaa1.png |
| Flex3 | Adjustable depth | https://en.sterilance.com/safety_lancet/flex3 | https://en.sterilance.com/slyl1124/uploads/20230310/771f84b4e224eb1959b1f0444fb02885.jpg |

---

### B. PIPETTE

#### B1. Types of blood transfer devices (from your image + conical cup)
| Rank | Type | Volume control | Source |
|---|---|---|---|
| 1 (TOP) | Conical cup (FIND, ~23 µL) | Automatic, capillary | https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/ |
| 2 | Inverted cup (FIND, 5 µL) | Automatic, capillary | https://pmc.ncbi.nlm.nih.gov/articles/PMC3041722/ |
| 3 | Calibrated pipette | Semi (fill to mark) | same (Hopkins 2011) |
| 4 | Capillary tube | Semi, users underfill | same |
| 5 | Loop | Low | same |
| 6 | Straw | Low | same |
| 7 | Squeezable pipette | Manual (user controls) | same |

- Key paper for types: Hopkins et al. 2011, "Blood transfer devices for malaria RDTs", Malaria Journal 10:30 → https://pmc.ncbi.nlm.nih.gov/articles/PMC3041722/
- Conical cup paper: Incardona et al. 2018, AJTMH → https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/ | PDF: https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/pdf/tpmd170716.pdf
- Conical cup key data: 22.76 µL mean; filled correctly 92.4% vs 74.2% pipette; 79% preferred it
- Contact: Sandra Incardona, FIND Geneva (sandra.incardona@finddx.org). Made with Injection 74 (France).

#### B2. Top Contenders

**1. Conical Cup (FIND) {NEW, TOP}** - see above. Not sold as a catalogue item. Moulder-ready dimensions in paper.

**2. Minivette POCT (Sarstedt, Germany)** | 10/20/50/100/200 µL | capillary fills to filter, piston dispenses
- Product: https://www.sarstedt.com/en/US/c/pre-analytics/capillary-blood-collection/minivette-poct/p/minivette-poct
- Catalogue PDF: https://pdf.medicalexpo.com/pdf/sarstedt/minivette-poct/69921-152650.html
- Video: [NF] search "Sarstedt Minivette POCT video"

**3. Microsafe (Safe-Tec, USA)** | one-piece fixed-volume collect + dispense
- Product: https://www.cliawaived.com/microsafe-capillary-10ul-tubes.html
- Video: [NF] search "Microsafe capillary tube Safe-Tec video"

**4. UniSampler (Affimedix, USA) + generic China equivalents** | fixed-volume sampler that locks into buffer vial
- Protocol (Spark D kit: fill UniSampler, insert into buffer vial, shake, 3 drops): https://restore-surgical.co.uk/?p=24378
- Sold in India (Spark Vitamin D Quantitative, pack of 25): https://www.medikabazaar.com/products/spark-vitamin-d-quantitative-test
- Generic (Foshan Yuyang, 10 µL + reagent tube): https://yuyang-bio.en.made-in-china.com/product/nEXpZSgTszka/China-Micro-Fixed-Volume-Peripheral-Blood-Sample-Collector-10UL-for-Sample-Collection-with-Reagent-Tube.html
- Generic (Jiangsu Kehua, 2-50 µL range): https://jskehua.en.made-in-china.com/
- Video: your screenshot is from "Spark-D Vitamin D Quantitative Test Demo Video" [link NF, search that exact title on YouTube]

**5. Absorptive Tip / VAMS (Mitra by Trajan) {NEW, NEW TECH}** | hydrophilic porous polymer tip, 10/20/30 µL, <5% RSD
- Product (VWR): https://b2b-si.vwr.com/store/product/45262978/mitra-microsamplers-clamshell-format
- Product overview: https://lcms.labrulez.com/products/1282
- Spec sheet: https://lcms.labrulez.com/paper/27988
- Material maker (Porex, sample collection): https://www.porex.com/life-sciences/diagnostics/sample-collection/
- Review paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC9821248/
- Patent flag (pen-shaped sintered PE nib, 25 µL): https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9696241
- Caveat: built for dried lab samples. Wet release into buffer is unproven. Needs bench test.

---

## PART 2: PROMPT FOR CLAUDE PPTX

Copy everything between the lines into Claude (with the pptx skill / PowerPoint). Attach this whole file too, so it has the links.

---------------------------------------------------------------
You are building 4 slides for QUIQ (Santa Clara Wellness Pvt. Ltd., Mumbai), an Indian at-home rapid diagnostic self-test brand targeting a ₹99 price point. Audience: internal leadership (Chairman, CEO, R&D, sourcing). Purpose: show today's research on (A) lancets and (B) blood transfer pipettes, and what is viable for launch.

DESIGN
- Match QUIQ's existing partnership deck: near-black background (#0A0A0A), white text, red accent (#E31B23). Bold condensed headline font (Impact / Oswald / Bebas style), clean sans body (Calibri / Inter).
- Small red spaced-caps eyebrow above each title (e.g. "R E S E A R C H · L A N C E T").
- 16:9. Page numbers "xx / 04" top right. Footer: "QUIQ · Santa Clara Wellness Pvt. Ltd. · Mumbai, India".
- Mark launch-viable items with a red "LAUNCH" tag, future tech with a grey "WATCH" tag, and the best innovation candidate with a red outline.
- Use product images where I give URLs. If you cannot fetch an image, insert a neat grey placeholder box labelled with the product name. Never invent images.
- Keep text short. Max ~40 words of body text per card.

SLIDE 1 | LANCET: NEW TECH + TYPES
Title: "Lancet: What's New, What Works"
Left half, 3 cards "New Tech":
1. Genteel (USA): vacuum + vibration lancing device, no squeezing, FDA-cleared for alternate sites. Reusable device. Tag: WATCH.
2. ERBILITE laser (NSL, Moscow): Er:YAG laser, needle-free, 6 depth levels. Clinic device. Tag: WATCH.
3. Leech-style suction cup (ETH Zurich): silicone cup + ~12 microneedles, upper arm, ~195 µL (animal data), biodegradable version coming. ETH seeking partners. Tag: BEST INNOVATION CANDIDATE (red outline).
Right half, "Lancet Types" 3-row table: Pressure/contact-activated (fires on contact, best for self-test, LAUNCH) | Push-button (remove tab + press, good backup) | Side-button (least intuitive).
Bottom strip: "Key finding: depth drives pain more than needle gauge. 28G × 1.8 mm pressure-activated is our launch spec."

SLIDE 2 | LANCET: LAUNCH CONTENDERS
Title: "Lancet: Launch Contenders"
Top: small gauge/depth ladder graphic: 30G×1.8 (lowest pain) → 28G×1.8 (balanced, RECOMMENDED) → 26G×1.8 → 23G → 21G×2.0 (most blood).
Main: comparison table, 4 columns:
| | Unistik 3 Extra | Accu-Chek Safe-T-Pro Uno | Accu-Chek Safe-T-Pro Plus | SteriLance (NEW) |
| Maker | Owen Mumford, UK | Roche | Roche | SteriLance, China (OEM) |
| Gauge × depth | 21G × 2.0 mm | pre-set 1.5 mm | 23G, 1.3/1.8/2.3 mm | 23-30G × 1.8 mm |
| Activation | Side button | Push button | Push button, adjustable | Pressure + button models |
| Standout | Comfort Zone dots mask pain | India availability | 3 depths in one SKU | QUIQ branding, lowest cost |
| Est. price/pc | ₹11 | ₹5-9 (est.) | ₹15-25 (est.) | ₹3-6 (est.) |
Under SteriLance, a strip of small model thumbnails: Press, Press Plus, Impress, Elite, Elite Pro, Lite3, Lite4, Flex3 (image URLs in attached file, Part 1, A4).
Footnote: "est. = estimate pending supplier quotes."
Bottom strip, "Next": samples of 26G/28G/30G × 1.8 mm, 20-person prick test (pain score + sampler fill), quotes at 10k/50k.

SLIDE 3 | PIPETTE: TRANSFER DEVICE TYPES
Title: "Blood Transfer: 7 Device Types"
Grid of 7 cards with simple line illustrations (draw clean vector shapes if no image): Conical cup (TOP, red outline, "~23 µL, fills by itself, 92% correct fill vs 74% pipette, 79% preferred"), Inverted cup (5 µL, 170M+ used in malaria kits), Calibrated pipette, Capillary tube, Loop, Straw, Squeezable pipette.
Each card: one line on volume control: Automatic / Semi / Manual.
Bottom strip: "Why it matters: our LRSQ shade card reads colour intensity, so wrong blood volume = wrong band. Remove user control of volume."
Source line: Hopkins et al., Malaria J 2011; Incardona et al., AJTMH 2018.

SLIDE 4 | PIPETTE: TOP CONTENDERS
Title: "Pipette: Top Contenders"
5 cards in a row, ranked:
1. Conical Cup (FIND): capillary, ~23 µL, touch-to-fill, touch-to-deposit. Cheap moulded part. Tag: LAUNCH (via moulder). NEW.
2. UniSampler-type (Affimedix / China generics): fixed-volume sampler locks into buffer vial. Already sold in India in Spark-D kit. Tag: LAUNCH.
3. Minivette POCT (Sarstedt): capillary + stop filter + piston, 10-200 µL. Tag: BENCHMARK.
4. Microsafe (Safe-Tec): one-piece fixed volume, drop-free. Tag: BENCHMARK.
5. Absorptive tip / VAMS (Mitra, Trajan): porous tip absorbs fixed 10-30 µL in 2-4 s, <5% variation. Swab-style into buffer. Tag: WATCH, NEW TECH. Caveat: wet release unproven.
Bottom strip, "Next": FIND email for conical cup design, Yuyang + Kehua samples, Minivette benchmark, Param Care: shade-card tolerance to ±3-5 µL.

Deliver as a .pptx file. Keep all numbers exactly as given. Do not add claims I haven't provided.
---------------------------------------------------------------

---

## PART 3: PROMPT FOR CLAUDE CODE

Copy everything between the lines into Claude Code, run from the root of the quiqhealth.in website repo. Put this file in the repo root as `research-pack.md` first.

---------------------------------------------------------------
Task: Significantly update two research knowledge-base pages on quiqhealth.in:
- /research/lancet
- /research/pipette-buffer

Source of truth for all new content, numbers and links: `research-pack.md` in the repo root (Part 1). Do not invent facts, prices or links. Anything marked [EST] must display as "estimate". Anything marked [NF] must NOT be shown as a link.

STEP 1: Understand before editing
1. Find the files/routes that render /research/lancet and /research/pipette-buffer (check app/, pages/, src/, content/, CMS or MDX folders). Report the paths.
2. Read both pages fully. Note existing sections, components (cards, tables, callouts), styling system and image handling.
3. List what already exists vs what research-pack.md adds. Show me this gap list and your planned section outline for each page before writing code. Wait for my OK.

STEP 2: Images
1. Create `public/images/research/lancet/` and `public/images/research/pipette/` (or the repo's equivalent image folder).
2. Download the SteriLance model images from the URLs in Part 1 A4. Save as `sterilance-<model>.jpg/png`.
3. For other products (Unistik 3, Safe-T-Pro Uno/Plus, Genteel, Erbilite, ETH device, Minivette, Microsafe, Mitra, UniSampler, conical cup), try to fetch the main product image from the product pages listed. Save with clear names. If a download fails or licensing is unclear, use a styled placeholder component with the product name, and list those in your final report.
4. Optimise images (max 1200 px wide, WebP if the repo supports it). Add descriptive alt text.
5. Create a `SOURCES.md` in each image folder recording the source URL of every image.

STEP 3: Lancet page (/research/lancet), target structure
1. Summary box: launch recommendation = 28G × 1.8 mm pressure-activated safety lancet + IFU steps (warm hands, arm down, side of fingertip, press from palm). Key finding: depth drives pain more than gauge.
2. New Tech (3 cards): Genteel, ERBILITE (NSL, Moscow; note correct spelling), ETH leech-style suction cup (highlight as Best Innovation Candidate). Each card: what it is, status, QUIQ verdict, links (product / paper / video where available).
3. Lancet Types table: pressure/contact-activated, push-button, side-button.
4. Gauge + Depth table (Part 1 A3).
5. Launch Contenders comparison table: Unistik 3 Extra, Safe-T-Pro Uno, Safe-T-Pro Plus, SteriLance. Include price column with "estimate" labels.
6. SteriLance model gallery (8 models, image + type + link).
7. Next Steps checklist.
8. Sources section: all papers and product links from Part 1 A.
Keep any existing content that is still accurate. Merge, don't duplicate. Move outdated content to an "Earlier notes" collapsible if the component exists, otherwise remove it and tell me what you removed.

STEP 4: Pipette page (/research/pipette-buffer), target structure
1. Summary box: problem is user-controlled volume, not suction. Shade card reads intensity, so volume errors = wrong band. Launch direction: fixed-volume capillary collector (conical-cup or UniSampler style).
2. Transfer Device Types: 7-card grid with conical cup ranked #1 (Part 1 B1 table + key data).
3. Top Contenders: 5 cards (conical cup, Minivette, Microsafe, UniSampler + China generics, Mitra/absorptive tip). Mark NEW on conical cup and absorptive tip; mark absorptive tip as New Tech with the wet-release caveat and patent flag.
4. Keep ALL existing buffer-related content on this page intact (the page covers pipette AND buffer). Only restructure around it.
5. Next Steps + Sources sections.

STEP 5: Quality checks
1. Match existing page styling and components. No new UI library unless the repo already uses it.
2. All external links open in a new tab with rel="noopener noreferrer".
3. Mobile check: tables scroll horizontally inside their container, cards stack.
4. Run the project's lint and build commands. Fix errors.
5. Run the dev server, open both pages, confirm images load and no console errors.

STEP 6: Report back
- Files changed
- Images downloaded vs placeholders used
- Anything from research-pack.md you could not place
- Do not commit or push until I approve. Create a branch `research/lancet-pipette-sep21`.
---------------------------------------------------------------
