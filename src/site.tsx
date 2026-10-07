import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import { COMPANY_EMAIL, links } from './links'

const navItems = [
  { label: 'Apps', to: '/#apps' },
  { label: 'Writing', to: '/#writing' },
  { label: 'Founder', to: '/portfolio' },
]

// Reading pages (blog, portfolio) sit in a 680px column; the home page is wider.
type Width = 'wide' | 'reading'
const widths: Record<Width, string> = {
  wide: 'max-w-[1120px]',
  reading: 'max-w-[680px]',
}

/** Scrolls to the hash target after a route change, or to the top when there is none. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export function SiteNav({ width = 'reading' }: { width?: Width }) {
  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md">
      <div className={`${widths[width]} mx-auto px-6 flex items-center justify-between h-14`}>
        <Link to="/" className="inline-flex items-center gap-2 font-display text-[17px] font-bold tracking-tight text-ink">
          <img src="/favicon.svg" alt="" className="w-6 h-6" />
          Chau Apps
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export function SiteFooter({ width = 'reading' }: { width?: Width }) {
  return (
    <footer className="border-t border-rule">
      <div className={`${widths[width]} mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6`}>
        <div className="text-sm text-ink-muted leading-relaxed">
          <div className="font-semibold text-ink">Chau Apps Company Limited</div>
          <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-brand transition-colors">
            {COMPANY_EMAIL}
          </a>
          <div className="text-xs text-ink-faint mt-3">&copy; 2026 Chau Apps Company Limited</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
          <a href={links.stepo} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            Stepo
          </a>
          <a href={links.maisay} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            MaiSay
          </a>
          <Link to="/#writing" className="hover:text-brand transition-colors">
            Writing
          </Link>
          <Link to="/portfolio" className="hover:text-brand transition-colors">
            Founder
          </Link>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
