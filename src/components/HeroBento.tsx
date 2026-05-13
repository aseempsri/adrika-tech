import { useId } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/content'
import { assets } from '../data/assets'
import { richText } from '../util/richText'

function StarsTrust() {
  const gid = useId()
  const gradId = `half-${gid.replace(/:/g, '')}`
  return (
    <div className="ad-hero-bento__stars" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} className="ad-hero-bento__star" viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12 2l2.9 7.4h7.6l-6 4.6 2.3 7-6.8-4.9-6.8 4.9 2.3-7-6-4.6h7.6z"
          />
        </svg>
      ))}
      <svg className="ad-hero-bento__star ad-hero-bento__star--half" viewBox="0 0 24 24" width="20" height="20">
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="rgba(16,185,129,0.25)" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradId})`}
          d="M12 2l2.9 7.4h7.6l-6 4.6 2.3 7-6.8-4.9-6.8 4.9 2.3-7-6-4.6h7.6z"
        />
      </svg>
    </div>
  )
}

function CtaArrow() {
  return (
    <svg className="ad-hero-bento__cta-ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeroBento() {
  return (
    <section className="ad-hero-bento">
      <div className="ad-container ad-hero-bento__wrap">
        <div className="ad-hero-bento__grid">
          <div className="ad-hero-bento__copy">
            <p className="ad-hero-bento__kicker">
              <span className="ad-hero-bento__kicker-emoji" aria-hidden>
                👋
              </span>
              <span className="ad-hero-bento__kicker-txt">Hi We are</span>
              <span className="ad-hero-bento__kicker-brand">Adrika</span>
            </p>
            <h1 className="ad-hero-bento__title">{site.heroTitle}</h1>
            <p className="ad-hero-bento__lead">{site.heroLead}</p>
            <div className="ad-hero-bento__cta-row">
              <Link to="/contact" className="ad-hero-bento__cta">
                Get started
                <CtaArrow />
              </Link>
              <div className="ad-hero-bento__rating">
                <StarsTrust />
                <div className="ad-hero-bento__rating-body">
                  <span className="ad-hero-bento__score">{site.trustScore}</span>
                  <span className="ad-hero-bento__reviews">{richText(site.trustReviews)}</span>
                </div>
              </div>
            </div>
            <Link to="/services" className="ad-hero-bento__ghost">
              More services
            </Link>
          </div>

          <div className="ad-hero-bento__tiles" aria-label="Highlights">
            <div className="ad-hero-bento__tile ad-hero-bento__tile--blue">
              <div className="ad-hero-bento__tile-pattern" aria-hidden />
              <img
                src={assets.heroMain}
                alt="Technology and mobile solutions"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="ad-hero-bento__tile ad-hero-bento__tile--orange">
              <div className="ad-hero-bento__cutout ad-hero-bento__cutout--tl" aria-hidden />
              <div className="ad-hero-bento__tile-body">
                <span className="ad-hero-bento__stat-lg">{site.clientsBadge}</span>
                <span className="ad-hero-bento__stat-line">{site.clientsLine}</span>
                <div className="ad-hero-bento__avatar-row">
                  {assets.avatars.map((src) => (
                    <img
                      key={src}
                      className="ad-hero-bento__avatar"
                      src={src}
                      alt=""
                    />
                  ))}
                  <span className="ad-hero-bento__count-pill" aria-hidden>
                    {site.clientsBadge}
                  </span>
                </div>
                <p className="ad-hero-bento__micro">{site.growthLine}</p>
              </div>
            </div>

            <div className="ad-hero-bento__tile ad-hero-bento__tile--pink">
              <div className="ad-hero-bento__cutout ad-hero-bento__cutout--tr" aria-hidden />
              <ul className="ad-hero-bento__pills">
                {site.heroList.map((label, i) => (
                  <li
                    key={label}
                    className="ad-hero-bento__pill"
                    style={{ ['--pill-i' as string]: String(i) }}
                  >
                    <span className="ad-hero-bento__pill-plus" aria-hidden>
                      +
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ad-hero-bento__tile ad-hero-bento__tile--map">
              <img
                src={assets.heroBentoAccent}
                alt="Global technology and data networks"
                loading="lazy"
                decoding="async"
              />
              <div className="ad-hero-bento__map-glow" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
