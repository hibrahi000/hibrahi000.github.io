import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 no-print animate-bounce"
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-apple-surface/95 backdrop-blur-2xl border border-apple-azure/40 shadow-[0_16px_40px_rgba(0,0,0,0.75)] text-sm font-medium text-white">
        <CheckCircle2 className="w-4 h-4 text-apple-emerald shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
