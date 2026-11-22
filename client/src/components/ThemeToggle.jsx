import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 dark:border-slate-800 dark:bg-slate-900/60 light:bg-slate-100 light:border-slate-300 light:text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
