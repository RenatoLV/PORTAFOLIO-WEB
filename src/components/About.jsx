import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();
  return <section id="about" className="section-padding about-section">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-24">
      <div>
        <p className="eyebrow section-label">02 / {t.nav.about}</p>
        <h2 className="section-title">{t.about.title} <span>{t.about.title_highlight}</span></h2>
        {t.about.paragraphs.map(paragraph => <p key={paragraph} className="body-copy mb-5">{paragraph}</p>)}
        <div className="education-block">
          <h3 className="eyebrow mb-3">{t.about.education}</h3>
          <p className="font-semibold">{t.about.degree}</p>
          <p className="text-sm text-muted mt-2">{t.about.school}</p>
        </div>
      </div>
      <div className="approach-panel">
        <span className="approach-mark" aria-hidden="true">{'{ }'}</span>
        <h3>{t.about.approach}</h3>
        <ol>{t.about.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span><p>{step}</p></li>)}</ol>
        <p className="approach-note">{t.about.note}</p>
      </div>
    </div>
  </section>;
}
