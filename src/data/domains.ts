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
    videoId: '5YDVJaItmaY',
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
    videoId: 'inWWhr5tnEA',
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
    videoId: 'VPvVD8t02U8',
    careers: ['iOS Developer', 'Android Developer', 'React Native Developer'],
    roadmap: ['Learn programming basics', 'Choose a platform (iOS/Android)', 'Learn Swift or Kotlin', 'Study mobile UI patterns', 'Build and publish an app', 'Learn cross-platform tools'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
  id: 'game-development',
  name: 'Game Development',
  type: 'technical',
  description: 'Design and build video games for computers, consoles, and mobile devices.',
  videoId: '0tGhUExJCEI',
  careers: ['Game Developer', 'Unity Developer', 'Gameplay Programmer'],
  roadmap: ['Learn C# or C++', 'Learn Unity or Unreal Engine', 'Study game physics', 'Learn animation and graphics', 'Build simple games', 'Publish games'],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'cloud-computing',
  name: 'Cloud Computing',
  type: 'technical',
  description: 'Develop and manage applications and services on cloud platforms.',
  videoId: 'M988_fsOSWo',
  careers: ['Cloud Engineer', 'AWS Developer', 'Cloud Architect'],
  roadmap: ['Learn cloud basics', 'Study AWS or Azure', 'Learn virtualization', 'Understand cloud security', 'Deploy cloud applications', 'Get cloud certifications'],
  longTermFit: 'Excellent Long-Term Fit'
},
{
  id: 'ai-engineer',
  name: 'AI Engineer',
  type: 'technical',
  description: 'Design and develop artificial intelligence systems that can learn, analyze data, and make decisions.',
  videoId: 'ad79nYk2keg',
  careers: ['AI Engineer', 'Machine Learning Engineer', 'Deep Learning Engineer', 'AI Researcher'],
  roadmap: [
    'Learn programming (Python)',
    'Study mathematics (Linear Algebra, Probability, Statistics)',
    'Learn Data Structures and Algorithms',
    'Learn Machine Learning concepts',
    'Study Deep Learning (Neural Networks, CNN, RNN)',
    'Learn AI frameworks (TensorFlow, PyTorch)',
    'Work on AI projects and datasets',
    'Learn cloud AI services (AWS, Google Cloud AI)'
  ],
  longTermFit: 'Excellent Long-Term Fit'
},
{
id:'embedded-systems-developer',
name:'Embedded Systems Developer',
type:'technical',
description:'Develop software for hardware devices and electronics.',
videoId:'m8w2FzqU5jg',
careers:['Embedded Engineer','Firmware Developer'],
roadmap:['Learn C/C++','Learn Microcontrollers','Learn Electronics Basics'],
longTermFit:'Good Long-Term Fit'
},
{
id:'machine-learning-engineer',
name:'Machine Learning Engineer',
type:'technical',
description:'Develop ML models and intelligent systems.',
videoId:'ukzFI9rgwfU&t=21s',
careers:['ML Engineer','AI Developer'],
roadmap:['Learn Python','Learn ML Algorithms','Use TensorFlow','Build ML Projects'],
longTermFit:'Excellent Long-Term Fit'
},
{
id:'computer-vision-engineer',
name:'Computer Vision Engineer',
type:'technical',
description:'Develop systems that interpret images and videos.',
videoId:'f6jUovLFiU4',
careers:['CV Engineer','AI Vision Developer'],
roadmap:['Learn Python','Learn OpenCV','Build Vision Models'],
longTermFit:'Excellent Long-Term Fit'
},
{
id:'devops-engineer',
name:'DevOps Engineer',
type:'technical',
description:'Automate development and deployment processes.',
videoId:'Xrgk023l4lI',
careers:['DevOps Engineer','CI/CD Engineer'],
roadmap:['Learn Linux','Learn Docker','Learn Kubernetes'],
longTermFit:'Excellent Long-Term Fit'
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
id:'site-reliability-engineer',
name:'Site Reliability Engineer',
type:'technical',
description:'Ensure reliability and performance of systems.',
videoId:'ztIIcXNzMN4',
careers:['SRE Engineer'],
roadmap:['Learn Linux','Learn Monitoring','Automate Systems'],
longTermFit:'Good Long-Term Fit'
},
{
id:'platform-engineer',
name:'Platform Engineer',
type:'technical',
description:'Build internal platforms for developers.',
videoId:'AUCt28gVR6Y',
careers:['Platform Engineer'],
roadmap:['Learn Cloud','Learn DevOps','Build Platforms'],
longTermFit:'Good Long-Term Fit'
},
{
id:'infrastructure-engineer',
name:'Infrastructure Engineer',
type:'technical',
description:'Manage IT infrastructure and systems.',
videoId:'EMmziK7ptCE',
careers:['Infrastructure Engineer'],
roadmap:['Learn Networking','Learn Servers','Learn Cloud'],
longTermFit:'Good Long-Term Fit'
},
{
id:'software-architect',
name:'Software Architect',
type:'technical',
description:'Design high-level software architecture.',
videoId:'IgrsZmyubp4',
careers:['Software Architect'],
roadmap:['Learn System Design','Learn Architecture Patterns'],
longTermFit:'Excellent Long-Term Fit'
},
{
id:'database-developer',
name:'Database Developer',
type:'technical',
description:'Design and maintain databases.',
videoId:'qfoEB7fCBEQ',
careers:['Database Developer','SQL Developer'],
roadmap:['Learn SQL','Learn Database Design'],
longTermFit:'Good Long-Term Fit'
},
{
id:'blockchain-developer',
name:'Blockchain Developer',
type:'technical',
description:'Develop decentralized blockchain applications.',
videoId:'yubzJw0uiE4',
careers:['Blockchain Engineer'],
roadmap:['Learn Blockchain','Learn Solidity'],
longTermFit:'Good Long-Term Fit'
},
  {
    id: 'business-mgmt',
    name: 'Business Management',
    type: 'non-technical',
    description: 'Lead organizations and manage business operations effectively.',
    videoId: 'HE9JioDuXkQ',
    careers: ['Business Analyst', 'Project Manager', 'Operations Manager'],
    roadmap: ['Study business fundamentals', 'Learn financial literacy', 'Study management theories', 'Develop leadership skills', 'Learn project management', 'Get MBA or certifications'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    type: 'non-technical',
    description: 'Create visual content for brands, media, and communication.',
    videoId: 'wwo6Gdx3x7s',
    careers: ['Graphic Designer', 'Brand Designer', 'Art Director'],
    roadmap: ['Learn design fundamentals', 'Master Adobe Creative Suite', 'Study typography & color theory', 'Build a design portfolio', 'Learn branding principles', 'Freelance or join an agency'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    type: 'non-technical',
    description: 'Create compelling written content for various platforms and audiences.',
    videoId: 'mcnhDvavxzw',
    careers: ['Content Writer', 'Copywriter', 'Technical Writer'],
    roadmap: ['Improve writing skills', 'Learn SEO writing', 'Study content strategy', 'Start a blog or portfolio', 'Learn different content formats', 'Build a client base'],
    longTermFit: 'Moderate Fit',
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    type: 'non-technical',
    description: 'Manage people, culture, and organizational development.',
    videoId: 'bI9RZjF-538',
    careers: ['HR Manager', 'Recruiter', 'Training Coordinator'],
    roadmap: ['Study HR fundamentals', 'Learn labor laws & compliance', 'Develop communication skills', 'Study organizational behavior', 'Get HR certifications', 'Gain practical experience'],
    longTermFit: 'Good Long-Term Fit',
  },
  {
  id: 'assistant-professor',
  name: 'Assistant Professor',
  type: 'non-technical',
  description: 'Teach university students and conduct academic research in higher education institutions.',
  videoId: 'nHVcNEgaUBs',
  careers: ['Assistant Professor', 'Associate Professor', 'Professor'],
  roadmap: [
    'Complete bachelor degree',
    'Complete master degree',
    'Clear UGC NET exam',
    'Pursue PhD in your subject',
    'Publish research papers',
    'Apply for university teaching positions'
  ],
  longTermFit: 'Excellent Long-Term Fit'
},
{
  id: 'school-teacher',
  name: 'School Teacher',
  type: 'non-technical',
  description: 'Educate students and help them develop knowledge and skills in schools.',
  videoId: 'X6pW0LKawfY',
  careers: ['Primary School Teacher', 'High School Teacher', 'Subject Teacher'],
  roadmap: [
    'Complete bachelor degree',
    'Complete B.Ed (Bachelor of Education)',
    'Clear teacher eligibility exams (TET/CTET)',
    'Develop teaching and classroom management skills',
    'Gain teaching experience',
    'Apply for school teaching jobs'
  ],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'lecturer',
  name: 'Lecturer',
  type: 'non-technical',
  description: 'Teach and guide students in colleges and universities in a specific subject area.',
  videoId: 'lXjMphz9KSQ',
  careers: ['College Lecturer', 'Senior Lecturer', 'Academic Researcher'],
  roadmap: [
    'Complete bachelor degree',
    'Complete master degree in subject',
    'Clear UGC NET or equivalent exam',
    'Develop teaching and research skills',
    'Gain teaching experience',
    'Apply for lecturer positions in colleges'
  ],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'ips-officer',
  name: 'IPS Officer',
  type: 'non-technical',
  description: 'Serve the nation by maintaining law and order as an Indian Police Service officer.',
  videoId: '26CmELXAeH0',
  careers: ['IPS Officer', 'Superintendent of Police', 'Police Commissioner'],
  roadmap: [
    'Complete a bachelor degree',
    'Prepare for UPSC Civil Services Exam',
    'Study subjects like polity, history, geography',
    'Practice aptitude and current affairs',
    'Clear UPSC prelims, mains, and interview',
    'Complete police training at the academy'
  ],
  longTermFit: 'Excellent Long-Term Fit'
},
{
  id: 'entrepreneurship',
  name: 'Entrepreneurship',
  type: 'non-technical',
  description: 'Start and manage your own business or startup.',
  videoId: 'pC5l5j2u9SQ',
  careers: ['Startup Founder', 'Business Owner', 'Startup Consultant'],
  roadmap: ['Learn business fundamentals', 'Study market research', 'Develop business plans', 'Learn financial management', 'Build networking skills', 'Launch a startup'],
  longTermFit: 'Excellent Long-Term Fit'
},
{
  id: 'sales-management',
  name: 'Sales Management',
  type: 'non-technical',
  description: 'Lead sales teams and develop strategies to increase company revenue.',
  videoId: 'unZJ7IVc78g',
  careers: ['Sales Manager', 'Business Development Manager', 'Account Manager'],
  roadmap: ['Learn sales fundamentals', 'Study negotiation techniques', 'Develop communication skills', 'Learn CRM tools', 'Study market research', 'Gain sales experience'],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'investment-banker',
  name: 'Investment Banker',
  type: 'non-technical',
  description: 'Help companies raise capital and manage financial investments.',
  videoId: 'wg_ir9IEkHk',
  careers: ['Investment Banker', 'Financial Analyst', 'Portfolio Manager'],
  roadmap: [
    'Complete a degree in finance or economics',
    'Learn financial analysis',
    'Study stock markets and investments',
    'Gain internship in finance firms',
    'Pursue MBA or finance certifications'
  ],
  longTermFit: 'Excellent Long-Term Fit'
},
{
  id: 'loan-officer',
  name: 'Loan Officer',
  type: 'non-technical',
  description: 'Evaluate and approve loan applications for customers and businesses.',
  videoId: '3dE9trHxZkg',
  careers: ['Loan Officer', 'Credit Analyst', 'Loan Manager'],
  roadmap: [
    'Complete a degree in finance or commerce',
    'Learn banking and finance basics',
    'Study credit analysis',
    'Develop communication skills',
    'Gain experience in banking sector'
  ],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'bank-clerk',
  name: 'Bank Clerk',
  type: 'non-technical',
  description: 'Handle customer transactions, accounts, and daily banking operations.',
  videoId: '4t_DQJseHcI',
  careers: ['Bank Clerk', 'Senior Clerk', 'Head Clerk'],
  roadmap: [
    'Complete a bachelor degree',
    'Prepare for IBPS Clerk exam',
    'Study aptitude and reasoning',
    'Learn banking basics',
    'Practice previous year papers',
    'Clear clerk recruitment exam'
  ],
  longTermFit: 'Good Long-Term Fit'
},
{
  id: 'air-traffic-controller',
  name: 'Air Traffic Controller',
  type: 'non-technical',
  description: 'Manage aircraft movements in airspace and ensure safe takeoff and landing.',
  videoId: 'EIKfHOk8rx0',
  careers: ['Air Traffic Controller', 'Senior ATC Officer'],
  roadmap: [
    'Complete bachelor degree in science or engineering',
    'Prepare for AAI recruitment exams',
    'Learn aviation regulations and communication systems',
    'Undergo ATC training program',
    'Work in airports and control towers'
  ],
  longTermFit: 'Excellent Long-Term Fit'
},

];
