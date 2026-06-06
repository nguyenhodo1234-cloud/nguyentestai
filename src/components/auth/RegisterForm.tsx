import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth.schema";
import InputField from "./InputField";
import GoogleLoginButton from "./GoogleLoginButton";

interface RegisterFormProps {
  loading: boolean;
  onSubmit: (data: RegisterFormData) => void;
  onGoogleLogin: (credential: string) => void;
  onSwitchToLogin: () => void;
}

export default function RegisterForm({
  loading,
  onSubmit,
  onGoogleLogin,
  onSwitchToLogin,
}: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreePolicy: false,
    },
  });

  const PasswordEye = ({
    show,
    toggle,
  }: {
    show: boolean;
    toggle: () => void;
  }) => (
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
        {...register("fullName")}
      />

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
        placeholder="Ít nhất 8 ký tự"
        icon={<Lock size={18} />}
        error={errors.password?.message}
        rightIcon={
          <PasswordEye
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />
        }
        {...register("password")}
      />

      <InputField
        label="Xác nhận mật khẩu"
        type={showConfirm ? "text" : "password"}
        placeholder="Nhập lại mật khẩu"
        icon={<Lock size={18} />}
        error={errors.confirmPassword?.message}
        rightIcon={
          <PasswordEye
            show={showConfirm}
            toggle={() => setShowConfirm(!showConfirm)}
          />
        }
        {...register("confirmPassword")}
      />

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          {...register("agreePolicy")}
          className="w-4 h-4 mt-0.5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
        />
        <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Tôi đồng ý với{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Điều khoản dịch vụ
          </a>{" "}
          và{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
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
          "Tạo tài khoản"
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

      <GoogleLoginButton
        onSuccess={onGoogleLogin}
        loading={loading}
        label="Google"
      />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        Đã có tài khoản?{" "}
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
