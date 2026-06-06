import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import { calendarEvents } from '../../data/mockData';

const typeColors = {
  meeting: 'bg-blue-500/20 text-blue-400',
  deadline: 'bg-red-500/20 text-red-400',
  reminder: 'bg-amber-500/20 text-amber-400',
};

export default function CalendarWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
    >
      <h3 className="text-base font-semibold text-white mb-5">Upcoming Events</h3>
      <div className="space-y-3">
        {calendarEvents.map((event) => (
          <div key={event.id} className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
            <div className="flex flex-col items-center w-12 text-center flex-shrink-0">
              <span className="text-lg font-bold text-white">{event.date.slice(-2)}</span>
              <span className="text-[10px] text-slate-400 uppercase">{new Date(event.date).toLocaleString('en', { month: 'short' })}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">{event.title}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs text-slate-400"><Clock size={10} />{event.time}</span>
                {event.attendees > 0 && (
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Users size={10} />{event.attendees}</span>
                )}
              </div>
            </div>
            <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${typeColors[event.type]}`}>
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
