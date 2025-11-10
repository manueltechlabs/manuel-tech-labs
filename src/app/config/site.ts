export const siteConfig = {
  title: `JSDev Astro Theme - Demo JavaScript Blog Template`,
  shortTitle: `JSDev Astro Theme`,
  siteUrl: `https://jsdev.space`,
  twitterUsername: `@jsdevspace`,
  image: '/icon.png',
  description: `This is a demonstration website showcasing the JSDev Astro Theme — a modern blog template built for JavaScript and frontend developers.`,
  navigation: [
    { name: 'Category11', path: '#' },
    { name: 'Category22', path: '#' },
    { name: 'Category33', path: '#' }
  ],
  footerLinks: [
    { name: 'Categories', path: '/categories' },
    { name: 'Tags', path: '/tags' },
    { name: 'Contact', path: '/contact' }
  ],
  social: {
    github: 'https://github.com/jsdevspace',
    facebook: 'https://www.facebook.com/jsdevspace',
    twitter: 'https://twitter.com/jsdevspace',
    mastodon: 'https://mastodon.social/@jsdevspace',
    telegram: 'https://t.me/jsdevspace',
    substack: 'https://jsdevspace.substack.com',
    bsky: 'https://bsky.app/profile/jsdevspace.bsky.social',
    dailydev: 'https://app.daily.dev/squads/jsdevelopment'
  },
  postsPerPage: 15,
  mainHeadTitle: 'Welcome to the JSDev Astro Theme',
  mainHeadHeadingTwo:
    'A modern, fast, and accessible Astro blog template for JavaScript developers',
  mainHeadDescription:
    'This demo site showcases the layout, features, and content structure of the JSDev Astro Theme — ideal for technical blogs, guides, and developer portfolios.',
  icons: {
    chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    moreHorizontal: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`
  },
  footerTextParagraphOne:
    'This is a demonstration site built with the JSDev Astro Theme — a modern template for building fast, SEO-friendly blogs for JavaScript and web developers.',
  footerTextParagraphTwo:
    'All content here is for preview purposes. Follow us on social media to stay connected with theme updates, coding tips, and news from the JavaScript community. 🚀'
} as const;
