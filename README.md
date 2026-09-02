# UGC Campaign Platform

Marketing site for a managed creator-marketing platform. React + Vite + Tailwind,
bilingual (EN/ES) with a light/dark theme, generated from
[Magic Patterns](https://www.magicpatterns.com/c/rcr3zjmhzqsmumfrxurf6q).

## Local development

```bash
npm install
npm run dev        # dev server
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint
```

## Deploying to Netlify

`netlify.toml` holds the full deploy configuration, so connecting the repo is
enough — no settings need to be typed into the Netlify UI:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 |

Two details matter for a site that has to survive a hard refresh:

- **SPA rewrite.** Routing happens in the browser (`react-router-dom`), so
  `/about` and `/blog/<slug>` are not files on disk. `netlify.toml` rewrites
  every unmatched path to `/index.html` with a `200`, which is what makes a
  refresh or a pasted deep link work instead of hitting Netlify's 404 page.
  The same rule is duplicated in `public/_redirects` so it also ships inside
  `dist/` for manual drag-and-drop deploys.
- **Cache headers.** Vite fingerprints everything under `/assets`, so those are
  cached immutably, while `index.html` is never cached — otherwise a browser
  would keep asking for asset filenames that a new deploy has already replaced.

Unknown URLs render the in-app 404 page (`src/pages/NotFound.tsx`) rather than a
blank screen.

## Theming

Colours are declared once as RGB channel triplets in `src/index.css` (`:root`
for light, `.dark` for dark) and consumed by Tailwind through
`rgb(var(--token) / <alpha-value>)` in `tailwind.config.js`. Adding a colour
means adding the variable in both blocks and mapping it in the config — never
hardcoding a hex in a component.

The chosen theme and language are stored in `localStorage` (`ugc-theme`,
`ugc-lang`) and re-applied by a small inline script in `index.html` before the
first paint, so a refresh in dark mode does not flash white.
