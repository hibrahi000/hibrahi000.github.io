import { ExperienceItem } from '../types/portfolio.types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'american-express',
    company: 'American Express',
    role: 'Software Engineer',
    location: 'New York, NY',
    period: 'Aug 2022 – Jan 2026',
    domain: 'fintech',
    domainLabel: 'Tier-0 Enterprise Fintech',
    isCurrentOrRecent: true,
    headerMetrics: [
      '8+ Federated Teams Adopted',
      '99.9% Availability SLA',
      'Top-3 Migration Contributor',
      'UK / India / France KYC',
    ],
    bullets: [
      {
        anchor: 'ISO 3166-1 GraphQL Scalar Standard:',
        description:
          'Architected and implemented a custom GraphQL scalar for ISO 3166-1 country/subdivision validation on a legacy ES5 core subgraph codebase; eliminated critical data integrity vulnerabilities in customer address mutations and established a platform-wide validation standard adopted by 8+ federated engineering teams to support international KYC compliance for expansion into the UK, India, and France.',
        impactTag: '8+ Teams Standard',
      },
      {
        anchor: 'Java/Spring Boot Snapshot Framework:',
        description:
          'Engineered a high-performance Java/Spring Boot snapshot testing framework utility utilizing Jackson for recursive schema traversal and wildcard/path-based field exclusion; resolved regression test pollution during active patch cycles and significantly improved CI/CD build reliability across 8+ autonomous microservices teams.',
        impactTag: 'CI/CD Reliability',
      },
      {
        anchor: 'Zero-Downtime Monolith Migration:',
        description:
          'Accelerated a critical platform migration from a legacy Node.js/TypeScript GraphQL monolith to Java/Spring Boot federated microservices as a top-3 code contributor; maintained 99.9% availability (zero downtime) across core customer profile and issuance domains.',
        impactTag: '99.9% Availability',
      },
      {
        anchor: 'Distributed Graph Defect Resolution:',
        description:
          'Diagnosed and resolved a mission-critical distributed graph defect involving sub-graph type mapping mismatches where valid mutations returned null queries, averting platform-wide cascading failures across the federated ecosystem prior to production release.',
        impactTag: 'Zero Prod Outages',
      },
      {
        anchor: 'Tier-0 E2E Test Automation:',
        description:
          'Designed and executed robust end-to-end regression and UI verification automation suites utilizing Java and Selenium WebDriver, establishing enterprise-grade test automation standards for Tier 0 financial applications.',
      },
      {
        anchor: 'Customer-Centric Resolver Evolution:',
        description:
          'Refactored complex GraphQL resolvers and data mutations to align with customer-centric data access patterns during a massive account-to-customer architecture evolution; partnered with SRE, Product, and Enterprise Architecture teams to ensure seamless E3 production deployments.',
      },
      {
        anchor: 'Cross-Functional Domain Enablement:',
        description:
          'Served as technical domain expert for cross-functional engineers; built shared Postman collections, debugging runbooks, and deep-dive documentation that decreased engineering onboarding ramp time and eliminated team operational bottlenecks.',
      },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'GraphQL (Apollo Federation)',
      'Node.js',
      'TypeScript',
      'Jackson',
      'Selenium WebDriver',
      'JUnit',
      'Splunk',
      'Jenkins',
    ],
  },
  {
    id: 'bae-systems',
    company: 'BAE Systems',
    role: 'Full Stack Developer',
    location: 'New York, NY',
    period: 'Jul 2021 – Aug 2022',
    domain: 'defense',
    domainLabel: 'Defense & High-Security Portal',
    headerMetrics: [
      '-70% API Latency (800ms → 240ms)',
      '1M+ Active Users',
      '-30% Prod Incident Tickets',
    ],
    bullets: [
      {
        anchor: 'Rapid Core API Ownership:',
        description:
          'Assumed sole ownership of critical backend APIs handling resume processing, security clearance verification, and candidate matching for a high-security military job application portal serving 1M+ active users within two weeks of onboarding.',
        impactTag: '1M+ Active Users',
      },
      {
        anchor: '70% API Latency Reduction:',
        description:
          'Engineered a 70% reduction in API response times (dropping latency from 800ms to 240ms) by diagnosing and eradicating deep N+1 query patterns within PostgreSQL database calls; implemented batching strategies and optimized Express.js routing logic.',
        impactTag: '800ms → 240ms',
      },
      {
        anchor: 'Security Hardening & OpenAPI Standardization:',
        description:
          'Standardized platform documentation by mapping all endpoints via Swagger/OpenAPI, hardening document upload pipelines through secure JWT/OAuth 2.0 flows, and implementing defensive error-handling mechanisms that dropped production incident tickets by over 30%.',
        impactTag: '-30% Incidents',
      },
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'React',
      'OAuth 2.0 / JWT',
      'Swagger / OpenAPI',
      'SQL Query Tuning',
    ],
  },
  {
    id: 'wells-fargo',
    company: 'Wells Fargo',
    role: 'Software Engineer Associate',
    location: 'New York, NY',
    period: 'Jul 2020 – Jul 2021',
    domain: 'fintech',
    domainLabel: 'Enterprise Banking & Batch Infrastructure',
    headerMetrics: [
      '1M+ Accounts Processed',
      '500K+ Daily Transactions',
      'COBOL → Spring Batch',
    ],
    bullets: [
      {
        anchor: 'Mainframe-to-Microservices Migration:',
        description:
          'Executed technical migration tasks transitioning core batch processing architectures from legacy mainframe COBOL systems to modern Java/Spring Batch microservices, successfully supporting the reliable processing of 1M+ accounts and 500K+ daily transactions.',
        impactTag: '500K+ Daily Txns',
      },
      {
        anchor: 'Engineering Onboarding & Runbooks:',
        description:
          'Created internal codebase onboarding tools and comprehensive architectural runbooks, reducing new-hire engineer ramp-up time and dismantling long-standing knowledge silos.',
      },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Batch',
      'DB2',
      'Microservices',
      'JUnit',
      'Jenkins',
    ],
  },
  {
    id: 'strongarm-technologies',
    company: 'StrongArm Technologies',
    role: 'Software Engineer Intern',
    location: 'Brooklyn, NY',
    period: 'Jan 2020 – Jun 2020',
    domain: 'iot-enterprise',
    domainLabel: 'Industrial IoT & Telemetry',
    headerMetrics: [
      '10,000+ Active Workers (Walmart)',
      '-60% CI/CD Overhead',
      'Real-Time Sensor Ingestion',
    ],
    bullets: [
      {
        anchor: 'Enterprise IoT Safety Engine:',
        description:
          'Developed a Python/SQLAlchemy backend engine for an enterprise IoT industrial worker safety posture-tracking dashboard deployed across a strategic Walmart partnership serving 10,000+ active industrial workers.',
        impactTag: '10K+ IoT Workers',
      },
      {
        anchor: 'High-Throughput Sensor Ingestion APIs:',
        description:
          'Designed scalable RESTful APIs optimized for high-throughput IoT sensor data ingestion and real-time streaming analytics processing.',
      },
      {
        anchor: 'Docker & Pytest CI/CD Automation:',
        description:
          'Automated development deployment workflows by building custom CI/CD pipelines using Docker and Pytest, slashing continuous integration overhead by 60% and shortening QA lifecycles.',
        impactTag: '-60% CI Overhead',
      },
    ],
    technologies: [
      'Python',
      'SQLAlchemy',
      'RESTful APIs',
      'PostgreSQL',
      'Docker',
      'Pytest',
      'CI/CD Automation',
    ],
  },
  {
    id: 'abh-pharma',
    company: 'ABH Pharma',
    role: 'Contract Web Developer',
    location: 'Brentwood, NY',
    period: 'Jan 2019 – Jun 2019',
    domain: 'iot-enterprise',
    domainLabel: 'Supply Chain & Operations Platform',
    headerMetrics: [
      '20+ Operations Staff Onboarded',
      '100% Spreadsheet Elimination',
      'Automated Excel → JSON ETL',
    ],
    bullets: [
      {
        anchor: 'Full-Stack MERN Operations Platform:',
        description:
          'Designed and deployed a full-stack MERN data management platform that replaced highly inefficient shared spreadsheet workflows for 20+ operations employees, completely eliminating inventory version data divergence.',
        impactTag: 'Zero Data Divergence',
      },
      {
        anchor: 'Automated Excel-to-MongoDB Ingestion Engine:',
        description:
          'Built an automated data processing engine to transform arbitrary Excel datasets into cleanly structured JSON documents for MongoDB storage, eliminating manual entry anomalies.',
      },
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript (ES6+)',
      'REST APIs',
    ],
  },
];
