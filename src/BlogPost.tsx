import { motion, useScroll } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, formatPostDate, readingMinutes } from './posts'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  const { scrollYProgress } = useScroll()

  if (!post) {
    return (
      <div className="min-h-screen bg-comic-cream font-sans text-comic-dark flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-comic-brown mb-8">
          The post you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-comic-orange text-white rounded-full font-medium hover:bg-orange-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-comic-cream font-sans text-comic-dark flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-comic-orange z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-comic-beige rounded-full text-comic-brown hover:text-comic-orange hover:shadow-md transition-all"
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
            <div className="text-sm text-comic-tan font-medium flex items-center gap-2">
              <time>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post.content)} min read</span>
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-comic-dark leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="mt-6 h-1 w-16 bg-comic-orange rounded-full" />
          </header>

          <div className="prose max-w-none text-comic-dark prose-headings:text-comic-dark prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-[1.75] prose-p:text-comic-dark prose-strong:text-comic-dark prose-a:text-comic-orange prose-a:underline prose-a:underline-offset-2 prose-a:decoration-comic-orange/40 hover:prose-a:decoration-comic-orange prose-blockquote:border-comic-orange prose-blockquote:text-comic-brown prose-blockquote:not-italic prose-hr:border-comic-beige prose-hr:my-10 prose-img:rounded-xl prose-img:border-2 prose-img:border-comic-beige prose-img:shadow-md prose-img:my-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {stripLeadingTitle(post.content, post.title)}
            </ReactMarkdown>
          </div>
        </motion.article>
      </main>

      <footer className="bg-comic-dark text-comic-cream py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-comic-tan text-sm">
          &copy; 2026 CHAU APPS COMPANY LIMITED. All rights reserved.
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
