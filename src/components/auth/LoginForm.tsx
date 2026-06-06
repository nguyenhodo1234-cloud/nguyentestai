import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";
import InputField from "./InputField";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";

interface LoginFormProps {
  loading: boolean;
  onSubmit: (data: LoginFormData) => void;
  onGoogleLogin: (credential: string) => void;
  onFacebookLogin: (accessToken: string) => void;
  onSwitchToRegister: () => void;
}

export default function LoginForm({
  loading,
  onSubmit,
  onGoogleLogin,
  onFacebookLogin,
  onSwitchToRegister,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  return (
    <motion.form
      key="login"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        error={errors.email?.message}
        {...register("email")}
      />

      <InputField
        label="Mật khẩu"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        icon={<Lock size={18} />}
        error={errors.password?.message}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...register("password")}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="w-4 h-4 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
          />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Ghi nhớ đăng nhập
          </span>
        </label>
        <button
          type="button"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Quên mật khẩu?
        </button>
      </div>

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
            <span>Đang đăng nhập...</span>
          </>
        ) : (
          "Đăng nhập"
        )}
      </motion.button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500">
            hoặc tiếp tục với
          </span>
        </div>
      </div>

      <GoogleLoginButton onSuccess={onGoogleLogin} loading={loading} />

      <div className="mt-3">
        <FacebookLoginButton onSuccess={onFacebookLogin} loading={loading} />
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
        Chưa có tài khoản?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Đăng ký ngay
        </button>
      </p>
    </motion.form>
  );
}
