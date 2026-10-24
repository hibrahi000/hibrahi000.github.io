# hibrahi000.github.io

Personal portfolio website and engineering showcase built with React, TypeScript, Tailwind CSS, and Vite.

**Live Site:** [https://hibrahi000.github.io](https://hibrahi000.github.io)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Deployment:** GitHub Actions &rarr; GitHub Pages (`.github/workflows/deploy.yml`)

## Project Structure

The codebase is organized into data modules, shared UI primitives, layout wrappers, and page sections so content updates stay separate from component markup:

```text
├── .github/workflows/
│   └── deploy.yml              # CI/CD workflow for GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, and print-formatted resume view
│   │   ├── sections/           # Page sections (Hero, Experience, Skills, Projects, Education, Contact)
│   │   └── ui/                 # Reusable UI primitives (BentoCard, Badge, Button, SectionHeader, Toast)
│   ├── data/                   # Typed content configuration (experience, skills, projects, education, profile)
│   ├── styles/
│   │   └── index.css           # Tailwind base imports, custom scrollbars, and @media print rules
│   ├── types/
│   │   └── portfolio.types.ts  # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Local Development

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

Run type checking and build for production:

```bash
npm run type-check
npm run build
npm run preview
```

## Updating Content

All portfolio data is stored in `src/data/`:

- `src/data/profile.data.ts` — Bio, contact links, and summary metrics
- `src/data/experience.data.ts` — Work history, bullet points, and tech tags
- `src/data/skills.data.ts` — Technical skills grouped by domain
- `src/data/projects.data.ts` — Featured projects and interactive FitCheck sizing presets
- `src/data/education.data.ts` — Degree and coursework details

Updating any file in `src/data/` automatically updates both the web view and the printable resume layout (`src/components/layout/PrintResume.tsx`).

## License

MIT © Hashmat Ibrahimi
