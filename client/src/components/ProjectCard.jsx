import React from 'react';
import { Github, ExternalLink, Info, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const isVerified = project.isVerifiedRepo || (project.githubUrl && project.githubUrl.includes('github.com/alok0204'));

  return (
    <div className="glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      
      {/* Top Banner & Status */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {isVerified ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                Verified Repo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                <Clock className="w-3 h-3 text-amber-400" />
                In Progress
              </span>
            )}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
            title="View Details"
            aria-label={`View details of ${project.title}`}
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed min-h-[48px]">
          {project.description}
        </p>

        {/* Confirmed Technologies */}
        <div className="mt-4 pt-4 border-t border-slate-800/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Technologies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies && project.technologies.length > 0 ? (
              project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs rounded-md bg-slate-800/90 border border-slate-700/60 text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500 italic">Pending confirmation</span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-3 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/40 transition-all duration-200"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono italic">
            Repo in progress
          </span>
        )}

        <button
          onClick={() => onSelect(project)}
          className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-2 px-3 rounded-lg hover:bg-cyan-950/30"
        >
          <span>Learn more</span>
          <span>&rarr;</span>
        </button>
      </div>

    </div>
  );
}
