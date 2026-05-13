import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/content'
import { assets } from '../data/assets'
import { onSamePathSmoothTop } from '../util/scrollNav'

export function SiteFooter() {
  const location = useLocation()
  const samePath = (to: string) => onSamePathSmoothTop(location.pathname, to)

  return (
    <footer className="ad-footer">
      <div className="ad-container ad-footer__grid">
        <div>
          <Link to="/" className="ad-footer__brand" style={{ display: 'inline-block', marginBottom: '0.75rem' }} onClick={samePath('/')}>
            <img
              src={assets.logo}
              alt="Adrika"
              style={{ height: 36, width: 'auto', maxWidth: 160, objectFit: 'contain' }}
            />
          </Link>
          <p style={{ margin: 0, lineHeight: 1.6, maxWidth: '36ch' }}>
            Digital Solutions, IT Solutions &amp; Technology, Business Consulting,
            Software Company, Website development, Graphic design, Digital MArketing,
            Social media MArketing, App development.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {site.footerServices.map((s) => (
              <li key={s}>
                <Link to="/services" onClick={samePath('/services')}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul>
            {site.footerInfo.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={samePath(item.to)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ad-container ad-footer__bottom">{site.copyright}</div>
    </footer>
  )
}
