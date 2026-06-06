import { motion } from 'framer-motion';
import type { AuthMode } from '../../types/auth.types';

interface AuthSwitchProps {
  mode: AuthMode;
  onChange: (mode: AuthMode) => void;
}

export default function AuthSwitch({ mode, onChange }: AuthSwitchProps) {
  const isLogin = mode === 'login';

  return (
    <div className="flex rounded-2xl bg-slate-100 dark:bg-slate-800 p-1 relative">
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-white dark:bg-slate-700 shadow-sm"
        initial={false}
        animate={{ x: isLogin ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <button
        type="button"
        onClick={() => onChange('login')}
        className={`relative z-10 flex-1 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200
          ${isLogin ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
      >
        Đăng nhập
      </button>
      <button
        type="button"
        onClick={() => onChange('register')}
        className={`relative z-10 flex-1 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200
          ${!isLogin ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
      >
        Đăng ký
      </button>
    </div>
  );
}
