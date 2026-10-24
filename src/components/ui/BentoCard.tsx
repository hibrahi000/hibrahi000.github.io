import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  accentGlow?: 'none' | 'azure' | 'emerald' | 'cyan';
  as?: 'div' | 'article' | 'section';
  onClick?: () => void;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  interactive = false,
  accentGlow = 'none',
  as: Component = 'div',
  onClick,
}) => {
  const glowStyles = {
    none: '',
    azure: 'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-apple-azure/50 before:to-transparent',
    emerald: 'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-apple-emerald/50 before:to-transparent',
    cyan: 'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-apple-cyan/50 before:to-transparent',
  };

  return (
    <Component
      onClick={onClick}
      className={`relative rounded-3xl apple-bento overflow-hidden ${
        interactive ? 'apple-bento-interactive' : ''
      } ${glowStyles[accentGlow]} ${className}`}
    >
      {children}
    </Component>
  );
};
