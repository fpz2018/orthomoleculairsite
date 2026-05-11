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

1. **Afbeeldingen** — download/optimaliseer foto's voor blogposts (`public/images/blog/`) en de homepage-foto van Marc.
2. **OG image als PNG/JPG** — `public/images/og-default.svg` werkt voor de site maar Facebook/Twitter/LinkedIn renderen geen SVG-OG. Genereer een 1200x630 PNG of JPG.
3. **Logo PNG** — vervang `public/images/logo.svg` t.z.t. door een echte PNG/SVG met praktijklogo (nu placeholder met initiaal "O").
4. **Resterende blogposts migreren** — 8 blogposts staan nog niet in `src/content/blog/`:
   - tekort-vitamine-d-herkennen
   - de-ultieme-gids-voor-extra-vierge-olijfolie
   - oervoeding
   - vitamine-d
   - kracht-van-magnesium
   - insulineresistentie
   - lactaat
   - afslankprogrammas
5. **Pagina vergoedingen** — definitieve lijst zorgverzekeraars toevoegen.
6. **Foto Marc** — `public/images/marc.jpg` (97 KB, gewired op homepage + over-mij pagina). Originele PNG (1.9 MB) staat als backup in `assets-source/marc.png` (gitignored, niet gedeployed).
7. **Formspree ID** — verifieer of `mkopyzbr` werkt: stuur een testbericht via `/contact` en bevestig op formspree.io.
8. **Volledige blogposts** — de 7 gemigreerde blogs zijn samengevatte versies. Volledige content stond in `_content-raw/` (gitignored, niet meer aanwezig — bron mogelijk WordPress export).
9. **Tone-of-voice blogposts** — structurele pagina's zijn nu u-vorm; blogposts gebruiken nog "je/jij/jouw". Apart pasje doen als wenselijk.

## Optimalisaties (mei 2026)

- Font-bundle van ±644 KB → 166 KB (alleen Latin-subset)
- OG image + Schema.org logo references gefixt
- Testimonials vervangen door registratie/trust-blok
- Blog-categoriefilter werkend gemaakt (client-side)
- Telefoonnummer in header (mobiel-zichtbaar)
- Externe afspraak-links openen in nieuwe tab
- aria-current op actieve nav-link
- Contactformulier: honeypot + privacy-disclaimer
- Tone-of-voice naar u-vorm op alle structurele pagina's
- Dode interne links naar niet-bestaande blogposts gefixt

## Deploy

Build met `npm run build`. Upload `dist/` naar Cloud86 via FTP/SFTP, of stel een GitHub Action in.

## Stack

- Astro 5 (static output)
- @astrojs/sitemap, @astrojs/mdx
- @fontsource/lora, @fontsource-variable/plus-jakarta-sans
- Vanilla CSS met design tokens
