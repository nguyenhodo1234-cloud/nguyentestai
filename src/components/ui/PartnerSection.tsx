import { motion } from "framer-motion";
import { useTranslation } from "../../i18n/LanguageContext";
import { PARTNERS } from "../../constants/mockData";

export default function PartnerSection() {
  const { t } = useTranslation();

  return (
    <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center mb-5">
        {t("footer.partners")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {PARTNERS.map((partner, i) => (
          <motion.a
            key={i}
            href={partner.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            aria-label={partner.name}
          >
            <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-xs text-slate-400 dark:text-slate-600 font-medium">
                {partner.name}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
