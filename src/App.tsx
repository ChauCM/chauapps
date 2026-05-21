import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { posts, formatPostDate, readingMinutes } from './posts'

const topics = [
  { name: 'Flutter', dot: 'bg-blue-500' },
  { name: 'Animation', dot: 'bg-purple-500' },
  { name: 'Scale', dot: 'bg-emerald-500' },
  { name: 'Architecture', dot: 'bg-amber-500' },
]

function App() {
  const [featured, ...rest] = posts

  return (
    <div className="relative min-h-screen bg-paper font-sans text-ink flex flex-col overflow-hidden">
      {/* Atmosphere: soft brand-tinted glow behind the hero */}
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
              to="/portfolio"
              className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-brand transition-colors"
            >
              Portfolio
              <ArrowUpRight className="w-3.5 h-3.5" />
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
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-[-0.035em] leading-[1.02] text-ink mb-3">
              Writing
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              Notes from the road of building apps for millions.
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

          <section className="mb-14 flex items-start gap-5">
            <img
              src="/images/profile.jpg"
              alt="Cao Minh Chau"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] text-ink-muted leading-[1.65] mb-3">
                I'm <span className="text-ink font-medium">Chau</span> — a mobile
                engineer with 5+ years in Flutter, building cross-platform UI for
                millions, from art marketplaces to language-learning apps used by
                90M+ people.
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

          <div className="flex items-center gap-3 mb-7">
            <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-faint">
              Latest
            </h2>
            <div className="h-px flex-1 bg-rule" />
          </div>

          {featured && (
            <article className="mb-12">
              <Link to={`/blog/${featured.slug}`} className="group block">
                {featured.cover && (
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-rule/40 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]">
                    <img
                      src={featured.cover}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-paper/90 backdrop-blur-sm rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      Featured
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-[13px] text-ink-faint mb-3">
                  <time>{formatPostDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{readingMinutes(featured.content)} min read</span>
                </div>
                <h3 className="text-[26px] md:text-[30px] font-bold tracking-[-0.025em] leading-[1.15] text-ink group-hover:text-brand transition-colors mb-3">
                  {featured.title}
                </h3>
                <p className="text-[16px] text-ink-muted leading-relaxed mb-4">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Read post
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </article>
          )}

          {rest.length > 0 && (
            <ul className="flex flex-col">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex gap-5 py-6 border-b border-rule last:border-b-0"
                  >
                    {post.cover && (
                      <div className="hidden sm:block w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-rule/40">
                        <img
                          src={post.cover}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-ink-faint mb-1.5">
                        {formatPostDate(post.date)} · {readingMinutes(post.content)} min
                      </div>
                      <h3 className="text-[18px] font-semibold tracking-[-0.015em] leading-snug text-ink group-hover:text-brand transition-colors mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-[14px] text-ink-muted leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 rounded-2xl border border-rule bg-white/60 backdrop-blur-sm p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
              <Mail className="w-[18px] h-[18px]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-ink leading-tight mb-0.5">
                Working on something Flutter-shaped?
              </div>
              <div className="text-[13px] text-ink-muted">
                I'm open to interesting mobile engineering work.
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
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
