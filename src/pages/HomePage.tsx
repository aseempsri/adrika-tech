import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/content'
import { assets } from '../data/assets'
import { HeroBento } from '../components/HeroBento'

export function HomePage() {
  const brandsBg: CSSProperties = {
    ['--ad-brands-bg' as string]: `url('${assets.brandsSectionBg}')`,
  }
  const ctaBg: CSSProperties = {
    ['--ad-cta-bg' as string]: `url('${assets.ctaParallaxBg}')`,
  }

  return (
    <>
      <HeroBento />

      <section className="ad-section ad-section--white">
        <div className="ad-container">
          <div className="ad-section__head">
            <p className="ad-eyebrow">{site.specialization}</p>
            <h2>{site.featuredTitle}</h2>
          </div>
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
              </article>
            ))}
          </div>
          <div className="ad-center">
            <Link to="/services" className="ad-btn ad-btn--outline">
              {site.moreServices}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="ad-section ad-section--muted ad-brands-wrap"
        style={brandsBg}
      >
        <div className="ad-container">
          <div className="ad-section__head">
            <h2>{site.brandsTitle}</h2>
          </div>
          <div className="ad-logos">
            {assets.clientLogos.map((src) => (
              <div key={src} className="ad-logo-cell">
                <img src={src} alt="Techco - Client Logo Image" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--white">
        <div className="ad-container">
          <div className="ad-stats">
            {site.stats.map((s, i) => (
              <div key={s.label} className="ad-stat">
                <img
                  className="ad-stat__icon"
                  src={assets.statIcons[i]}
                  alt="Techco - SVG Icon Head"
                />
                <div className="ad-stat__value">
                  {s.value}
                  <span>{s.suffix}</span>
                </div>
                <h3>{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--white">
        <div className="ad-container">
          <figure className="ad-photo-banner">
            <img
              src={assets.employees}
              alt="Techco - Employees Guoup Image"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="ad-section ad-section--muted">
        <div className="ad-container ad-split">
          <div className="ad-split__media">
            <div className="ad-media-stack">
              {assets.aboutStack.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Techco - About Image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="ad-split__copy">
            <p className="ad-eyebrow">{site.weAre}</p>
            <h2 style={{ margin: '0 0 0.75rem', color: 'var(--ad-navy)' }}>
              {site.personalizeTitle}
            </h2>
            <p style={{ margin: 0, color: 'var(--ad-muted)', lineHeight: 1.65 }}>
              {site.commitmentLead}
            </p>
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--white ad-section--commitment">
        <div className="ad-container">
          <div className="ad-commitment">
            <div className="ad-section__head">
              <h2>{site.commitmentTitle}</h2>
              <p>{site.commitmentLead}</p>
            </div>
            <ul className="ad-checklist ad-checklist--commitment">
              {site.commitmentBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="ad-center">
              <Link to="/contact" className="ad-btn ad-btn--primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--muted">
        <div className="ad-container">
          <div className="ad-pillars">
            {site.pillars.map((p, i) => (
              <div key={p.title} className="ad-pillar">
                <img
                  className="ad-pillar__icon"
                  src={assets.pillarIcons[i]}
                  alt={
                    i === 0
                      ? 'User Check SVG Icon'
                      : i === 1
                        ? 'Headphone SVG Icon'
                        : 'Dollar SVG Icon'
                  }
                />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--white">
        <div className="ad-container">
          <div className="ad-section__head">
            <p className="ad-eyebrow">{site.testimonialsKicker}</p>
            <h2>{site.testimonialsTitle}</h2>
          </div>
          <div className="ad-testimonials">
            {site.testimonials.map((t) => (
              <blockquote key={t.name} className="ad-quote">
                <h3>{t.title}</h3>
                <p>{t.quote}</p>
                <footer>
                  <div className="ad-quote__author">
                    <img
                      className="ad-quote__avatar"
                      src={assets.testimonialAvatars[t.name]}
                      alt={t.name}
                    />
                    <div>
                      <strong>{t.name}</strong>
                      <span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ad-muted)' }}>
                        {t.role}
                      </span>
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-section ad-section--muted">
        <div className="ad-container">
          <div className="ad-section__head">
            <p className="ad-eyebrow">{site.blogKicker}</p>
            <h2>{site.blogTitle}</h2>
          </div>
          <div className="ad-blog-grid">
            {site.blogPosts.map((post, i) => (
              <article key={post.slug} className="ad-blog-card">
                <div className="ad-blog-card__img">
                  <img
                    src={assets.blogCovers[i]}
                    alt={`Blog Post Image ${i + 1}`}
                    loading="lazy"
                  />
                </div>
                <div className="ad-blog-card__body">
                  <div className="ad-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="ad-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="ad-meta">
                    <span>
                      <img src={assets.iconCalendar} alt="Icon Calendar" />{' '}
                      {post.date}
                    </span>
                    <span>{post.comments}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <Link className="ad-readmore" to={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-cta" style={ctaBg}>
        <div className="ad-container">
          <h2>{site.ctaTitle}</h2>
          <p>{site.ctaLead}</p>
          <Link to="/contact" className="ad-btn ad-btn--primary">
            {site.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
