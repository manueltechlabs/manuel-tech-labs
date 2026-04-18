export const siteConfig = {
  title: `Backend Engineer (Java, Spring Boot) | Data & Analytics Systems`,
  shortTitle: `Backend Developer & Data Engineer`,
  siteUrl: `https://manueltechlabs.com`,
  //twitterUsername: `@jsdevspace`,
  image: '/icon.png',
  description: `I build data-driven systems that transform raw business data into actionable insights, with experience in ERP systems, KPI design, and backend development.`,
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Posts', path: '/posts' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  footerLinks: [
    { name: 'Categories', path: '/posts/categories' },
    { name: 'Tags', path: '/posts/tags' },
    { name: 'Contact', path: '/contact' }
  ],
  social: {
    github: 'https://github.com/manueltechlabs',
    //facebook: 'https://www.facebook.com/jsdevspace',
    //twitter: 'https://twitter.com/jsdevspace',
    mastodon: 'https://mastodon.social/@manueltechlabs',
    //telegram: 'https://t.me/jsdevspace',
    //substack: 'https://jsdevspace.substack.com',
    bsky: 'https://bsky.app/profile/manueltechlabs.bsky.social',    
    //dailydev: 'https://app.daily.dev/squads/jsdevelopment',
    linkedin: 'https://www.linkedin.com/in/manueltechlabs',
  },
  postsPerPage: 15,
  mainHeadTitle: 'Backend Engineer (Java, Spring Boot) | Data & Analytics Systems',
  mainHeadDescription: ['I build backend systems and data platforms that transform raw business data into actionable insights (ERP, KPIs, APIs, dashboards).'],
  icons: {
    chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    moreHorizontal: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`
  },
  experienceTitle: 'Experience',
  experienceDescription: ['• Built ERP reporting systems and KPI dashboards using SQL and PHP', '• Migrated legacy systems to SAP B1 and HANA', '• Designed data models and business process workflows', '• Developed backend systems with Java, Spring Boot, and REST APIs '],
  footerTextParagraphOne:
    'Engineered for performance, scalability, and impact.',
  skillsTitle: "My Skills",
  skills: [
    {
      title: 'Backend',
      description: 'Java, Spring Boot, REST APIs, MySQL',
      icon: '/icons/WhatIDo/brain-svgrepo-com.svg',

    },
    {
      title: 'Data',
      description: 'SQL (MSSQL, BigQuery), Python (pandas), Tableau',
      icon: '/icons/WhatIDo/settings-cogwheel-svgrepo-com.svg',

    },    
    {
      title: 'Tools',
      description: 'Docker, AWS, Git, CI/CD',
      icon: '/icons/WhatIDo/code-svgrepo-com.svg',

    },
  ],
  projectsTitle: 'Featured Systems:',
  featuredPostsTile: 'Featured Posts:',
  lastPostsTile: 'Last Posts:',
} as const;
