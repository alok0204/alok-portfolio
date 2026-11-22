import React from 'react';
import { Award, PlusCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-navy-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Milestones & Goals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certifications & Recognition
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-3" />
        </div>

        {/* Transparent Empty State Container */}
        <div className="max-w-2xl mx-auto glass-panel rounded-2xl p-8 sm:p-10 border border-dashed border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
            <BookOpen className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white">
            Coursework & Projects in Progress
          </h3>

          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Currently concentrating on second-year computer science academics, problem-solving in C/C++, and building foundational software applications.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified certifications will be added upon completion</span>
          </div>
        </div>

      </div>
    </section>
  );
}
