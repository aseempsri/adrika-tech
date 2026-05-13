/**
 * Local copies of https://adrika.co.in/ static files (see scripts/download-site-assets.mjs).
 * Paths are resolved with `publicAsset()` so GitHub Pages subpath (`/adrika-tech/`) works.
 */
import { publicAsset } from '../util/publicAsset'

const p = publicAsset

export const assets = {
  logo: p('assets/images/logo.png'),
  favicon: p('assets/images/site_logo/favourite_icon_2.svg'),
  thumbnail: p('assets/images/Techco_page_thumbnail.webp'),
  heroBgShape: p('assets/images/shapes/it_solution_hero_bg_1.svg'),
  heroMain: p('assets/images/hero/it_solution_hero_image_1.webp'),
  heroGrowthBg: p('assets/images/hero/it_solution_hero_image_2.webp'),
  /** Bento hero — bottom-right tile (tech / global visual) */
  heroBentoAccent: p('assets/images/portfolio/portfolio_item_image_3.webp'),
  trustpilotStars: p('assets/images/icons/icon_stars_trustpilot.svg'),
  avatars: [
    p('assets/images/avatar/avatar_1.webp'),
    p('assets/images/avatar/avatar_2.webp'),
    p('assets/images/avatar/avatar_3.webp'),
  ],
  services: [
    p('assets/images/services/im1.jpg'),
    p('assets/images/services/im2.jpg'),
    p('assets/images/services/im3.jpg'),
    p('assets/images/services/im4.jpg'),
  ],
  /** First carousel row on the live homepage (subset of client logos). */
  clientLogos: [
    p('assets/images/clients/logo.png'),
    p('assets/images/clients/logo2.png'),
    p('assets/images/clients/logo3.png'),
    p('assets/images/clients/logo4.png'),
    p('assets/images/clients/logo5.png'),
    p('assets/images/clients/logo6.png'),
    p('assets/images/clients/logo7.png'),
    p('assets/images/clients/logo8.png'),
    p('assets/images/clients/logo9.png'),
    p('assets/images/clients/logo10.png'),
    p('assets/images/clients/logo11.png'),
    p('assets/images/clients/logo12.png'),
  ],
  statIcons: [
    p('assets/images/icons/icon_head.svg'),
    p('assets/images/icons/icon_check.svg'),
    p('assets/images/icons/icon_like.svg'),
    p('assets/images/icons/icon_dart_board.svg'),
  ],
  employees: p('assets/images/about/im7.png'),
  aboutStack: [
    p('assets/images/about/about_image_9.webp'),
    p('assets/images/about/about_image_11.webp'),
    p('assets/images/about/about_image_10.webp'),
  ],
  pillarIcons: [
    p('assets/images/icons/icon_user_check.svg'),
    p('assets/images/icons/icon_headphone.svg'),
    p('assets/images/icons/icon_dollar.svg'),
  ],
  testimonialAvatars: {
    'Ananya Reddy': p('assets/images/avatar/img6.1.png'),
    'Rohit Kapoor': p('assets/images/avatar/img6.2.png'),
    'Arjun Mehta': p('assets/images/avatar/avatar_4.webp'),
    'Vikram Srinivasan': p('assets/images/avatar/avatar_7.webp'),
  } as Record<string, string>,
  blogCovers: [
    p('assets/images/blog/blog_post_image_1.webp'),
    p('assets/images/blog/blog_post_image_2.webp'),
    p('assets/images/blog/blog_post_image_3.webp'),
  ],
  iconCalendar: p('assets/images/icons/icon_calendar.svg'),
  ctaParallaxBg: p('assets/images/backgrounds/im7.0.png'),
  brandsSectionBg: p('assets/images/shapes/bg_pattern_1.svg'),
  contactIcons: {
    mail: p('assets/images/icons/icon_mail.svg'),
    calling: p('assets/images/icons/icon_calling.svg'),
    map: p('assets/images/icons/icon_map_mark.svg'),
  },
  portfolio: [
    p('assets/images/portfolio/portfolio_item_image_1.webp'),
    p('assets/images/portfolio/portfolio_item_image_2.webp'),
    p('assets/images/portfolio/portfolio_item_image_3.webp'),
  ],
  team: [
    p('assets/images/team/team_member_image_1.webp'),
    p('assets/images/team/team_member_image_2.webp'),
    p('assets/images/team/team_member_image_3.webp'),
    p('assets/images/team/team_member_image_4.webp'),
    p('assets/images/team/team_member_image_5.webp'),
  ],
} as const
