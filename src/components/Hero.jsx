import { motion as Motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaCode, FaDatabase, FaFileAlt } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { profile } from '../data/profile';
import { reviewedProjectCount } from '../data/projects';

export default function Hero() {
  const { t } = useLanguage();
  const labels = t.hero.status_panel;
  const icons = [FaDatabase, FaCode, FaFileAlt];
  return <section id="home" className="hero-section">
    <div className="container">
      <div className="hero-layout">
        <Motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="eyebrow hero-eyebrow"><span className="small-square" aria-hidden="true" />{t.hero.eyebrow}</p>
          <h1 className="hero-name">Renato Alvarez<span>.</span></h1>
          <p className="hero-heading">{t.hero.heading}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="action-primary">{t.hero.btn_projects}<FaArrowDown aria-hidden="true" /></a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="action-secondary" aria-label={`${t.hero.btn_cv} — ${t.hero.cv_language}`}>{t.hero.btn_cv}<FaDownload aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" />GitHub<FaArrowRight className="social-arrow" aria-hidden="true" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" />LinkedIn<FaArrowRight className="social-arrow" aria-hidden="true" /></a>
          </div>
        </Motion.div>
        <Motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="system-card">
          <div className="system-card-header"><span className="eyebrow">{labels.header}</span><span className="system-symbol" aria-hidden="true">↗</span></div>
          <h2>{t.hero.diagram_title}</h2>
          <ol className="system-flow">
            {t.hero.diagram_steps.map((step, index) => {
              const Icon = icons[index];
              return <li key={step.title}>
                <span className="system-icon"><Icon aria-hidden="true" /></span>
                <div><span className="system-step-index" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></div>
              </li>;
            })}
          </ol>
          <div className="system-card-footer"><span>{labels.scope}</span><FaArrowRight aria-hidden="true" /></div>
        </Motion.div>
      </div>
      <dl className="hero-facts">
        <div><dt>{labels.org_label}</dt><dd>{labels.org}</dd></div>
        <div className="hero-case-count"><dt>{labels.cases_label}</dt><dd>{String(reviewedProjectCount).padStart(2, '0')}</dd></div>
        <div><dt>{t.hero.focus_label}</dt><dd>{t.hero.focus}</dd></div>
      </dl>
    </div>
  </section>;
}
