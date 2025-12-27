# The Open Machine

A Next.js website built with Chakra UI for styling.

## Overview

This is a content-focused website featuring articles, essays, and transmissions. It includes:
- Homepage with navigation
- Library section
- Transmissions (blog posts) with markdown content
- Surveys section

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: Chakra UI
- **Styling**: Emotion
- **Animations**: Framer Motion
- **Content**: Markdown files with Gray Matter for frontmatter parsing

## Development

The development server runs on port 5000:

```bash
npm run dev
```

## Project Structure

- `src/pages/` - Next.js pages (routes)
- `src/components/` - Reusable React components
- `src/_posts/` - Markdown content files
- `src/lib/` - Utility functions (API, markdown processing)
- `src/theme/` - Chakra UI theme configuration
- `public/` - Static assets (images, favicon)

## Deployment

Configured for autoscale deployment on Replit:
- Build: `npm run build`
- Start: `npm start` (runs on port 5000)
