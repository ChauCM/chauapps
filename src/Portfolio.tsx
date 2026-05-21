import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const topics = [
  { name: 'Flutter', dot: 'bg-blue-500' },
  { name: 'Animation', dot: 'bg-purple-500' },
  { name: 'Scale', dot: 'bg-emerald-500' },
  { name: 'Architecture', dot: 'bg-amber-500' },
]

type ProjectImage = {
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
  flex?: number
}

type Project = {
  title: string
  url?: string
  urlLabel?: string
  description: string
  image?: string
  imageFit?: 'cover' | 'contain'
  images?: ProjectImage[]
  stack: string[]
  meta: string
}

const projects: Project[] = [
  {
    title: 'Cohart Art Marketplace',
    url: 'https://www.cohart.com',
    urlLabel: 'www.cohart.com',
    image: '/images/cohart.webp',
    description:
      'Built a high-quality visual social platform for artists and collectors. Implemented NFC card scanning and Stripe tap-to-pay for seamless art purchases. Crafted pixel-perfect UI showcasing artwork with gallery-grade presentation.',
    stack: ['Flutter', 'NFC', 'Stripe SDK', 'Tap to Pay'],
    meta: 'Mobile · Marketplace',
  },
  {
    title: 'ELSA Speak Learning Games',
    url: 'https://elsaspeak.com',
    urlLabel: 'elsaspeak.com',
    images: [
      { src: '/images/elsa-web.jpg', alt: 'ELSA Web', fit: 'cover', flex: 1.4 },
      { src: '/images/elsa-mobile.png', alt: 'ELSA Mobile', fit: 'contain', flex: 0.6 },
    ],
    description:
      'Built 4 interactive learning games with expressive animated characters using Rive and Lottie, serving 400K+ weekly active users. Designed responsive character states triggered by user input with Bloc state logic. Optimized animation performance across iOS, Android, and Flutter Web.',
    stack: ['Rive', 'Lottie', 'Bloc', 'Flutter Web', 'Animation Performance'],
    meta: 'Mobile + Web · EdTech',
  },
  {
    title: 'EtonHouse School Management',
    url: 'https://www.etonhouse.edu.sg',
    urlLabel: 'www.etonhouse.edu.sg',
    image: '/images/ble-bluetooth.gif',
    imageFit: 'contain',
    description:
      'Integrated Bluetooth OEM thermometers for contactless temperature monitoring across 12 schools. Built the complete BLE connection handling, data sync, and error recovery system.',
    stack: ['Flutter', 'BLE', 'Real-time Sync'],
    meta: 'Mobile · Education',
  },
  {
    title: 'Student Check-in System',
    description:
      'Developed location-based check-in with flutter_map and Mapbox tiles. Implemented reverse geocoding for address display and student check-in that displays positions on interactive maps.',
    stack: ['flutter_map', 'Mapbox', 'Geocoding'],
    meta: 'Mobile · Geolocation',
  },
  {
    title: '4 Apps from a Single Codebase',
    description:
      'Deployed 4 customized app variants for different schools using Flutter flavors. Maintained iOS, Android, and Web versions with shared business logic.',
    stack: ['Flutter Flavors', 'Codemagic', 'CI/CD'],
    meta: 'Mobile · Infrastructure',
  },
]

const skillGroups: Array<{ label: string; value: string }> = [
  { label: 'Languages', value: 'Dart, TypeScript, C#' },
  { label: 'State Management', value: 'Bloc, Provider, RxDart' },
  { label: 'Animation', value: 'Rive, Lottie, Vector Graphics' },
  { label: 'Backend', value: 'ASP.NET Core, PostgreSQL, Firebase' },
  { label: 'Performance', value: 'Animation Profiling, Cross-device QA' },
  { label: 'Integration', value: 'BLE, NFC, Stripe SDK' },
  { label: 'Analytics', value: 'Sentry, Amplitude' },
  { label: 'Tools', value: 'Git, Docker, Figma' },
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
          <header className="mb-12">
            <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint mb-3">
              Portfolio
            </div>
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-[-0.035em] leading-[1.02] text-ink mb-3">
              Cao Minh Chau
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              Senior Mobile Engineer · Flutter Specialist
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

          <section className="mb-16 flex items-start gap-5">
            <img
              src="/images/profile.jpg"
              alt="Cao Minh Chau"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] text-ink-muted leading-[1.65] mb-2">
                Mobile engineer with 5+ years specializing in Flutter, building
                cross-platform applications serving hundreds of thousands of
                users. Experienced in interactive animations with Rive and
                Lottie, expressive UI, and scaling mobile applications.
              </p>
              <p className="text-[15px] text-ink leading-[1.65] mb-3">
                I turn complex ideas into polished, animated experiences — from
                interactive avatars to production apps on both stores.
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

          <SectionLabel>Selected Projects</SectionLabel>
          <div className="flex flex-col gap-14 mb-16">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {p.images ? (
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-rule/30 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]">
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
                ) : p.image ? (
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-rule/30 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`w-full h-full ${p.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}`}
                    />
                  </div>
                ) : null}
                <div className="text-[12px] text-ink-faint mb-2">{p.meta}</div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-snug text-ink mb-2">
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
                <p className="text-[15px] text-ink-muted leading-relaxed mb-4">
                  {p.description}
                </p>
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
