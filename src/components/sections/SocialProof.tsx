import { motion } from "framer-motion";
import { Quote, Shield, Zap, Users } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function SocialProof() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Shield size={24} />,
      title: t("social.highlight1_title"),
      desc: t("social.highlight1_desc"),
    },
    {
      icon: <Zap size={24} />,
      title: t("social.highlight2_title"),
      desc: t("social.highlight2_desc"),
    },
    {
      icon: <Users size={24} />,
      title: t("social.highlight3_title"),
      desc: t("social.highlight3_desc"),
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-brand-subtle">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex p-3 rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-6"
          >
            <Quote size={28} />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8"
          >
            &ldquo;{t("social.quote")}&rdquo;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-soft border border-slate-100 dark:border-slate-800"
              >
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
