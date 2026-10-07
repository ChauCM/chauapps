import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { posts, formatPostDate, readingMinutes } from './posts'
import { SiteNav, SiteFooter } from './site'
import { links } from './links'

const stepoShots = [
  { src: '/images/apps/stepo-01.webp', alt: 'Stepo feed with steps that are live right now' },
  { src: '/images/apps/stepo-02.webp', alt: 'A Stepo step, live for 24 hours' },
  { src: '/images/apps/stepo-04.webp', alt: 'A Stepo journey read from first step to finale' },
]

function Status({ live, children }: { live?: boolean; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[13px] font-semibold text-ink">
      <span className={`w-2 h-2 rounded-full ${live ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      {children}
    </span>
  )
}

const sectionTitle =
  'font-display font-extrabold tracking-[-0.03em] leading-[1.02] text-[clamp(2rem,4.4vw,3.25rem)]'

const inkButton =
  'inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-white hover:bg-black/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink flex flex-col">
      <SiteNav width="wide" />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="px-2 pt-14 pb-12 md:pt-24 md:pb-20"
        >
          <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.6rem,7vw,5.25rem)] max-w-[14ch]">
            Chau Apps makes its own apps and runs them.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[52ch]">
            A software company from Vietnam. Stepo is live on the App
            Store and Google Play, and MaiSay opens soon. The founder writes
            about the engineering behind both.
          </p>
        </motion.header>

        <div id="apps" className="scroll-mt-20 flex flex-col gap-5">
          <section
            aria-labelledby="stepo-title"
            className="rounded-[32px] overflow-hidden text-stepo-ink bg-gradient-to-b from-stepo to-stepo-deep"
          >
            <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-8 px-6 pt-8 sm:px-10 sm:pt-12 lg:pl-14 lg:pr-10">
              <div className="lg:pb-14 lg:self-center">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <img
                    src="/images/apps/stepo-icon.svg"
                    alt=""
                    className="w-12 h-12 rounded-[12px] ring-2 ring-stepo-ink/15"
                  />
                  <span id="stepo-title" className="font-display text-2xl font-bold tracking-tight">
                    Stepo
                  </span>
                  <Status live>Live on iOS and Android</Status>
                </div>
                <h2 className={`${sectionTitle} mb-5`}>Share the journey, one step at a time.</h2>
                <p className="text-[17px] leading-relaxed max-w-[44ch] mb-8">
                  Stepo turns a goal into a journey you share one step at a
                  time. Each step is live for 24 hours, the window when the
                  people following you can heart it, comment or share. Show up
                  while it's live and the journey remembers you were there.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a href={links.stepoAppStore} target="_blank" rel="noopener noreferrer" className={inkButton}>
                    Get it on the App Store
                  </a>
                  <a href={links.stepoPlay} target="_blank" rel="noopener noreferrer" className={inkButton}>
                    Get it on Google Play
                  </a>
                  <a
                    href={links.stepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-3 text-[15px] font-semibold underline underline-offset-4 decoration-2 hover:decoration-stepo-ink/40"
                  >
                    stepo.app
                  </a>
                </div>
              </div>

              {/* Staggered like the pills in the Stepo mark; the panel crops the bottoms. */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 items-start max-h-[340px] sm:max-h-[460px] lg:max-h-none lg:self-end lg:-mb-12">
                {stepoShots.map((shot, i) => (
                  <img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    width={720}
                    height={1558}
                    className="w-full h-auto rounded-2xl shadow-[0_18px_40px_-12px_rgba(60,15,0,0.45)]"
                    style={{ marginTop: `${[0, 12, 5][i]}%` }}
                  />
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="maisay-title" className="rounded-[32px] overflow-hidden bg-maisay text-ink">
            <div className="grid lg:grid-cols-[6fr_5fr] gap-8 lg:gap-6 px-6 pt-8 sm:px-10 sm:pt-12 lg:pl-10 lg:pr-14">
              <div className="lg:order-2 lg:pb-14 lg:self-center">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <img
                    src="/images/apps/maisay-icon.webp"
                    alt=""
                    className="w-12 h-12 rounded-[12px] ring-2 ring-ink/10"
                  />
                  <span id="maisay-title" className="font-display text-2xl font-bold tracking-tight">
                    MaiSay
                  </span>
                  <Status>Coming soon</Status>
                </div>
                <h2 className={`${sectionTitle} mb-5`}>Speak Mandarin. Graded like a teacher.</h2>
                <p className="text-[17px] leading-relaxed text-ink-muted max-w-[44ch] mb-8">
                  MaiSay is a Mandarin course built around speaking. Say a
                  sentence out loud and it scores every syllable on its
                  initial, final and tone, then shows the one fix to make.
                  Coming to iOS and Android.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a href={links.maisay} target="_blank" rel="noopener noreferrer" className={inkButton}>
                    Join the waitlist
                  </a>
                  <a
                    href={links.maisay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-3 text-[15px] font-semibold underline underline-offset-4 decoration-2 hover:decoration-ink/40"
                  >
                    maisay.app
                  </a>
                </div>
              </div>

              <div className="relative lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
                <img
                  src="/images/apps/maisay-syllables.webp"
                  alt="MaiSay scoring each syllable of a spoken sentence, with one syllable flagged"
                  loading="lazy"
                  className="absolute left-0 top-0 w-[78%] max-w-[440px] -rotate-2"
                />
                <img
                  src="/images/apps/maisay-fix.webp"
                  alt="MaiSay naming the one sound to repair: aim for zh, not z"
                  loading="lazy"
                  className="absolute left-[16%] top-[38%] w-[66%] max-w-[380px] rotate-3"
                />
                <img
                  src="/images/apps/maisay-mai.webp"
                  alt="Mai, the MaiSay mascot, reading a book"
                  loading="lazy"
                  className="absolute right-0 bottom-0 w-[36%] max-w-[230px]"
                />
              </div>
            </div>
          </section>
        </div>

        <section id="writing" aria-labelledby="writing-title" className="scroll-mt-20 px-2 pt-20 md:pt-28">
          <div className="grid lg:grid-cols-[4fr_7fr] gap-8 lg:gap-12">
            <div>
              <h2 id="writing-title" className={`${sectionTitle} mb-4`}>
                Writing from the founder
              </h2>
              <p className="text-[17px] text-ink-muted leading-relaxed max-w-[36ch]">
                Chau writes up what the work actually involved: the migrations,
                the numbers, and the parts that went wrong first.
              </p>
            </div>
            <ul className="flex flex-col border-t border-rule">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-rule">
                  <Link to={`/blog/${post.slug}`} className="group grid sm:grid-cols-[200px_1fr] gap-5 py-6">
                    {post.cover && (
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-rule/40">
                        <img src={post.cover} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-[22px] font-bold tracking-[-0.02em] leading-snug text-ink group-hover:text-brand transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-[15px] text-ink-muted leading-relaxed mb-3">{post.excerpt}</p>
                      <div className="text-[13px] text-ink-faint">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>,{' '}
                        {readingMinutes(post.content)} min read
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="founder-title" className="px-2 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="grid lg:grid-cols-[4fr_7fr] gap-8 lg:gap-12">
            <h2 id="founder-title" className={sectionTitle}>
              Who is behind it
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <img
                src="/images/profile.jpg"
                alt="Chau Cao"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-[19px] leading-relaxed text-ink max-w-[50ch] mb-4">
                  I'm Chau. I started Chau Apps after six years of building
                  mobile apps for other companies, most recently at ELSA, where
                  I re-architected an app used by 90 million people.
                </p>
                <p className="text-[17px] leading-relaxed text-ink-muted max-w-[52ch] mb-6">
                  Now I work on Chau Apps' products front to back: the app, the
                  API, the speech scoring, the web pages and the store listings.
                </p>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink px-5 py-2.5 text-[15px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  See the founder's portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter width="wide" />
    </div>
  )
}

export default App
