# Orthomoleculair Praktijk Zeist — Astro website

Statische website voor Orthomoleculair Praktijk Zeist (Marc de Jong), gebouwd met Astro.

## Setup

```bash
npm install
npm run dev      # dev server op http://localhost:4321
npm run build    # build naar dist/
npm run preview  # preview de build
```

## Structuur

- `src/pages/` — alle routes (index, landingspagina's, over-mij, blog, etc.)
- `src/layouts/` — BaseLayout, PageLayout, BlogLayout
- `src/components/` — herbruikbare componenten (Header, Footer, SEOHead, SchemaMarkup, Hero, FAQ, ContactForm, BlogCard, etc.)
- `src/content/blog/` — blogposts als Markdown met content collection schema
- `src/styles/global.css` — design tokens en globale styling
- `src/data/testimonials.json` — testimonials
- `public/` — statische assets (favicon, _redirects, robots.txt, images)
- `_content-raw/` — ruwe gefetchte content uit de oude WordPress site (gitignored)

## Nog te doen

1. **Afbeeldingen** — download/optimaliseer afbeeldingen van de oude site naar `public/images/blog/` en `public/images/`. Bestanden zijn nu gerefereerd op basis van de WordPress URL's of placeholders.
2. **Resterende blogposts migreren** — 9 van de 15 blogposts staan nog niet in `src/content/blog/`:
   - tekort-vitamine-d-herkennen
   - de-ultieme-gids-voor-extra-vierge-olijfolie
   - oervoeding
   - vitamine-d
   - kracht-van-magnesium
   - insulineresistentie
   - lactaat
   - afslankprogrammas
3. **Pagina's vergoedingen** — definitieve lijst zorgverzekeraars toevoegen vanuit de oude site.
4. **Foto Marc** — vervang de placeholder in `src/pages/index.astro`.
5. **OG image** — voeg `public/images/og-default.jpg` toe (1200x630px).
6. **Formspree ID** — controleer of `mkopyzbr` in `src/components/ContactForm.astro` correct is.
7. **Volledige blogposts** — de 6 reeds gemigreerde blogs zijn samengevatte versies. Volledige content staat in `_content-raw/01..07-*.md`.

## Deploy

Build met `npm run build`. Upload `dist/` naar Cloud86 via FTP/SFTP, of stel een GitHub Action in.

## Stack

- Astro 5 (static output)
- @astrojs/sitemap, @astrojs/mdx
- @fontsource/lora, @fontsource-variable/plus-jakarta-sans
- Vanilla CSS met design tokens
