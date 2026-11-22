import React, { useState, useEffect } from 'react';
import { FolderGit2, Loader2, Database, AlertCircle, RefreshCw } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { fetchProjects } from '../services/api';
import { initialProjects } from '../config/portfolioData';

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('loading');
  const [selectedProject, setSelectedProject] = useState(null);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const result = await fetchProjects();
      setProjects(result.data);
      setDataSource(result.source);
    } catch (err) {
      console.warn('Projects load warning:', err);
      setProjects(initialProjects);
      setDataSource('seed-fallback');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-900/30">
      
      {/* Decorative gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Practical software projects built to explore programming patterns, data management, and real-world student utilities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Live Backend Connection Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs font-mono">
          {loading ? (
            <span className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
              <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
              Connecting to PostgreSQL API...
            </span>
          ) : (
            <div className="inline-flex items-center gap-2 text-slate-400 bg-slate-900/60 px-3.5 py-1 rounded-full border border-slate-800">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                Source: {dataSource === 'backend' ? (
                  <span className="text-emerald-400 font-medium">REST API + PostgreSQL Active</span>
                ) : (
                  <span className="text-amber-400 font-medium">Initial Database Seed Synced</span>
                )}
              </span>
              <button
                onClick={loadProjects}
                title="Refresh project list"
                aria-label="Refresh project list"
                className="text-slate-400 hover:text-cyan-400 transition-colors ml-1"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id || project.slug}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Information Notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            * All project listings reflect authentic work. Placeholder cards indicate ongoing projects whose repositories will be linked as development progresses.
          </p>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
