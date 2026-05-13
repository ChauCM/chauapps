import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

const SITE_URL = 'https://chauapps.com'

type PostMeta = {
  slug: string
  title: string
  description: string
  image: string
  publishedTime: string
}

// Per-post social/SEO metadata. Keep in sync with src/posts.ts.
const posts: PostMeta[] = [
  {
    slug: '90-million-users-deserve-a-better-app',
    title: '90 Million Users Deserve a Better App',
    description:
      "Two years at ELSA. The migration that couldn't be done, the day it shipped, and what it took to delete a million lines of code.",
    image: '/images/blog/firebase-performance.png',
    publishedTime: '2026-05-14',
  },
]

// Emits dist/blog/<slug>/index.html for each post, with per-post <title>
// and OG/Twitter meta tags swapped into the <!--meta:start-->/<!--meta:end-->
// block defined in index.html. Firebase Hosting serves the matching static
// file before the SPA-fallback rewrite, so social scrapers see real per-page meta.
function postStaticMetaPlugin(): Plugin {
  return {
    name: 'post-static-meta',
    apply: 'build',
    async closeBundle() {
      const distDir = resolve('dist')
      const base = await readFile(resolve(distDir, 'index.html'), 'utf-8')

      for (const post of posts) {
        const url = `${SITE_URL}/blog/${post.slug}`
        const image = post.image.startsWith('http')
          ? post.image
          : `${SITE_URL}${post.image}`
        const meta = renderPostMeta({ ...post, url, image })
        const html = base.replace(
          /<!--meta:start-->[\s\S]*?<!--meta:end-->/,
          meta,
        )
        const outPath = resolve(distDir, 'blog', post.slug, 'index.html')
        await mkdir(dirname(outPath), { recursive: true })
        await writeFile(outPath, html, 'utf-8')
      }
    },
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderPostMeta(p: {
  title: string
  description: string
  image: string
  url: string
  publishedTime: string
}): string {
  const t = escapeHtml(p.title)
  const d = escapeHtml(p.description)
  return [
    '<!--meta:start-->',
    `<title>${t} — ChauApps</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${p.url}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="ChauApps" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${p.url}" />`,
    `<meta property="og:image" content="${p.image}" />`,
    `<meta property="article:published_time" content="${p.publishedTime}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${p.image}" />`,
    '<!--meta:end-->',
  ].join('\n    ')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), postStaticMetaPlugin()],
})
