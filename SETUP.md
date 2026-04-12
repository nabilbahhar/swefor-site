# SweFOR Maghreb Network Website

A bilingual (EN/FR) Next.js 15 website showcasing 7+ years of peacebuilding work across Morocco, Algeria, Tunisia, and Western Sahara.

## Project Overview

This website documents the SweFOR Maghreb Network's journey from 2018-2026, featuring:

- **764 communications** across multiple projects
- **15 international trips** to key coordination hubs
- **112+ network members** across 5 countries
- **5 active projects** focused on dialogue, training, and peacebuilding

## Technology Stack

- **Next.js 15** - App Router with TypeScript
- **next-intl 4.9.1** - Bilingual support (EN/FR)
- **next-themes** - Dark/Light mode
- **Tailwind CSS 4** - Modern utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout (no fonts)
│   ├── globals.css                 # Global styles
│   └── [locale]/
│       ├── layout.tsx              # Locale layout with theme provider
│       ├── page.tsx                # Home page
│       ├── timeline/page.tsx       # Project timeline (2018-2026)
│       ├── travels/page.tsx        # 15 international trips
│       ├── people/page.tsx         # Team directory (112+ members)
│       ├── projects/page.tsx       # 5 active projects
│       ├── documents/page.tsx      # Document library (coming soon)
│       └── vision/page.tsx         # 3 strategic proposals for future
├── components/
│   ├── Navbar.tsx                  # Sticky responsive navigation
│   ├── Footer.tsx                  # Footer with links
│   ├── ThemeToggle.tsx             # Dark/Light toggle
│   ├── LanguageSwitcher.tsx        # EN/FR switcher
│   ├── ThemeProvider.tsx           # next-themes wrapper
│
├── i18n/
│   ├── routing.ts                  # next-intl routing config
│   ├── request.ts                  # Server-side i18n setup
├── lib/
│   └── data.ts                     # All structured data (travels, team, projects, etc.)
├── messages/
│   ├── en.json                     # Complete English translations
│   └── fr.json                     # Complete French translations
└── middleware.ts                   # next-intl middleware

Dockerfile                          # Multi-stage production build
next.config.ts                     # Next.js config with next-intl plugin
tailwind.config.ts                 # Tailwind customization (if needed)
tsconfig.json                      # TypeScript config with @ alias
```

## Features

### 1. Internationalization (EN/FR)
- Complete translations for all pages and UI elements
- Server-side rendering with next-intl
- Language switcher in navbar
- Dynamic routing: `/en/*` and `/fr/*`

### 2. Dark/Light Mode
- System preference detection
- Manual toggle via ThemeToggle component
- Persistent across sessions (next-themes)
- Optimized colors for both modes

### 3. Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interactive elements

### 4. Smooth Animations
- Framer Motion for page transitions
- Staggered container animations
- Hover effects on cards
- Scroll-triggered animations

### 5. Data Structure
All dynamic content is in `/src/lib/data.ts`:
- Timeline events (10 major milestones)
- 15 international trips grouped by destination
- 14 team members (staff + participants)
- 5 active projects with impact metrics
- 3 strategic vision proposals (2026+)

## Key Pages

### Home (`/[locale]/`)
- Hero section with stats
- 7+ years of impact overview
- Key metrics cards
- Call-to-action buttons

### Timeline (`/[locale]/timeline`)
- Interactive timeline from 2018 to 2026
- Major events and milestones
- Visual timeline with dots and connecting line
- Responsive design

### Travels (`/[locale]/travels`)
- 15 trips grouped by destination
- Trip cards with dates, locations, purposes
- Summary statistics (10 Tunisia, 3 Sweden, 2 Turkey)
- Beautiful card layout

### People (`/[locale]/people`)
- Team directory with 14 members
- SweFOR staff section (8 members)
- Network participants section (6 members)
- Communication count for each person

### Projects (`/[locale]/projects`)
- 5 active projects with descriptions
- Project icons (Globe, Users, MessageCircle, Leaf, Zap)
- Communication metrics per project
- Total impact overview

### Documents (`/[locale]/documents`)
- Coming soon placeholder
- Document categories preview
- Future content roadmap
- Status messaging

### Vision (`/[locale]/vision`)
- 3 strategic proposals for 2026+
- Detailed descriptions and activities
- Implementation timeline
- Call-to-action for partners

## Styling

### Color Scheme
- **Primary Blue**: `#1F4E79` (SweFOR brand)
- **Accent Gold**: `#D4A843` (highlight)
- **Light Mode**: White backgrounds, dark text
- **Dark Mode**: Dark backgrounds, light text

### Design Features
- Clean, professional aesthetic
- Generous whitespace
- Subtle shadows on cards
- Hover animations on interactive elements
- Smooth transitions (200ms default)

## Translations

Both `/src/messages/en.json` and `/src/messages/fr.json` contain complete translations for:
- Navigation links
- Page titles and descriptions
- Timeline events
- Travel information
- Team member roles
- Project descriptions
- Vision proposal details
- Footer content

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will be available at:
- English: http://localhost:3000/en
- French: http://localhost:3000/fr

### Production Build

```bash
npm run build
npm start
```

Build output:
- `.next/standalone/` - Production-ready files
- `.next/static/` - Optimized assets
- Standalone mode enabled for Docker deployment

### Docker Deployment

Build and run with Docker:

```bash
docker build -t swefor-site .
docker run -p 3000:3000 swefor-site
```

The Dockerfile uses multi-stage build:
1. **Builder stage** - Install dependencies and build
2. **Runtime stage** - Minimal production image with only necessary files

## Deployment to Coolify

1. Push repository to GitHub
2. Connect repository to Coolify project: `swefor.nbahhar.com`
3. Configure:
   - Dockerfile: Point to `/Dockerfile`
   - Port: `3000`
   - Build command: Already configured in Dockerfile
4. Deploy!

### Environment Variables (if needed)

Currently no environment variables required. All configuration is static.

## Customization

### Adding a New Page

1. Create `/src/app/[locale]/newpage/page.tsx`
2. Add translations to `/src/messages/en.json` and `/src/messages/fr.json`
3. Update navigation links in `/src/components/Navbar.tsx`
4. Add routing config in `/src/i18n/routing.ts` if using exact pathnames

### Updating Data

Edit `/src/lib/data.ts` to update:
- Timeline events
- Team members
- Projects
- Travel information
- Vision proposals

Then import and use in page components.

### Changing Colors

Update colors in:
1. `/src/app/globals.css` (CSS custom properties)
2. Individual components (Tailwind classes with `dark:` prefix)

## Performance Optimizations

- Standalone Next.js output for minimal Docker image
- Static page generation where possible
- Image optimization ready
- Code splitting with dynamic imports
- Turbopack compilation for fast builds

## SEO

- Metadata configured in root layout
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly responsive design

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Dark mode support via `prefers-color-scheme`

## Troubleshooting

### Build fails with font errors
The root layout does NOT use Google Fonts (removed to avoid network issues during build). If you need custom fonts, add them to the locale layout or use system fonts.

### next-intl middleware warning
The warning about middleware being deprecated is expected. Continue using middleware.ts as configured.

### Multiple lockfiles warning
Ignore the warning about multiple lockfiles. This is expected in monorepo setups.

## Future Enhancements

Ideas for future development:
- Blog/articles section
- Event calendar
- Partner directory
- Success stories/testimonials
- Donation integration
- Newsletter signup
- Social media feeds
- Photo gallery improvements

## Contact & Support

For questions about the website or to contribute:
- Visit: https://swefor.nbahhar.com
- Contact: SweFOR Maghreb Network

## License

Project created for SweFOR's Maghreb Network initiative.

## Built with Love

For Peace. By Dialogue. Through Nonviolence.
