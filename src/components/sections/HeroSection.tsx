import React from 'react';
import {
  ArrowDownRight,
  Briefcase,
  Check,
  Copy,
  FileDown,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile.data';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onCopy: (text: string, label: string) => void;
  copiedLabel: string | null;
  onPrintResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopy,
  copiedLabel,
  onPrintResume,
}) => {
  return (
    <section
      id="about"
      className="relative pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-gradient-to-tr from-apple-blue/20 via-apple-cyan/10 to-transparent blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Intro & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="emerald" dot>
                {PROFILE_DATA.availability}
              </Badge>
              <Badge variant="neutral" mono>
                <MapPin className="w-3 h-3 text-apple-azure" />
                <span>{PROFILE_DATA.location}</span>
              </Badge>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-apple-azure">
                {PROFILE_DATA.valueProposition.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.06]">
                {PROFILE_DATA.valueProposition.titlePrefix}{' '}
                <span className="bg-gradient-to-r from-white via-apple-azure to-apple-cyan bg-clip-text text-transparent">
                  {PROFILE_DATA.valueProposition.titleHighlight}
                </span>{' '}
                {PROFILE_DATA.valueProposition.titleSuffix}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-apple-gray-300 leading-relaxed max-w-2xl">
              {PROFILE_DATA.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="#experience" variant="primary" size="lg">
                <span>View Experience</span>
                <ArrowDownRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={onPrintResume}
                variant="glass"
                size="lg"
                type="button"
              >
                <FileDown className="w-4 h-4 text-apple-azure" />
                <span>Save / Print Resume (PDF)</span>
              </Button>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-white/[0.08]">
              <p className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mb-3">
                Direct Contact & Profiles
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onCopy(PROFILE_DATA.contact.email, 'Email address')
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-apple-azure/40 text-xs font-mono text-apple-gray-200 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-apple-azure" />
                  <span>{PROFILE_DATA.contact.email}</span>
                  {copiedLabel === 'Email address' ? (
                    <Check className="w-3.5 h-3.5 text-apple-emerald" />
                  ) : (
                    <Copy className="w-3 h-3 text-apple-gray-400" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onCopy(PROFILE_DATA.contact.phone, 'Phone number')
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-apple-azure/40 text-xs font-mono text-apple-gray-200 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-apple-emerald" />
                  <span>{PROFILE_DATA.contact.phone}</span>
                  {copiedLabel === 'Phone number' ? (
                    <Check className="w-3.5 h-3.5 text-apple-emerald" />
                  ) : (
                    <Copy className="w-3 h-3 text-apple-gray-400" />
                  )}
                </button>

                <a
                  href={PROFILE_DATA.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-apple-azure/40 text-xs font-medium text-apple-gray-200 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-apple-azure" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PROFILE_DATA.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-apple-azure/40 text-xs font-medium text-apple-gray-200 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Overview Card */}
          <div className="lg:col-span-5">
            <BentoCard accentGlow="azure" className="p-6 sm:p-7 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-apple-blue/20 border border-apple-azure/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-apple-azure" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      Engineering Overview
                    </h2>
                    <p className="text-[11px] font-mono text-apple-gray-400">
                      Core Focus & Production Highlights
                    </p>
                  </div>
                </div>
                <Badge variant="azure" mono>
                  {PROFILE_DATA.yearsOfExperience}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-apple-gray-400">
                    <Briefcase className="w-3.5 h-3.5 text-apple-azure" />
                    <span>Focus Area</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-white">
                    Mid-Level & Senior SWE
                  </p>
                  <p className="text-[11px] text-apple-gray-400">
                    Backend • Distributed • Full Stack
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-apple-gray-400">
                    <Layers className="w-3.5 h-3.5 text-apple-emerald" />
                    <span>Previous Teams</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-white">
                    Amex • BAE • Wells Fargo
                  </p>
                  <p className="text-[11px] text-apple-gray-400">
                    Financial & Defense Systems
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mb-2.5">
                  Key Production Metrics
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {PROFILE_DATA.recruiterMetrics.map((metric) => {
                    const valueColors = {
                      azure: 'text-apple-azure',
                      emerald: 'text-apple-emerald',
                      cyan: 'text-apple-cyan',
                      amber: 'text-apple-amber',
                    };
                    return (
                      <div
                        key={metric.label}
                        className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.07] hover:border-white/[0.16] transition-colors"
                      >
                        <div
                          className={`text-xl sm:text-2xl font-extrabold tracking-tight font-mono ${
                            valueColors[metric.accent]
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs font-semibold text-white mt-0.5">
                          {metric.label}
                        </div>
                        <p className="text-[11px] text-apple-gray-400 mt-1 leading-snug">
                          {metric.context}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mb-2.5">
                  Primary Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {PROFILE_DATA.coreStackPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-apple-gray-200 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
