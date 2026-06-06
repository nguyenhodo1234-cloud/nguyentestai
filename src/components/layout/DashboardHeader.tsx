import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Bell, MessageSquare, Sun, Moon, Menu, ChevronDown, Home,
} from 'lucide-react';
import { useSidebarStore, useThemeStore } from '../../store/dashboard.store';

export default function Header() {
  const { toggle, setMobileOpen } = useSidebarStore();
  const { dark, toggle: toggleTheme } = useThemeStore();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 flex items-center gap-4 px-4 lg:px-6">
      {/* Mobile menu + Back to site */}
      <div className="flex items-center gap-2 lg:hidden">
        <button onClick={() => setMobileOpen(true)} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
          <Menu size={20} />
        </button>
      </div>
      <Link to="/" className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors">
        <Home size={14} />
        <span>Trang chủ</span>
      </Link>

      <div className="flex-1" />

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl flex-1 max-w-md">
        <Search size={16} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none w-full"
        />
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-slate-500 bg-slate-800 rounded-md font-mono">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 relative"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </button>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4"
            >
              <h3 className="text-sm font-semibold text-white mb-3">Notifications</h3>
              {['New order #ORD-1023', 'Payment received $450', 'New user registered'].map((n, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-slate-800 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{n}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Messages */}
        <button className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 relative">
          <MessageSquare size={18} />
          <span className="absolute -top-0.5 -right-0.5 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-500 text-white">3</span>
        </button>

        {/* Theme */}
        <button onClick={toggleTheme} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* User */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <img src="https://i.pravatar.cc/40?u=admin" className="w-8 h-8 rounded-lg" alt="admin" />
          <ChevronDown size={14} className="text-slate-500 hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
