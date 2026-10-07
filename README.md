# chauapps.com

The Chau Apps company site. The home page showcases the apps (Stepo and MaiSay) and the founder's writing, and `/portfolio` is the founder profile.

## Run it

```bash
npm install
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Deploy

Hosting is Firebase. `deploy.sh` builds first, then deploys hosting and the Firestore rules.

```bash
./deploy.sh
```

## Where things are

| Path | What it is |
|---|---|
| `src/App.tsx` | Home page: hero, Stepo and MaiSay panels, post list, founder section |
| `src/Portfolio.tsx` | Founder profile |
| `src/BlogPost.tsx` | Blog post reader |
| `src/site.tsx` | Shared nav and footer |
| `src/links.ts` | Store links, app sites, company email |
| `src/posts.ts` | Post list; the markdown itself is in `contents/` |
| `public/images/apps/` | App icons and screenshots, copied from each app's store kit or landing page |

To add a post, add it to `src/posts.ts` and to the `posts` array in `vite.config.ts`. The second one generates the per-post social preview tags at build time.

App status ("Live on iOS and Android", "Coming soon") is plain copy in `src/App.tsx`. Update the MaiSay panel there when it launches.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion. Firestore is used only for blog view counts.

## Contact

contacts@chauapps.com

© 2026 Chau Apps Company Limited
