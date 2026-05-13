import { Link } from 'react-router-dom'
import { richText } from '../util/richText'
import { site } from '../data/content'

export function PromoBar() {
  const [before] = site.promo.split('Learn more')
  return (
    <div className="ad-promo">
      <span>{richText(before.trimEnd())} </span>
      <Link to="/contact">Learn more</Link>
    </div>
  )
}
