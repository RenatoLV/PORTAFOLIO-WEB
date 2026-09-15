import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

export default function Experience() {
  const { t } = useLanguage();
  const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=-71.3509%2C-29.9600%2C-71.3254%2C-29.9479&layer=mapnik&marker=-29.95395%2C-71.33815';
  const mapLink = 'https://www.openstreetmap.org/?mlat=-29.95395&mlon=-71.33815#map=16/-29.95395/-71.33815';
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
      <aside className="experience-location">
        <div className="experience-map">
          <iframe title={`${t.experience.location_title} — OpenStreetMap`} src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="experience-location-copy">
          <p className="eyebrow">{t.experience.location_eyebrow}</p>
          <h3><FaMapMarkerAlt aria-hidden="true" />{t.experience.location_title}</h3>
          <p>{t.experience.location_text}</p>
          <a href={mapLink} target="_blank" rel="noopener noreferrer">{t.experience.location_action}<FaArrowRight aria-hidden="true" /></a>
        </div>
      </aside>
    </div>
  </section>;
}
