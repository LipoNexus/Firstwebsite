# LipoNexus Marketing Website — CLAUDE.md

## Quick Start

```bash
cd site
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build + generate sitemap → output in ./out
npm run lint      # Run ESLint
```

## Deploy to Netlify

```bash
# One-time setup
npx netlify-cli login
npx netlify-cli init   # Link to Netlify site, choose "out" as publish dir

# Deploy
npm run build
npx netlify-cli deploy --prod --dir=out
```

Or just push to the linked GitHub branch — Netlify auto-deploys.

## Project Structure

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (fonts, metadata, JSON-LD)
│   │   ├── globals.css         ← Tailwind + brand CSS variables
│   │   └── (site)/             ← Route group with Header + Footer
│   │       ├── layout.tsx
│   │       ├── page.tsx        ← Homepage
│   │       ├── about/page.tsx
│   │       ├── team/page.tsx
│   │       ├── investors/page.tsx
│   │       ├── contact/page.tsx
│   │       └── privacy/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   └── content/                ← All page content as JSON
│       ├── site.json           ← Navigation, company info, footer
│       ├── home.json
│       ├── about.json
│       ├── team.json
│       ├── investors.json
│       ├── contact.json
│       └── privacy.json
├── public/
│   ├── robots.txt
│   ├── llms.txt
│   └── images/
├── next.config.ts              ← Static export + security headers
├── netlify.toml
└── next-sitemap.config.js
```

## Brand Colors

| Token          | Hex       | Usage                          |
|----------------|-----------|--------------------------------|
| Primary Blue   | `#100CC9` | Buttons, accents, links        |
| Hover Blue     | `#2A28F8` | Hover states                   |
| Dark Text      | `#1A1A2E` | Headings                       |
| Body Text      | `#4A4A5A` | Paragraphs                     |
| Light BG       | `#F3F3FF` | Alternate section backgrounds  |
| White          | `#FFFFFF` | Cards, main background         |
| Border         | `#E2E2F0` | Subtle borders                 |

## Typography

- **Headings**: Playfair Display (serif) — 700, 800
- **Body**: Open Sans (sans-serif) — 300, 400, 700
- **Mono**: JetBrains Mono — 400 (for data callouts)

Fonts are loaded via `next/font/google` with `display: "swap"`.

## Adding a New Page

1. Create `src/app/(site)/your-page/page.tsx`
2. Create `src/content/your-page.json` with `meta`, content sections
3. Import the JSON in your page and export `metadata`
4. Add the route to `src/content/site.json` → `nav` array

## Updating Content

All text content lives in `src/content/*.json`. Edit the JSON to update text — no need to touch component code.

- Company info, nav, footer → `site.json`
- Homepage sections → `home.json`
- Team members / advisors → `team.json`
- Investment thesis → `investors.json`

## SEO Checklist for New Content

- [ ] Export `metadata` with `title` and `description` from page file
- [ ] Use `h1` for the main page heading, `h2` for sections
- [ ] Add `alt` text to all images
- [ ] Run `npm run build` to regenerate `sitemap.xml`
- [ ] Submit updated sitemap in Google Search Console

## Environment Variables

None required for the static build. If you add analytics or a form backend, add to `.env.local` and reference via `process.env.NEXT_PUBLIC_*`.
