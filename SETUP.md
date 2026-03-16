# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## What's Included

### Pages
- `/` - Landing page with hero, services, products, and insights
- `/contact` - Contact form page

### Components
- `Header` - Sticky navigation with search
- `Footer` - Footer with newsletter subscription

### API Routes
- `POST /api/contact` - Handle contact form submissions
- `POST /api/newsletter` - Handle newsletter subscriptions
- `GET /api/services` - Fetch services data
- `GET /api/insights` - Fetch blog/news data

## Next Steps

### 1. Add Real Images
Replace placeholder images in `/public` folder with actual images:
- Hero section image (modern office building)
- Product images for Ecosystem Technologies section
- Any other visual assets

### 2. Integrate Email Service
Update API routes to connect with your email service:
- **Newsletter**: Mailchimp, SendGrid, ConvertKit
- **Contact Form**: SendGrid, AWS SES, Resend

Example for SendGrid in `/app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In POST handler:
await sgMail.send({
  to: 'info@travlor.com',
  from: 'noreply@travlor.com',
  subject: `Contact from ${name}`,
  text: message,
});
```

### 3. Add Environment Variables
Create `.env.local`:
```
SENDGRID_API_KEY=your_key_here
MAILCHIMP_API_KEY=your_key_here
DATABASE_URL=your_db_url_here
```

### 4. Connect to CMS (Optional)
For dynamic content, integrate with:
- Contentful
- Sanity
- Strapi
- WordPress (headless)

### 5. Add Analytics
- Google Analytics
- Plausible
- Mixpanel

### 6. SEO Optimization
Update metadata in `app/layout.tsx`:
```typescript
export const metadata = {
  title: 'Travlor - Corporate Excellence Platform',
  description: 'Innovating the future of corporate excellence...',
  keywords: ['consulting', 'digital transformation', 'enterprise'],
}
```

### 7. Deploy
Deploy to Vercel (recommended for Next.js):
```bash
npm run build
vercel deploy
```

Or other platforms:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## Customization

### Colors
Main brand color is teal-700. To change:
1. Update Tailwind classes in components
2. Modify `app/globals.css` for global styles

### Content
- Update text in `app/page.tsx`
- Modify service data in `app/api/services/route.ts`
- Update insights in `app/api/insights/route.ts`

### Layout
- Adjust max-width (currently `max-w-7xl`)
- Modify spacing with padding/margin utilities
- Change grid layouts in sections

## Troubleshooting

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
npm run lint
```
