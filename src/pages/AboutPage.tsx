import { site } from '../data/content'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <>
      <header className="ad-page-hero">
        <div className="ad-container">
          <p className="ad-kicker" style={{ justifyContent: 'center' }}>
            {site.heroKicker}
          </p>
          <h1>About Adrika</h1>
          <p>
            {site.heroLead} {site.commitmentLead}
          </p>
        </div>
      </header>

      <section className="ad-section ad-section--white">
        <div className="ad-container ad-prose">
          <h2>We are 😃Adrika</h2>
          <p>
            Adrika delivers dependable solutions and trusted innovation so your
            growth stays simplified. From technology and marketing to consulting and
            market research, we partner with teams who need clarity, speed, and
            measurable outcomes.
          </p>
          <p>
            Our specialization spans IT management services, digital marketing,
            business consulting, and research—aligned to how modern organizations
            operate day to day.
          </p>
          <ul className="ad-checklist">
            {site.commitmentBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="ad-center" style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="ad-btn ad-btn--primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
