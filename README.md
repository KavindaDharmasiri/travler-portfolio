# Travler Portfolio Platform

A Next.js 16 portfolio and admin platform for showcasing backend/full-stack projects, handling inquiries, and managing content.

## Features

- Responsive, glassmorphism-styled marketing site
- Project registry with categories, search, and case-study pages
- Contact and consultation inquiry forms (stored in MySQL)
- Admin dashboard with project CRUD, inquiry inbox, settings, and account
- Newsletter subscription
- Insights/blog section
- SEO (sitemap, robots, OpenGraph)

## Tech Stack

- Next.js 16.1.6 (webpack mode)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- MySQL (mysql2)
- Nodemailer (optional email notifications)
- Cloudinary (optional image uploads)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment file:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
npm run dev
```

4. Open http://localhost:3000

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint
- `npm run typecheck` - TypeScript check

## Environment Variables

See `.env.example`.

## Admin

- Login: `/login`
- Default admin (first run): `ADMIN_EMAIL` / `ADMIN_PASSWORD`
- Admin routes are under `/admin/*`

## Deployment

Recommended: Vercel. Set environment variables in the hosting provider.

```bash
npm run build
npm start
```
