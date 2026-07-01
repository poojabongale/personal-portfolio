import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 border-t border-slate-800 max-w-3xl mx-auto text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-slate-400 mb-8">
        Interested in collaborating on data engineering pipelines, analytics architectures, or custom ML utilities? Drop me a message!
      </p>
      <a href="mailto:your.email@example.com" className="inline-block px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold rounded-lg border border-slate-700 transition-all shadow-md">
        your.email@example.com
      </a>
      <footer className="mt-20 text-xs text-slate-500 border-t border-slate-800/60 pt-8">
        &copy; {new Date().getFullYear()} All Rights Reserved. Built using React, TypeScript, and Tailwind CSS.
      </footer>
    </section>
  );
};