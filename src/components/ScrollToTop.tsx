import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTopSmooth } from '../util/scrollNav'

/** Smooth-scroll to top whenever the route (path, query, or hash) changes. */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      scrollToTopSmooth()
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, search, hash])

  return null
}
