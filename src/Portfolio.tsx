import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const topics = [
  { name: 'Flutter', dot: 'bg-blue-500' },
  { name: 'AI in production', dot: 'bg-purple-500' },
  { name: 'Scale', dot: 'bg-emerald-500' },
  { name: 'Architecture', dot: 'bg-amber-500' },
]

const proof = [
  { value: '90M', label: 'users on the app I re-architected' },
  { value: '1M', label: 'lines of code deleted at ELSA' },
  { value: '4', label: 'surfaces shipped solo, app to store listing' },
]

type ProjectImage = {
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
  flex?: number
}

type Metric = { value: string; label: string }

type CaseStudy = {
  title: string
  meta: string
  url?: string
  urlLabel?: string
  image?: string
  imageFit?: 'cover' | 'contain'
  images?: ProjectImage[]
  aspect?: string
  problem: string
  built: string
  metrics: Metric[]
  stack: string[]
  readMore?: { label: string; to: string }
}

const caseStudies: CaseStudy[] = [
  {
    title: 'ELSA Speak',
    meta: 'English pronunciation · 90M users',
    url: 'https://elsaspeak.com',
    urlLabel: 'elsaspeak.com',
    images: [
      { src: '/images/elsa-web.jpg', alt: 'ELSA on web', fit: 'cover', flex: 1.4 },
      { src: '/images/elsa-mobile.png', alt: 'ELSA on mobile', fit: 'contain', flex: 0.6 },
    ],
    problem:
      'The app was two apps in one binary: a ten-year-old native app and a newer AI-driven one, stitched together through bridges nobody owned. A server decided at login which one you got. The migration between them had been 30% done for two years, and the same bridge error hit the crash dashboard every single day.',
    built:
      'I unified it into a single Flutter codebase across iOS, Android and Web, then deleted the native shells outright. I also shipped four of the six core learning games with Lottie and Rive, and integrated the client against the speech-analysis service and the realtime game protocol.',
    metrics: [
      { value: '3.6s → 976ms', label: 'iOS cold start, down 73%' },
      { value: '−30%', label: 'install size, both platforms' },
      { value: '2.5h → 3min', label: 'clean build' },
      { value: '30min → <10', label: 'CI' },
    ],
    stack: ['Flutter', 'Bloc', 'go_router', 'Lottie', 'Rive', 'Flutter Web', 'Sentry', 'Amplitude'],
    readMore: { label: 'Read the full story', to: '/blog/90-million-users-deserve-a-better-app' },
  },
  /* MaiSay is temporarily hidden from the site. Uncomment this entry to restore it.
     Commented out rather than filtered so the copy does not ship in the JS bundle. */
  /*
  {
    title: 'MaiSay',
    meta: 'Mandarin speaking app · in development',
    problem:
      'Learning apps test everything except the thing people actually want: whether you can say it. Scoring a spoken syllable means grading its initial, final and tone separately, and doing it without telling a Vietnamese learner they are wrong when a teacher would have accepted them.',
    built:
      'I built the pronunciation scorer as its own service, separate from the API so a model restart never takes the app down. I picked an INT8-quantized Conformer/CTC model, benchmarked it before designing around it, and put it behind an interface with a deterministic mock so nothing else in the codebase talks to a model. Then I designed the rater corpus that decides where the score thresholds actually sit.',
    metrics: [
      { value: '0.018', label: 'CPU-seconds per utterance, measured' },
      { value: '~10×', label: 'cheaper than the cost model assumed' },
      { value: '3', label: 'scores per syllable: initial, final, tone' },
    ],
    stack: ['ONNX Runtime', 'Conformer/CTC', 'Flutter', '.NET 10', 'PostgreSQL', 'Render'],
  },
  */
  {
    title: 'Stepo',
    meta: 'Social goal tracking · live on both stores',
    url: 'https://stepo.app',
    urlLabel: 'stepo.app',
    aspect: 'aspect-[4/3]',
    images: [
      { src: '/images/stepo/stepo-01.png', alt: 'Stepo feed', fit: 'contain' },
      { src: '/images/stepo/stepo-02.png', alt: 'Stepo step detail', fit: 'contain' },
      { src: '/images/stepo/stepo-04.png', alt: 'Stepo journey', fit: 'contain' },
    ],
    problem:
      'Goals are easier to keep when someone is watching. Stepo turns a goal into a journey of steps, and every step stays live for 24 hours: the window where the people following you can react before it settles into the story.',
    built:
      'Built solo, end to end. Flutter client, ASP.NET API, SvelteKit web for the public share pages, and the store listings themselves. Infrastructure is defined as code across staging and production, and the mobile client is generated from the API\'s OpenAPI spec so the two cannot drift.',
    metrics: [
      { value: '4', label: 'surfaces: app, API, web, store' },
      { value: '155', label: 'test files and test classes' },
      { value: '2', label: 'environments, defined as code' },
    ],
    stack: ['Flutter', '.NET 10', 'PostgreSQL / Neon', 'Render', 'SvelteKit', 'Firebase', 'Bunny CDN'],
  },
]

type Shipped = {
  title: string
  meta: string
  url?: string
  urlLabel?: string
  image?: string
  imageFit?: 'cover' | 'contain'
  description: string
  stack: string[]
}

const alsoShipped: Shipped[] = [
  {
    title: 'Cohart',
    meta: 'Art marketplace · lead mobile',
    url: 'https://www.cohart.com',
    urlLabel: 'www.cohart.com',
    image: '/images/cohart.webp',
    description:
      'Led mobile through the complete React Native to Flutter migration, and integrated NFC card scanning with Stripe Tap to Pay for in-person sales. A gallery product that looks ordinary has failed, so the bar for the UI was the artwork itself.',
    stack: ['Flutter', 'NFC', 'Stripe', 'Tap to Pay'],
  },
  {
    title: 'EtonHouse',
    meta: 'School management · 12 schools',
    url: 'https://www.etonhouse.edu.sg',
    urlLabel: 'www.etonhouse.edu.sg',
    image: '/images/ble-bluetooth.gif',
    imageFit: 'contain',
    description:
      'Integrated BLE OEM thermometers for contactless temperature checks, including connection handling, data sync and error recovery. Shipped four app variants from one codebase using flavors, plus a responsive Flutter Web admin dashboard.',
    stack: ['Flutter', 'BLE', 'ASP.NET', 'Mapbox', 'Flutter Web'],
  },
  {
    title: 'qa-harness & Dialect',
    meta: 'Open source',
    url: 'https://github.com/chaucm',
    urlLabel: 'github.com/chaucm',
    description:
      'qa-harness is a CLI that launches my Flutter apps into a known state, screenshots them, taps through them and reads back what they threw, so a change gets checked on a real device. Dialect is a localization toolkit built around the way people write code now, where the thing translating your screen has already read it.',
    stack: ['Dart', 'CLI', 'Developer tooling'],
  },
]

const howIWork = [
  {
    title: 'I ship the whole thing',
    body: 'App, API, database, infrastructure, store listing. Not because I want to do everything forever, but because knowing the whole path means I can find the actual blocker instead of filing a ticket about it.',
  },
  {
    title: 'I measure before I design around it',
    body: 'A cost estimate I was designing around turned out to be off by 10x, and nobody would have known without a benchmark that took an afternoon. Guessed numbers become architecture, and architecture is expensive to unguess.',
  },
  {
    title: 'Decisions go in writing',
    body: 'Every project I run keeps a ledger of what was decided and why. It is how a small team avoids building two different products in their heads, and it is the habit I earned the hard way.',
  },
  {
    title: 'Agents type, I decide',
    body: 'Claude Code is my daily driver. It rewrote 6,538 imports across 2,084 files in a session, which used to be a sprint. I read every diff, which makes me the bottleneck now. That is the right limit to have.',
  },
]

const skillGroups: Array<{ label: string; value: string }> = [
  { label: 'Mobile', value: 'Flutter/Dart (iOS, Android, Web), Bloc, RxDart, go_router, flavors' },
  { label: 'Animation & UI', value: 'Rive, Lottie, custom design systems, responsive layout' },
  { label: 'AI in production', value: 'ONNX Runtime, model selection & hosting, LLM orchestration, evals & calibration' },
  { label: 'Backend', value: 'ASP.NET Core / .NET 10, C#, PostgreSQL, EF Core, Node.js' },
  { label: 'Infrastructure', value: 'Render (IaC), Neon, Firebase, Bunny CDN, Cloudflare Pages, Docker' },
  { label: 'Testing', value: 'Flutter unit/widget/integration, Testcontainers, automated on-device QA' },
  { label: 'Delivery', value: 'GitHub Actions, Codemagic, Fastlane, App Store & Play releases' },
  { label: 'Hardware & payments', value: 'BLE/Bluetooth, NFC, Stripe SDK, Tap to Pay' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint">
        {children}
      </h2>
      <div className="h-px flex-1 bg-rule" />
    </div>
  )
}

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-paper font-sans text-ink flex flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgba(0,102,255,0.07), rgba(0,102,255,0.02) 45%, transparent 75%)',
        }}
      />

      <nav className="sticky top-0 left-0 right-0 bg-paper/85 backdrop-blur-md z-40">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="text-base font-semibold tracking-tight text-ink">
              Chau
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Writing
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[680px] w-full mx-auto px-6 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <header className="mb-10">
            <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint mb-3">
              Portfolio
            </div>
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-[-0.035em] leading-[1.02] text-ink mb-4">
              Cao Minh Chau
            </h1>
            <p className="text-lg text-ink leading-relaxed mb-6 max-w-[36ch] md:max-w-none">
              I build AI-native apps end to end: the model, the app, the
              backend, the store listing. Mobile is where I'm deepest.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {topics.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-muted"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                  {t.name}
                </span>
              ))}
            </div>
          </header>

          <section className="mb-14 grid grid-cols-3 gap-3">
            {proof.map((p) => (
              <div
                key={p.value}
                className="rounded-xl border border-rule bg-white/60 backdrop-blur-sm px-4 py-4"
              >
                <div className="text-[26px] md:text-[30px] font-bold tracking-[-0.03em] text-ink leading-none mb-2">
                  {p.value}
                </div>
                <div className="text-[11px] text-ink-faint leading-snug">{p.label}</div>
              </div>
            ))}
          </section>

          <section className="mb-16 flex items-start gap-5">
            <img
              src="/images/profile.jpg"
              alt="Cao Minh Chau"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] text-ink-muted leading-[1.65] mb-2">
                Six years in Flutter, most of it on apps other people depend on.
                At ELSA I re-architected an English-pronunciation app used by 90
                million people, and deleted a million lines of code doing it.
              </p>
              <p className="text-[15px] text-ink leading-[1.65] mb-3">
                Now I build my own: a social goal-tracking app that's live, and a
                Mandarin app whose pronunciation scorer I picked, benchmarked and
                host myself. I don't train models. I pick them, stand them up, and
                keep them running at a cost that works.
              </p>
              <div className="flex items-center gap-4 text-ink-faint">
                <a
                  href="https://github.com/chaucm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/averagechau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="mailto:averagechau@gmail.com"
                  className="hover:text-brand transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </section>

          <SectionLabel>Selected Work</SectionLabel>
          <div className="flex flex-col gap-16 mb-16">
            {caseStudies.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {p.images ? (
                  <div className={`relative ${p.aspect ?? 'aspect-[16/9]'} rounded-2xl overflow-hidden bg-rule/30 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]`}>
                    <div className="absolute inset-0 flex gap-2 p-3">
                      {p.images.map((img) => (
                        <div
                          key={img.src}
                          className="h-full overflow-hidden rounded-lg bg-white"
                          style={{ flex: img.flex ?? 1 }}
                        >
                          <img
                            src={img.src}
                            alt={img.alt ?? p.title}
                            className={`w-full h-full ${img.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="text-[12px] text-ink-faint mb-2">{p.meta}</div>
                <h3 className="text-[24px] font-bold tracking-[-0.02em] leading-snug text-ink mb-2">
                  {p.title}
                </h3>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-brand hover:text-brand-700 transition-colors mb-4"
                  >
                    {p.urlLabel ?? p.url}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <div className="flex flex-col gap-4 mb-5">
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-faint mb-1.5">
                      The problem
                    </div>
                    <p className="text-[15px] text-ink-muted leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-faint mb-1.5">
                      What I built
                    </div>
                    <p className="text-[15px] text-ink-muted leading-relaxed">{p.built}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 rounded-xl border border-rule bg-white/60 px-5 py-4 mb-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[15px] font-bold tracking-[-0.01em] text-ink leading-tight mb-1">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-ink-faint leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-3">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[12px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>

                {p.readMore && (
                  <Link
                    to={p.readMore.to}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-brand hover:text-brand-700 transition-colors"
                  >
                    {p.readMore.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </motion.article>
            ))}
          </div>

          <SectionLabel>Also Shipped</SectionLabel>
          <div className="flex flex-col gap-10 mb-16">
            {alsoShipped.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {p.image && (
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-rule/30 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`w-full h-full ${p.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}`}
                    />
                  </div>
                )}
                <div className="text-[12px] text-ink-faint mb-2">{p.meta}</div>
                <h3 className="text-[20px] font-bold tracking-[-0.02em] leading-snug text-ink mb-2">
                  {p.title}
                </h3>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-brand hover:text-brand-700 transition-colors mb-3"
                  >
                    {p.urlLabel ?? p.url}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                <p className="text-[15px] text-ink-muted leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[12px] text-ink-faint">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <SectionLabel>How I Work</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mb-16">
            {howIWork.map((h) => (
              <div key={h.title}>
                <div className="text-[15px] font-semibold text-ink mb-1.5">{h.title}</div>
                <p className="text-[14px] text-ink-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          <SectionLabel>Stack</SectionLabel>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-16">
            {skillGroups.map((g) => (
              <div key={g.label} className="flex flex-col gap-1">
                <dt className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-faint">
                  {g.label}
                </dt>
                <dd className="text-[15px] text-ink">{g.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rounded-2xl border border-rule bg-white/60 backdrop-blur-sm p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
              <Mail className="w-[18px] h-[18px]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-ink leading-tight mb-0.5">
                Let's build something together.
              </div>
              <div className="text-[13px] text-ink-muted truncate">
                averagechau@gmail.com · +84 876 543 444
              </div>
            </div>
            <a
              href="mailto:averagechau@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-700 transition-colors whitespace-nowrap"
            >
              Say hi
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-rule">
        <div className="max-w-[680px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-ink-faint">
            &copy; 2026 Chau Apps Company Limited
          </div>
          <div className="flex items-center gap-4 text-ink-faint">
            <a
              href="https://github.com/chaucm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/averagechau/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:averagechau@gmail.com"
              className="hover:text-brand transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+84876543444"
              className="hover:text-brand transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
