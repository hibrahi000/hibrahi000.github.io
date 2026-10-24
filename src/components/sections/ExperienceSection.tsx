import React, { useState } from 'react';
import { Building2, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { ExperienceDomain } from '../../types/portfolio.types';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeader } from '../ui/SectionHeader';

const DOMAIN_FILTERS: { id: ExperienceDomain; label: string }[] = [
  { id: 'all', label: 'All Experience (5 Roles)' },
  { id: 'fintech', label: 'Enterprise Fintech (Amex & Wells Fargo)' },
  { id: 'defense', label: 'Defense & Security (BAE Systems)' },
  { id: 'iot-enterprise', label: 'IoT & Operations (StrongArm & ABH)' },
];

export const ExperienceSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<ExperienceDomain>('all');

  const filteredRoles =
    selectedDomain === 'all'
      ? EXPERIENCE_DATA
      : EXPERIENCE_DATA.filter((item) => item.domain === selectedDomain);

  return (
    <section
      id="experience"
      className="py-20 border-t border-white/[0.07] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="01 • Career Track Record"
          title="Professional Engineering Experience"
          subtitle="7+ years delivering resilient backend architectures, federated GraphQL platforms, and high-throughput microservices across Tier-0 financial, defense, and enterprise organizations."
          rightSlot={
            <div
              role="tablist"
              aria-label="Filter experience by industry domain"
              className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              {DOMAIN_FILTERS.map((filter) => {
                const active = selectedDomain === filter.id;
                return (
                  <button
                    key={filter.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedDomain(filter.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      active
                        ? 'bg-apple-blue text-white shadow-sm'
                        : 'text-apple-gray-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Timeline Container */}
        <div className="relative pl-0 md:pl-8 space-y-8 before:hidden md:before:block before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-apple-azure via-white/15 to-transparent">
          {filteredRoles.map((role) => (
            <div key={role.id} className="relative group">
              {/* Timeline Node Marker (Desktop) */}
              <div
                aria-hidden="true"
                className={`hidden md:flex absolute -left-[29px] top-8 w-4 h-4 rounded-full items-center justify-center border-2 transition-colors ${
                  role.isCurrentOrRecent
                    ? 'bg-apple-black border-apple-azure shadow-[0_0_12px_rgba(41,151,255,0.8)]'
                    : 'bg-apple-black border-white/30 group-hover:border-apple-azure'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    role.isCurrentOrRecent ? 'bg-apple-azure' : 'bg-white/40'
                  }`}
                />
              </div>

              <BentoCard
                as="article"
                interactive
                accentGlow={role.isCurrentOrRecent ? 'azure' : 'none'}
                className="p-6 sm:p-8"
              >
                {/* Role Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-apple-azure">
                        <Building2 className="w-3.5 h-3.5" />
                        {role.domainLabel}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="inline-flex items-center gap-1 text-xs text-apple-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {role.role}{' '}
                      <span className="text-apple-gray-400 font-normal">at</span>{' '}
                      <span className="text-white">{role.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-apple-gray-200">
                      <Calendar className="w-3.5 h-3.5 text-apple-azure" />
                      <span>{role.period}</span>
                    </div>
                  </div>
                </div>

                {/* Key Quantitative Role Callouts (Instant Recruiter Scan) */}
                <div className="py-4 border-b border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mr-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-apple-azure" />
                    Key Impact:
                  </span>
                  {role.headerMetrics.map((metric) => (
                    <Badge key={metric} variant="azure" mono>
                      {metric}
                    </Badge>
                  ))}
                </div>

                {/* Scannable Bullets with Bold Impact Anchors */}
                <ul className="mt-6 space-y-4">
                  {role.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-apple-gray-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-apple-azure shrink-0 mt-1" />
                      <div className="flex-1">
                        <strong className="font-semibold text-white">
                          {bullet.anchor}{' '}
                        </strong>
                        <span>{bullet.description}</span>
                        {bullet.impactTag && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono bg-apple-emerald/10 text-apple-emerald border border-apple-emerald/25 align-middle">
                            {bullet.impactTag}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Footer */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-apple-gray-400 mr-2">
                    Environment:
                  </span>
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-apple-gray-200 border border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
