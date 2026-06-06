import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { activities } from "../../data/mockData";

export default function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6"
    >
      <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-5">
        Recent Activity
      </h3>
      <div className="space-y-0">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className={`flex items-start gap-3 py-3 ${i !== activities.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}
          >
            <img
              src={a.avatar}
              className="w-8 h-8 rounded-lg flex-shrink-0"
              alt=""
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium text-slate-800 dark:text-white">
                  {a.user}
                </span>{" "}
                {a.action}{" "}
                <span className="text-blue-500 dark:text-blue-400">
                  {a.target}
                </span>
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                <Clock size={10} /> {a.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
