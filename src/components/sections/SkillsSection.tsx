import React, { useMemo, useState } from 'react';
import { Cpu, Layers, Search, Sparkles, X } from 'lucide-react';
import { SKILL_CATEGORIES, SKILLS_DATA } from '../../data/skills.data';
import { SkillCategoryId } from '../../types/portfolio.types';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeader } from '../ui/SectionHeader';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const spotlightSkills = useMemo(
    () => SKILLS_DATA.filter((s) => s.isPrimarySpotlight),
    []
  );

  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SKILLS_DATA.filter((skill) => {
      const matchesQuery =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.context.toLowerCase().includes(query) ||
        skill.categoryLabel.toLowerCase().includes(query);
      return matchesQuery;
    });
  }, [searchQuery]);

  const activeCategoryMeta = useMemo(
    () =>
      SKILL_CATEGORIES.find((c) => c.id === activeCategory) ||
      SKILL_CATEGORIES[0],
    [activeCategory]
  );

  return (
    <section id="skills" className="py-20 border-t border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          eyebrow="02 • Technical Architecture & Stack"
          title="Interactive Skills Matrix"
          subtitle="Select an engineering domain to highlight relevant capabilities across backend runtimes, distributed architectures, databases, and automated delivery pipelines."
        />

        {/* Core Production Stack Spotlight Bento */}
        <BentoCard accentGlow="cyan" className="p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-apple-cyan/15 border border-apple-cyan/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-apple-cyan" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  Core Production Stack Spotlight
                </h3>
                <p className="text-xs text-apple-gray-400">
                  Primary technologies deployed in high-throughput production environments
                </p>
              </div>
            </div>
            <Badge variant="cyan" mono>
              8 Primary Pillars
            </Badge>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {spotlightSkills.map((skill) => (
              <div
                key={skill.name}
                onClick={() => setActiveCategory(skill.category)}
                className="cursor-pointer group p-4 rounded-2xl bg-white/[0.03] hover:bg-apple-blue/10 border border-white/[0.07] hover:border-apple-azure/40 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-apple-azure transition-colors">
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-apple-azure/15 text-apple-azure border border-apple-azure/30">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-apple-gray-400 line-clamp-2 leading-relaxed">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Category Filter Tabs + Real-time Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category.id;
              const count =
                category.id === 'all'
                  ? SKILLS_DATA.length
                  : SKILLS_DATA.filter((s) => s.category === category.id).length;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-apple-blue text-white shadow-[0_4px_16px_rgba(0,113,227,0.4)]'
                      : 'text-apple-gray-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-white/[0.06] text-apple-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-apple-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g., GraphQL, Spring)..."
              aria-label="Filter skills by keyword"
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.1] focus:border-apple-azure text-xs text-white placeholder:text-apple-gray-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-apple-gray-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Category Context Bar */}
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-apple-gray-300">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-apple-azure shrink-0" />
            <span>
              <strong className="text-white">{activeCategoryMeta.label}:</strong>{' '}
              {activeCategoryMeta.description}
            </span>
          </div>
          {activeCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="text-apple-azure hover:underline font-mono shrink-0 ml-4"
            >
              Reset Highlight
            </button>
          )}
        </div>

        {/* Interactive Skills Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => {
            const isHighlighted =
              activeCategory === 'all' || skill.category === activeCategory;

            return (
              <div
                key={skill.name}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === skill.category ? 'all' : skill.category
                  )
                }
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                  isHighlighted
                    ? activeCategory !== 'all'
                      ? 'bg-apple-blue/[0.12] border-apple-azure/50 shadow-[0_8px_30px_rgba(0,113,227,0.18)] scale-[1.01]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-apple-azure/30'
                    : 'bg-white/[0.01] border-white/[0.04] opacity-35 hover:opacity-75'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Cpu
                      className={`w-4 h-4 shrink-0 ${
                        isHighlighted ? 'text-apple-azure' : 'text-apple-gray-500'
                      }`}
                    />
                    <h4 className="text-sm font-semibold text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <Badge
                    variant={skill.level === 'Core' ? 'azure' : 'neutral'}
                    mono
                  >
                    {skill.level}
                  </Badge>
                </div>

                <p className="mt-2 text-xs text-apple-gray-300 leading-relaxed">
                  {skill.context}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-apple-gray-400">
                  <span>{skill.categoryLabel}</span>
                  {activeCategory === skill.category && (
                    <span className="text-apple-azure font-semibold">
                      ● Highlighted
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
