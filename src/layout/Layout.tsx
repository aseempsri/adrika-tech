import { Outlet } from 'react-router-dom'
import { PromoBar } from './PromoBar'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { ScrollToTop } from '../components/ScrollToTop'
import '../styles/adrika-core.css'
import '../styles/adrika-sections.css'
import '../styles/adrika-hero-bento.css'

export function Layout() {
  return (
    <div className="ad-page">
      <ScrollToTop />
      <PromoBar />
      <SiteHeader />
      <main className="ad-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
