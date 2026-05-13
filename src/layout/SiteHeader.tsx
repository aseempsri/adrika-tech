import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/content'
import { assets } from '../data/assets'
import { onSamePathSmoothTop } from '../util/scrollNav'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const closeMenu = () => setOpen(false)
  const samePath = (to: string) => onSamePathSmoothTop(location.pathname, to, closeMenu)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="ad-header">
      <div className="ad-container ad-header__inner">
        <Link to="/" className="ad-logo" onClick={samePath('/')}>
          <img
            className="ad-logo__img"
            src={assets.logo}
            alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template"
            width={148}
            height={40}
            decoding="async"
          />
        </Link>

        <nav className={`ad-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={samePath(item.to)}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ad-header__actions">
          <Link to="/contact" className="ad-btn ad-btn--primary" onClick={samePath('/contact')}>
            Get Started
          </Link>
          <button
            type="button"
            className="ad-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
