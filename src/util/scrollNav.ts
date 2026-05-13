import type { MouseEvent } from 'react'

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

/** When already on `to`, prevent navigation and smooth-scroll to top instead. */
export function onSamePathSmoothTop(
  pathname: string,
  to: string,
  before?: () => void,
): (e: MouseEvent<HTMLAnchorElement>) => void {
  return (e) => {
    before?.()
    const pathOnly = to.split('#')[0]?.split('?')[0] ?? '/'
    const normalized = pathOnly === '' ? '/' : pathOnly
    if (pathname === normalized) {
      e.preventDefault()
      scrollToTopSmooth()
    }
  }
}
