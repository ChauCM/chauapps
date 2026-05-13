import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { posts, formatPostDate, readingMinutes } from './posts'

function App() {
  return (
    <div className="min-h-screen bg-comic-cream font-sans text-comic-dark flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-comic-beige z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-comic-dark">
              ChauApps
            </Link>
            <Link
              to="/portfolio"
              className="bg-comic-orange text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 hover:shadow-lg transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-comic-dark mb-4">
              Writing
            </h1>
            <p className="text-xl text-comic-brown">
              Notes from the road of building apps.
            </p>
            <div className="mt-4 h-1 w-24 bg-comic-orange mx-auto rounded-full" />
          </div>

          {/* About Me */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-comic-beige p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 md:w-44 md:h-44 flex-shrink-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Cao Minh Chau"
                    className="w-full h-full rounded-2xl object-cover shadow-md border border-comic-beige"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-comic-dark mb-3">
                    Hi, I'm Chau
                  </h2>
                  <p className="text-lg text-comic-brown leading-relaxed mb-4">
                    Flutter developer with 5+ years building high quality
                    cross-platform UI serving millions of users — from art
                    marketplaces to language-learning apps used by 90M+ people.
                    I focus on shipping simple, performant experiences and
                    writing about the engineering decisions behind them.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-comic-beige/30 text-comic-dark border border-comic-beige rounded-full text-sm font-medium">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-comic-beige/30 text-comic-dark border border-comic-beige rounded-full text-sm font-medium">
                      Cross-Platform
                    </span>
                    <span className="px-3 py-1 bg-comic-beige/30 text-comic-dark border border-comic-beige rounded-full text-sm font-medium">
                      Animation
                    </span>
                    <span className="px-3 py-1 bg-comic-beige/30 text-comic-dark border border-comic-beige rounded-full text-sm font-medium">
                      Scale
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog list */}
          <h2 className="text-2xl md:text-3xl font-bold text-comic-dark mb-6">
            Latest posts
          </h2>
          <ul className="space-y-8">
            {posts.map((post, index) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-3xl shadow-lg border-2 border-comic-beige overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    {post.cover && (
                      <div className="h-56 md:h-full bg-comic-cream/50 border-b md:border-b-0 md:border-r border-comic-beige">
                        <img
                          src={post.cover}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="text-sm text-comic-tan font-medium mb-2 flex items-center gap-2">
                        <time>{formatPostDate(post.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{readingMinutes(post.content)} min read</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-comic-dark mb-3 group-hover:text-comic-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-comic-brown leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-comic-orange font-medium">
                        Read post
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-comic-dark text-comic-cream py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-comic-tan text-sm">
          &copy; 2026 CHAU APPS COMPANY LIMITED. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
