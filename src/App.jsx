import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { FilterProvider } from './FilterContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <FilterProvider>
        <div className="bg-bg min-h-screen text-white font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </FilterProvider>
    </LanguageProvider>
  );
}

export default App;
