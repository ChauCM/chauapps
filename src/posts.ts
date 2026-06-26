import ninetyMillionUsers from '../contents/90.million-users-deserve-a-better-app.md?raw'

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  content: string
  discussions?: { label: string; url: string }[]
}

export function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export const posts: Post[] = [
  {
    slug: '90-million-users-deserve-a-better-app',
    title: 'I Deleted a Million Lines of Code from an App 90 Million People Use',
    date: '2026-05-14',
    excerpt:
      "Two years at ELSA. The migration that couldn't be done, the day it shipped, and what it took to delete a million lines of code.",
    cover: '/images/blog/firebase-performance.png',
    content: ninetyMillionUsers,
    discussions: [
      { label: 'r/FlutterDev', url: 'https://www.reddit.com/r/FlutterDev/s/ZPbECiaLvG' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
