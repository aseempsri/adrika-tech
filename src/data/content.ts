export const site = {
  promo:
    'Subscribe us and receive **20% bonus** discount on checkout. Learn more',
  brandLine:
    'Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ] as const,
  heroKicker: '👋 Hi We are Adrika',
  heroTitle: 'Dependable solutions. Trusted innovation. Growth, simplified.',
  heroLead:
    'In today’s fast-paced world, the right solutions isn’t just helpful—it’s transformative. Adrika provides what you need to stay ahead.',
  trustScore: '4.8',
  trustReviews: 'From **200+** reviews',
  clientsBadge: '250+',
  clientsLine: 'Happy clients, across Industries',
  heroList: ['IT Solutions', 'Digital Marketing', 'Consulting', 'Market Research'],
  growthLine: 'of our clients experience breakthrough growth.',
  specialization: 'Our Specialization',
  featuredTitle: 'Featured Services',
  services: [
    { title: 'Technology Solutions', subtitle: 'IT Management Services' },
    { title: 'Marketing Solutions', subtitle: 'IT Management Services' },
    { title: 'Consulting Services', subtitle: 'IT Management Services' },
    { title: 'Market Research', subtitle: 'IT Management Services' },
  ] as const,
  moreServices: 'More Services',
  brandsTitle: 'Brands We Work With',
  stats: [
    { value: '12', suffix: ' +', label: 'Years of industry expertise' },
    { value: '850', suffix: ' +', label: 'Result-driven solutions' },
    { value: '25', suffix: ' +', label: 'Diverse industries served' },
    { value: '100', suffix: ' %', label: 'Commitment to 100% satisfaction' },
  ] as const,
  personalizeTitle:
    'Personalize Solutions Across Industries and Techonologies',
  weAre: 'We are 😃Adrika',
  commitmentTitle: 'Our Commitment to Your Success',
  commitmentLead:
    'At Adrika, client satisfaction is at the heart of everything we do. Your growth is our goal.',
  commitmentBullets: [
    'Focused on your future.',
    'Driven by results.',
    'Innovation that works for you.',
  ] as const,
  pillars: [
    {
      title: 'Expert Team Members',
      body: 'We take pride in assembling a diverse and highly skilled team.',
    },
    {
      title: 'Fastest Customer Service',
      body: 'We pride ourselves on providing the fastest customer service in industry.',
    },
    {
      title: 'Reasonable Pricing',
      body: 'We believe in providing reasonable pricing that offers exceptional.',
    },
  ] as const,
  testimonialsKicker: 'Client Testimonials 🙂',
  testimonialsTitle: 'What clients say',
  testimonials: [
    {
      quote:
        'As a startup, we needed a partner who understood our vision. Adrika delivered beyond our expectations.',
      name: 'Arjun Mehta',
      role: 'Director of Marketing',
      title: '“Amazing services”',
    },
    {
      quote:
        'Working with Adrika was a seamless experience from start to finish. Their team took the time to understand our business goals and challenges, and they delivered a solution that addressed our needs perfectly. Their professionalism, expertise, and dedication to customer satisfaction were evident throughout the project. We look forward to working with Adrika on future initiatives.',
      name: 'Rohit Kapoor',
      role: 'Nonprofit Director',
      title: '“Fast Response”',
    },
    {
      quote:
        "We've been partnering with Adrika for several years, and they have consistently delivered exceptional results. From custom software development to cloud services integration, their solutions have helped us stay ahead of the competition and adapt to evolving market demands. Their team's expertise, reliability, and commitment to customer satisfaction make them our go-to IT partner.",
      name: 'Ananya Reddy',
      role: 'Tech Startup Founder',
      title: '“We Are Satisfied”',
    },
    {
      quote:
        'Adrika has kept us ahead, adapting to our evolving needs with ease.',
      name: 'Vikram Srinivasan',
      role: 'Director of Marketing',
      title: '“Consistently exceptional”',
    },
  ] as const,
  blogKicker: 'Blog Updates',
  blogTitle: 'Latest Articles Posts',
  blogPosts: [
    {
      slug: 'leveraging-analytics-for-business-growth',
      tags: ['Branding', 'UI/UX'],
      date: '11/12/2024',
      comments: '24',
      title: 'Leveraging Analytics for Business Growth Modernizing...',
      excerpt:
        'Modernizing analytics practices to unlock measurable business growth with Adrika.',
    },
    {
      slug: 'how-emerging-technologies-shape-the-future',
      tags: ['Mobile App'],
      date: '11/12/2024',
      comments: '24',
      title: 'How Emerging Technologies are Shaping the Future...',
      excerpt:
        'A look at the technologies reshaping industries—and how your organization can prepare.',
    },
    {
      slug: 'creating-engaging-digital-for-your-audience',
      tags: ['Technology'],
      date: '11/12/2024',
      comments: '24',
      title: 'Creating Engaging Digital for Your Audience Software...',
      excerpt:
        'Designing digital experiences that resonate with your audience and drive engagement.',
    },
  ] as const,
  ctaTitle: 'Ready to Work, Let\'s Chat',
  ctaLead:
    'Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.',
  ctaButton: 'Contact Us Today!',
  contact: {
    email: 'info@adrika.co.in',
    phones: ['+91-9318441235', '+91-9235777101'],
    addressLines: [
      'Innov8 Ras Vilas',
      'LowerGround Floor, Salcon Ras Vilas,',
      'D-1 Saket District Centre,',
      'Saket , New Delhi 110017',
    ],
  },
  footerServices: [
    'Technology Solutions',
    'Marketing Solutions',
    'Consulting Services',
    'Market Research',
  ] as const,
  footerInfo: [
    { label: 'About Adrika', to: '/about-us' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ] as const,
  copyright: 'Copyright © 2024 Adrika tech, All rights reserved.',
} as const

export type BlogSlug = (typeof site.blogPosts)[number]['slug']
