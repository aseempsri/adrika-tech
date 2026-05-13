import { site } from '../data/content'
import { Link } from 'react-router-dom'
import { assets } from '../data/assets'

export function ServicesPage() {
  return (
    <>
      <header className="ad-page-hero">
        <div className="ad-container">
          <p className="ad-eyebrow" style={{ color: '#fdba74' }}>
            {site.specialization}
          </p>
          <h1>{site.featuredTitle}</h1>
          <p>
            IT Management Services across technology, marketing, consulting, and
            market research—delivered as one connected engagement model.
          </p>
        </div>
      </header>

      <section className="ad-section ad-section--white">
        <div className="ad-container">
          <div className="ad-card-grid">
            {site.services.map((s, i) => (
              <article key={s.title} className="ad-service-card">
                <div className="ad-service-card__media">
                  <img
                    src={assets.services[i]}
                    alt="IT Management Services"
                    loading="lazy"
                  />
                </div>
                <span>{s.subtitle}</span>
                <h3>{s.title}</h3>
                <p style={{ margin: 0, color: 'var(--ad-muted)', lineHeight: 1.6 }}>
                  Adrika provides {s.title.toLowerCase()} aligned to your operating
                  cadence—discovery, delivery, and continuous optimization—so outcomes
                  stay measurable and practical.
                </p>
              </article>
            ))}
          </div>
          <div className="ad-center">
            <Link to="/contact" className="ad-btn ad-btn--primary">
              {site.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
