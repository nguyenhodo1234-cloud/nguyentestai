import { type InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, icon, rightIcon, className = '', ...props }, ref) => {
    const id = props.id ?? label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={`
              w-full px-4 py-3 rounded-2xl border text-sm
              bg-white dark:bg-slate-800/60
              text-slate-900 dark:text-white
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
              dark:focus:ring-blue-400/30 dark:focus:border-blue-400
              ${icon ? 'pl-11' : ''}
              ${rightIcon ? 'pr-11' : ''}
              ${error
                ? 'border-red-400 dark:border-red-500 focus:ring-red-500/30 focus:border-red-500'
                : 'border-slate-300 dark:border-slate-700'
              }
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400"
          >
            <AlertCircle size={12} />
            <span>{error}</span>
          </motion.p>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
export default InputField;
