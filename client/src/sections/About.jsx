import React from 'react';
import { GraduationCap, Code2, Compass, Target, MapPin, School, BookOpen } from 'lucide-react';
import { personalInfo } from '../config/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Current Education",
      description: "2nd Year B.Tech student in Computer Science and Engineering at GL Bajaj Institute of Technology & Management.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Code2,
      title: "Technical Foundations",
      description: "Working actively with C and C++ to build a solid grasp of core data structures, algorithms, and logical problem solving.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Compass,
      title: "Hands-on Development",
      description: "Exploring web development with HTML, CSS, and Node.js while utilizing Git & GitHub for structured version control.",
      color: "from-sky-400 to-teal-500",
    },
    {
      icon: Target,
      title: "Career Objective",
      description: "Strengthening practical development abilities and growing progressively into a disciplined, skilled software engineer.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Introduction
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Professional Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Background & Approach
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm <strong className="text-white font-semibold">Alok Kumar Vishwas</strong>, a second-year Computer Science and Engineering student at GL Bajaj Institute of Technology & Management, Greater Noida.
                </p>
                <p>
                  I have a strong interest in programming, software development, and understanding how technology can solve everyday problems.
                </p>
                <p>
                  I have experience learning and working with <span className="text-cyan-300 font-medium">C, C++, HTML, CSS, Node.js, Git, and GitHub</span>. I'm continuously developing my technical knowledge through practical projects and experimentation.
                </p>
                <p className="border-l-2 border-cyan-500/60 pl-4 py-1 text-slate-300 italic bg-cyan-950/10 rounded-r-lg">
                  "My goal is to strengthen my problem-solving abilities, gain practical software development experience, and grow into a skilled software engineer."
                </p>
              </div>

              {/* Verified Facts Table / Badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <School className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>College:</strong> GL Bajaj ITM</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Degree:</strong> B.Tech CSE (2nd Year)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Location:</strong> Greater Noida, UP</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Focus:</strong> Core CS & Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
