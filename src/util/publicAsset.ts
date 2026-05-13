/**
 * Resolve a path under `public/` for the current Vite `base`
 * (e.g. `/` locally, `/adrika-tech/` on GitHub Pages).
 */
export function publicAsset(path: string): string {
  const clean = path.replace(/^\/+/, '')
  const base = import.meta.env.BASE_URL
  if (base === '/') return `/${clean}`
  const root = base.endsWith('/') ? base.slice(0, -1) : base
  return `${root}/${clean}`
}
