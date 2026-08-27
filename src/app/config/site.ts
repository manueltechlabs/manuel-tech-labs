export const siteConfig = {
  title: `Backend Engineer (Java, Spring Boot) | Data & Analytics | Business Systems`,
  shortTitle: `Backend Engineer & Business Systems`,
  siteUrl: `https://manueltechlabs.com`,
  //twitterUsername: `@jsdevspace`,
  image: '/icon.png',
  description: `I build backend systems and data-driven applications that connect software, data, and real-world business processes across areas such as supply chain, operations, finance, and marketing.`,
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
  mainHeadTitle: 'Backend Engineer (Java, Spring Boot) | Data & Analytics | Business Systems',
  mainHeadDescription: ['I build backend systems and data-driven applications that connect software, data, and real-world business processes across areas such as supply chain, operations, finance, and marketing.'],
  icons: {
    chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    moreHorizontal: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`
  },
  experienceTitle: 'Experience',
  experienceDescription: ['• Built ERP reporting systems and KPI dashboards using SQL and business data', '• Migrated legacy systems to SAP B1 and HANA', '• Designed data models and business process workflows', '• Developed backend applications using Java, Spring Boot, and REST APIs ', '• Analysed business and operational data to support KPI tracking, reporting, and process improvement', '• Worked with Finance, Operations, Warehouse, and other business stakeholders to translate requirements into practical technical and analytical solutions'],
  footerTextParagraphOne:
    'Engineered for performance, scalability, and impact.',
  skillsTitle: "My Skills",
  skills: [
    {
      title: 'Backend',
      description: 'Java, Spring Boot, REST APIs, MySQL, Docker, AWS, Git, CI/CD',
      icon: '/icons/WhatIDo/code-svgrepo-com.svg',

    },
    {
      title: 'Data & Analytics',
      description: 'SQL, Python, Tableau, KPI analysis, reporting',
      icon: '/icons/WhatIDo/brain-svgrepo-com.svg',

    },    
    {
      title: 'Business & Supply Chain Systems',
      description: 'ERP systems, SAP Business One, inventory, process improvement, business process modeling',
      icon: '/icons/WhatIDo/settings-cogwheel-svgrepo-com.svg',

    },
  ],
  projectsTitle: 'Featured Systems:',
  featuredPostsTile: 'Featured Posts:',
  lastPostsTile: 'Last Posts:',
} as const;
