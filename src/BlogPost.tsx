import { motion, useScroll } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Eye } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, formatPostDate, readingMinutes } from './posts'
import { useViewCount } from './lib/useViewCount'
import Comments from './Comments'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  const { scrollYProgress } = useScroll()
  const views = useViewCount(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-paper font-sans text-ink flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-ink-muted mb-8">
          The post you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper font-sans text-ink flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-rule rounded-full text-ink-muted hover:text-brand hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to writing
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-10">
            <div className="text-sm text-ink-faint font-medium flex items-center gap-2">
              <time>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post.content)} min read</span>
              {views !== null && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {views.toLocaleString()} views
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-2 text-3xl md:text-[40px] font-bold text-ink leading-[1.15] tracking-[-0.03em]">
              {post.title}
            </h1>
          </header>

          <div className="prose max-w-none text-ink prose-headings:text-ink prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-[1.75] prose-p:text-ink prose-strong:text-ink prose-a:text-brand prose-a:underline prose-a:underline-offset-2 prose-a:decoration-brand/40 hover:prose-a:decoration-brand prose-blockquote:border-brand prose-blockquote:text-ink-muted prose-blockquote:not-italic prose-hr:border-rule prose-hr:my-10 prose-img:rounded-xl prose-img:border prose-img:border-rule prose-img:shadow-md prose-img:my-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {stripLeadingTitle(post.content, post.title)}
            </ReactMarkdown>
          </div>
        </motion.article>

        <Comments />
      </main>

      <footer className="border-t border-rule">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 text-xs text-ink-faint">
          &copy; 2026 Chau Apps Company Limited
        </div>
      </footer>
    </div>
  )
}

function stripLeadingTitle(markdown: string, title: string): string {
  const heading = `# ${title}`
  if (markdown.startsWith(heading)) {
    return markdown.slice(heading.length).replace(/^\s+/, '')
  }
  return markdown
}

export default BlogPost
