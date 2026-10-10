# 1441 Brand Retainer Pipeline (EXAMPLE / demo)

> **Example data, not real 1441 brands or amounts.** Every brand, talent name,
> retainer amount and renewal date in this repo is fictional and invented for a
> clickable demo. No auth, no database; everything is seeded in `data/`.

A reskin of a sales CRM table as a brand-retainer pipeline for 1441 Collective:
brands, retainer stage (Prospect / Proposal / Active retainer / Renewal due /
Churned), monthly retainer, renewal date and the talent assigned to each deal.

## Attribution

Forked from [kargulstudio/sales-crm](https://github.com/kargulstudio/sales-crm)
by Kargul Studio, used under the MIT License (see `LICENSE`, copyright notice
retained). Upstream history is preserved in this repo.

---

## Upstream README (Kargul Starter)

Next.js 16 + React 19 + Tailwind CSS 4 boilerplate. Read `CONVENTIONS.md` before writing any component, section, or page — it is the whole spec for how this repo is built.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script                 | What it does                                                       |
| ---------------------- | ------------------------------------------------------------------ |
| `npm run dev`          | Start the dev server                                               |
| `npm run build`        | Production build                                                   |
| `npm run start`        | Serve the production build                                         |
| `npm run lint`         | ESLint                                                             |
| `npm run to:avif`      | Convert an image to AVIF and report its inline cost — rule 11      |
| `npm run extract:avif` | Pull the first frame of every `.webm` under `public/` as a poster  |
| `npm run frame:rive`   | Render a still from a `.riv` file for use as its poster            |

## First things to set on a new project

1. **`lib/seo.ts`** — `SITE_NAME`, `SITE_URL`, `SITE_DESCRIPTION`, `SITE_ROUTES`. Everything in `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts` and every page's metadata derives from these (rule 18). Set `NEXT_PUBLIC_SITE_URL` in the environment to override the URL per deploy.
2. **`app/globals.css`** — match the `@layer base` type scale and the `--padding-section-*` tokens to the design before building anything (rules 1 and 3).
3. **`app/opengraph-image.jpg`** — 1200×630, with an `opengraph-image.alt.txt` beside it.
4. **Fonts** — `app/layout.tsx` ships Inter + a local Inter Display; swap them for the design's typeface.

## Docs

| File               | What's in it                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `CONVENTIONS.md`   | The build rules. Read first.                                        |
| `AGENTS.md`        | Next.js version notes for agents                                    |
| `OPTIMIZATION.md`  | Why `Asset`'s Rive loading is gated behind LCP, with the measurements |
