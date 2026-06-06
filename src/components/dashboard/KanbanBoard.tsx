import { motion } from "framer-motion";
import { GripVertical, MoreHorizontal, Plus, Flag } from "lucide-react";
import { useState } from "react";
import { kanbanData } from "../../data/mockData";
import type { KanbanTask } from "../../types/dashboard.types";

const priorityConfig: Record<
  KanbanTask["priority"],
  { color: string; dot: string; label: string }
> = {
  high: {
    color: "border-l-red-500 bg-red-50 dark:bg-red-950/20",
    dot: "bg-red-500",
    label: "High",
  },
  medium: {
    color: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
    dot: "bg-amber-500",
    label: "Medium",
  },
  low: {
    color: "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    dot: "bg-emerald-500",
    label: "Low",
  },
};

const colColors = [
  "border-t-slate-400",
  "border-t-blue-500",
  "border-t-amber-500",
  "border-t-emerald-500",
];

export default function KanbanBoard() {
  const [columns] = useState(kanbanData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-slate-800 dark:text-white">
          Kanban Board
        </h3>
        <button className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          <Plus size={14} />
          Add Task
        </button>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col, ci) => (
          <div key={col.id} className="flex flex-col">
            {/* Column header */}
            <div
              className={`flex items-center justify-between mb-3 pb-2 border-t-2 rounded-b-lg px-1 ${colColors[ci]}`}
            >
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {col.title}
              </h4>
              <span className="flex items-center justify-center w-5 h-5 text-[11px] font-medium rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                {col.tasks.length}
              </span>
            </div>

            {/* Task cards */}
            <div className="space-y-3 flex-1">
              {col.tasks.map((task) => {
                const p = priorityConfig[task.priority];
                return (
                  <motion.div
                    key={task.id}
                    whileHover={{ y: -2 }}
                    className={`group relative rounded-xl border border-slate-200 dark:border-slate-800 border-l-2 ${p.color}
                      hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 cursor-grab active:cursor-grabbing`}
                  >
                    <div className="p-3">
                      {/* Top row: grip + menu */}
                      <div className="flex items-center justify-between mb-2">
                        <GripVertical
                          size={14}
                          className="text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                          <MoreHorizontal
                            size={14}
                            className="text-slate-400"
                          />
                        </button>
                      </div>

                      {/* Title + desc */}
                      <p className="text-sm font-semibold text-slate-800 dark:text-white mb-1">
                        {task.title}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {task.description}
                      </p>

                      {/* Footer: priority + assignee */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium
                          ${task.priority === "high" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : ""}
                          ${task.priority === "medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : ""}
                          ${task.priority === "low" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : ""}
                        `}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${p.dot}`}
                          />
                          {p.label}
                        </span>
                        <img
                          src={task.avatar}
                          className="w-6 h-6 rounded-full ring-2 ring-white dark:ring-slate-900"
                          alt={task.assignee}
                          title={task.assignee}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Empty state */}
              {col.tasks.length === 0 && (
                <div className="flex items-center justify-center py-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                  <p className="text-xs text-slate-400">No tasks</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
