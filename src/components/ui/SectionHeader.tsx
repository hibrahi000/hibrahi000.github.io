import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  rightSlot,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-apple-azure mb-3">
          <span className="w-2 h-2 rounded-full bg-apple-azure/80" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white leading-[1.12]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-apple-gray-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
};
