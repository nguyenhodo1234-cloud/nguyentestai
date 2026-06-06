import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';
import { kanbanData } from '../../data/mockData';
import type { KanbanColumn, KanbanTask } from '../../types/dashboard.types';

const priorityColors: Record<KanbanTask['priority'], string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-emerald-500',
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState<KanbanColumn[]>(kanbanData);

  function moveTask(taskId: string, fromCol: string, toCol: string) {
    setColumns((prev) => {
      const newCols = prev.map((col) => ({ ...col, tasks: [...col.tasks] }));
      const from = newCols.find((c) => c.id === fromCol)!;
      const to = newCols.find((c) => c.id === toCol)!;
      const taskIdx = from.tasks.findIndex((t) => t.id === taskId);
      if (taskIdx === -1) return prev;
      const [task] = from.tasks.splice(taskIdx, 1);
      to.tasks.push(task);
      return newCols;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
    >
      <h3 className="text-base font-semibold text-white mb-5">Kanban Board</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.id} className="bg-slate-800/50 rounded-xl p-3">
            <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center justify-between">
              {col.title}
              <span className="text-xs text-slate-500">{col.tasks.length}</span>
            </h4>
            <div className="space-y-2">
              {col.tasks.map((task) => (
                <div key={task.id} className="group bg-slate-900 rounded-xl p-3 border border-slate-800 hover:border-slate-700 transition-colors cursor-grab active:cursor-grabbing">
                  <div className="flex items-start gap-2">
                    <GripVertical size={14} className="text-slate-600 mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{task.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{task.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
                        <img src={task.avatar} className="w-5 h-5 rounded-full" alt="" />
                        <span className="text-xs text-slate-500">{task.assignee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
