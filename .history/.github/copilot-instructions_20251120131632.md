# Personal Portfolio - AI Coding Agent Instructions

## Architecture Overview

This is a **bilingual portfolio website** (Turkish/English) built with:
- **React 19** + **Vite** + **Tailwind CSS v4** (using new `@theme` syntax)
- **Route-based i18n**: `/tr/*` and `/en/*` paths for language switching
- **Framer Motion** for page transitions and animations
- **Custom design system**: Crimson red theme with dark/light mode

### Key Architectural Decisions

**Language System**: Path-based routing (`/tr/projects`, `/en/projects`) instead of i18n library. The `useLanguage()` hook extracts language from URL path and provides `t()` function. All translations live in `src/lib/translations.js`.

**Theme System**: CSS variables in `index.css` with `.dark` class toggling. Custom animations defined in `@theme` block using Tailwind v4 syntax. Theme persists via localStorage in `ThemeToggle.jsx`.

**Component Structure**: 
- Pages (`src/pages/*`) are layout containers
- Each page wraps content with `<PageTransition>` for route animations
- `<CrimsonWebBackground>` is a shared animated canvas background
- `<Navbar>` is fixed with scroll-based backdrop blur

## Development Workflow

```bash
npm run dev          # Dev server on http://localhost:5173
                     # Network access: host 0.0.0.0 configured in vite.config.js
npm run build        # Production build
npm run lint         # ESLint check
```

**Mobile testing**: Dev server configured with `host: '0.0.0.0'` in `vite.config.js` for local network access.

## Critical Conventions

### Styling Patterns

1. **Tailwind v4 Syntax**: Use `@theme` for custom properties, NOT `theme.extend` in config
   ```css
   @theme {
     --color-primary: hsl(var(--primary));
     --animate-fade-in: fade-in 0.7s ease-out forwards;
   }
   ```

2. **Custom Utilities**: Defined in `index.css` using `@utility` directive
   - `text-glow`: Crimson text shadow effect
   - `font-heading`: Inter font with tight letter-spacing
   - `font-code`: Source Code Pro for code-like text
   - `web-node`, `web-thread`: Canvas node styling for background

3. **Class Merging**: Always use `cn()` helper from `src/lib/utils.js` (combines `clsx` + `tailwind-merge`)
   ```jsx
   className={cn("base-classes", condition && "conditional-classes")}
   ```

### Component Patterns

**Language-Aware Components**: Use `useLanguage()` hook, NOT direct translation imports
```jsx
const { t, lang } = useLanguage();
return <h1>{t('hero_title')}</h1>;
```

**Route Structure**: All pages must have BOTH language routes in `App.jsx`
```jsx
<Route path="/tr/new-page" element={<NewPage />}/>
<Route path="/en/new-page" element={<NewPage />}/>
```

**Page Template**: Every page follows this structure:
```jsx
export const PageName = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CrimsonWebBackground />
      <Navbar />
      {/* Page content with pt-32 for fixed navbar */}
    </div>
  </PageTransition>
);
```

### Animation System

**Page Transitions**: Dual triangle wipe effect via `PageTransition.jsx` - uses `clipPath` polygons animating in opposite directions.

**Framer Motion**: Uses `AnimatePresence mode="wait"` in routing. Key by pathname to trigger transitions.

**Custom Animations**: Predefined in `@theme` as CSS variables:
- `animate-fade-in` through `animate-fade-in-delay-4`: Staggered content reveals
- `animate-web-pulse`: Background node pulsing
- `animate-float`: Subtle vertical movement

### Design System

**Colors**: 
- Primary: Crimson red (`hsl(0 70% 45%)` light, `hsl(0 65% 50%)` dark)
- Background: Near-white light, near-black dark
- Always reference via CSS variables: `bg-background`, `text-primary`

**Typography**:
- Body: Inter (via `font-heading` utility)
- Code: Source Code Pro (via `font-code` utility)
- Hierarchy: `text-4xl md:text-5xl` for responsive scaling

**Spacing**: Fixed navbar requires `mt-32` or `pt-32` on page content to prevent overlap.

## File Organization

```
src/
├── components/     # Reusable UI (Navbar, ThemeToggle, etc.)
├── pages/          # Route components (Home, Projects, etc.)
├── lib/
│   ├── translations.js   # All i18n strings (tr/en objects)
│   └── utils.js         # Helpers: cn(), useLanguage()
├── assets/images/  # Static images
└── index.css       # Global styles, theme, utilities
```

## Common Tasks

**Add new translation**: Update both `tr` and `en` objects in `src/lib/translations.js`

**Add new page**: 
1. Create component in `src/pages/`
2. Add routes for `/tr/path` and `/en/path` in `App.jsx`
3. Use page template pattern with `PageTransition` + `CrimsonWebBackground`

**Custom animation**: Define in `@theme` block of `index.css`, reference as `animate-{name}`

**Responsive design**: Mobile-first, use `md:` prefix for desktop breakpoints (768px+)

## Common Pitfalls

- ❌ DON'T import `translations` directly - use `useLanguage()` hook
- ❌ DON'T use Tailwind v3 config syntax - use `@theme` in CSS
- ❌ DON'T forget `pt-32` spacing when navbar is fixed
- ❌ DON'T add route without BOTH language paths
- ✅ DO use `cn()` for className merging
- ✅ DO wrap pages with `<PageTransition>`
- ✅ DO test in both languages and themes
