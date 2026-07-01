import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-emerald-400">
          {portfolioData.name}
        </span>
        <nav className="flex space-x-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};