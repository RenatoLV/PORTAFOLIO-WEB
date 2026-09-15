import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaCode, FaDatabase, FaExternalLinkAlt, FaFileCsv, FaFileImage, FaGithub, FaTimes } from 'react-icons/fa';
import { SiFirebase, SiGoogleappsscript, SiGoogledocs, SiGoogledrive, SiGooglesheets, SiJavascript, SiPandas, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import { getProjects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

function ProjectFlow({ project, label }) {
  return <ol aria-label={label} className="project-flow">
    {project.flow.map((step, index) => <li key={step}>
      <span className="font-mono text-primary text-xs" aria-hidden="true">0{index + 1}</span>
      <span>{step}</span>
    </li>)}
  </ol>;
}

const technologies = {
  JavaScript: { Icon: SiJavascript, tone: 'javascript' },
  'Apps Script': { Icon: SiGoogleappsscript, tone: 'google' },
  'Firebase REST': { Icon: SiFirebase, tone: 'firebase' },
  'Firebase Hosting': { Icon: SiFirebase, tone: 'firebase' },
  'Google Docs': { Icon: SiGoogledocs, tone: 'google' },
  'Google Drive': { Icon: SiGoogledrive, tone: 'google' },
  'Drive API': { Icon: SiGoogledrive, tone: 'google' },
  'Google Sheets': { Icon: SiGooglesheets, tone: 'google' },
  CacheService: { Icon: FaDatabase, tone: 'data' },
  CSV: { Icon: FaFileCsv, tone: 'data' },
  React: { Icon: SiReact, tone: 'react' },
  'Tailwind CSS': { Icon: SiTailwindcss, tone: 'tailwind' },
  Python: { Icon: SiPython, tone: 'python' },
  Pandas: { Icon: SiPandas, tone: 'data' },
  Flet: { Icon: FaCode, tone: 'code' },
  Tesseract: { Icon: FaFileImage, tone: 'data' },
  OpenCV: { Icon: FaFileImage, tone: 'data' },
};

function TechnologyTag({ tag }) {
  const technology = technologies[tag] || { Icon: FaCode, tone: 'code' };
  const { Icon, tone } = technology;
  return <li className={`project-tech project-tech--${tone}`}><span className="project-tech-icon"><Icon aria-hidden="true" /></span><span>{tag}</span></li>;
}

function ProjectDialog({ project, labels, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  return <dialog ref={dialogRef} className="case-dialog" aria-labelledby="case-title" onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="case-dialog-content">
      <div className="flex justify-between items-start gap-4 mb-6">
        <div><p className="text-primary text-xs uppercase tracking-wider mb-3">{labels.filters[project.category]}</p><h2 id="case-title" className="text-2xl sm:text-4xl font-bold leading-tight">{project.title}</h2></div>
        <button autoFocus onClick={onClose} aria-label={labels.close} className="icon-button shrink-0"><FaTimes aria-hidden="true" /></button>
      </div>
      <p className="body-copy mb-7">{project.summary}</p>
      <ProjectFlow project={project} label={labels.flow} />
      <div className="space-y-7 mt-8">
        <section><h3 className="case-heading">{labels.problem}</h3><p className="body-copy">{project.problem}</p></section>
        <section><h3 className="case-heading">{labels.implementation}</h3><ul className="list-disc pl-5 space-y-3 body-copy">{project.implementation.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="case-result"><h3 className="case-heading">{labels.result}</h3><p className="body-copy">{project.result}</p></section>
        <section><h3 className="case-heading">{labels.capabilities}</h3><ul className="flex flex-wrap gap-2">{project.capabilities.map(item => <li key={item} className="tech-tag">{item}</li>)}</ul></section>
      </div>
      <div className="flex flex-wrap gap-3 mt-8">
        {project.demoUrl && <a className="action-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{labels.demo}<FaExternalLinkAlt aria-hidden="true" /></a>}
        {project.githubUrl && <a className="action-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" />{labels.github}</a>}
        <button className="action-secondary" onClick={onClose}>{labels.close}</button>
      </div>
    </div>
  </dialog>;
}

export default function Projects() {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState('all');
  const [selectedId, setSelectedId] = useState(null);
  const projects = getProjects(language);
  const visible = projects.filter(project => category === 'all' || project.category === category);
  const selected = projects.find(project => project.id === selectedId);

  return <section id="projects" className="section-padding relative">
    <div className="container">
      <p className="eyebrow section-label">01 / {t.nav.projects}</p>
      <div className="section-heading-row"><h2 className="section-title">{t.projects.title} <span>{t.projects.title_highlight}</span></h2><p className="body-copy">{t.projects.subtitle}</p></div>
      <div className="project-toolbar">
        <div className="flex flex-wrap gap-1" role="group" aria-label={t.projects.filter_label}>
          {Object.entries(t.projects.filters).map(([key, label]) => <button key={key} onClick={() => setCategory(key)} aria-pressed={category === key} className={`filter-button ${category === key ? 'filter-active' : ''}`}>{label}</button>)}
        </div>
        <p className="text-xs font-mono text-muted" aria-live="polite">{String(visible.length).padStart(2, '0')} {t.projects.count}</p>
      </div>
      <div className="projects-grid">
        {visible.map(project => <article key={project.id} className="project-card">
          <div className="project-visual">
            <div className="project-visual-label"><span>{t.projects.flow}</span><span aria-hidden="true">/{String(projects.findIndex(item => item.id === project.id) + 1).padStart(2, '0')}</span></div>
            <ProjectFlow project={project} label={t.projects.flow} />
          </div>
          <div className="project-body">
            <p className="project-category">{t.projects.filters[project.category]}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="project-stack-label">{t.projects.technologies}</p>
            <ul className="project-tech-list">{project.tags.map(tag => <TechnologyTag key={tag} tag={tag} />)}</ul>
            <div className="project-card-footer">
              <button onClick={() => setSelectedId(project.id)} aria-label={`${t.projects.case_action}: ${project.title}`}>{t.projects.case_action}<FaArrowRight aria-hidden="true" /></button>
              <span>{project.demoUrl || project.githubUrl ? t.projects.public : t.projects.internal}</span>
            </div>
          </div>
        </article>)}
      </div>
    </div>
    {selected && <ProjectDialog project={selected} labels={t.projects} onClose={() => setSelectedId(null)} />}
  </section>;
}
