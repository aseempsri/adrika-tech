import { Link, Navigate, useParams } from 'react-router-dom'
import { site } from '../data/content'
import type { BlogSlug } from '../data/content'
import { assets } from '../data/assets'

const ARTICLES: Record<
  BlogSlug,
  { title: string; body: string[] }
> = {
  'leveraging-analytics-for-business-growth': {
    title: 'Leveraging Analytics for Business Growth Modernizing...',
    body: [
      'Analytics is no longer a back-office function—it is the operating system for growth. At Adrika, we help teams modernize measurement so decisions are grounded in reliable signals, not noise.',
      'This article outlines practical steps to align data collection, reporting cadence, and leadership review cycles. The goal is simple: move from static dashboards to actionable insight loops that compound quarter over quarter.',
      'If you are ready to translate analytics into outcomes, our consulting and technology teams can help you design the right stack, governance model, and adoption plan for your organization.',
    ],
  },
  'how-emerging-technologies-shape-the-future': {
    title: 'How Emerging Technologies are Shaping the Future...',
    body: [
      'Emerging technologies change how products are built, marketed, and supported. From automation to smarter customer experiences, the shift is less about novelty and more about sustainable advantage.',
      'Adrika focuses on technologies that integrate cleanly with your existing workflows—so innovation feels incremental to users, even when the underlying systems evolve quickly.',
      'Whether you are exploring mobile-first engagement or modernizing core platforms, we help you prioritize investments that reduce risk while accelerating time-to-value.',
    ],
  },
  'creating-engaging-digital-for-your-audience': {
    title: 'Creating Engaging Digital for Your Audience Software...',
    body: [
      'Engagement is earned through clarity, speed, and relevance. We build digital experiences that respect attention spans while still communicating depth—especially for complex services and B2B journeys.',
      'Software alone does not create engagement; narrative, design, and performance do. Adrika brings these disciplines together so your audience gets a cohesive story across touchpoints.',
      'If you want a practical roadmap—from discovery workshops to launch metrics—our team can partner with you end to end.',
    ],
  },
}

export function BlogArticlePage() {
  const { slug } = useParams()
  if (!slug || !(slug in ARTICLES)) {
    return <Navigate to="/blog" replace />
  }
  const key = slug as BlogSlug
  const postIndex = site.blogPosts.findIndex((p) => p.slug === key)
  const post = postIndex >= 0 ? site.blogPosts[postIndex] : undefined
  const article = ARTICLES[key]
  if (!post) return <Navigate to="/blog" replace />
  const cover = assets.blogCovers[postIndex]

  return (
    <>
      <header className="ad-page-hero">
        <div className="ad-container">
          <p className="ad-eyebrow" style={{ color: '#fdba74' }}>
            {site.blogKicker}
          </p>
          <h1>{article.title}</h1>
          <p>
            {post.tags.join(' · ')} · Icon Calendar {post.date} · {post.comments}{' '}
            comments
          </p>
        </div>
      </header>

      <section className="ad-section ad-section--white">
        <div className="ad-container ad-prose">
          <img
            src={cover}
            alt={`Blog Post Image ${postIndex + 1}`}
            style={{
              width: '100%',
              borderRadius: 'var(--ad-radius)',
              marginBottom: '1.5rem',
            }}
          />
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>
            <Link to="/blog" className="ad-readmore">
              ← Back to Latest Articles Posts
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
