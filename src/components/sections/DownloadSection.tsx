import { motion } from "framer-motion";
import { useTranslation } from "../../i18n/LanguageContext";
import { SITE_CONFIG } from "../../constants/mockData";
import DownloadCard from "../ui/DownloadCard";

export default function DownloadSection() {
  const { t } = useTranslation();

  const cards = [
    {
      id: "installer",
      icon: "download" as const,
      buttonVariant: "primary" as const,
      title: t("card.installer.title"),
      subtitle: t("card.installer.subtitle"),
      description: t("card.installer.desc"),
      features: [
        t("card.installer.f1"),
        t("card.installer.f2"),
        t("card.installer.f3"),
        t("card.installer.f4"),
        t("card.installer.f5"),
      ],
      buttonLabel: t("card.installer.btn"),
      fileSize: "~15 MB",
      version: SITE_CONFIG.version,
      href: "/download/exe",
    },
    {
      id: "portable",
      icon: "usb" as const,
      buttonVariant: "secondary" as const,
      title: t("card.portable.title"),
      subtitle: t("card.portable.subtitle"),
      description: t("card.portable.desc"),
      features: [
        t("card.portable.f1"),
        t("card.portable.f2"),
        t("card.portable.f3"),
        t("card.portable.f4"),
        t("card.portable.f5"),
      ],
      buttonLabel: t("card.portable.btn"),
      fileSize: "~10 MB",
      version: SITE_CONFIG.version,
      href: "/download/portable",
    },
    {
      id: "docs",
      icon: "file-text" as const,
      buttonVariant: "outline" as const,
      title: t("card.docs.title"),
      subtitle: t("card.docs.subtitle"),
      description: t("card.docs.desc"),
      features: [
        t("card.docs.f1"),
        t("card.docs.f2"),
        t("card.docs.f3"),
        t("card.docs.f4"),
        t("card.docs.f5"),
      ],
      buttonLabel: t("card.docs.btn"),
      fileSize: "~5 MB",
      version: SITE_CONFIG.version,
      href: "/docs",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("download.heading")}
          </h2>
          <p className="mt-3 text-lg text-gradient font-semibold">
            {t("download.version")} {SITE_CONFIG.version}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <DownloadCard key={card.id} data={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
