# Full Website Build Prompt — Premium Multi-Page React Website

Use this prompt (or sections of it) to instruct an AI coding agent to build a complete, production-quality multi-page website from scratch using the same methodology, architecture, and design philosophy as this project.

---

## Project Overview

Build a **complete, premium multi-page website** for [ORGANISATION NAME] using Vite + React + TypeScript + Tailwind CSS + Framer Motion. The website should feel like a top-tier product — not a generic template. Every page must have a distinct visual personality, rich interactive components, smooth animations, and zero placeholder content.

---

## Tech Stack

```
Framework:       Vite + React 18 + TypeScript
Styling:         Tailwind CSS v3 (NOT v4) with custom brand palette
Routing:         React Router Dom v6 (createBrowserRouter)
Animation:       Framer Motion (motion/react)
Icons:           Lucide React — ALL icons must be JSX components, NO emojis anywhere
UI Primitives:   Shadcn/ui component patterns (button, input, label, etc.)
Utilities:       clsx + tailwind-merge via cn() helper
```

**Critical install note:** Use `tailwindcss@3` (not @tailwindcss/vite) to avoid peer dependency conflicts with newer Vite versions:
```bash
npm install -D tailwindcss@3 postcss autoprefixer
npm install framer-motion react-router-dom lucide-react clsx tailwind-merge
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── app-navbar.tsx          # Persistent navbar with nav items
│   ├── sections/                   # Reusable interactive section components
│   │   ├── flip-card-grid.tsx
│   │   ├── scroll-timeline.tsx
│   │   ├── counter-showcase.tsx
│   │   ├── image-carousel.tsx
│   │   ├── spotlight-grid.tsx
│   │   ├── bento-grid.tsx
│   │   ├── marquee-logos.tsx
│   │   ├── accordion-visual.tsx
│   │   ├── quote-band.tsx
│   │   ├── comparison-table.tsx
│   │   ├── animated-contact-form.tsx
│   │   └── page-cta-band.tsx
│   └── ui/                         # Low-level UI primitives
│       ├── resizable-navbar.tsx
│       ├── button.tsx
│       ├── footer-section.tsx
│       └── hero-section-*.tsx
├── layouts/
│   └── app-layout.tsx              # Wraps all pages: Navbar + Outlet + Footer
├── lib/
│   └── utils.ts                    # cn() utility
├── pages/
│   ├── home-page.tsx
│   ├── about-page.tsx
│   └── [one file per route].tsx
├── router.tsx                      # createBrowserRouter config
└── main.tsx                        # RouterProvider entry point
```

---

## Design System

### Color Palette (Tailwind Config)

Define a custom `brand` palette derived from the organisation's logo/identity:

```javascript
// tailwind.config.cjs  ← use .cjs extension for CommonJS compatibility
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf6f0',   // warmest background
          100: '#fdebd0',   // light tint
          200: '#f5c68a',   // soft accent
          300: '#e8a045',   // warm mid
          400: '#c97c1e',   // active mid
          500: '#a0601a',   // muted text
          600: '#7e4510',   // darker text
          700: '#7e1625',   // PRIMARY action (maroon/brand)
          800: '#5f121d',   // dark brand
          900: '#3d0b14',   // darkest text
          950: '#1e050a',   // near-black
        },
      },
      boxShadow: {
        brand: '0 16px 40px rgba(126, 22, 37, 0.2)',
      },
    },
  },
  plugins: [],
}
```

### Global Base Styles (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, #root {
    @apply m-0 min-h-screen w-full;
  }
  body {
    background-color: #f9f4ee; /* warm ivory — matches brand-50 */
    color: #5f121d;            /* deep brand text */
    @apply antialiased;
  }
}
```

### Typography Rules
- Headings: `font-bold` or `font-black`, `text-brand-900`
- Subheadings / body: `text-brand-600`, `text-sm` to `text-base`
- Eyebrows (small labels above headings): `uppercase tracking-widest text-xs font-semibold text-brand-700` inside a `rounded-full border border-brand-200 bg-brand-50 px-3 py-1`
- CTA buttons: `bg-brand-700 text-white hover:bg-brand-800`

---

## Routing Architecture

```typescript
// src/router.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
// import all pages...

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      // ... all other routes
    ],
  },
])
```

```typescript
// src/layouts/app-layout.tsx
import { Outlet } from 'react-router-dom'
import { AppNavbar } from '@/components/layout/app-navbar'
import { Footer } from '@/components/ui/footer-section'

const AppLayout = () => (
  <>
    <AppNavbar />
    <div className="pt-16 sm:pt-20">  {/* offset for fixed navbar */}
      <Outlet />
    </div>
    <Footer />
  </>
)
```

---

## Navbar — Resizable Sticky with Scroll Behaviour

The navbar must:
- Be `fixed` (not sticky) at top, z-50
- Have top padding so it's not flush to the browser edge (`top-4` or `top-5`)
- **Shrink/scale on scroll** using `useScroll` + `useMotionValueEvent` from Framer Motion
- **Hide 1–2 secondary nav items** when scrolled/compact to reduce visual clutter
- On mobile: render as a **full sidebar drawer** with overlay + slide-in animation (NOT a dropdown or horizontal scroll)
- Use `rounded-xl` / `rounded-lg` (NOT `rounded-full` — corners should be subtle)

Nav items array structure:
```typescript
const navItems = [
  { name: 'Home', link: '/home' },
  { name: 'About', link: '/about' },
  { name: 'Academy', link: '/academy' },
  // ... etc
  // Mark lower-priority items as hideable when compact:
  { name: 'Safeguarding', link: '/safeguarding', hideWhenCompact: true },
]
```

---

## Reusable Section Component Library

Build ALL of these as standalone reusable components in `src/components/sections/`. Every component must:
- Accept typed props (TypeScript interfaces)
- Use `icon: React.ReactNode` (NOT `string`) for icon props — pass `<Icon className="h-5 w-5" />` from pages
- Have consistent `mt-10` top margin (or `mt-10` on full-width sections)
- Use `whileInView` Framer Motion animations with `viewport={{ once: true }}`
- Be fully responsive with `sm:` and `lg:` breakpoints

### 1. FlipCardGrid
Cards that **physically flip 180° in 3D** on hover/click to reveal detail on the back.
- Front face: white card, icon, title, short teaser, "Hover for more →"
- Back face: gradient background, title, full description in white
- Use CSS `perspective`, `transformStyle: preserve-3d`, `backfaceVisibility: hidden`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Card height: `h-56` fixed
- Props: `heading: string`, `items: { title, icon: ReactNode, front, back, accent (CSS gradient string) }[]`

### 2. ScrollTimeline
A vertical timeline where an **ink line draws itself** as the user scrolls through it.
- Uses `useScroll` + `useTransform` targeting the section `ref` to drive line height
- Events alternate left/right on desktop (`sm:flex-row` / `sm:flex-row-reverse`)
- On mobile: single column, `pl-14` to offset from the fixed left line
- Central dot marker per event
- Props: `heading`, `subheading?`, `events: { year, title, description, icon: ReactNode }[]`

### 3. CounterShowcase
Animated number counters that **count up from 0** when scrolled into view.
- Uses `useMotionValue` + `useTransform` + `animate()` from Framer Motion
- `useInView` with `once: true` triggers the animation once
- Supports `dark` prop: dark background (`bg-brand-900`) or light (`bg-brand-50`)
- `mt-10` on the section class — this is a full-width section, easy to forget spacing
- Props: `heading`, `subheading?`, `items: { label, value: number, suffix, description, icon: ReactNode }[]`, `dark?: boolean`

### 4. ImageCarousel
A **full-bleed auto-playing carousel** with slide-in/out transitions.
- Uses `AnimatePresence` with `custom` direction prop for directional slide animation
- Auto-advances every 4 seconds via `setInterval`
- Prev/Next buttons with `backdrop-blur-sm` overlay style
- Dot navigation at bottom-right (active dot wider: `w-6`)
- Props: `heading?`, `slides: { image, title, subtitle, tag }[]`, `autoplay?: boolean`

### 5. SpotlightGrid
A mosaic image grid that **dims all other items** when one is hovered, revealing a description.
- `hoveredIndex` state controls an `AnimatePresence`-driven description reveal
- Overlay `motion.div` animates `opacity` to 0.55 on non-hovered items
- Variable heights: `index % 3 === 1 ? 340 : 260` for organic layout
- Props: `heading`, `subheading?`, `items: { title, description, image, tag }[]`

### 6. BentoGrid
A **variable-span mosaic grid** with mixed image and icon tiles.
- Uses CSS `auto-rows-[200px]` with `row-span-2` and `col-span-2` for bento layout
- Image tiles: absolute positioned image + gradient overlay, white text
- Icon tiles: gradient accent background, brand-colored icon + text
- `whileHover={{ y: -4 }}` for subtle lift
- Props: `heading`, `subheading?`, `items: { title, description, image?, icon?: ReactNode, span?: 'wide'|'tall'|'normal', accent?: string }[]`

### 7. MarqueeLogos
A **continuously scrolling horizontal strip** of labelled icon pills.
- Uses `motion.div` with `animate={{ x: [0, -50 * items.length] }}` + `repeat: Infinity`
- Items array doubled (`[...items, ...items]`) for seamless loop
- Edge fade: `pointer-events-none` gradient overlays on left and right
- Props: `heading?`, `items: { label, icon: ReactNode }[]`

### 8. AccordionVisual
An **animated accordion** (open/close with height animation) paired with a full-height image.
- Uses `AnimatePresence` + `motion.div` with `height: 0 → "auto"` for smooth open/close
- `+` icon rotates 45° when open (becomes `×`)
- Image column hidden on mobile (`hidden lg:block`)
- Props: `heading`, `subheading?`, `items: { question, answer, icon: ReactNode }[]`, `image?`

### 9. QuoteBand
A **dark rotating testimonial band** that auto-advances every 5 seconds.
- Full-width dark gradient background (`bg-gradient-to-r from-brand-900 to-brand-800`)
- `AnimatePresence mode="wait"` with `y: 16 → 0 → y: -16` crossfade
- Decorative `"` mark at top
- Dot navigation
- `mt-10` — this is full-width, easy to forget spacing
- Props: `quotes: { text, author, role, avatar? }[]`

### 10. ComparisonTable
A **before/after comparison table** with staggered row reveals.
- Dark header row with column labels
- Alternating `highlight` rows use `bg-brand-50`
- "Without" column: `line-through text-brand-400`
- "With" column: `font-medium text-brand-700` with `✓` prefix
- Props: `heading`, `subheading?`, `rows: { feature, withUs, without, highlight? }[]`, `withLabel?`, `withoutLabel?`

### 11. AnimatedContactForm (Multi-Step)
A **3-step animated form** with step indicator, slide transitions, and success state.
- Steps: `type → details → message → done`
- Step indicator bar at top shows progress
- Each step slides in/out with `AnimatePresence` + `x: 30 → 0 → x: -30`
- Step 1: Grid of enquiry type buttons with icons
- Step 2: Name, email, phone fields
- Step 3: Textarea message
- Step 4 (done): Spring-animated success icon, personalised confirmation
- Props: None — fully self-contained

### 12. PageCtaBand
A simple **animated call-to-action card** at the bottom of every page.
- `whileInView` scale-in animation
- `rounded-2xl border border-brand-200 bg-white shadow-brand`
- Two buttons: primary (brand) + outline
- Props: `title`, `description`, `primaryCta`, `secondaryCta`

---

## Page-Level Blueprint

Every page should have a **different section rhythm** — never repeat the same order across pages. Use the grid below as reference:

| Page | Section Order |
|---|---|
| **Home** | Hero1 → Hero2 → Marquee → Programme Showcase Grid → Counter (dark) → FlipCards → SpotlightGrid → QuoteBand → BentoGrid → CtaBand |
| **About** | Hero → Timeline → Counter (dark) → FlipCards → QuoteBand → BentoGrid → CtaBand |
| **Academy** | Hero → Marquee → BentoGrid → Carousel → Counter → Accordion → CtaBand |
| **Enrichment** | Hero → Marquee → SpotlightGrid → Carousel → FlipCards → Counter → CtaBand |
| **Courses** | Hero → Marquee → FlipCards → BentoGrid → Counter (dark) → Accordion → CtaBand |
| **Consultancy** | Hero → FlipCards → ComparisonTable → Counter (dark) → Accordion → QuoteBand → CtaBand |
| **Safeguarding** | Hero → Marquee → BentoGrid → Accordion → ComparisonTable → CtaBand |
| **Support Us** | Hero → Counter (dark) → SpotlightGrid → FlipCards → QuoteBand → BentoGrid → CtaBand |
| **Contact** | Split (info + form) → Marquee → BentoGrid → QuoteBand |

---

## Icon Rules (Critical)

**Never use emojis anywhere in the codebase.**

All icons must be imported from `lucide-react` and passed as JSX:

```tsx
// In the page file — import specific icons:
import { Moon, BookOpen, Shield, GraduationCap } from "lucide-react"

// Pass as ReactNode prop:
icon: <Moon className="h-5 w-5" />
icon: <BookOpen className="h-6 w-6" />
```

**Consistent sizing guide:**
- `h-4 w-4` — MarqueeLogos pill icons
- `h-5 w-5` — BentoGrid, Accordion, Timeline icons
- `h-6 w-6` — FlipCardGrid, CounterShowcase icons
- `h-8 w-8` — Large feature icons, hero stat icons

**Common icon mappings:**
| Concept | Lucide Icon |
|---|---|
| Islamic/Faith | `Moon`, `BookMarked`, `BookOpen` |
| Education/Learning | `GraduationCap`, `School`, `BookOpen` |
| Community | `Users`, `Globe`, `HeartHandshake` |
| Safety/Trust | `Shield`, `ShieldCheck`, `Lock` |
| Progress/Growth | `TrendingUp`, `BarChart2`, `CheckCircle2` |
| Language | `PenLine`, `FileText`, `Globe` |
| Sport/Activity | `Dumbbell`, `Trophy`, `Activity` |
| Outdoor | `Tent`, `Mountain`, `Sun` |
| Values | `Heart`, `Feather`, `Rocket`, `Zap` |
| Contact | `MapPin`, `Mail`, `Phone`, `Clock` |
| Organisation | `Building2`, `Briefcase`, `ClipboardList` |
| Assessment | `BarChart2`, `Map`, `Search`, `Wrench` |
| Disclosure | `Megaphone`, `AlertTriangle`, `UserCircle` |

---

## Animation Strategy

### Entry Animations (use on every section)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.4 }}
>
```

### Staggered Children
```tsx
// Delay each child by index * 0.07 seconds
transition={{ duration: 0.4, delay: index * 0.07 }}
```

### Hover Effects
```tsx
whileHover={{ y: -4 }}        // card lift
whileHover={{ scale: 1.02 }}  // subtle scale
```

### Scroll-Driven (ScrollTimeline ink line)
```tsx
const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.2"] })
const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
```

### Animated Numbers (CounterShowcase)
```tsx
const count = useMotionValue(0)
const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)
animate(count, targetValue, { duration: 1.8, ease: "easeOut" })
```

### Directional Carousel
```tsx
const variants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
}
```

---

## Spacing System

Use these consistently — **never skip margin between sections**:

| Context | Class |
|---|---|
| Constrained sections (max-w-7xl) | `mt-10` on `<section>` |
| Full-width sections (CounterShowcase, QuoteBand) | `mt-10` embedded in the section's own className |
| Last section before footer | Already padded by `pb-16` on `<main>` |
| Inner section heading block | `mb-8` |
| Card grids | `gap-4` |
| Inner card padding | `p-5` or `p-6` |

---

## Image Strategy

Use **Unsplash** with specific, contextually accurate images. For an education/community site:

```
Academic classrooms:     photo-1580582932707  (classroom)
                         photo-1509062522246  (students studying)
                         photo-1427504494785  (learning)
Community/people:        photo-1523240795612  (group)
                         photo-1522202176988  (collaboration)
                         photo-1529156069898  (community)
Outdoor/sport:           photo-1517649763962  (sport)
                         photo-1506784983877  (outdoor/nature)
                         photo-1464820453369  (adventure)
Professional/office:     photo-1454165804606  (consultancy)
                         photo-1507003211169  (professional)
Books/language:          photo-1456324504439  (books/Arabic)
```

Always append: `?w=900&auto=format&fit=crop&q=80` for performance.
For carousel full-bleed: `?w=1600&auto=format&fit=crop&q=80`

---

## Hero Section Pattern

Every sub-page uses a shared `PageHero` component with this structure:
- Left column: eyebrow label + h1 title + description + two CTA buttons
- Right column: **animated image collage** (3 images, staggered entry, hover scale)
- Mobile: single column, images hidden or stacked

```tsx
<PageHero
  eyebrow="Page Section Name"
  title="Primary headline for this page"
  description="2–3 sentence description of the page's purpose and audience."
  primaryCta="Main Action"
  secondaryCta="Secondary Action"
  images={[imageUrl1, imageUrl2, imageUrl3]}
/>
```

---

## Content Writing Rules

- All content must be specific and real — **no Lorem Ipsum, no placeholder text**
- Every section heading should be action-oriented or value-focused
- Subheadings clarify who the section is for and what benefit it delivers
- Testimonials should feel personal and specific (name, role, location)
- Stats should be real numbers (if real data unavailable, use plausible estimates)
- CTA labels should be specific: "Book a Visit" > "Learn More", "Enrol Now" > "Click Here"

---

## Footer

The footer must blend with the warm ivory background — avoid stark white or black. Include:
- Organisation logo/name + tagline
- Quick links grouped by section
- Contact details (address, email, phone)
- Social media icons (use Lucide: `Twitter`, `Facebook`, `Instagram`, `Youtube`)
- Copyright + policy links
- No dark mode toggle

---

## What NOT to Do

- Never use emojis as icons — always use Lucide React JSX components
- Never use `tailwind.config.js` — use `.cjs` extension for CommonJS compatibility
- Never use `@tailwindcss/vite` — install `tailwindcss@3` separately
- Never hardcode hex colors inline when a brand token exists
- Never repeat the same section order across multiple pages
- Never use `sticky` for navbar — use `fixed` for true overlay behaviour
- Never use a dropdown for mobile nav — use a full sidebar drawer with overlay
- Never use `text-Xrem` inline — always use Tailwind text classes
- Never leave a full-width section (CounterShowcase, QuoteBand) without `mt-10`

---

## Starter Prompt (copy-paste ready)

```
Build a complete, production-quality multi-page website for [ORGANISATION NAME].

Tech stack:
- Vite + React 18 + TypeScript
- Tailwind CSS v3 (install as: npm install -D tailwindcss@3 postcss autoprefixer)
- React Router Dom v6 with createBrowserRouter
- Framer Motion for all animations
- Lucide React for ALL icons (no emojis anywhere)
- Shadcn/ui patterns for UI primitives

Architecture:
- Fixed resizable navbar (shrinks on scroll, hides 1–2 items when compact, full sidebar drawer on mobile)
- App layout with persistent navbar + footer wrapping all routes via React Router Outlet
- Path alias @/ pointing to src/

Design system:
- Brand palette: [PRIMARY HEX], [SECONDARY HEX], [BACKGROUND HEX]
- Define as custom Tailwind `brand` tokens (50–950 scale)
- Warm background colour as body background, not pure white
- All brand colours used via brand-* tokens, never hardcoded

Build these reusable section components (src/components/sections/):
1. FlipCardGrid — 3D flip cards showing detail on hover
2. ScrollTimeline — scroll-driven ink line timeline
3. CounterShowcase — animated counting numbers, supports dark/light variant
4. ImageCarousel — auto-playing directional slide carousel
5. SpotlightGrid — image mosaic with hover spotlight and description reveal
6. BentoGrid — variable-span mosaic grid, mixed image + icon tiles
7. MarqueeLogos — infinite scrolling pill strip with edge fade
8. AccordionVisual — animated accordion with side image panel
9. QuoteBand — dark auto-rotating testimonial band
10. ComparisonTable — before/after staggered table
11. AnimatedContactForm — 3-step multi-stage form with slide transitions
12. PageCtaBand — final CTA card per page

Pages to build:
[LIST YOUR PAGES]

For each page:
- Use a DIFFERENT section rhythm (never the same order twice)
- Every section heading must be purpose-driven and specific
- All images from Unsplash with contextually correct queries
- All icons from Lucide React (h-4/5/6 w-4/5/6 className depending on context)
- Framer Motion whileInView animations on every section
- Consistent mt-10 between sections, pb-16 on main

Content for [ORGANISATION NAME]:
[PASTE SITEMAP OR CONTENT BRIEF HERE]
```

---

*This document was generated from the Al-Hikmah website build. Refer to the source codebase at `src/` for full implementation.*
