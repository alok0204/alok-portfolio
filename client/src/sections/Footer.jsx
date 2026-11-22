import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navigationLinks } from '../config/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-navy-950 text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-xl font-bold text-white">
              <span className="font-mono text-cyan-400">&lt;</span>
              <span>{personalInfo.displayName}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
              <span className="font-mono text-cyan-400">/&gt;</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Computer Science and Engineering Student &bull; GL Bajaj Institute of Technology & Management
            </p>
            <div className="pt-1">
              <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
                Thiranex Internship &bull; Task 1 Portfolio
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Scroll to Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Me"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3 font-mono">
          <div>
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </div>
          <div>
            Built with React, Tailwind CSS, Node.js & PostgreSQL
          </div>
        </div>

      </div>
    </footer>
  );
}
