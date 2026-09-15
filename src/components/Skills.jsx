import { FaCode, FaDatabase, FaLayerGroup, FaCheck, FaChartBar, FaFileAlt, FaLock, FaRedo, FaHistory, FaJava } from 'react-icons/fa';
import {
  SiCss3, SiDotnet, SiFirebase, SiGit, SiGithub, SiGoogleappsscript,
  SiGoogledocs, SiGoogledrive, SiGooglesheets, SiHtml5, SiJavascript,
  SiLinux, SiMysql, SiPandas, SiPython, SiReact, SiTailwindcss,
} from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';

const icons = [FaCode, FaDatabase, FaLayerGroup, FaCheck];

const technologyIcons = {
  JavaScript: SiJavascript,
  'Google Apps Script': SiGoogleappsscript,
  'Google Docs API': SiGoogledocs,
  'Google Drive API': SiGoogledrive,
  Python: SiPython,
  Pandas: SiPandas,
  'SQL / SQL Server': SiMysql,
  'Power BI': FaChartBar,
  'Google Sheets': SiGooglesheets,
  React: SiReact,
  'HTML / CSS': SiHtml5,
  'Tailwind CSS': SiTailwindcss,
  'Firebase REST': SiFirebase,
  'Git / GitHub': SiGithub,
  'Validación en servidor': FaCheck,
  'Bloqueos de escritura': FaLock,
  Caché: FaDatabase,
  Reintentos: FaRedo,
  'Registro de actividad': FaHistory,
  'Server validation': FaCheck,
  'Write locks': FaLock,
  Caching: FaDatabase,
  Retries: FaRedo,
  'Activity logging': FaHistory,
};

const academicTechnologies = {
  es: [
    ['Java SE', FaJava], ['C# / .NET', SiDotnet], ['C', FaCode],
    ['Linux', SiLinux], ['Redes computacionales', FaLayerGroup],
  ],
  en: [
    ['Java SE', FaJava], ['C# / .NET', SiDotnet], ['C', FaCode],
    ['Linux', SiLinux], ['Computer networking', FaLayerGroup],
  ],
};

export default function Skills() {
  const { t, language } = useLanguage();
  return <section id="skills" className="section-padding">
    <div className="container">
      <p className="eyebrow section-label">03 / {t.nav.skills}</p>
      <div className="section-heading-row"><h2 className="section-title">{t.skills.title} <span>{t.skills.title_highlight}</span></h2><p className="body-copy">{t.skills.subtitle}</p></div>
      <div className="skills-grid">
        {t.skills.groups.map((group, index) => {
          const Icon = icons[index];
          return <article key={group.title} className="skill-card">
            <span className="skill-icon"><Icon aria-hidden="true" /></span>
            <h3>{group.title}</h3>
            <p className="body-copy text-sm">{group.description}</p>
            <ul className="flex flex-wrap gap-2 mt-6">{group.items.map(item => {
              const TechnologyIcon = technologyIcons[item] || FaCode;
              return <li key={item} className="tech-tag skills-tech-tag"><TechnologyIcon aria-hidden="true" /><span>{item}</span></li>;
            })}</ul>
          </article>;
        })}
      </div>
      <div className="academic-note"><span>{t.skills.academic}</span><ul>{academicTechnologies[language].map(([name, icon]) => {
        const TechnologyIcon = icon;
        return <li key={name} className="tech-tag skills-tech-tag"><TechnologyIcon aria-hidden="true" /><span>{name}</span></li>;
      })}</ul></div>
    </div>
  </section>;
}
