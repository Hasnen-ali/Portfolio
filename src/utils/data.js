export const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export const SKILLS = {
  Frontend: [
    { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
  ],
  Backend: [
    { name: 'Java', icon: 'FaJava', color: '#f89820' },
    { name: 'Spring Boot', icon: 'SiSpringboot', color: '#6DB33F' },
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express.js', icon: 'SiExpress', color: '#ffffff' },
    { name: 'REST APIs', icon: 'TbApi', color: '#6c63ff' },
    { name: 'JWT Auth', icon: 'SiJsonwebtokens', color: '#f72585' },
  ],
  Database: [
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
  ],
  DevOps: [
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'GitHub', icon: 'SiGithub', color: '#ffffff' },
    { name: 'Vercel', icon: 'SiVercel', color: '#ffffff' },
  ],
};

export const PROJECTS = [
  {
    title: 'Developer Meet',
    description: 'A full-stack social platform for developers with role-based access, real-time features, and a rich dashboard UI.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    tech: ['Spring Boot', 'React', 'MongoDB', 'JWT', 'Docker'],
    features: ['Role-based access control', '25+ REST APIs', 'File upload system', 'Dashboard UI'],
    live: 'https://developer-meet-app.vercel.app/',
    github: 'https://github.com/Hasnen-ali/Developer-Meet-App',
    color: '#6c63ff',
  },
  {
    title: 'Admission Management CRM',
    description: 'A CRM system for managing student admissions with seat allocation, fee tracking, and MongoDB transactions.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Seat allocation system', 'MongoDB transactions', 'Fee tracking', 'Admin dashboard'],
    live: 'https://admission-management-crm-flame.vercel.app/',
    github: 'https://github.com/Hasnen-ali/Admission-Management-CRM',
    color: '#f72585',
  },
  {
    title: 'Task Management System',
    description: 'A productivity app with JWT authentication, CRUD operations, advanced filters, pagination, and Axios interceptors.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
    features: ['Access + refresh token auth', 'CRUD operations', 'Filters & pagination', 'Axios interceptors'],
    live: 'https://task-management-system-ochre-psi.vercel.app/',
    github: 'https://github.com/Hasnen-ali/Task-Management-System',
    color: '#00d4aa',
  },
];

export const EXPERIENCE = [
  {
    company: 'Ethical Intelligence Solutions LLP',
    role: 'Full Stack Developer Intern',
    period: '2024 – Present',
    desc: 'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver production-ready features.',
    icon: '💼',
  },
  {
    company: 'Airport Authority of India',
    role: 'Technical Trainee',
    period: '2023',
    desc: 'Gained hands-on experience with enterprise-level systems, networking infrastructure, and IT operations in a government aviation environment.',
    icon: '✈️',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech | Electrical and Electronic Engineering',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP',
    period: '06/2021 – 05/2024',
    grade: 'Percentage: 83%',
    icon: '🎓',
  },
  {
    degree: 'Diploma | Electrical Engineering',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP',
    period: '06/2017 – 05/2020',
    grade: 'Percentage: 77.9%',
    icon: '📜',
  },
];

export const TYPING_ROLES = [
  'Full Stack Developer',
  'Java & Spring Boot Dev',
  'React.js Enthusiast',
  'Node.js Backend Dev',
  'Problem Solver',
];
