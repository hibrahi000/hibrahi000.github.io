import React from 'react';
import { Award, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/education.data';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeader } from '../ui/SectionHeader';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 border-t border-white/[0.07] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="04 • Academic Foundation"
          title="Education & Academic Honors"
          subtitle="Rigorous computer science foundation in algorithms, distributed computing, and software engineering."
        />

        <div className="space-y-6">
          {EDUCATION_DATA.map((edu) => (
            <BentoCard
              key={edu.institution}
              accentGlow="emerald"
              className="p-6 sm:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-apple-emerald/15 border border-apple-emerald/30 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-apple-emerald" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <Badge variant="emerald">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.honors}</span>
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-apple-gray-300 mt-1 flex flex-wrap items-center gap-2">
                      <span>{edu.institution}</span>
                      <span className="text-white/20">•</span>
                      <span className="inline-flex items-center gap-1 text-xs text-apple-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 space-y-2.5">
                  {edu.highlights.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-apple-gray-300 leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div className="lg:col-span-5">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-apple-gray-400 mb-2.5">
                    <BookOpen className="w-3.5 h-3.5 text-apple-azure" />
                    <span>Core Computer Science Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-apple-gray-200 border border-white/[0.08]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
