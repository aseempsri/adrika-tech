import { type FormEvent, useState } from 'react'
import { site } from '../data/content'
import { assets } from '../data/assets'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <header className="ad-page-hero">
        <div className="ad-container">
          <p className="ad-kicker" style={{ justifyContent: 'center' }}>
            Get in touch
          </p>
          <h1>Contact</h1>
          <p>{site.ctaLead}</p>
        </div>
      </header>

      <section className="ad-section ad-section--contact">
        <div className="ad-container ad-contact-grid">
          <form className="ad-form ad-form--contact" onSubmit={onSubmit}>
            <div className="ad-form__head">
              <h2 className="ad-form__title">Write to us</h2>
              <p className="ad-form__sub">
                Share a few details and we&apos;ll respond as soon as we can.
              </p>
            </div>
            <div className="ad-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="ad-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div className="ad-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="How can we help?"
                rows={5}
              />
            </div>
            <div className="ad-form__actions">
              <button type="submit" className="ad-btn ad-btn--primary ad-btn--block">
                {site.ctaButton}
              </button>
            </div>
            {sent ? (
              <p className="ad-form__success" role="status">
                Thank you—we&apos;ll get back to you shortly.
              </p>
            ) : null}
          </form>

          <aside className="ad-contact-aside" aria-label="Contact details">
            <p className="ad-contact-aside__eyebrow">Direct lines</p>
            <div className="ad-contact-cards">
              <div className="ad-contact-card">
                <div className="ad-contact-card__icon-wrap" aria-hidden>
                  <img
                    className="ad-contact-card__ico"
                    src={assets.contactIcons.mail}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  </p>
                </div>
              </div>
              <div className="ad-contact-card">
                <div className="ad-contact-card__icon-wrap" aria-hidden>
                  <img
                    className="ad-contact-card__ico"
                    src={assets.contactIcons.calling}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Call us</h3>
                  <p>
                    {site.contact.phones.map((p) => (
                      <span key={p} className="ad-contact-card__line">
                        <a href={`tel:${p.replace(/[^\d+]/g, '')}`}>{p}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="ad-contact-card">
                <div className="ad-contact-card__icon-wrap" aria-hidden>
                  <img
                    className="ad-contact-card__ico"
                    src={assets.contactIcons.map}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Our office</h3>
                  <p>
                    {site.contact.addressLines.map((line) => (
                      <span key={line} className="ad-contact-card__line">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
