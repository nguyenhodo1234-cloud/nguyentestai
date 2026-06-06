import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { registerSchema, type RegisterFormData } from '../../schemas/auth.schema';
import InputField from './InputField';

interface RegisterFormProps {
  loading: boolean;
  onSubmit: (data: RegisterFormData) => void;
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ loading, onSubmit, onSwitchToLogin }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '', agreePolicy: false },
  });

  const PasswordEye = ({ show, toggle }: { show: boolean; toggle: () => void }) => (
    <button
      type="button"
      onClick={toggle}
      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      tabIndex={-1}
    >
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  );

  return (
    <motion.form
      key="register"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <InputField
        label="Họ và tên"
        type="text"
        placeholder="Nguyễn Văn A"
        icon={<User size={18} />}
        error={errors.fullName?.message}
        {...register('fullName')}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        error={errors.email?.message}
        {...register('email')}
      />

      <InputField
        label="Mật khẩu"
        type={showPassword ? 'text' : 'password'}
        placeholder="Ít nhất 8 ký tự"
        icon={<Lock size={18} />}
        error={errors.password?.message}
        rightIcon={<PasswordEye show={showPassword} toggle={() => setShowPassword(!showPassword)} />}
        {...register('password')}
      />

      <InputField
        label="Xác nhận mật khẩu"
        type={showConfirm ? 'text' : 'password'}
        placeholder="Nhập lại mật khẩu"
        icon={<Lock size={18} />}
        error={errors.confirmPassword?.message}
        rightIcon={<PasswordEye show={showConfirm} toggle={() => setShowConfirm(!showConfirm)} />}
        {...register('confirmPassword')}
      />

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          {...register('agreePolicy')}
          className="w-4 h-4 mt-0.5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
        />
        <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Tôi đồng ý với{' '}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            Điều khoản dịch vụ
          </a>{' '}
          và{' '}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            Chính sách bảo mật
          </a>
        </span>
      </label>
      {errors.agreePolicy && (
        <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1.5">
          {errors.agreePolicy.message}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600
          text-white font-semibold text-sm
          shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30
          transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Đang tạo tài khoản...</span>
          </>
        ) : (
          'Tạo tài khoản'
        )}
      </motion.button>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500">
            hoặc đăng ký với
          </span>
        </div>
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700
          text-sm font-semibold text-slate-700 dark:text-slate-300
          hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50
          transition-all duration-200"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <span>Google</span>
      </motion.button>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        Đã có tài khoản?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Đăng nhập
        </button>
      </p>
    </motion.form>
  );
}
