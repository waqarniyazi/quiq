import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, Cutout, Divider, Eyebrow, More, ReadMore, SlideTitle, SourceLink, Tag, ACCENT } from './primitives'

const IMG = '/images/research/pipette'

/* ── Slide 3: seven transfer device types ──────────────────────────── */

type Control = 'Manual' | 'Semi' | 'Automatic'

const deviceTypes: {
  name: string
  control: Control
  line: string
  image: string
  highlight?: boolean
  top?: boolean
}[] = [
  { name: 'Squeezable pipette', control: 'Manual', line: 'User controls volume', image: 'squeezable-pipette' },
  { name: 'Inverted cup', control: 'Automatic', line: '5 µL, 170M+ in malaria kits', image: 'inverted-cup', highlight: true },
  { name: 'Calibrated pipette', control: 'Semi', line: 'Fill to the mark', image: 'calibrated-pipette' },
  { name: 'Capillary tube', control: 'Semi', line: 'Users underfill', image: 'capillary-tube' },
  { name: 'Straw', control: 'Manual', line: 'Draw and blow out', image: 'straw' },
  { name: 'Loop', control: 'Manual', line: 'Picks up a droplet', image: 'loop', highlight: true },
  { name: 'Conical cup', control: 'Automatic', line: '~23 µL, 92% vs 74% fill', image: 'conical-cup', highlight: true, top: true },
]

const controlTone: Record<Control, string> = {
  Automatic: ACCENT,
  Semi: 'text-white/70',
  Manual: 'text-white/45',
}

/* ── Slide 4: top contenders ───────────────────────────────────────── */

const contenders: {
  slug: string
  name: string
  maker: string
  image: { src: string; alt: string }
  bullets: string[]
  source: { label: string; href: string }
  tag: string
  tagTone: 'accent' | 'muted'
  highlight?: boolean
  more: string[]
}[] = [
  {
    slug: 'conical-cup',
    name: 'Conical Cup',
    maker: 'FIND',
    image: { src: `${IMG}/conical-cup.webp`, alt: 'FIND conical cup blood transfer device' },
    bullets: ['~23 µL capillary', 'Touch-to-fill'],
    source: { label: 'pmc.ncbi.nlm.nih.gov', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/' },
    tag: 'New',
    tagTone: 'accent',
    highlight: true,
    more: [
      '22.76 µL mean. Filled correctly 92.4% of the time vs 74.2% for a pipette; 79% of users preferred it (Incardona et al., AJTMH 2018).',
      'Not a catalogue part — the paper gives moulder-ready dimensions. Contact: Sandra Incardona, FIND Geneva.',
    ],
  },
  {
    slug: 'unisampler',
    name: 'UniSampler-type',
    maker: 'Affimedix / generics',
    image: { src: `${IMG}/unisampler.webp`, alt: 'UniSampler fixed-volume sampler beside its buffer vial' },
    bullets: ['Fixed volume', 'Locks into vial'],
    source: { label: 'Affimedix', href: 'https://affimedix.com/wp-content/uploads/2022/07/e-Brochure-TestNOW-Testosterone.pdf' },
    tag: 'Launch',
    tagTone: 'accent',
    more: [
      'Already sold in India inside the Spark-D Vitamin D kit: fill the sampler, insert into the buffer vial, shake, dispense 3 drops.',
      'Chinese equivalents: Foshan Yuyang (10 µL + reagent tube) and Jiangsu Kehua (2–50 µL).',
    ],
  },
  {
    slug: 'minivette-poct',
    name: 'Minivette POCT',
    maker: 'Sarstedt',
    image: { src: `${IMG}/minivette-poct.webp`, alt: 'Sarstedt Minivette POCT capillary pipette' },
    bullets: ['10–200 µL', 'Piston + stop filter'],
    source: {
      label: 'sarstedt.com',
      href: 'https://www.sarstedt.com/en/US/c/pre-analytics/capillary-blood-collection/minivette-poct/p/minivette-poct',
    },
    tag: 'Benchmark',
    tagTone: 'muted',
    more: ['Capillary fills to a stop filter; a piston dispenses. Sizes 10 / 20 / 50 / 100 / 200 µL. The quality reference to measure cheaper options against.'],
  },
  {
    slug: 'microsafe',
    name: 'Microsafe',
    maker: 'Safe-Tec',
    image: { src: `${IMG}/microsafe.webp`, alt: 'Safe-Tec Microsafe fixed-volume capillary tube' },
    bullets: ['Fixed volume', 'One-piece, drop-free'],
    source: { label: 'cliawaived.com', href: 'https://www.cliawaived.com/microsafe-capillary-10ul-tubes.html' },
    tag: 'Benchmark',
    tagTone: 'muted',
    more: ['A single part that both collects and dispenses a fixed volume — a second benchmark for one-piece transfer.'],
  },
  {
    slug: 'absorptive-tip-vams',
    name: 'Absorptive tip',
    maker: 'Mitra, Trajan',
    image: { src: `${IMG}/mitra.webp`, alt: 'Mitra volumetric absorptive microsampling tips in clamshell' },
    bullets: ['10–30 µL in 2–4 s'],
    source: { label: 'neoteryx.com', href: 'https://www.neoteryx.com/microsampling-devices' },
    tag: 'New tech',
    tagTone: 'accent',
    more: [
      'Porous polymer tip absorbs a fixed 10 / 20 / 30 µL with under 5% variation — could be used swab-style into the buffer.',
      'Caveat: built for dried lab samples; wet release into buffer is unproven and needs a bench test. Patent flag on a pen-shaped sintered-PE nib (25 µL).',
    ],
  },
]

const buffer = [
  { href: '/research/pipette-buffer/integrated-buffer-blister', label: 'Integrated pre-filled buffer blister', note: 'Buffer volume fixed at manufacture, released by one press.' },
  { href: '/research/pipette-buffer/sparkdx', label: 'SparkDx', note: 'Deck reference — possibly the Spark-D kit that uses UniSampler.' },
  { href: '/research/pipette-buffer/reszon', label: 'Reszon Diagnostics', note: 'Malaysian IVD maker; potential component supplier.' },
]

export default function PipetteShowcase() {
  return (
    <>
      <section className="mb-24">
        <SlideTitle as="h1" lead="Blood Transfer" accent="7 Device Types" />
        <p className="mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
          The problem is user-controlled volume. Our shade card reads colour intensity, so the wrong blood volume
          means the wrong band — the transfer device should take volume out of the user&apos;s hands.
        </p>

        <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {deviceTypes.map((d) => (
            <Card key={d.name} highlight={d.highlight} className="p-5 flex flex-col">
              <Cutout src={`${IMG}/${d.image}.webp`} alt={d.name} className="h-20 w-full mb-5" sizes="(min-width: 1024px) 260px, 45vw" />
              <p className="text-lg font-semibold text-white">
                {d.name}
                {d.top && <span className={`ml-2 text-sm font-bold ${ACCENT}`}>TOP</span>}
              </p>
              <p className={`text-[15px] font-semibold ${controlTone[d.control]}`}>{d.control}</p>
              <p className="text-[15px] text-white/75">{d.line}</p>
            </Card>
          ))}

          <div className="relative flex items-center">
            <ArrowRight className="hidden lg:block absolute -left-7 w-8 h-8 text-amber-400" aria-hidden />
            <Cutout
              src={`${IMG}/conical-cup-diagram.webp`}
              alt="Conical cup: wider side for blood collection, narrower side for blood deposit, long handle"
              className="aspect-[926/554] w-full overflow-hidden rounded-lg"
              sizes="(min-width: 1024px) 280px, 90vw"
            />
          </div>
        </div>
        <Divider className="mt-10" />
        <p className="mt-3 text-xs text-white/35">
          Sources:{' '}
          <SourceLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3041722/">Hopkins et al., Malaria J 2011</SourceLink>
          {' · '}
          <SourceLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6169173/">Incardona et al., AJTMH 2018</SourceLink>
        </p>
      </section>

      <section className="mb-20">
        <SlideTitle lead="Pipette" accent="Top Contenders" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contenders.map((c, i) => (
            <Card key={c.slug} highlight={c.highlight} className="p-5 flex flex-col">
              <p className={`text-sm font-bold ${ACCENT}`}>{String(i + 1).padStart(2, '0')}</p>
              <Link href={`/research/pipette-buffer/${c.slug}`} className="text-lg font-semibold text-white hover:underline underline-offset-4">
                {c.name}
              </Link>
              <p className="mt-3 text-[15px] text-white/45">{c.maker}</p>
              <Cutout src={c.image.src} alt={c.image.alt} className="my-6 h-36 w-full" sizes="(min-width: 1024px) 200px, 45vw" />
              <ul className="space-y-1 text-[15px] text-white/85">
                {c.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <SourceLink href={c.source.href}>{c.source.label}</SourceLink>
                <div className="mt-1">
                  <Tag tone={c.tagTone}>{c.tag}</Tag>
                </div>
                <More>
                  {c.more.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <ReadMore href={`/research/pipette-buffer/${c.slug}`} />
                </More>
              </div>
            </Card>
          ))}
        </div>
        <Divider className="mt-10" />

        <Card className="mt-10 p-6">
          <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${ACCENT}`}>Next</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-[15px] text-white/75 leading-relaxed">
            <li>Email FIND for the conical cup design</li>
            <li>Samples from Foshan Yuyang and Jiangsu Kehua</li>
            <li>Benchmark against Sarstedt Minivette POCT</li>
            <li>Param Care: shade-card tolerance to ±3–5 µL</li>
          </ul>
        </Card>
      </section>

      <section className="mb-4">
        <Eyebrow>Buffer</Eyebrow>
        <ul className="grid gap-4 md:grid-cols-3">
          {buffer.map((b) => (
            <li key={b.href}>
              <Link href={b.href} className="group block">
                <p className="text-[15px] font-semibold text-white/80 group-hover:text-white">{b.label} →</p>
                <p className="mt-1 text-sm text-white/45 leading-relaxed">{b.note}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
