import { motion } from "framer-motion";
import { Download, Usb, FileText, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

interface DownloadCardProps {
  data: {
    id: string;
    icon: "download" | "usb" | "file-text";
    buttonVariant: "primary" | "secondary" | "outline";
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    buttonLabel: string;
    fileSize?: string;
    version?: string;
    href: string;
  };
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  download: <Download size={28} />,
  usb: <Usb size={28} />,
  "file-text": <FileText size={28} />,
};

export default function DownloadCard({ data, index }: DownloadCardProps) {
  const IconComponent = iconMap[data.icon] || <Download size={28} />;

  const iconBgClass =
    data.buttonVariant === "primary"
      ? "bg-primary-500/10 text-primary-600 dark:text-primary-400"
      : data.buttonVariant === "secondary"
        ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
        : "bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400";

  return (
    <Card delay={index * 0.1} hover className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl ${iconBgClass}`}>{IconComponent}</div>
        {data.subtitle && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              data.buttonVariant === "primary"
                ? "bg-primary-500 text-white"
                : data.buttonVariant === "secondary"
                  ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-800"
                  : "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
            }`}
          >
            {data.subtitle}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
        {data.title}
      </h3>

      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
        {data.version && <span>v{data.version}</span>}
        {data.fileSize && (
          <>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span>{data.fileSize}</span>
          </>
        )}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
        {data.description}
      </p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {data.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2
              size={16}
              className="text-primary-500 flex-shrink-0 mt-0.5"
            />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <Button
        variant={data.buttonVariant}
        size="lg"
        icon={IconComponent}
        className="w-full"
        href={data.href}
      >
        {data.buttonLabel}
      </Button>
    </Card>
  );
}
