import { useEffect, useState } from 'react';
import { LanguageContext } from './hooks/useLanguage';
import { translations } from './translations';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'; }
    catch { return 'es'; }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage can be disabled. */ }
  }, [language]);

  const toggleLanguage = () => setLanguage(previous => previous === 'es' ? 'en' : 'es');
  return <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
};
