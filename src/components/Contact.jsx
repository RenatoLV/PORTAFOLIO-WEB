import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { t, language } = useLanguage();
  return <section id="contact" className="contact-section">
    <div className="container">
      <p className="eyebrow section-label">05 / {t.nav.contact}</p>
      <div className="contact-layout">
        <div><h2>{t.contact.title_prefix}<br /><span>{t.contact.title_highlight}</span></h2><p>{t.contact.description}</p>
          <a href={`mailto:${profile.email}`} className="contact-cta">{t.contact.cta}<FaArrowRight aria-hidden="true" /></a>
        </div>
        <div className="contact-details">
          <div><h3>{t.contact.email_title}</h3><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><h3>{t.contact.phone_title}</h3><a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a></div>
          <div><h3>{t.contact.location_title}</h3><p>{profile.location}</p></div>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="contact-cv" aria-label={`${t.contact.download_cv} — ${t.hero.cv_language}`}>{t.contact.download_cv}<FaDownload aria-hidden="true" /></a>
        </div>
      </div>
      <footer className="site-footer">
        <a href="#home" aria-label="Renato Alvarez" className="brand">ra<span>.</span></a>
        <p>© {new Date().getFullYear()} {profile.name}. {t.contact.footer_rights}</p>
        <div><a href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" />GitHub</a><a href={language === 'en' ? `${profile.linkedin}?locale=en_US` : profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" />LinkedIn</a></div>
      </footer>
    </div>
  </section>;
}
