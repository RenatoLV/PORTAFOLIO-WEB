import { FaCode, FaDatabase, FaLayerGroup, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

const icons = [FaCode, FaDatabase, FaLayerGroup, FaCheck];

export default function Skills() {
  const { t } = useLanguage();
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
            <ul className="flex flex-wrap gap-2 mt-6">{group.items.map(item => <li key={item} className="tech-tag">{item}</li>)}</ul>
          </article>;
        })}
      </div>
      <p className="academic-note"><span>{t.skills.academic}</span>{t.skills.academic_items}</p>
    </div>
  </section>;
}
