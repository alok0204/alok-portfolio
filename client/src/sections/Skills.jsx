import React from 'react';
import { Terminal, Cpu, Code, Palette, Server, GitBranch, Github, CheckCircle2 } from 'lucide-react';
import { confirmedSkills } from '../config/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Terminal,
  Cpu,
  Code,
  Palette,
  Server,
  GitBranch,
  Github,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Decorative background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[140px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Confirmed Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Verified technical proficiencies actively studied and applied in coursework and projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {confirmedSkills.map((categoryGroup, groupIdx) => (
            <div
              key={groupIdx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="border-b border-slate-800/80 pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                      {categoryGroup.items.length} {categoryGroup.items.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {categoryGroup.description}
                  </p>
                </div>

                {/* Skill Cards */}
                <div className="space-y-4">
                  {categoryGroup.items.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="rounded-xl p-4 bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/40 transition-all duration-200 group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                            {skill.badge}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed pl-1">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified Indicator footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-cyan-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Verified Coursework & Projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto font-mono">
            * Only confirmed student competencies are listed. Technologies used to host or build this portfolio are deliberately not claimed as personal skills without prior formal coursework.
          </p>
        </div>

      </div>
    </section>
  );
}
