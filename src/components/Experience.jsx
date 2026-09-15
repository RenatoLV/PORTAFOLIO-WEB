import { useLanguage } from '../hooks/useLanguage';

export default function Experience() {
  const { t } = useLanguage();
  return <section id="experience" className="section-padding experience-section">
    <div className="container">
      <p className="eyebrow section-label">04 / {t.nav.experience}</p>
      <h2 className="section-title">{t.experience.title} <span>{t.experience.title_highlight}</span></h2>
      <div className="experience-list">
        {t.experience.jobs.map(exp => <article key={exp.period} className="experience-row">
          <div className="experience-date"><span className="small-square" aria-hidden="true" />{exp.period}</div>
          <div><h3>{exp.title}</h3><p className="experience-company">{exp.company}</p><ul>{exp.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
        </article>)}
      </div>
    </div>
  </section>;
}
