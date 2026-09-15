import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Portfolio() {
  const { t } = useLanguage();
  return <div className="min-h-screen font-sans">
    <a href="#main-content" className="skip-link">{t.nav.skip}</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  </div>;
}

export default function App() {
  return <LanguageProvider><MotionConfig reducedMotion="user"><Portfolio /></MotionConfig></LanguageProvider>;
}
