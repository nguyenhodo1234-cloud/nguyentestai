import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { StatCard } from "../../types/dashboard.types";

interface Props {
  card: StatCard;
  index: number;
}

export default function StatsCard({ card, index }: Props) {
  const isPositive = card.change >= 0;
  const formattedValue = `${card.prefix || ""}${card.value.toLocaleString()}${card.suffix || ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all duration-300 group"
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.gradient} opacity-10 rounded-bl-full -mr-8 -mt-8 group-hover:opacity-20 transition-opacity`}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            {card.title}
          </p>
          <div
            className={`flex items-center gap-1 text-xs font-semibold ${isPositive ? "text-emerald-500" : "text-red-500"}`}
          >
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span>
              {isPositive ? "+" : ""}
              {card.change}%
            </span>
          </div>
        </div>
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {formattedValue}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{card.changeLabel}</p>
          </div>
          <div className="w-24 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={card.chartData}>
                <defs>
                  <linearGradient
                    id={`gradient-${card.id}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="currentColor"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="currentColor"
                  fill={`url(#gradient-${card.id})`}
                  strokeWidth={2}
                  className={isPositive ? "text-emerald-400" : "text-red-400"}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
