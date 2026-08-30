# Qeema — landing

Next.js 15 App Router port of `qeema-landing-page.html`. Deploys to Vercel with no configuration.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en
npm run build
npm run typecheck
```

## Deploy

```bash
npx vercel          # preview
npx vercel --prod   # production
```

Zero config: Vercel detects Next.js, builds, and prerenders `/en` and `/ar` as static HTML served from the CDN. No environment variables today.

Before the first production deploy, set `SITE` in `lib/i18n.ts` to the real origin if it is not `https://qeema.qa`. It drives the canonical tag, the hreflang pairs, the OG URLs and the sitemap.

## Layout

```
app/
  layout.tsx            pass-through root
  [locale]/
    layout.tsx          <html lang dir>, next/font, per-locale metadata
    page.tsx            the landing page
  globals.css           design tokens, ported byte-for-byte
  sitemap.ts robots.ts icon.svg
components/
  marketing/            the eight sections
  screens/              the four product screens (client)
  app-frame/            browser chrome + step rail
  motion/               Reveal + the once-in-view hook (client)
  ui/                   Mark, Rich
messages/
  en.ts ar.ts           the copy deck
lib/i18n.ts             locales, dir, SITE
middleware.ts           / → /en or /ar by Accept-Language
```

## Rules this repo keeps

**The design tokens are not to be re-derived.** `globals.css` carries the `:root` block from the source file unchanged. Two categories of edit are marked inline: `FONT` (families come from `next/font` variables) and `LOGICAL` (physical properties swapped for logical ones so `/ar` mirrors). Everything else is byte-identical to `qeema-landing-page.html`.

**Server by default.** `"use client"` appears in six files: `Reveal`, the two motion hooks, the four screens, and `Faq`. Every section, all copy, and the FAQ answers are server-rendered and in the initial HTML.

**The copy deck is typed.** `messages/ar.ts` is annotated `Messages`, derived from `en.ts`. A key added to English and forgotten in Arabic is a build error, not an English string leaking onto `/ar`.

**Sequences ship their finished frame.** Each screen renders settled, then strips itself in a layout effect before paint and replays on view. No-JS and `prefers-reduced-motion` therefore both land on the informative end state with no extra code path.

**Strings with markup go through `<Rich>`,** which sets `innerHTML`. Only static author-written deck strings may use it. Anything from a form, an API or a CMS must not.

## Not built yet

Deliberately out of scope for this pass, in the order they were planned:

- `/privacy` and `/security` pages. The footer links to `/[locale]/privacy`, which 404s today.
- Waitlist capture and transactional mail.
- Google sign-in, orgs, the dashboard shell, uploads.
- `opengraph-image.tsx`. No OG image is emitted at all right now, so link previews render as text only. The source file pointed at a `qeema.qa/og.png` that was never created; that dead reference was dropped rather than carried over.

The confidentiality section makes public commitments — no training on uploads, per-org isolation, named provider and region, 30-day deletion including backups, logged support access. Anything built behind this page has to satisfy them.

## Arabic copy

`messages/ar.ts` came from the `DICT` object in the source file. Strings marked `NEW` in that file were not in the original — the old toggle left them in English because they carried no `data-i` attribute. They are translated but have not been reviewed by a native speaker. They cover the tender rows in screen C, the checklist values, the file metadata, the page title and description, the footer city, and the `aria-label`s.
