import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-800 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Technical Proficiencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-slate-800/20 border border-slate-800/60 rounded-xl p-6">
            <h3 className="text-base font-bold text-emerald-400 uppercase tracking-wider mb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2.5">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-slate-300 flex items-center text-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};