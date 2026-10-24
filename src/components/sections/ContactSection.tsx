import React from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile.data';
import { Badge } from '../ui/Badge';
import { BentoCard } from '../ui/BentoCard';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

interface ContactSectionProps {
  onCopy: (text: string, label: string) => void;
  copiedLabel: string | null;
  onPrintResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopy,
  copiedLabel,
  onPrintResume,
}) => {
  return (
    <section
      id="contact"
      className="py-20 border-t border-white/[0.07] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="05 • Contact"
          title="Get in Touch"
          subtitle="Open to Mid-Level and Senior Software Engineer roles (Backend, Distributed Systems, and Full Stack) in New York, NY or Remote/Hybrid."
          rightSlot={
            <Button onClick={onPrintResume} variant="primary" size="md">
              <FileDown className="w-4 h-4" />
              <span>Download / Print PDF Resume</span>
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email Card */}
          <BentoCard
            interactive
            onClick={() =>
              onCopy(PROFILE_DATA.contact.email, 'Email address')
            }
            className="p-5 cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-apple-blue/15 border border-apple-azure/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-apple-azure" />
              </div>
              <Badge variant="azure" mono>
                {copiedLabel === 'Email address' ? (
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </Badge>
            </div>
            <div className="mt-5">
              <p className="text-xs font-mono uppercase text-apple-gray-400">
                Email
              </p>
              <p className="text-sm font-semibold text-white mt-1 break-all">
                {PROFILE_DATA.contact.email}
              </p>
            </div>
          </BentoCard>

          {/* Phone Card */}
          <BentoCard
            interactive
            onClick={() => onCopy(PROFILE_DATA.contact.phone, 'Phone number')}
            className="p-5 cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-apple-emerald/15 border border-apple-emerald/30 flex items-center justify-center">
                <Phone className="w-5 h-5 text-apple-emerald" />
              </div>
              <Badge variant="emerald" mono>
                {copiedLabel === 'Phone number' ? (
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </Badge>
            </div>
            <div className="mt-5">
              <p className="text-xs font-mono uppercase text-apple-gray-400">
                Phone
              </p>
              <p className="text-sm font-semibold text-white mt-1 font-mono">
                {PROFILE_DATA.contact.phone}
              </p>
            </div>
          </BentoCard>

          {/* LinkedIn Card */}
          <a
            href={PROFILE_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <BentoCard
              interactive
              className="p-5 h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-apple-cyan/15 border border-apple-cyan/30 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-apple-cyan" />
                </div>
                <Badge variant="cyan" mono>
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </Badge>
              </div>
              <div className="mt-5">
                <p className="text-xs font-mono uppercase text-apple-gray-400">
                  LinkedIn
                </p>
                <p className="text-sm font-semibold text-white mt-1 truncate">
                  {PROFILE_DATA.contact.linkedinHandle}
                </p>
              </div>
            </BentoCard>
          </a>

          {/* GitHub Card */}
          <a
            href={PROFILE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <BentoCard
              interactive
              className="p-5 h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/[0.15] flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <Badge variant="neutral" mono>
                  <span>Repositories</span>
                  <ExternalLink className="w-3 h-3" />
                </Badge>
              </div>
              <div className="mt-5">
                <p className="text-xs font-mono uppercase text-apple-gray-400">
                  GitHub
                </p>
                <p className="text-sm font-semibold text-white mt-1 truncate">
                  {PROFILE_DATA.contact.githubHandle}
                </p>
              </div>
            </BentoCard>
          </a>
        </div>
      </div>
    </section>
  );
};
