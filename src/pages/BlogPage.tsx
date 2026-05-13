import { Link } from 'react-router-dom'
import { site } from '../data/content'
import { assets } from '../data/assets'

export function BlogPage() {
  return (
    <>
      <header className="ad-page-hero">
        <div className="ad-container">
          <p className="ad-eyebrow" style={{ color: '#fdba74' }}>
            {site.blogKicker}
          </p>
          <h1>{site.blogTitle}</h1>
          <p>
            Insights across branding, UI/UX, mobile apps, and technology—published
            for teams modernizing digital experiences.
          </p>
        </div>
      </header>

      <section className="ad-section ad-section--white">
        <div className="ad-container">
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
                  <p style={{ margin: 0, color: 'var(--ad-muted)', fontSize: '0.92rem' }}>
                    {post.excerpt}
                  </p>
                  <Link className="ad-readmore" to={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
