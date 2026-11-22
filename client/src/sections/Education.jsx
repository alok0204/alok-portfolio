import React from 'react';
import { GraduationCap, MapPin, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { educationData } from '../config/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative pl-8 sm:pl-10 pb-6 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-slate-800"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-0 top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-navy-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <GraduationCap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-300" />
              </div>

              {/* Education Main Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                    {edu.status}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>

                <h4 className="text-base sm:text-lg font-medium text-cyan-400 mb-4">
                  {edu.field}
                </h4>

                <div className="flex items-center gap-2 text-sm text-slate-300 mb-4 pb-4 border-b border-slate-800/80">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-200">{edu.institution}</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <p>
                    <strong className="text-slate-300">Curriculum Focus:</strong> Data Structures, Algorithms, Object-Oriented Programming (C++), Computer Organization, and Software Fundamentals.
                  </p>
                  <p className="text-slate-400 text-xs">
                    * All academic credentials represent confirmed current enrollment. No unverified scores or dates are displayed.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
