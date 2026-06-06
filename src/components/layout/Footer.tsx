import { Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";
import { SITE_CONFIG } from "../../constants/mockData";
import Newsletter from "../ui/Newsletter";
import PartnerSection from "../ui/PartnerSection";

const socialLinks = [
  {
    icon: <Facebook size={18} />,
    href: "https://facebook.com/ultraviewer",
    label: "Facebook",
  },
  {
    icon: <Youtube size={18} />,
    href: "https://youtube.com/ultraviewer",
    label: "YouTube",
  },
  {
    icon: <Twitter size={18} />,
    href: "https://twitter.com/ultraviewer",
    label: "Twitter",
  },
];

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("footer.col_about"),
      links: [
        { label: t("footer.link_about"), href: "/about" },
        { label: t("footer.link_features"), href: "/features" },
        { label: t("footer.link_pricing"), href: "/pricing" },
        { label: t("footer.link_blog"), href: "/blog" },
      ],
    },
    {
      title: t("footer.col_products"),
      links: [
        { label: t("footer.link_free"), href: "/free" },
        { label: t("footer.link_pro"), href: "/pro" },
        { label: t("footer.link_enterprise"), href: "/enterprise" },
        { label: t("footer.link_compare"), href: "/compare" },
      ],
    },
    {
      title: t("footer.col_guide"),
      links: [
        { label: t("footer.link_install"), href: "/guide/install" },
        { label: t("footer.link_usage"), href: "/guide/usage" },
        { label: t("footer.link_faq"), href: "/faq" },
        { label: t("footer.link_videos"), href: "/videos" },
      ],
    },
    {
      title: t("footer.col_contact"),
      links: [
        {
          label: t("footer.link_email"),
          href: "mailto:support@ultraviewer.net",
        },
        { label: t("footer.link_hotline"), href: "tel:19001234" },
        {
          label: t("footer.link_facebook"),
          href: "https://facebook.com/ultraviewer",
        },
        { label: t("footer.link_forum"), href: "/forum" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-site py-12 md:py-16">
        <div className="mb-12">
          <Newsletter />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md shadow-primary-500/20">
                <span className="text-white font-extrabold text-sm">UV</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Ultra<span className="text-primary-500">Viewer</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
              {t("hero.subtitle")}. {t("footer.tagline")}
            </p>

            <div className="space-y-2.5">
              <a
                href="mailto:support@ultraviewer.net"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={14} />
                <span>support@ultraviewer.net</span>
              </a>
              <a
                href="tel:19001234"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Phone size={14} />
                <span>1900 1234</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} />
                <span>{t("footer.location")}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-950/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-semibold text-slate-900 dark:text-white text-sm mb-4">
                {col.title}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <PartnerSection />

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} UltraViewer.{" "}
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="/terms"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
