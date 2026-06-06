import { motion } from "framer-motion";
import { useTranslation } from "../../i18n/LanguageContext";
import { SITE_CONFIG } from "../../constants/mockData";
import Breadcrumb from "../common/Breadcrumb";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-primary-800 dark:via-primary-900 dark:to-slate-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
      </div>

      <div className="container-site relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Breadcrumb />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-xl">
            {t("hero.subtitle")} — {t("hero.version")} {SITE_CONFIG.version}
          </p>
        </motion.div>

        {/* Decorative bottom wave */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50C240 0 480 100 720 50C960 0 1200 100 1440 50V100H0V50Z"
              className="fill-white dark:fill-slate-950"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
