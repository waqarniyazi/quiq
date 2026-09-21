import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, Cutout, Divider, Eyebrow, More, ReadMore, SlideTitle, SourceLink, Tag, ACCENT } from './primitives'

const IMG = '/images/research/lancet'

/* ── Slide 1: New tech ─────────────────────────────────────────────── */

const newTech = [
  {
    slug: 'genteel',
    name: 'Genteel',
    nameHref: 'https://mygenteel.com/collections/lancing-devices/products/genteel-exclusive-personal-lancing-device',
    origin: 'USA',
    line: 'Vacuum + vibration, no squeezing. FDA-cleared, reusable.',
    tag: 'Watch',
    tagHref: 'https://www.youtube.com/watch?v=ACnvtu4jcIM',
    research: 'https://www.sciencedirect.com/science/article/abs/pii/S1871402123000279',
    image: { src: `${IMG}/genteel.webp`, alt: 'Genteel vacuum-assisted lancing device' },
    more: [
      'Applies vacuum at the puncture site so blood flows without the user squeezing the finger. Cleared for alternate-site testing and uses standard square-shaft lancets.',
      'Not viable for launch — it is a reusable device, not a per-kit part. The idea worth borrowing is no-squeeze blood flow.',
    ],
  },
  {
    slug: 'erbilite-laser',
    name: 'ERBILITE laser',
    origin: 'NSL, Moscow',
    line: 'Laser lances the finger. Needle-free, 6 depth levels. Clinic device.',
    tag: 'Watch',
    tagHref: 'https://www.youtube.com/watch?v=0I1n0MIpg-c',
    image: { src: `${IMG}/erbilite.webp`, alt: 'ERBILITE handheld laser lancing device' },
    more: [
      'An Er:YAG laser (2.94 µm) that opens a micro-hole in the skin instead of using a needle. The founder has said a home version is in development.',
      'Separate studies of laser lancing report substantially less pain than a lancet. A capital, clinic-use device — on the watch list only.',
    ],
  },
  {
    slug: 'eth-leech-suction-cup',
    name: 'Leech-style suction cup',
    origin: 'ETH Zurich',
    line: 'Suction + ~12 microneedles, ~195 µL (animal). Seeking partners.',
    tag: 'Innovation candidate',
    research: 'https://advanced.onlinelibrary.wiley.com/doi/epdf/10.1002/advs.202308809',
    image: { src: `${IMG}/eth-cup-strip.webp`, alt: 'ETH Zurich suction cup depositing blood onto a test cassette' },
    highlight: true,
    more: [
      'A 2.5 cm silicone cup worn on the upper arm or back. Prototype only; a biodegradable version is in development (Zoratto et al., Advanced Science 2024).',
      'A partnership or licensing candidate for a future QUIQ Integrated Pen — not a launch part. Contact: Prof. Jean-Christophe Leroux group, ETH Zurich.',
    ],
  },
]

const lancetTypes = [
  { name: 'Pressure-activated', line: 'Press on finger — fires automatically', image: `${IMG}/type-pressure.webp` },
  { name: 'Push-button', line: 'Remove tab, press button', image: `${IMG}/type-push-button.webp` },
  { name: 'Side-button', line: 'Press side trigger — least intuitive', image: `${IMG}/type-side-button.webp` },
]

/* ── Slide 2: Top contenders ───────────────────────────────────────── */

const gauges = [
  { label: '30G × 1.8', note: 'lowest pain' },
  { label: '28G × 1.8', recommended: true },
  { label: '26G × 1.8' },
  { label: '23G' },
  { label: '21G × 2.0', note: 'most blood' },
]

const contenders = [
  {
    slug: 'unistik-3-extra',
    name: 'Unistik 3 Extra',
    maker: 'Owen Mumford, UK',
    site: { label: 'dsmedical.co.uk', href: 'https://dsmedical.co.uk/treatment/needles-lancets/owen-mumford-unistik-3-extra-lancet-box-of-100/' },
    gauge: '21G × 2.0 mm',
    activation: 'Side button',
    price: '₹11',
    image: { src: `${IMG}/type-side-button.webp`, alt: 'Owen Mumford Unistik 3 Extra side-firing safety lancet' },
  },
  {
    slug: 'accu-chek-safe-t-pro-uno',
    name: 'Accu-Chek Safe-T-Pro Uno',
    maker: 'Roche',
    site: { label: 'apollopharmacy.in', href: 'https://www.apollopharmacy.in/otc/accu-chek-safe-t-pro-uno' },
    gauge: 'pre-set 1.5 mm',
    activation: 'Push button',
    price: '₹5–9 (est.)',
    image: { src: `${IMG}/type-push-button.webp`, alt: 'Roche Accu-Chek Safe-T-Pro Uno push-button safety lancet' },
  },
  {
    slug: 'accu-chek-safe-t-pro-plus',
    name: 'Accu-Chek Safe-T-Pro Plus',
    maker: 'Roche',
    site: { label: 'midmeds.co.uk', href: 'https://www.midmeds.co.uk/shop/md04547-roche-accu-chek-safe-t-pro-plus-lancets-x-200-67863' },
    gauge: '23G, 1.3 / 1.8 / 2.3 mm',
    activation: 'Push button, adjustable',
    price: '₹15–25 (est.)',
    image: { src: `${IMG}/safe-t-pro-plus.webp`, alt: 'Roche Accu-Chek Safe-T-Pro Plus adjustable-depth lancet' },
  },
  {
    slug: 'sterilance',
    name: 'SteriLance',
    isNew: true,
    maker: 'SteriLance, China (OEM)',
    site: { label: 'en.sterilance.com', href: 'https://en.sterilance.com/safety_lancet' },
    gauge: '23–30G × 1.8 mm',
    activation: 'Pressure + button',
    price: '₹3–6 (est.)',
    image: { src: `${IMG}/sterilance.webp`, alt: 'Row of colour-coded SteriLance safety lancets' },
  },
]

const rows: { label: string; render: (c: (typeof contenders)[number]) => React.ReactNode }[] = [
  {
    label: 'Maker',
    render: (c) => (
      <>
        <span className="block text-white/55">{c.maker}</span>
        <SourceLink href={c.site.href}>{c.site.label}</SourceLink>
      </>
    ),
  },
  { label: 'Gauge × depth', render: (c) => c.gauge },
  { label: 'Activation', render: (c) => c.activation },
  { label: 'Est. price/pc', render: (c) => c.price },
]

const earlier = [
  { href: '/research/lancet/tasso', label: 'Tasso upper-arm collectors' },
  { href: '/research/lancet/microneedle-arrays', label: 'Microneedle array collectors' },
  { href: '/research/lancet/colour-coded-gauge', label: 'Colour-coded lancets by gauge' },
  { href: '/research/lancing-efficacy', label: 'Efficacy of the lancing process — depth vs gauge evidence' },
]

export default function LancetShowcase() {
  return (
    <>
      {/* Slide 1 */}
      <section className="mb-24">
        <SlideTitle as="h1" lead="Lancet" accent="Research" />
        <p className="mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
          The one part of the kit that hurts. Depth drives pain more than needle gauge — so our launch lancet is
          chosen for the shallowest puncture that still fills the sampler.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <Eyebrow>New tech</Eyebrow>
            <div className="space-y-5">
              {newTech.map((t) => (
                <Card key={t.slug} highlight={t.highlight} className="p-5 md:p-6">
                  <div className="flex gap-5">
                    <Cutout src={t.image.src} alt={t.image.alt} className="w-24 h-24 md:w-36 md:h-28 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {t.nameHref ? (
                          <a
                            href={t.nameHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}{' '}
                        <span className="font-normal text-white/45">({t.origin})</span>
                      </h3>
                      <p className="mt-2 text-[15px] text-white/80 leading-snug">{t.line}</p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                        <Tag href={t.tagHref}>{t.tag}</Tag>
                        {t.research && <SourceLink href={t.research}>Product Rsrch</SourceLink>}
                      </div>
                      <More>
                        {t.more.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                        <ReadMore href={`/research/lancet/${t.slug}`} />
                      </More>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Lancet types</Eyebrow>
            <ul className="divide-y divide-white/10">
              {lancetTypes.map((t) => (
                <li key={t.name} className="flex items-center gap-6 py-4">
                  <Cutout src={t.image} alt={`${t.name} safety lancet`} className="w-14 h-20 flex-shrink-0" sizes="56px" />
                  <div>
                    <p className="text-lg font-semibold text-white">{t.name}</p>
                    <p className="text-[15px] text-white/65">{t.line}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3">
              <ArrowRight className="hidden lg:block w-8 h-8 mt-24 -ml-12 flex-shrink-0 text-amber-400" aria-hidden />
              <Card highlight className="flex-1 p-4 md:p-5">
                <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${ACCENT}`}>
                  How the ETH suction cup works
                </p>
                <div className="relative">
                  <Cutout
                    src={`${IMG}/eth-cup-explainer.webp`}
                    alt="ETH suction cup worn on the upper arm; cutaway showing microneedles inside the suction cup drawing capillary blood, then depositing it on a test cassette"
                    className="aspect-[1508/1020] w-full"
                    sizes="(min-width: 1024px) 480px, 90vw"
                  />
                  <span className="absolute left-[64%] top-[20%] text-sm md:text-base text-white">Microneedles</span>
                  <span className="absolute left-[40%] top-[41%] text-sm md:text-base text-white">Suction Cup</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 */}
      <section className="mb-20">
        <SlideTitle lead="Lancet" accent="Top Contenders" />

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {gauges.map((g) => (
            <div key={g.label} className="text-center">
              <div
                className={`rounded-md border py-2.5 text-base md:text-lg font-bold text-white ${
                  g.recommended ? 'border-white bg-white/[0.06]' : 'border-white/10 bg-[#141414]'
                }`}
              >
                {g.label}
              </div>
              <p className="mt-1.5 h-5 text-sm text-white/45">{g.note ?? (g.recommended ? 'our launch spec' : '')}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 -mx-4 px-4 overflow-x-auto sm:mx-0 sm:px-0">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr>
                <th className="w-40" />
                {contenders.map((c) => (
                  <th key={c.slug} scope="col" className="pb-4 pr-4 align-bottom text-lg font-bold leading-snug">
                    <Link
                      href={`/research/lancet/${c.slug}`}
                      className={`${c.isNew ? ACCENT : 'text-white'} hover:underline underline-offset-4`}
                    >
                      {c.name}
                    </Link>
                    {c.isNew && <span className={`ml-2 ${ACCENT}`}>NEW</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {rows.map((row, i) => (
                <tr key={row.label} className={i === 0 ? 'border-b border-white/10' : ''}>
                  <th scope="row" className="py-3 pr-4 align-top font-semibold text-white/45">
                    {row.label}
                  </th>
                  {contenders.map((c) => (
                    <td key={c.slug} className="py-3 pr-4 align-top text-white/85">
                      {row.render(c)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-white/10">
                <th scope="row" className="pt-4 pr-4 align-top font-semibold text-white/45">
                  Product photo
                </th>
                {contenders.map((c) => (
                  <td key={c.slug} className="pt-4 pr-4">
                    <Cutout src={c.image.src} alt={c.image.alt} className="h-44 w-full" sizes="220px" />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <Divider className="mt-6" />
        <p className="mt-3 text-xs text-white/35">est. = estimate pending supplier quotes. ₹11 is an internal figure.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${ACCENT}`}>Launch recommendation</p>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
              28G × 1.8 mm pressure-activated safety lancet — balanced pain and blood for a 20–25 µL lateral flow
              sample.
            </p>
            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              Instructions: warm hands, arm down, prick the side of the fingertip, press from the palm towards the
              fingertip.
            </p>
          </Card>
          <Card className="p-6">
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${ACCENT}`}>Next</p>
            <ul className="mt-3 space-y-2 text-[15px] text-white/75 leading-relaxed">
              <li>Samples of 26G / 28G / 30G × 1.8 mm</li>
              <li>20-person prick test — pain score + sampler fill</li>
              <li>Supplier quotes at 10k / 50k units</li>
            </ul>
          </Card>
        </div>

        <More summary="Pricing detail and SteriLance range">
          <p>
            Safe-T-Pro Uno in India: MRP ₹3,000 / 200 (₹15/pc), online ₹1,850 / 200 (~₹9/pc), wholesale listing
            ₹4.85/pc. Safe-T-Pro Plus: US ~$0.36/pc, UK £45.74 / 200 ex VAT. Unistik 3 Extra UK reference: £12.65 /
            100 ex VAT.
          </p>
          <p>
            SteriLance is an ISO 13485 OEM/ODM maker with 5-year sterility. Pressure-activated models: Press, Press
            Plus, Impress. Button: Elite, Lite3, Lite4. Adjustable depth: Elite Pro, Flex3. Press2 comes in 30G / 28G
            / 26G × 1.8 mm.
          </p>
        </More>
      </section>

      <section className="mb-4">
        <Eyebrow>Earlier research</Eyebrow>
        <ul className="grid gap-2 sm:grid-cols-2">
          {earlier.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="text-[15px] text-white/60 hover:text-white transition-colors">
                {e.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
