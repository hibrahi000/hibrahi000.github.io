import React, { useEffect, useState } from 'react';
import { FileDown, Github, Linkedin, Menu, Terminal, X } from 'lucide-react';
import { NAVIGATION_ITEMS, PROFILE_DATA } from '../../data/profile.data';
import { SectionId } from '../../types/portfolio.types';

interface NavbarProps {
  onPrintResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPrintResume }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: 0.05,
      }
    );

    NAVIGATION_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: SectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-apple-black/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.65)]'
          : 'bg-apple-black/50 backdrop-blur-xl border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-apple-azure/25 to-apple-blue/10 border border-apple-azure/30 flex items-center justify-center shadow-inner group-hover:border-apple-azure transition-colors">
            <Terminal className="w-4 h-4 text-apple-azure" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
              {PROFILE_DATA.name}
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-apple-emerald/12 text-apple-emerald border border-apple-emerald/25">
                7+ YRS EXP
              </span>
            </span>
            <span className="text-[11px] text-apple-gray-400 font-mono">
              Software Engineer • Distributed Systems
            </span>
          </div>
        </a>

        {/* Desktop Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.07]"
        >
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-apple-blue text-white shadow-[0_2px_12px_rgba(0,113,227,0.45)]'
                    : 'text-apple-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: GitHub, LinkedIn, 1-Click PDF Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PROFILE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-apple-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-apple-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onPrintResume}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-apple-gray-200 transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-apple-blue" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onPrintResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-black"
          >
            <FileDown className="w-3.5 h-3.5 text-apple-blue" />
            <span>PDF</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-apple-carbon/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-2 pb-5 space-y-1.5">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-apple-blue/20 text-apple-azure border border-apple-azure/30'
                    : 'text-apple-gray-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between px-2">
            <a
              href={PROFILE_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-apple-gray-300 hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-apple-gray-300 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
