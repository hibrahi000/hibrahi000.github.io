export type SectionId = 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SummaryMetric {
  value: string;
  label: string;
  context: string;
  accent: 'azure' | 'emerald' | 'cyan' | 'amber';
}

export interface ProfileData {
  name: string;
  headline: string;
  targetRoles: string;
  location: string;
  availability: string;
  yearsOfExperience: string;
  summary: string;
  valueProposition: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
  };
  contact: {
    phone: string;
    email: string;
    linkedinUrl: string;
    linkedinHandle: string;
    githubUrl: string;
    githubHandle: string;
  };
  coreStackPills: string[];
  recruiterMetrics: SummaryMetric[];
}

export type ExperienceDomain = 'all' | 'fintech' | 'defense' | 'iot-enterprise';

export interface ExperienceBullet {
  anchor: string;
  description: string;
  impactTag?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  domain: Exclude<ExperienceDomain, 'all'>;
  domainLabel: string;
  isCurrentOrRecent?: boolean;
  headerMetrics: string[];
  bullets: ExperienceBullet[];
  technologies: string[];
}

export type SkillCategoryId =
  | 'all'
  | 'languages-frameworks'
  | 'backend-architecture'
  | 'databases-orms'
  | 'testing-cicd'
  | 'security-monitoring';

export interface SkillCategoryMeta {
  id: SkillCategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategoryId, 'all'>;
  categoryLabel: string;
  level: 'Core' | 'Production' | 'Advanced';
  context: string;
  isPrimarySpotlight?: boolean;
}

export type FitCheckGarmentKey = 'hoodie' | 'oxford' | 'trouser';
export type FitPreferenceKey = 'tailored' | 'regular' | 'relaxed';

export interface FitCheckGarmentPreset {
  key: FitCheckGarmentKey;
  title: string;
  brand: string;
  fabricSpec: string;
  ocrConfidence: string;
  garmentMatrix: Record<string, { chest: number; shoulder: number; length: number }>;
}

export interface ArchitectureNode {
  id: string;
  layer: string;
  title: string;
  tech: string;
  latencyMetric: string;
  summary: string;
  specs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  category: string;
  repositoryUrl: string;
  summary: string;
  highlights: {
    anchor: string;
    detail: string;
  }[];
  techStack: string[];
  featuredSimulator?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  honors: string;
  location: string;
  highlights: string[];
  coursework: string[];
}
