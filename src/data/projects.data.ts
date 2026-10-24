import {
  ArchitectureNode,
  FitCheckGarmentKey,
  FitCheckGarmentPreset,
  ProjectItem,
} from '../types/portfolio.types';

/**
 * Modular Project Registry:
 * Add any new project object to `PROJECTS_DATA` and it automatically renders
 * as a structured Bento card in the Projects section.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fitcheck-ai',
    title: 'FitCheck — AI-Driven Apparel Fit Engine',
    subtitle: 'Cross-Platform Mobile Client, Node.js/TypeScript Core API & Async Python Vision Microservice',
    status: 'Active Architecture • Full-Stack & ML System',
    category: 'Distributed AI & Mobile Platform',
    repositoryUrl: 'https://github.com/hibrahi000/fitcheck',
    summary:
      'Developing an advanced cross-platform clothing fit optimization system utilizing React Native (Expo), Node.js/TypeScript backend API, Prisma ORM, and PostgreSQL. Integrates an asynchronous Python/FastAPI microservice executing OCR (Tesseract) alongside the OpenAI Vision API for deep structural analysis of sizing metrics, anchored by a machine learning feedback loop providing highly personalized clothing size recommendations.',
    highlights: [
      {
        anchor: 'Hybrid OCR + Vision Ingestion:',
        detail:
          'Asynchronous Python/FastAPI pipeline combining Tesseract OCR with OpenAI Vision API to extract structured garment measurements from unstructured care labels and sizing charts.',
      },
      {
        anchor: 'Type-Safe Core Engine:',
        detail:
          'Node.js & TypeScript backend powered by Prisma ORM and PostgreSQL, managing normalized brand geometry schemas, user biometric profiles, and low-latency fit scoring.',
      },
      {
        anchor: 'Closed-Loop ML Personalization:',
        detail:
          'Post-purchase drape and comfort feedback loop that continuously recalibrates ease allowances across Chest, Shoulder, and Torso dimensions.',
      },
    ],
    techStack: [
      'React Native (Expo)',
      'Node.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Prisma ORM',
      'PostgreSQL',
      'Tesseract OCR',
      'OpenAI Vision API',
    ],
    featuredSimulator: true,
  },
];

export const FITCHECK_GARMENT_PRESETS: Record<FitCheckGarmentKey, FitCheckGarmentPreset> = {
  hoodie: {
    key: 'hoodie',
    title: 'Heavyweight Boxy Hoodie (480gsm)',
    brand: 'Drop-Shoulder Streetwear Spec',
    fabricSpec: '100% Combed Cotton Fleece • 2.5% Shrinkage Factor',
    ocrConfidence: '99.4%',
    garmentMatrix: {
      S: { chest: 112, shoulder: 53, length: 67 },
      M: { chest: 118, shoulder: 55.5, length: 70 },
      L: { chest: 124, shoulder: 58, length: 73 },
      XL: { chest: 130, shoulder: 60.5, length: 76 },
    },
  },
  oxford: {
    key: 'oxford',
    title: 'Tailored Oxford Button-Down Shirt',
    brand: 'Classic Menswear Spec',
    fabricSpec: '2-Ply Pinpoint Oxford Cotton • Zero Stretch',
    ocrConfidence: '98.9%',
    garmentMatrix: {
      S: { chest: 102, shoulder: 44.5, length: 74 },
      M: { chest: 108, shoulder: 46.5, length: 76 },
      L: { chest: 115, shoulder: 48.5, length: 78 },
      XL: { chest: 122, shoulder: 50.5, length: 80 },
    },
  },
  trouser: {
    key: 'trouser',
    title: 'Technical Tapered Utility Jacket',
    brand: 'Articulated Outerwear Spec',
    fabricSpec: '3-Layer Stretch Nylon Ripstop • DWR Finish',
    ocrConfidence: '99.2%',
    garmentMatrix: {
      S: { chest: 106, shoulder: 46, length: 68 },
      M: { chest: 112, shoulder: 48, length: 70.5 },
      L: { chest: 119, shoulder: 50, length: 73 },
      XL: { chest: 126, shoulder: 52, length: 75.5 },
    },
  },
};

export const FITCHECK_ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'mobile-client',
    layer: 'Layer 01 • Edge Client',
    title: 'React Native (Expo) Client',
    tech: 'React Native • TypeScript • Expo Camera',
    latencyMetric: '60 FPS UI',
    summary:
      'Captures garment tags & sizing charts on-device, manages optimistic biometric state, and renders real-time dimensional tension breakdowns.',
    specs: [
      'Pre-processes image contrast and bounding boxes prior to multipart upload',
      'Caches personalized fit profiles locally for instant offline size lookups',
      'Typed GraphQL/REST client synchronized with core Node.js gateway',
    ],
  },
  {
    id: 'core-api',
    layer: 'Layer 02 • Core Gateway',
    title: 'Node.js / TypeScript Core API',
    tech: 'Node.js • TypeScript • Prisma ORM',
    latencyMetric: '< 35ms p95',
    summary:
      'Orchestrates authentication, user biometric profiles, asynchronous job dispatch to the Python AI service, and deterministic + ML fit scoring.',
    specs: [
      'Strict request/response schema validation and idempotent job orchestration',
      'Computes weighted dimensional ease vectors across Chest, Shoulder, and Length',
      'Applies historical feedback calibration weights per garment silhouette',
    ],
  },
  {
    id: 'vision-service',
    layer: 'Layer 03 • AI Microservice',
    title: 'Python / FastAPI OCR + Vision Engine',
    tech: 'Python • FastAPI • Tesseract OCR • OpenAI Vision',
    latencyMetric: 'Async Worker',
    summary:
      'Executes dual-stage optical character recognition and multimodal LLM structural parsing to convert messy size charts into normalized JSON.',
    specs: [
      'Stage 1: Tesseract OCR extracts raw tabular tokens & fabric composition strings',
      'Stage 2: OpenAI Vision API resolves unit ambiguity (cm/in) and garment cut geometry',
      'Emits validated measurement payloads with per-field confidence telemetry',
    ],
  },
  {
    id: 'data-ml-store',
    layer: 'Layer 04 • Persistence & ML Loop',
    title: 'PostgreSQL + Feedback Calibration Store',
    tech: 'PostgreSQL • Prisma Migrations • Vector Weights',
    latencyMetric: 'ACID + Indexed',
    summary:
      'Stores normalized brand size matrices, user biometric snapshots, and post-wear comfort feedback to continuously refine size predictions.',
    specs: [
      'Indexed composite keys for sub-10ms brand + garment category lookups',
      'Stores post-wear feedback signals (tight/ideal/loose) to adjust ease tolerances',
      'Zero-downtime declarative schema evolution managed via Prisma Migrate',
    ],
  },
];
