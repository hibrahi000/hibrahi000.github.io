import React, { useCallback, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { PrintResume } from './components/layout/PrintResume';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Toast } from './components/ui/Toast';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopiedLabel(label);
    setToastMessage(`${label} copied to clipboard (${text})`);

    setTimeout(() => {
      setCopiedLabel(null);
      setToastMessage(null);
    }, 2600);
  }, []);

  const handlePrintResume = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="min-h-screen bg-apple-black bg-apple-grid text-apple-gray-100 flex flex-col">
      <Navbar onPrintResume={handlePrintResume} />

      <main className="flex-1 no-print">
        <HeroSection
          onCopy={handleCopy}
          copiedLabel={copiedLabel}
          onPrintResume={handlePrintResume}
        />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection
          onCopy={handleCopy}
          copiedLabel={copiedLabel}
          onPrintResume={handlePrintResume}
        />
      </main>

      <Footer />
      <Toast message={toastMessage} />
      <PrintResume />
    </div>
  );
};

export default App;
