import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-azure/60';

  const variantStyles = {
    primary:
      'apple-primary-btn bg-apple-blue hover:bg-[#0077ed] text-white shadow-[0_8px_24px_rgba(0,113,227,0.38)] hover:shadow-[0_12px_32px_rgba(41,151,255,0.5)] border border-white/15',
    glass:
      'apple-glass-btn bg-white/[0.06] hover:bg-white/[0.11] text-white border border-white/[0.12] hover:border-white/[0.24] backdrop-blur-xl',
    subtle:
      'bg-transparent hover:bg-white/[0.06] text-apple-gray-300 hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
