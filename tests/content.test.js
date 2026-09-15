import test from 'node:test';
import assert from 'node:assert/strict';
import { getProjects, projectCatalog, reviewedProjectCount } from '../src/data/projects.js';
import { translations } from '../src/translations.js';

test('every project has a stable unique identity and a complete case in both languages', () => {
  assert.equal(new Set(projectCatalog.map(project => project.id)).size, projectCatalog.length);
  for (const language of ['es', 'en']) {
    const projects = getProjects(language);
    for (const project of projects) {
      for (const field of ['title', 'summary', 'problem', 'result']) assert.ok(typeof project[field] === 'string' && project[field].length > 0, `${project.id}.${field}.${language}`);
      for (const field of ['implementation', 'flow', 'capabilities', 'tags']) assert.ok(project[field].length > 0 && project[field].every(item => typeof item === 'string'), `${project.id}.${field}`);
      assert.ok(project.category in translations[language].projects.filters);
      for (const field of ['demoUrl', 'githubUrl']) {
        if (project[field]) assert.equal(new URL(project[field]).protocol, 'https:');
      }
    }
    for (const filter of ['automation', 'data', 'web']) assert.ok(projects.some(project => project.category === filter));
  }
  assert.equal(reviewedProjectCount, projectCatalog.filter(project => project.reviewed).length);
  assert.deepEqual(getProjects('unknown'), getProjects('es'));
});

test('Spanish and English expose the same translation structure', () => {
  function keys(value, prefix = '') {
    return Object.entries(value).flatMap(([key, item]) => {
      const path = `${prefix}.${key}`;
      return item !== null && typeof item === 'object' ? keys(item, path) : [path];
    }).sort();
  }
  assert.deepEqual(keys(translations.es), keys(translations.en));
});

test('public case data contains no internal source paths or credential fields', () => {
  const serialized = JSON.stringify(projectCatalog);
  assert.doesNotMatch(serialized, /BEGIN (?:RSA )?PRIVATE KEY|private_key|AIza[\w-]{20,}|Desktop[\\/]APPSCRIPT|docs\.google\.com[\\/]spreadsheets/i);
});
