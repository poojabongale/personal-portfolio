import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{portfolioData.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
        {portfolioData.role}
      </p>
      <p className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
        {portfolioData.tagline}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#projects" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg shadow-lg shadow-emerald-500/20 transition-all">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all">
          Contact Me
        </a>
      </div>
    </section>
  );
};