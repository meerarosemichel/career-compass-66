export interface Domain {
  id: string;
  name: string;
  type: 'technical' | 'non-technical';
  description: string;
  videoId: string;
  careers: string[];
  roadmap: string[];
  longTermFit: string;
}

export const domains: Domain[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    type: 'technical',
    description: 'Build modern websites and web applications using cutting-edge technologies.',
    videoId: 'ysEN5RaKOlA',
    careers: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    roadmap: ['Learn HTML & CSS', 'Master JavaScript', 'Learn a framework (React/Vue)', 'Study backend (Node.js/Python)', 'Build real projects', 'Create your portfolio'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    type: 'technical',
    description: 'Analyze data to extract insights and drive decisions using statistics and ML.',
    videoId: 'X3paOmcrTjQ',
    careers: ['Data Analyst', 'Data Scientist', 'ML Engineer'],
    roadmap: ['Learn Python & R', 'Study statistics & probability', 'Learn SQL & databases', 'Master data visualization', 'Study machine learning', 'Work on real datasets'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    type: 'technical',
    description: 'Protect systems and networks from digital attacks and vulnerabilities.',
    videoId: 'hXSFdwIOfnE',
    careers: ['Security Analyst', 'Penetration Tester', 'Security Engineer'],
    roadmap: ['Learn networking fundamentals', 'Study operating systems', 'Learn security tools', 'Practice ethical hacking', 'Get certified (CEH/CompTIA)', 'Join bug bounty programs'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    type: 'technical',
    description: 'Design beautiful and intuitive user interfaces and experiences.',
    videoId: 'c9Wg6Cb_YlU',
    careers: ['UI Designer', 'UX Researcher', 'Product Designer'],
    roadmap: ['Learn design principles', 'Master Figma or Sketch', 'Study user psychology', 'Create wireframes & prototypes', 'Build a design portfolio', 'Learn design systems'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'mobile-dev',
    name: 'Mobile App Development',
    type: 'technical',
    description: 'Create apps for iOS and Android devices.',
    videoId: 'dFlBBMOU8WA',
    careers: ['iOS Developer', 'Android Developer', 'React Native Developer'],
    roadmap: ['Learn programming basics', 'Choose a platform (iOS/Android)', 'Learn Swift or Kotlin', 'Study mobile UI patterns', 'Build and publish an app', 'Learn cross-platform tools'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    type: 'non-technical',
    description: 'Promote brands and products through digital channels.',
    videoId: 'bixR-KIJKYM',
    careers: ['SEO Specialist', 'Social Media Manager', 'Digital Marketing Manager'],
    roadmap: ['Learn marketing fundamentals', 'Study SEO & SEM', 'Master social media marketing', 'Learn email marketing', 'Study analytics tools', 'Get Google certifications'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'business-mgmt',
    name: 'Business Management',
    type: 'non-technical',
    description: 'Lead organizations and manage business operations effectively.',
    videoId: 'SKGA3_IhFpc',
    careers: ['Business Analyst', 'Project Manager', 'Operations Manager'],
    roadmap: ['Study business fundamentals', 'Learn financial literacy', 'Study management theories', 'Develop leadership skills', 'Learn project management', 'Get MBA or certifications'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    type: 'non-technical',
    description: 'Create visual content for brands, media, and communication.',
    videoId: 'YqQx75OPRa0',
    careers: ['Graphic Designer', 'Brand Designer', 'Art Director'],
    roadmap: ['Learn design fundamentals', 'Master Adobe Creative Suite', 'Study typography & color theory', 'Build a design portfolio', 'Learn branding principles', 'Freelance or join an agency'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    type: 'non-technical',
    description: 'Create compelling written content for various platforms and audiences.',
    videoId: 'sLCnJEBnSNw',
    careers: ['Content Writer', 'Copywriter', 'Technical Writer'],
    roadmap: ['Improve writing skills', 'Learn SEO writing', 'Study content strategy', 'Start a blog or portfolio', 'Learn different content formats', 'Build a client base'],
    longTermFit: 'Moderate Fit',
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    type: 'non-technical',
    description: 'Manage people, culture, and organizational development.',
    videoId: 'B1a2DXVFxpQ',
    careers: ['HR Manager', 'Recruiter', 'Training Coordinator'],
    roadmap: ['Study HR fundamentals', 'Learn labor laws & compliance', 'Develop communication skills', 'Study organizational behavior', 'Get HR certifications', 'Gain practical experience'],
    longTermFit: 'Good Long-Term Fit',
  },
];
