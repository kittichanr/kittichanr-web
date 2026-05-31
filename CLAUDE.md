# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with Astro 5.x, based on the Astro Cactus theme. Statically generated site deployed to Vercel.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start dev server at http://localhost:4321
pnpm dev
# or
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check        # Astro type checking
pnpm tsc          # TypeScript type checking (noEmit)

# Linting and formatting
pnpm lint         # ESLint
pnpm prettier     # Format all files with Prettier
```

## Architecture

### Path Aliases (tsconfig.json)

```typescript
@/assets/*      → src/assets/*
@/components/*  → src/components/*.astro
@/layouts/*     → src/layouts/*.astro
@/utils         → src/utils/index.ts
@/stores/*      → src/stores/*
@/types         → src/types.ts
@/site-config   → src/site.config.ts
```

### Site Configuration

- **Global config**: `src/site.config.ts` exports `siteConfig` and `menuLinks`
  - Contains author, title, description, locale settings
  - Menu links are used in Header and Footer components
- **Astro config**: `astro.config.ts` includes:
  - Vercel adapter with web analytics enabled
  - Markdown plugins: `remarkReadingTime`, `remarkUnwrapImages`, `rehypeExternalLinks`
  - Syntax highlighting theme: "dracula"
  - Custom Vite plugin for loading TTF fonts as raw buffers (needed for Satori OG image generation)

### Styling

- **Tailwind CSS** with custom theme extending default
- **Dark mode**: Class-based (`darkMode: "class"`)
- **Custom colors**: HSL-based CSS variables defined in theme
  - `bgColor`, `textColor`, `link`, `accent`, `accent-2`, `quote`
- **Typography plugin**: Custom "cactus" variant for prose styling
- **Custom utility**: `.cactus-link` for underline hover effect
- **Global styles**: `src/styles/global.css`

### Code Style

- **Formatter**: Prettier with tabs, 100 char width, semicolons
  - Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
- **Linter**: ESLint with TypeScript, Astro, and accessibility rules
- **Type safety**: Uses Astro's strictest tsconfig

## Deployment

- **Platform**: Vercel
- **Output**: Static (`output: "static"`)

## Important Notes

- The project uses **pnpm** (specified in `packageManager` field)
- OG image generation requires **TTF fonts as raw buffers** - don't remove the Vite plugin in astro.config.ts
- The site is optimized for **static generation** - avoid adding server-side features
