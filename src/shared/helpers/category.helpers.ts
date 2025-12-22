export const COLLECTION_MAP = {
  post: 'posts',
  project: 'projects',
} as const;

export type ContentType = keyof typeof COLLECTION_MAP;

export function getCollectionName(type: ContentType): string {
  return COLLECTION_MAP[type];
}

export const postCategories = {
  'software-development': {
    slug: 'software-development',
    name: 'Software Development',
    description: 'Cloud computing, platforms, and deployment strategies.',
    heading: 'Cloud Articles and Guides',
    metaDescription: 'Read expert articles and tutorials in the Cloud category. Explore tips, tools, and best practices.',
  },
    'data-science': {
    slug: 'data-science',
    name: 'Data Science',
    description: 'Explore in-depth analyses and real-world applications in data science, covering data analytics, machine learning, and business intelligence. This category dives into SQL, Python, visualization tools like Tableau, and advanced techniques to turn raw data into actionable insights.',
    heading: 'Data Science',
    metaDescription: 'A curated collection of data science projects and insights—covering analytics, machine learning, and visualization with SQL, Python, and Tableau.',
  },
      'opinion': {
    slug: 'opinion',
    name: 'Opinion',
    description: 'Thoughtful perspectives on AI, data ethics, digital rights, and the societal impact of technology—from censorship and digital ID to the future of creativity and control.',
    heading: 'Opinion: Where Tech Meets Society',
    metaDescription: 'Insightful takes on AI ethics, online freedom, and tech’s role in society. Explore the human side of data science and artificial intelligence.',
  },
        'devops': {
    slug: 'devops',
    name: 'DevOps',
    description: 'Practical guides on containerization, Linux administration, secure deployments, and infrastructure automation. From Docker and AWS to system configuration and CI/CD — this is where development meets operations.',
    heading: 'DevOps',
    metaDescription: 'Explore DevOps best practices: Docker, Linux, AWS, and secure infrastructure automation.',
  },  

} as const;

export const projectCategories = {
  'full-stack-web-development': {
    slug: 'full-stack-web-development',
    name: 'Full Stack Web Development',
    description: 'Projects combining frontend and backend development, using Spring Boot, MySQL, AWS, and Docker to build scalable, secure, and maintainable web applications.',
    heading: 'Full-Stack Web Development',
    metaDescription: 'End-to-end web applications with Java, RESTful APIs, and cloud deployment — showcasing full-stack development from UI to database.',
  },
  'data-science': {
    slug: 'data-science',
    name: 'Data Science',
    description: 'A collection of projects showcasing expertise in data analysis, machine learning, statistical modeling, and business intelligence using Python, SQL, Tableau, and advanced analytical techniques.',
    heading: 'Data Science',
    metaDescription: 'Explore data science projects including A/B testing, clustering, Markov models, and BI dashboards with SQL, Python, and Tableau.',
  },
} as const;

// Unified Type and Lookup
export const allCategories = {
  ...postCategories,
  ...projectCategories,
};

export type CategoryKey = keyof typeof allCategories;

export function isCategory(slug: string): slug is CategoryKey {
  return slug in allCategories;
}

export function getCategoryBySlug(slug: string): (typeof allCategories)[CategoryKey] | undefined {
  return isCategory(slug) ? allCategories[slug] : undefined;
}

export function getCategoryInfo(slug: string, type: 'post' | 'project') {
  const categories = type === 'post' ? postCategories : projectCategories;
  if (!isCategory(slug)) {
    throw new Error(`[getCategoryInfo] Unknown category: "${slug}"`);
  }
  return allCategories[slug];
}

export function getAllCategories() {
  return Object.values(allCategories);
}

export function getAllCategorySlugs(): CategoryKey[] {
  return Object.keys(allCategories) as CategoryKey[];
}