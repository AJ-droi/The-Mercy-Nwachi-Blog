# Nwachi Blog

Editorial-style blog built with Next.js App Router, Tailwind CSS v4, and Contentful CMS.

## Overview

This project renders blog content from Contentful and provides:

- Homepage with featured hero slider + latest posts grid
- Blog listing with pagination
- Category filtering with pagination
- Full-text search with pagination
- Individual blog post pages with rich text rendering
- Static About and Contact pages

## Tech Stack

- Next.js `16.1.6` (App Router)
- React `19.2.3`
- TypeScript (strict mode)
- Tailwind CSS `v4` + custom CSS variables theme
- Contentful Delivery API (`contentful` SDK)
- Rich text rendering via `@contentful/rich-text-react-renderer`git

## Project Structure

```text
blog/
├── app/
│   ├── page.tsx                 # Home page (hero + post grid)
│   ├── blog/page.tsx            # Blog archive with pagination
│   ├── blog/[slug]/page.tsx     # Single post page
│   ├── category/[slug]/page.tsx # Category listing
│   ├── search/page.tsx          # Search results
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── globals.css              # Theme tokens + Tailwind imports
│   └── layout.tsx               # Root layout with Header/Nav/Footer
├── components/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── PostCard.tsx
│   ├── Sidebar.tsx
│   └── Pagination.tsx
├── lib/
│   └── contentful.ts            # Contentful client + query helpers
└── public/
    └── the-nwachi.svg           # Brand logo
```

## Prerequisites

- Node.js 20+ recommended
- npm (or another package manager)
- A Contentful space with blog content types populated

## Environment Variables

Create `blog/.env.local`:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_DELIVERY_TOKEN=your_content_delivery_api_token
CONTENTFUL_ENVIRONMENT=master
```

Notes:

- `CONTENTFUL_ENVIRONMENT` is optional and defaults to `master`.
- Missing `CONTENTFUL_SPACE_ID` or `CONTENTFUL_DELIVERY_TOKEN` will cause runtime failures when fetching content.

## Contentful Model Expectations

The app expects these content types and fields:

### `blogPost`

- `title` (Short text)
- `slug` (Short text, unique)
- `excerpt` (Short/long text)
- `content` (Rich Text)
- `coverImage` (Asset)
- `publishedDate` (Date/Time)
- `category` (Reference to `category`)

### `category`

- `name` (Short text)
- `slug` (Short text, unique)

## Installation

From repo root:

```bash
cd blog
npm install
```

## Running Locally

```bash
cd blog
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

In `blog/package.json`:

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Routing Summary

- `/` - Home
- `/blog` - Blog archive (`?page=2`)
- `/blog/[slug]` - Single post
- `/category/[slug]` - Category archive (`?page=2`)
- `/search?q=term` - Search results (`?q=term&page=2`)
- `/about` - About
- `/contact` - Contact

## Data Fetching and Caching

- Content is fetched server-side via `lib/contentful.ts`.
- Listing pages use pagination helpers (`PagedResult`).
- Main content pages set `export const revalidate = 60` (ISR every 60 seconds).

## Current Known Gaps

- `app/contact/page.tsx` posts to `/api/contact`, but no `app/api/contact/route.ts` exists yet.
- Navbar includes `/category` link, but only `/category/[slug]` route exists.
- Some placeholder values still exist (`Your Name`, `hello@yourdomain.com`, dummy social links, placeholder recent posts in footer/sidebar).

## Deployment

Recommended: Vercel deployment for Next.js App Router projects.

Before deploying:

1. Configure all Contentful environment variables in your hosting provider.
2. Ensure Contentful content model and entries are published.
3. Run `npm run build` successfully in `blog/`.

## Next Improvements

1. Implement `app/api/contact/route.ts` for contact form handling.
2. Add category index page at `/category` or update navbar link behavior.
3. Replace placeholder copy/links with real brand content.
4. Add runtime validation/types for Contentful entries to reduce `any` usage.
5. Add automated tests for pagination, search behavior, and content rendering.
