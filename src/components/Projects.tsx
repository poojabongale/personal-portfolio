import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-t border-slate-800 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="group bg-slate-800/30 border border-slate-800/80 hover:border-emerald-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-emerald-300 rounded-md border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.githubLink} className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                View Repository &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};