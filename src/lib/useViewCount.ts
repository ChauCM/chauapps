import { useEffect, useState } from 'react'

// Module-level guard so React StrictMode's double-invoke (dev) and route
// remounts never double-count within a single page load.
const incremented = new Set<string>()

/**
 * Reads (and, once per browser per post, increments) the view count for a slug.
 * Returns null while loading or if Firestore is unavailable — callers should
 * just hide the counter in that case.
 *
 * Anti-abuse: localStorage dedupes honest refreshes; Firestore rules enforce
 * an append-only "+1, views field only" write so a request can't set arbitrary
 * values. App Check (when enabled) blocks non-browser/scripted clients.
 */
export function useViewCount(slug: string | undefined): number | null {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    async function run(postSlug: string) {
      try {
        const { db } = await import('./firebase')
        const { doc, getDoc, setDoc, increment } = await import(
          'firebase/firestore'
        )
        const ref = doc(db, 'pageviews', postSlug)

        const storageKey = `viewed:${postSlug}`
        const alreadyViewed =
          typeof localStorage !== 'undefined' &&
          localStorage.getItem(storageKey) === '1'

        if (!alreadyViewed && !incremented.has(postSlug)) {
          incremented.add(postSlug)
          try {
            await setDoc(ref, { views: increment(1) }, { merge: true })
            localStorage.setItem(storageKey, '1')
          } catch {
            // Write rejected (rules/App Check/quota) — allow a later retry.
            incremented.delete(postSlug)
          }
        }

        const snap = await getDoc(ref)
        if (!cancelled) {
          setCount(snap.exists() ? Number(snap.data().views ?? 0) : 0)
        }
      } catch {
        if (!cancelled) setCount(null)
      }
    }

    run(slug)
    return () => {
      cancelled = true
    }
  }, [slug])

  return count
}
