import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  loading?: boolean;
}

export default function SocialButton({ icon, label, onClick, loading }: SocialButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700
        text-sm font-semibold text-slate-700 dark:text-slate-300
        hover:border-slate-300 dark:hover:border-slate-600
        hover:bg-slate-50 dark:hover:bg-slate-800/50
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        <>
          {icon}
          <span>{label}</span>
        </>
      )}
    </motion.button>
  );
}
