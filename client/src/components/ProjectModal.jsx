import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ShieldCheck, Clock, Layers, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-8 bg-slate-900/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
              {project.isVerifiedRepo ? 'Verified Public Project' : 'Project in Development'}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-cyan-400/90 font-medium">
            {project.statusNote || (project.isVerifiedRepo ? 'Verified on GitHub' : 'In Progress')}
          </p>
        </div>

        {/* Body Content */}
        <div className="space-y-6">
          
          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Description
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-800">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Confirmed Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700/80 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-500 italic">Details to be specified</span>
              )}
            </div>
          </div>

          {/* Verification Notice */}
          {!project.isVerifiedRepo && (
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Editable Project Placeholder:</strong> This project record is maintained in the portfolio backend. Specific repository links and live URLs will appear once publicly released.
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/30 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-slate-800/80 text-slate-500 border border-slate-700/40 cursor-not-allowed"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Repository Coming Soon</span>
              </button>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
