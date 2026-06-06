import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useMockAuth } from "../../hooks/useMockAuth";
import AuthSwitch from "./AuthSwitch";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import type { AuthMode } from "../../types/auth.types";
import type {
  LoginFormData,
  RegisterFormData,
} from "../../schemas/auth.schema";

export default function AuthLayout() {
  const [mode, setMode] = useState<AuthMode>("login");
  const { loading, login, register } = useMockAuth();

  function handleLogin(data: LoginFormData) {
    login({ email: data.email, password: data.password });
  }

  function handleRegister(data: RegisterFormData) {
    register({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Glow effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]" />

        {/* Abstract shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-3xl border border-white/5 rotate-12" />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full border border-white/5" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-lg border border-white/5 -rotate-6" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-extrabold text-sm">UV</span>
              </div>
              <span className="text-xl font-bold text-white">
                Ultra<span className="text-blue-400">Viewer</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {mode === "login" ? "Welcome back" : "Get started"}
            </h1>
            <p className="mt-4 text-lg text-blue-200/80 max-w-sm">
              {mode === "login"
                ? "Sign in to access your account and manage your remote connections."
                : "Create your free account and start controlling computers remotely in seconds."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12 bg-white dark:bg-slate-950 relative">
        {/* Back to home */}
        <a
          href="/"
          className="absolute top-6 left-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Trang chủ</span>
        </a>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile branding */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">UV</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Ultra<span className="text-blue-500">Viewer</span>
              </span>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 p-8">
            {/* Auth Switch */}
            <AuthSwitch mode={mode} onChange={setMode} />

            {/* Forms */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {mode === "login" ? (
                  <LoginForm
                    key="login"
                    loading={loading}
                    onSubmit={handleLogin}
                    onSwitchToRegister={() => setMode("register")}
                  />
                ) : (
                  <RegisterForm
                    key="register"
                    loading={loading}
                    onSubmit={handleRegister}
                    onSwitchToLogin={() => setMode("login")}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
