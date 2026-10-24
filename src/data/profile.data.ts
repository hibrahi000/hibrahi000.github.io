import { NavItem, ProfileData } from '../types/portfolio.types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'about', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills Matrix' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const PROFILE_DATA: ProfileData = {
  name: 'Hashmat Ibrahimi',
  headline: 'Software Engineer — Backend, Distributed Systems & Full Stack',
  targetRoles: 'Mid-Level to Senior Software Engineer (Backend / Full Stack)',
  location: 'New York, NY',
  availability: 'Open to Mid-Level & Senior Software Engineering Roles',
  yearsOfExperience: '7+ Years',
  summary:
    'Software Engineer with 7+ years of experience specializing in high-scale backend engineering, distributed systems, and core platform tooling across Node.js, TypeScript, Java/Spring Boot, and Federated GraphQL architectures. Proven track record of designing platform-standard software infrastructure adopted across 8+ engineering teams at American Express, securing Tier 0 platforms serving millions of users. Expert in performance optimization, having cut API latency by 70% at BAE Systems, and executing zero-downtime microservices migrations. Collaborative technical contributor who drives end-to-end feature ownership, builds robust test automation frameworks, and eliminates cross-team knowledge silos.',
  valueProposition: {
    eyebrow: 'Backend & Distributed Systems Engineering',
    titlePrefix: 'Engineering resilient,',
    titleHighlight: 'high-throughput backend platforms',
    titleSuffix: 'built for scale.',
    description:
      '7+ years delivering mission-critical microservices, Federated GraphQL subgraphs, and automated testing infrastructure across American Express, BAE Systems, and Wells Fargo.',
  },
  contact: {
    phone: '516-322-8400',
    email: 'Hashmat.ibrahimi.21@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/hashmat-ibrahimi',
    linkedinHandle: 'linkedin.com/in/hashmat-ibrahimi',
    githubUrl: 'https://github.com/hibrahi000',
    githubHandle: 'github.com/hibrahi000',
  },
  coreStackPills: [
    'Node.js',
    'TypeScript',
    'Java / Spring Boot',
    'Apollo GraphQL Federation',
    'Express.js',
    'PostgreSQL',
    'React',
    'Docker & CI/CD',
  ],
  recruiterMetrics: [
    {
      value: '8+ Teams',
      label: 'Platform Adoption',
      context: 'ISO 3166-1 GraphQL validation & Spring Boot snapshot frameworks at Amex',
      accent: 'azure',
    },
    {
      value: '-70%',
      label: 'API Latency Cut',
      context: 'Dropped PostgreSQL & Express response times from 800ms to 240ms at BAE Systems',
      accent: 'emerald',
    },
    {
      value: '99.9%',
      label: 'Zero-Downtime SLA',
      context: 'Top-3 code contributor migrating Node.js monolith to Spring Boot subgraphs',
      accent: 'cyan',
    },
    {
      value: '1M+ Users',
      label: 'Tier-0 Scale',
      context: 'High-security portals & 500K+ daily financial batch transactions',
      accent: 'amber',
    },
  ],
};
