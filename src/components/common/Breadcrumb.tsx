import { Home, ChevronRight } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Breadcrumb() {
  const { t } = useTranslation();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <a
        href="/"
        className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
      >
        <Home size={14} />
        <span>{t("breadcrumb.home")}</span>
      </a>
      <ChevronRight size={14} className="text-white/50" />
      <span className="text-white font-medium" aria-current="page">
        {t("breadcrumb.download")}
      </span>
    </nav>
  );
}
