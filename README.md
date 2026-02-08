# Portfolio Website

A world-class, premium portfolio website for an AI-Enhanced Full-Stack Engineer built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Premium Design**: Luxury color palette, refined typography, and Apple-level polish
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Fast loading, SEO-friendly, and smooth animations
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Professional Sections**: Hero, About, Skills, Projects, How I Work, Video Introduction, Services, and Contact

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Contact Information

Edit `components/sections/Contact.tsx`:
- Replace `your.email@example.com` with your email
- Update LinkedIn profile URL
- Update WhatsApp number/URL

### Add Your Video

Edit `components/sections/VideoIntroduction.tsx`:
- Replace the placeholder with your embedded video (YouTube, Vimeo, etc.)

### Add Project Screenshots

1. Screenshots have been captured for all 13 projects
2. Copy the screenshot files to `public/images/` directory
3. See `PROJECT_SCREENSHOTS.md` for the complete list of screenshot files needed
4. The Projects section will automatically display images when available

### Update Projects

The Projects section has been pre-populated with your 13 real projects:
- MyApproved
- UpgradeRoofs
- AdsStarter
- IdentiMarketing
- OmniWTMS
- Nelly's Logistics
- Leverage Academy
- Leverage Journal
- Inboker
- Alkhemmy
- SEOInForce
- FlipRepublic
- Khamare Clarke

All projects include descriptions, problem/solution/impact, features, and live demo URLs. Edit `components/sections/Projects.tsx` if you need to update any project information.

### Customize Colors

Edit `tailwind.config.ts` to change the accent color or other theme colors.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This site is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy

The site will be automatically optimized for production.

## License

Private - All rights reserved
