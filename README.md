# SimpleTime Website

Marketing website for [SimpleTime](https://apps.apple.com/us/app/simpletime-time-tracker/id6755532037), available at [simple-time.app](https://simple-time.app).

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Multilingual (English default, German at `/de/`). No analytics, no tracking, self-hosted fonts.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview built site
```

## Project structure

```
src/
├── components/   Reusable UI blocks
├── i18n/         Translation strings and helpers
├── layouts/      Base page layout
├── pages/        Routes (index.astro, de/index.astro, etc.)
└── styles/       Global CSS + Tailwind config
public/
├── logo.png      App icon
├── screenshots/  App Store screenshots
└── CNAME         simple-time.app
```

## Adding a language

1. Add the locale to `src/i18n/ui.ts` and `astro.config.mjs`
2. Create page files under `src/pages/<locale>/`
3. Update navbar/footer link helpers in components

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The `CNAME` file maps the Pages site to `simple-time.app`.
