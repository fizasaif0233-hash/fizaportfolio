/**
 * Base path for static assets (images, video).
 * Set NEXT_PUBLIC_BASE_PATH=/fizaportfolio in GitHub Actions so assets load on GitHub Pages.
 * Empty when not set (local dev or Vercel).
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
