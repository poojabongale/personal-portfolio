import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;