import React, { useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  ScanLine,
  Sliders,
  Sparkles,
} from 'lucide-react';
import {
  FITCHECK_ARCHITECTURE_NODES,
  FITCHECK_GARMENT_PRESETS,
  PROJECTS_DATA,
} from '../../data/projects.data';
import {
  FitCheckGarmentKey,
  FitPreferenceKey,
} from '../../types/portfolio.types';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

const PIPELINE_STEPS = [
  '1. Tesseract OCR: Extracting raw sizing table tokens...',
  '2. OpenAI Vision API: Resolving garment silhouette & unit schema...',
  '3. Node.js + Prisma: Querying PostgreSQL brand ease matrices...',
  '4. ML Calibration Loop: Computing personalized size recommendation.',
];

export const ProjectsSection: React.FC = () => {
  // Interactive FitCheck Simulator State
  const [selectedGarment, setSelectedGarment] =
    useState<FitCheckGarmentKey>('hoodie');
  const [chestCm, setChestCm] = useState<number>(102);
  const [shoulderCm, setShoulderCm] = useState<number>(46.5);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [fitPreference, setFitPreference] =
    useState<FitPreferenceKey>('regular');
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    FITCHECK_ARCHITECTURE_NODES[0].id
  );
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanStepIndex, setScanStepIndex] = useState<number>(3);

  const activePreset = FITCHECK_GARMENT_PRESETS[selectedGarment];

  const activeArchNode = useMemo(
    () =>
      FITCHECK_ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) ||
      FITCHECK_ARCHITECTURE_NODES[0],
    [selectedNodeId]
  );

  // Trigger simulated OCR + Vision pipeline animation
  const handleRunVisionSimulation = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanStepIndex(0);

    [1, 2, 3].forEach((step, idx) => {
      setTimeout(() => {
        setScanStepIndex(step);
        if (step === 3) {
          setIsScanning(false);
        }
      }, (idx + 1) * 420);
    });
  };

  // Compute deterministic + ML-weighted size recommendation
  const recommendation = useMemo(() => {
    const easeAllowance =
      fitPreference === 'tailored'
        ? 8
        : fitPreference === 'regular'
        ? 14
        : 20;

    const targetGarmentChest = chestCm + easeAllowance;
    const sizes = ['S', 'M', 'L', 'XL'] as const;

    let bestSize: 'S' | 'M' | 'L' | 'XL' = 'M';
    let minScore = Infinity;

    sizes.forEach((size) => {
      const spec = activePreset.garmentMatrix[size];
      const chestDiff = Math.abs(spec.chest - targetGarmentChest);
      const shoulderDiff = Math.abs(spec.shoulder - (shoulderCm + easeAllowance * 0.35)) * 1.8;
      const lengthTarget = heightCm * 0.4;
      const lengthDiff = Math.abs(spec.length - lengthTarget) * 1.1;

      const totalPenalty = chestDiff + shoulderDiff + lengthDiff;
      if (totalPenalty < minScore) {
        minScore = totalPenalty;
        bestSize = size;
      }
    });

    const chosenSpec = activePreset.garmentMatrix[bestSize];
    const chestEase = +(chosenSpec.chest - chestCm).toFixed(1);
    const confidence = Math.max(
      91,
      Math.min(99, Math.round(99 - minScore * 0.45))
    );

    const chestTensionPct = Math.min(
      95,
      Math.max(25, Math.round(100 - chestEase * 2.4))
    );
    const shoulderMatchPct = Math.min(
      98,
      Math.max(60, Math.round(100 - Math.abs(chosenSpec.shoulder - shoulderCm) * 3))
    );
    const lengthMatchPct = Math.min(
      98,
      Math.max(65, Math.round(100 - Math.abs(chosenSpec.length - heightCm * 0.4) * 3))
    );

    return {
      bestSize,
      confidence,
      chosenSpec,
      chestEase,
      chestTensionPct,
      shoulderMatchPct,
      lengthMatchPct,
    };
  }, [activePreset, chestCm, shoulderCm, heightCm, fitPreference]);

  return (
    <section
      id="projects"
      className="py-20 border-t border-white/[0.07] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="03 • Featured Systems & Product Engineering"
          title="Interactive Architecture Showcase"
          subtitle="Modular project showcase demonstrating full-stack product engineering, asynchronous Python OCR/Vision microservices, and type-safe Node.js/TypeScript backend design."
        />

        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="space-y-8">
            {/* Project Executive Overview Bento */}
            <BentoCard accentGlow="azure" className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="azure" dot>
                      {project.status}
                    </Badge>
                    <Badge variant="neutral" mono>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-apple-azure">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    href={project.repositoryUrl}
                    external
                    variant="primary"
                    size="md"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-apple-gray-300 leading-relaxed">
                {project.summary}
              </p>

              {/* 3 Key Architectural Pillars */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.highlights.map((item) => (
                  <div
                    key={item.anchor}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-apple-azure shrink-0" />
                      <span>{item.anchor}</span>
                    </div>
                    <p className="text-xs text-apple-gray-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Project Tech Stack Pills */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mr-1">
                  System Stack:
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-apple-gray-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Interactive FitCheck AI Simulator & Distributed Architecture Explorer */}
            {project.featuredSimulator && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Interactive Biometric & OCR Sizing Simulator (7 Cols) */}
                <BentoCard className="lg:col-span-7 p-6 sm:p-7 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-apple-blue/20 border border-apple-azure/30 flex items-center justify-center">
                        <Sliders className="w-4 h-4 text-apple-azure" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">
                          Interactive FitCheck Sizing & OCR Simulator
                        </h4>
                        <p className="text-xs text-apple-gray-400">
                          Adjust biometric parameters or trigger an OCR/Vision scan
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRunVisionSimulation}
                      disabled={isScanning}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-apple-azure/15 hover:bg-apple-azure/25 text-apple-azure border border-apple-azure/30 transition-all"
                    >
                      <ScanLine
                        className={`w-3.5 h-3.5 ${
                          isScanning ? 'animate-spin' : ''
                        }`}
                      />
                      <span>
                        {isScanning ? 'Running OCR Pipeline...' : 'Simulate Vision Scan'}
                      </span>
                    </button>
                  </div>

                  {/* Garment Spec Selector */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mb-2">
                      1. Select Parsed Garment Specification (Tesseract OCR + OpenAI Vision)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {(
                        Object.keys(
                          FITCHECK_GARMENT_PRESETS
                        ) as FitCheckGarmentKey[]
                      ).map((key) => {
                        const preset = FITCHECK_GARMENT_PRESETS[key];
                        const active = selectedGarment === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setSelectedGarment(key)}
                            className={`text-left p-3 rounded-2xl border transition-all ${
                              active
                                ? 'bg-apple-blue/15 border-apple-azure text-white shadow-sm'
                                : 'bg-white/[0.02] border-white/[0.07] text-apple-gray-300 hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="text-xs font-semibold text-white truncate">
                              {preset.title}
                            </div>
                            <div className="text-[11px] font-mono text-apple-azure mt-1">
                              OCR Conf: {preset.ocrConfidence}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Biometric Sliders */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-apple-gray-300">Chest</span>
                        <span className="font-mono font-semibold text-apple-azure">
                          {chestCm} cm
                        </span>
                      </div>
                      <input
                        type="range"
                        min={88}
                        max={118}
                        step={1}
                        value={chestCm}
                        onChange={(e) => setChestCm(Number(e.target.value))}
                        aria-label="Chest circumference in centimeters"
                        className="w-full apple-slider"
                      />
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-apple-gray-300">Shoulder</span>
                        <span className="font-mono font-semibold text-apple-azure">
                          {shoulderCm} cm
                        </span>
                      </div>
                      <input
                        type="range"
                        min={41}
                        max={54}
                        step={0.5}
                        value={shoulderCm}
                        onChange={(e) => setShoulderCm(Number(e.target.value))}
                        aria-label="Shoulder width in centimeters"
                        className="w-full apple-slider"
                      />
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-apple-gray-300">Height</span>
                        <span className="font-mono font-semibold text-apple-azure">
                          {heightCm} cm
                        </span>
                      </div>
                      <input
                        type="range"
                        min={160}
                        max={198}
                        step={1}
                        value={heightCm}
                        onChange={(e) => setHeightCm(Number(e.target.value))}
                        aria-label="Height in centimeters"
                        className="w-full apple-slider"
                      />
                    </div>
                  </div>

                  {/* Silhouette / Drape Preference */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-xs font-mono text-apple-gray-300">
                      Target Silhouette Preference:
                    </span>
                    <div className="flex gap-1.5">
                      {(['tailored', 'regular', 'relaxed'] as FitPreferenceKey[]).map(
                        (pref) => (
                          <button
                            key={pref}
                            type="button"
                            onClick={() => setFitPreference(pref)}
                            className={`px-3 py-1 rounded-xl text-xs font-medium capitalize transition-all ${
                              fitPreference === pref
                                ? 'bg-apple-blue text-white'
                                : 'bg-white/[0.04] text-apple-gray-400 hover:text-white'
                            }`}
                          >
                            {pref}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Live Computed Output Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-apple-blue/15 via-black/60 to-black/80 border border-apple-azure/30 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-apple-azure flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          ML-Calibrated Recommendation
                        </span>
                        <div className="mt-1 flex items-baseline gap-3">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                            Size {recommendation.bestSize}
                          </span>
                          <span className="text-xs font-mono text-apple-emerald">
                            {recommendation.confidence}% Fit Match Confidence
                          </span>
                        </div>
                        <p className="text-xs text-apple-gray-400 mt-1">
                          {activePreset.fabricSpec} • Garment Chest:{' '}
                          <strong className="text-white">
                            {recommendation.chosenSpec.chest} cm
                          </strong>{' '}
                          ({recommendation.chestEase >= 0 ? '+' : ''}
                          {recommendation.chestEase} cm ease)
                        </p>
                      </div>

                      <div className="text-right font-mono text-xs text-apple-gray-300 bg-black/50 px-3.5 py-2.5 rounded-xl border border-white/[0.08]">
                        <div>
                          Shoulder: {recommendation.chosenSpec.shoulder} cm
                        </div>
                        <div>Length: {recommendation.chosenSpec.length} cm</div>
                      </div>
                    </div>

                    {/* Dimensional Alignment Telemetry Bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/[0.08]">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-apple-gray-300 mb-1">
                          <span>Chest Drape</span>
                          <span>{recommendation.chestTensionPct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-apple-azure rounded-full transition-all duration-300"
                            style={{
                              width: `${recommendation.chestTensionPct}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-apple-gray-300 mb-1">
                          <span>Shoulder Seam</span>
                          <span>{recommendation.shoulderMatchPct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-apple-emerald rounded-full transition-all duration-300"
                            style={{
                              width: `${recommendation.shoulderMatchPct}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-apple-gray-300 mb-1">
                          <span>Torso Proportion</span>
                          <span>{recommendation.lengthMatchPct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-apple-cyan rounded-full transition-all duration-300"
                            style={{
                              width: `${recommendation.lengthMatchPct}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Live Pipeline Trace Status */}
                    <div className="text-[11px] font-mono text-apple-gray-300 flex items-center gap-2 pt-1">
                      <Activity className="w-3.5 h-3.5 text-apple-emerald shrink-0" />
                      <span>{PIPELINE_STEPS[scanStepIndex]}</span>
                    </div>
                  </div>
                </BentoCard>

                {/* Right Column: Interactive Distributed Architecture Inspector (5 Cols) */}
                <BentoCard className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-apple-emerald/15 border border-apple-emerald/30 flex items-center justify-center">
                          <Layers className="w-4 h-4 text-apple-emerald" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white">
                            Distributed System Topology
                          </h4>
                          <p className="text-xs text-apple-gray-400">
                            Click any service node to inspect specs
                          </p>
                        </div>
                      </div>
                      <Badge variant="emerald" mono>
                        4 Nodes
                      </Badge>
                    </div>

                    {/* Interactive Service Nodes */}
                    <div className="space-y-2.5">
                      {FITCHECK_ARCHITECTURE_NODES.map((node) => {
                        const isSelected = node.id === selectedNodeId;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                              isSelected
                                ? 'bg-apple-blue/15 border-apple-azure shadow-sm'
                                : 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[11px] font-mono">
                              <span className="text-apple-azure">
                                {node.layer}
                              </span>
                              <span className="text-apple-emerald">
                                {node.latencyMetric}
                              </span>
                            </div>
                            <div className="text-sm font-semibold text-white mt-0.5">
                              {node.title}
                            </div>
                            <div className="text-xs font-mono text-apple-gray-400 mt-0.5">
                              {node.tech}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Node Deep-Dive Panel */}
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.09] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-apple-azure">
                      <Cpu className="w-4 h-4" />
                      <span>Active Node Spec: {activeArchNode.title}</span>
                    </div>
                    <p className="text-xs text-apple-gray-300 leading-relaxed">
                      {activeArchNode.summary}
                    </p>
                    <ul className="space-y-1.5 pt-1">
                      {activeArchNode.specs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-apple-gray-400"
                        >
                          <span className="text-apple-azure mt-0.5">▹</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </BentoCard>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
