import React from 'react';

export type BadgeVariant = 'azure' | 'emerald' | 'cyan' | 'amber' | 'neutral' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
  mono?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  dot = false,
  mono = false,
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    azure:
      'bg-apple-blue/15 text-apple-azure border-apple-azure/30',
    emerald:
      'bg-apple-emerald/12 text-apple-emerald border-apple-emerald/30',
    cyan:
      'bg-apple-cyan/12 text-apple-cyan border-apple-cyan/30',
    amber:
      'bg-apple-amber/12 text-apple-amber border-apple-amber/30',
    neutral:
      'bg-white/[0.04] text-apple-gray-200 border-white/[0.08]',
    outline:
      'bg-transparent text-apple-gray-300 border-white/[0.12]',
  };

  const dotColors: Record<BadgeVariant, string> = {
    azure: 'bg-apple-azure',
    emerald: 'bg-apple-emerald',
    cyan: 'bg-apple-cyan',
    amber: 'bg-apple-amber',
    neutral: 'bg-apple-gray-300',
    outline: 'bg-apple-gray-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
        mono ? 'font-mono tracking-tight' : ''
      } ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
