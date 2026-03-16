# Travlor - Corporate Excellence Platform

A modern Next.js landing page for a corporate consulting and technology solutions company.

## Features

- **Responsive Design**: Fully responsive layout matching the provided design specifications
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **API Routes**: Backend endpoints for contact forms, newsletter subscriptions, and data fetching
- **Component-Based**: Reusable Header and Footer components
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- PostCSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/                 # API routes
│   │   ├── contact/         # Contact form endpoint
│   │   ├── newsletter/      # Newsletter subscription
│   │   ├── services/        # Services data
│   │   └── insights/        # Corporate insights/blog
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer with newsletter
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── public/                  # Static assets
└── package.json
```

## API Endpoints

### POST /api/contact
Submit contact form
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "company": "string (optional)"
}
```

### POST /api/newsletter
Subscribe to newsletter
```json
{
  "email": "string"
}
```

### GET /api/services
Fetch all services

### GET /api/insights
Fetch corporate insights/blog posts

## Sections

1. **Hero Section**: Main headline with CTA buttons and growth statistics
2. **Business Solutions**: Three service cards (Strategic Consulting, Digital Infrastructure, Asset Intelligence)
3. **Ecosystem Technologies**: Product showcase with images
4. **Corporate Insights**: Latest news and updates
5. **Footer**: Company info, links, and newsletter subscription

## Customization

- Update colors in `app/globals.css` and Tailwind classes
- Modify content in `app/page.tsx`
- Add real images to `/public` folder
- Integrate with your CRM/email service in API routes

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 Travlor Solutions, Inc. All rights reserved.
