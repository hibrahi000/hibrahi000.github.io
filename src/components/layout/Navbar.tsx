import React, { useEffect, useState } from 'react';
import {
  FileDown,
  Github,
  Linkedin,
  Menu,
  Moon,
  Sun,
  Terminal,
  X,
} from 'lucide-react';
import { NAVIGATION_ITEMS, PROFILE_DATA } from '../../data/profile.data';
import { SectionId } from '../../types/portfolio.types';
import { ThemeMode } from '../../App';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onPrintResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onPrintResume,
}) => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateActiveSectionOnScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 16);

      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 48;
      if (isAtBottom) {
        setActiveSection(NAVIGATION_ITEMS[NAVIGATION_ITEMS.length - 1].id);
        return;
      }

      const triggerOffset = 160;
      let currentSection: SectionId = NAVIGATION_ITEMS[0].id;

      for (const item of NAVIGATION_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            currentSection = item.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSectionOnScroll();
    window.addEventListener('scroll', updateActiveSectionOnScroll, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveSectionOnScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateActiveSectionOnScroll);
      window.removeEventListener('resize', updateActiveSectionOnScroll);
    };
  }, []);

  const handleNavClick = (id: SectionId) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 64;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementTop - navbarHeight),
          behavior: 'smooth',
        });
      }
    });
  };

  return (
    <>
      <header
        className={`apple-navbar sticky top-0 z-50 h-16 transition-all duration-300 no-print ${
          scrolled
            ? 'bg-apple-black/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.65)]'
            : 'bg-apple-black/60 backdrop-blur-xl border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
          {/* Brand Identity */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0 flex-shrink"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-apple-azure/25 to-apple-blue/10 border border-apple-azure/30 flex items-center justify-center shadow-inner group-hover:border-apple-azure transition-colors flex-shrink-0">
              <Terminal className="w-4 h-4 text-apple-azure" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 truncate">
                <span className="truncate">{PROFILE_DATA.name}</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-apple-emerald/12 text-apple-emerald border border-apple-emerald/25 flex-shrink-0">
                  7+ YRS EXP
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-apple-gray-400 font-mono truncate">
                Software Engineer • Distributed Systems
              </span>
            </div>
          </a>

          {/* Desktop Pill Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.07] flex-shrink-0"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'apple-nav-active bg-apple-blue text-white shadow-[0_2px_12px_rgba(0,113,227,0.45)]'
                      : 'text-apple-gray-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle, GitHub, LinkedIn, PDF Resume */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
              }
              title={
                theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-apple-gray-300 hover:text-white transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-apple-amber" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-apple-blue" />
                  <span>Dark</span>
                </>
              )}
            </button>

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
              type="button"
              onClick={onPrintResume}
              className="apple-pdf-btn inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-apple-gray-200 transition-all shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-apple-blue" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls (< 1024px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.1] text-white active:scale-95 transition-transform"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-apple-amber" />
              ) : (
                <Moon className="w-4 h-4 text-apple-blue" />
              )}
            </button>
            <button
              type="button"
              onClick={onPrintResume}
              className="apple-pdf-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-black active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5 text-apple-blue" />
              <span>PDF</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-white active:scale-95 transition-transform cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer — Overlay positioned so sticky header height never shifts */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="apple-mobile-drawer lg:hidden absolute top-16 left-0 right-0 z-50 bg-apple-carbon border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-1.5 shadow-[0_20px_48px_rgba(0,0,0,0.45)]"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'apple-nav-active bg-apple-blue text-white shadow-[0_2px_12px_rgba(0,113,227,0.35)]'
                      : 'text-apple-gray-300 hover:bg-white/[0.05] hover:text-white active:bg-white/[0.08]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between px-2">
              <a
                href={PROFILE_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium text-apple-gray-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PROFILE_DATA.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium text-apple-gray-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile Backdrop Overlay to dismiss menu when tapping outside */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden no-print"
        />
      )}
    </>
  );
};

