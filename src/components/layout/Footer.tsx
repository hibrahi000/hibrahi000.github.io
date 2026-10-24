import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile.data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-apple-obsidian py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
            <Terminal className="w-4 h-4 text-apple-azure" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {PROFILE_DATA.name}
            </p>
            <p className="text-xs text-apple-gray-400">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            aria-label="Email"
            className="text-apple-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-apple-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-apple-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-apple-gray-200 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
