# STA Web — Personal Branding Website

A production-ready personal branding website for a strategy consultant serving multinational clients, investors, and business leaders in ASEAN.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Pages
- Home
- About
- Experience
- Expertise
- Insights
- Speaking & Media
- Contact

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment
Recommended: Vercel.

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep default build command (`next build`) and output settings.
4. Deploy.

## Project Structure

```text
app/
  about/
  contact/
  experience/
  expertise/
  insights/
  speaking/
  globals.css
  layout.tsx
  page.tsx
components/
  Card.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  SectionContainer.tsx
  Timeline.tsx
data/
  siteContent.ts
```

## Notes
- Content is centralized in `data/siteContent.ts` to keep future CMS migration straightforward.
- Metadata and JSON-LD schema are included for baseline SEO.
- UI is mobile-first and performance-oriented with minimal client-side JS.
