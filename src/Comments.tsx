import Giscus from '@giscus/react'

// Giscus stores comments in GitHub Discussions — no backend, no DB to run, and
// commenting requires a GitHub login, so spam protection is GitHub's.
// REPO_ID / CATEGORY_ID come from https://giscus.app after you enable
// Discussions on the repo and install the giscus GitHub app. Until they're
// filled in, this component renders nothing.
const REPO = 'ChauCM/chauapps'
const REPO_ID = 'R_kgDOPpQNpQ'
const CATEGORY = 'Comments'
const CATEGORY_ID = 'DIC_kwDOPpQNpc4C_p08'

export default function Comments() {
  if (!REPO_ID || !CATEGORY_ID) return null

  return (
    <section className="mt-16 pt-8 border-t border-rule">
      <h2 className="text-xl font-bold text-ink mb-6">Comments</h2>
      <Giscus
        id="comments"
        repo={REPO}
        repoId={REPO_ID}
        category={CATEGORY}
        categoryId={CATEGORY_ID}
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </section>
  )
}
