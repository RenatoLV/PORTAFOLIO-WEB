# Portafolio de Renato Alvarez

Portafolio bilingüe de automatización, datos y herramientas internas. Construido con React, Vite y Tailwind CSS, con casos de estudio de proyectos municipales.

## Desarrollo

```sh
npm ci
npm run dev
```

## Verificación

```sh
npm run lint
npm test
npm run build
npm run preview
```

El build genera `dist/`. Firebase Hosting está configurado para servir esa carpeta; compilar no despliega ni publica el sitio.

## Editar contenido

- `src/data/projects.js`: catálogo de proyectos, descripciones en español/inglés, flujos, capacidades y enlaces públicos. `reviewed` distingue los casos respaldados por la revisión local; no certifica seguridad ni producción.
- `src/data/profile.js`: datos de contacto, perfiles y enlace al CV (actualmente en español).
- `src/translations.js`: textos de navegación, formación, experiencia y capacidades.
- `src/components/Projects.jsx`: filtros y detalle mediante diálogo nativo.
- `src/hooks/useLanguage.js` y `src/LanguageContext.jsx`: contexto, preferencia de idioma y persistencia.

Al agregar un caso, usar un ID estable y completar ambos idiomas. Describir resultados verificables; no inventar métricas, nivel de dominio o antigüedad. Los tests comprueban estructura, enlaces y categorías.

## Material interno

La evaluación técnica y las ubicaciones de los hallazgos están en `docs/revision-proyectos.md`. Esa carpeta no se copia al build.

Las capturas históricas se conservan en `resources/portfolio-legacy-images` y no se sirven desde `public/`. Para incorporar nuevas capturas, usar datos sintéticos o una versión anonimizada comprobada. No copiar fuentes municipales, claves privadas, contraseñas o IDs internos al catálogo ni a `public/`.

`tmp/` contiene respaldo y herramientas temporales de revisión y queda excluido de Git y ESLint. El portafolio no necesita esos archivos para funcionar.

## Accesibilidad y movimiento

Menú móvil con estado expandido, enlace para saltar al contenido, foco visible y detalle de proyecto con Escape y restitución del foco. La preferencia de movimiento reducido limita las transiciones. La página ya no monta el canvas de partículas.

## Diseño visual

Paleta clara con fondo marfil, texto azul tinta y acentos cálidos. Los colores y los estilos compartidos se editan en `src/index.css`; las fuentes son Manrope para títulos, DM Sans para lectura e IBM Plex Mono para etiquetas, con alternativas del sistema.

El recorrido prioriza los proyectos después de la portada, seguido de perfil, capacidades, experiencia y contacto. Las tarjetas muestran flujos de trabajo sin capturas de datos internos. El menú móvil se superpone sin desplazar el contenido y las fichas conservan el diálogo nativo accesible.

Rediseño comprobado en español e inglés, con vistas de 1440, 390 y 320 píxeles, filtros y cierre por teclado. Respaldo anterior al cambio visual: `tmp/portfolio-before-redesign/`.
