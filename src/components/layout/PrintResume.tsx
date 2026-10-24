import React from 'react';
import { EDUCATION_DATA } from '../../data/education.data';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { PROFILE_DATA } from '../../data/profile.data';
import { PROJECTS_DATA } from '../../data/projects.data';
import { SKILL_CATEGORIES, SKILLS_DATA } from '../../data/skills.data';

/**
 * Dedicated Print-Only Executive Resume View.
 * Automatically formatted for clean PDF export when triggered via `window.print()`.
 */
export const PrintResume: React.FC = () => {
  return (
    <div className="hidden print-only max-w-4xl mx-auto p-6 text-black bg-white font-sans text-[11px] leading-snug">
      {/* Header */}
      <header className="border-b-2 border-black pb-3 mb-4">
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          {PROFILE_DATA.name}
        </h1>
        <p className="text-xs font-medium text-gray-700 mt-0.5">
          {PROFILE_DATA.contact.phone} | {PROFILE_DATA.contact.email} |{' '}
          {PROFILE_DATA.contact.linkedinHandle} | {PROFILE_DATA.contact.githubHandle}
        </p>
      </header>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
          Professional Summary
        </h2>
        <p className="text-gray-800">{PROFILE_DATA.summary}</p>
      </section>

      {/* Technical Skills */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
          Technical Skills
        </h2>
        <div className="space-y-1">
          {SKILL_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
            const items = SKILLS_DATA.filter((s) => s.category === cat.id).map(
              (s) => s.name
            );
            return (
              <p key={cat.id}>
                <span className="font-bold">{cat.label}: </span>
                <span>{items.join(', ')}</span>
              </p>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
          Professional Experience
        </h2>
        <div className="space-y-3">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold">
                <span>
                  {exp.company} | {exp.role}
                </span>
                <span>
                  {exp.location} | {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-gray-800">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{b.anchor} </span>
                    {b.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Side Projects */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
          Side Projects
        </h2>
        {PROJECTS_DATA.map((proj) => (
          <div key={proj.id}>
            <p className="font-bold">
              {proj.title} ({proj.repositoryUrl})
            </p>
            <p className="text-gray-800 mt-0.5">{proj.summary}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
          Education
        </h2>
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.institution} className="flex justify-between">
            <div>
              <span className="font-bold">{edu.degree}</span> | {edu.honors} —{' '}
              {edu.institution}
            </div>
            <span>{edu.location}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
