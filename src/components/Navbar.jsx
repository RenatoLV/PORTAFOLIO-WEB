import { useEffect, useRef, useState } from 'react';
import { FaGlobeAmericas, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const { t, toggleLanguage, language } = useLanguage();
  const navItems = ['projects', 'about', 'skills', 'experience'];

  useEffect(() => {
    if (!menuOpen) return;
    const escape = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = event => { if (event.matches) setMenuOpen(false); };
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => { document.removeEventListener('keydown', escape); desktop.removeEventListener('change', closeOnDesktop); };
  }, [menuOpen]);

  return <header className="site-header">
    <div className="container">
      <nav aria-label={t.nav.label} className="site-nav">
        <div className="flex justify-between items-center gap-3">
          <a href="#home" onClick={() => setMenuOpen(false)} aria-label="Renato Alvarez" className="brand">ra<span>.</span></a>
          <ul className="hidden lg:flex gap-8 text-sm nav-links">{navItems.map(item => <li key={item}><a href={`#${item}`}>{t.nav[item]}</a></li>)}</ul>
          <div className="flex items-center gap-2">
            <button onClick={toggleLanguage} aria-label={t.nav.change_language} className="icon-button text-sm"><FaGlobeAmericas aria-hidden="true" /><span>{language === 'es' ? 'EN' : 'ES'}</span></button>
            <a href="#contact" className="hidden lg:inline-flex action-primary !py-2 !px-5">{t.nav.cta}<span aria-hidden="true">↗</span></a>
            <button ref={menuButton} onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? t.nav.close_menu : t.nav.open_menu} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="icon-button lg:hidden">{menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}</button>
          </div>
        </div>
        <ul id="mobile-navigation" hidden={!menuOpen} className="lg:hidden mobile-navigation">
          {[...navItems, 'contact'].map(item => <li key={item}><a href={`#${item}`} onClick={() => setMenuOpen(false)}>{t.nav[item]}</a></li>)}
        </ul>
      </nav>
    </div>
  </header>;
}
