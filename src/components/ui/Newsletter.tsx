import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  }

  return (
    <div className="bg-primary-500/5 dark:bg-primary-950/20 rounded-3xl p-6 sm:p-8 border border-primary-200/30 dark:border-primary-800/20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
            <Mail size={22} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {t("newsletter.title")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t("newsletter.desc")}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("newsletter.placeholder")}
            required
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-200"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2.5 rounded-xl bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
          >
            {subscribed ? (
              <>
                <CheckCircle2 size={16} />
                <span>{t("newsletter.success")}</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span className="hidden sm:inline">{t("newsletter.btn")}</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
