// Public case studies. Keep internal URLs, source files and personnel data out of this catalog.
// Evidence and review limitations are documented separately in docs/revision-proyectos.md.
const bilingual = (es, en) => ({ es, en });

export const projectCatalog = [
  {
    id: 'informes', category: 'automation', reviewed: true,
    title: bilingual('Informes y procesamiento documental', 'Reports & document processing'),
    summary: bilingual('Generación de informes individuales y por lotes, con versiones para remuneraciones y transparencia.', 'Individual and batch report generation, with payroll and transparency versions.'),
    problem: bilingual('Coordinar datos de personal, documentos, firmas y registros mensuales en un mismo flujo.', 'Coordinate personnel data, documents, signatures and monthly records in one workflow.'),
    implementation: bilingual([
      'Separación de consulta de datos, generación documental, procesamiento masivo y cliente REST de Firebase.',
      'Reintentos con espera exponencial y bloqueos de escritura para registrar resultados de los lotes.',
      'Integración con un servicio de conversión PDF y reemplazo de campos personales en la versión de transparencia.'
    ], [
      'Separate data queries, document generation, batch processing and a Firebase REST client.',
      'Exponential-backoff retries and write locks to record batch results.',
      'Integration with a PDF conversion service and replacement of personal fields in the transparency version.'
    ]),
    result: bilingual('Un flujo que conecta generación, carga de archivos firmados e historial por período.', 'A workflow connecting generation, signed-file uploads and period-based history.'),
    flow: bilingual(['Datos de personal', 'Plantillas y lotes', 'PDF e historial'], ['Personnel data', 'Templates & batches', 'PDF & history']),
    tags: ['JavaScript', 'Apps Script', 'Firebase REST', 'Google Docs', 'Google Drive'],
    capabilities: bilingual(['Integración de servicios', 'Procesamiento por lotes', 'Manejo de errores'], ['Service integration', 'Batch processing', 'Error handling']),
  },
  {
    id: 'contratos', category: 'automation', reviewed: true,
    title: bilingual('Gestión del ciclo de contratos', 'Contract lifecycle management'),
    summary: bilingual('Plantillas documentales, renovaciones, estados de tramitación y seguimiento de contratos.', 'Document templates, renewals, workflow states and contract tracking.'),
    problem: bilingual('Traducir distintas modalidades contractuales, horarios y movimientos de personal en documentos y tareas de seguimiento.', 'Translate contract types, schedules and personnel changes into documents and tracking tasks.'),
    implementation: bilingual([
      'Servicios separados para documentos, contratos, horarios, datos, dashboard e integración con dotación.',
      'Generación desde plantillas con reglas de fechas, montos, jornadas y antecedentes contractuales.',
      'Bloqueos en operaciones de escritura y registro de acciones y cambios de estado.'
    ], [
      'Separate services for documents, contracts, schedules, data, dashboards and staffing integration.',
      'Template generation with rules for dates, amounts, work schedules and contract history.',
      'Locks around write operations and activity records for workflow changes.'
    ]),
    result: bilingual('Seguimiento de documentos desde su generación hasta el archivo y la incorporación del PDF firmado.', 'Document tracking from generation through archiving and signed-PDF upload.'),
    flow: bilingual(['Dotación y reglas', 'Documento y estados', 'Seguimiento'], ['Staffing & rules', 'Document & states', 'Tracking']),
    tags: ['JavaScript', 'Apps Script', 'Google Docs', 'Google Sheets'],
    capabilities: bilingual(['Diseño por servicios', 'Reglas de negocio', 'Trazabilidad'], ['Service design', 'Business rules', 'Traceability']),
  },
  {
    id: 'antecedentes', category: 'web', reviewed: true,
    title: bilingual('Carpetas digitales de personal', 'Digital personnel records'),
    summary: bilingual('Carga, organización y seguimiento de antecedentes con perfiles de usuario y validación de archivos.', 'Document upload, organization and tracking with user profiles and file validation.'),
    problem: bilingual('Organizar antecedentes por funcionario y unidad, y conocer qué documentos están pendientes.', 'Organize employee documents by organizational unit and identify missing records.'),
    implementation: bilingual([
      'Validación del tipo y tamaño declarado de los archivos antes de procesar las cargas.',
      'Filtros y comprobaciones de permisos en el servidor según perfil y dirección asignada.',
      'Caché fragmentada, invalidación tras cambios, bloqueo de cargas y registro de actividad.'
    ], [
      'Validate declared file type and size before processing uploads.',
      'Server-side filters and permission checks based on profile and assigned department.',
      'Chunked caching, invalidation after changes, upload locking and activity records.'
    ]),
    result: bilingual('Consulta de avance documental y gestión de archivos vinculados a cada funcionario.', 'Document-completion tracking and file management for each employee.'),
    flow: bilingual(['Carga de archivos', 'Validación y perfil', 'Carpeta digital'], ['File upload', 'Validation & profile', 'Digital record']),
    tags: ['JavaScript', 'Apps Script', 'Drive API', 'CacheService'],
    capabilities: bilingual(['Validación en servidor', 'Gestión documental', 'Caché'], ['Server validation', 'Document management', 'Caching']),
  },
  {
    id: 'siaper', category: 'data', reviewed: true,
    title: bilingual('Preparación de cargas SIAPER', 'SIAPER data-load preparation'),
    summary: bilingual('Preparación y exportación de lotes CSV con validación de formularios e historial recuperable.', 'CSV batch preparation and export with form validation and recoverable history.'),
    problem: bilingual('Preparar registros para distintos módulos de carga y conservar los lotes para su consulta posterior.', 'Prepare records for different import modules and retain batches for later review.'),
    implementation: bilingual([
      'Repositorios separados para funcionarios y emisiones, con un adaptador único de llamadas al backend.',
      'Validación de formularios y exportación CSV; autoguardado local del trabajo en curso.',
      'Identificadores UUID, historial resumido y recuperación del contenido de un lote bajo demanda.'
    ], [
      'Separate employee and submission repositories with a single backend-call adapter.',
      'Form validation and CSV export, with local autosave for work in progress.',
      'UUID identifiers, summary history and on-demand retrieval of batch contents.'
    ]),
    result: bilingual('Preparación de archivos y recuperación de emisiones anteriores desde una interfaz común.', 'File preparation and retrieval of earlier submissions from one interface.'),
    flow: bilingual(['Formulario', 'Validación y lote', 'CSV e historial'], ['Form', 'Validation & batch', 'CSV & history']),
    tags: ['JavaScript', 'Apps Script', 'CSV', 'Google Sheets'],
    capabilities: bilingual(['Separación de responsabilidades', 'Validación de datos', 'Persistencia'], ['Separation of concerns', 'Data validation', 'Persistence']),
  },
  {
    id: 'ingresos', category: 'automation', reviewed: true,
    title: bilingual('Gestión de nuevos ingresos', 'New-hire workflow'),
    summary: bilingual('Registro de personal, detección de antecedentes faltantes y traspasos a nómina y contratos.', 'Personnel registration, missing-document checks and transfers to payroll and contracts.'),
    problem: bilingual('Mantener consistentes los datos de ingreso y coordinar su paso entre distintas herramientas administrativas.', 'Keep onboarding data consistent and coordinate transfers between administrative tools.'),
    implementation: bilingual([
      'Módulos de formulario, validación, documentos, correos, dashboard y traspasos.',
      'Reglas de completitud según modalidad contractual y actualización del estado de cada registro.',
      'Normalización de campos, tratamiento de montos y creación de carpetas y documentos asociados.'
    ], [
      'Modules for forms, validation, documents, email, dashboards and transfers.',
      'Completeness rules by contract type and per-record status updates.',
      'Field normalization, amount handling and creation of associated folders and documents.'
    ]),
    result: bilingual('Visibilidad de los antecedentes pendientes antes de continuar con el proceso contractual.', 'Visibility into missing information before proceeding with the contract workflow.'),
    flow: bilingual(['Ingreso de datos', 'Completitud', 'Nómina y contratos'], ['Data entry', 'Completeness', 'Payroll & contracts']),
    tags: ['JavaScript', 'Apps Script', 'Google Sheets', 'Google Drive'],
    capabilities: bilingual(['Integración de procesos', 'Calidad de datos', 'Reglas de negocio'], ['Process integration', 'Data quality', 'Business rules']),
  },
  {
    id: 'programas', category: 'automation', reviewed: true,
    title: bilingual('Programas de prestación de servicios', 'Service-program management'),
    summary: bilingual('Formularios de programas, horarios, anexos y consolidación de información por período.', 'Program forms, schedules, amendments and period-based data consolidation.'),
    problem: bilingual('Reunir información de programas y personal, generar sus documentos y revisar diferencias con la nómina.', 'Collect program and personnel data, generate documents and reconcile differences with payroll.'),
    implementation: bilingual([
      'Formularios con modalidades horarias y generación de documento principal y anexos.',
      'Identificación de envíos y reutilización de resultados completados ante un reenvío.',
      'Módulos de auditoría, comparación con nómina y exportación de resúmenes.'
    ], [
      'Forms supporting work-schedule variants and generation of main documents and amendments.',
      'Submission identifiers and reuse of completed results on repeat submission.',
      'Audit modules, payroll reconciliation and summary exports.'
    ]),
    result: bilingual('Un flujo para recopilar programas y revisar su avance documental y diferencias de datos.', 'A workflow for collecting programs and reviewing document progress and data differences.'),
    flow: bilingual(['Programa y horario', 'Documento y anexos', 'Consolidación'], ['Program & schedule', 'Document & amendments', 'Consolidation']),
    tags: ['JavaScript', 'Apps Script', 'Google Docs', 'Google Sheets'],
    capabilities: bilingual(['Modelado de procesos', 'Conciliación de datos', 'Automatización documental'], ['Process modeling', 'Data reconciliation', 'Document automation']),
  },
  {
    id: 'organigrama', category: 'web', reviewed: false,
    title: bilingual('Organigrama interactivo', 'Interactive organizational chart'),
    summary: bilingual('Exploración de la estructura municipal mediante búsqueda y navegación por unidades.', 'Explore the municipal structure through search and navigation by organizational unit.'),
    problem: bilingual('Facilitar la consulta de la estructura organizacional y la comparación de sus versiones.', 'Make organizational structures easier to explore and compare across versions.'),
    implementation: bilingual([
      'Interfaz con React y navegación interactiva de nodos.',
      'Búsqueda por direcciones y comparación de estructuras.',
      'Publicación web mediante Firebase Hosting.'
    ], ['React interface with interactive node navigation.', 'Department search and structure comparison.', 'Web delivery through Firebase Hosting.']),
    result: bilingual('Una vista navegable de relaciones entre unidades municipales.', 'A navigable view of relationships between municipal units.'),
    flow: bilingual(['Estructura', 'Búsqueda y navegación', 'Vista organizacional'], ['Structure', 'Search & navigation', 'Organizational view']),
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase Hosting'],
    capabilities: bilingual(['Interfaces interactivas', 'Visualización', 'Despliegue web'], ['Interactive interfaces', 'Visualization', 'Web deployment']),
    demoUrl: 'https://orgama-react.firebaseapp.com/',
    githubUrl: 'https://github.com/RenatoLV/ORGANIGRAMA-MUNICIPALIDAD-DE-COQUIMBO',
  },
  {
    id: 'transparencia-python', category: 'data', reviewed: false,
    title: bilingual('Procesamiento de nóminas y OCR', 'Payroll processing & OCR'),
    summary: bilingual('Aplicación de escritorio para cruces de personal y extracción de información de decretos.', 'Desktop application for personnel reconciliation and document-data extraction.'),
    problem: bilingual('Procesar documentos y nóminas de distintas fuentes para preparar información de transparencia.', 'Process documents and payroll from different sources to prepare transparency information.'),
    implementation: bilingual([
      'Interfaz de escritorio desarrollada con Python y Flet.',
      'Procesamiento de nóminas con Pandas y OCR con Tesseract y OpenCV.',
      'Integración con Google Drive API para el flujo documental.'
    ], ['Desktop interface built with Python and Flet.', 'Payroll processing with Pandas and OCR using Tesseract and OpenCV.', 'Google Drive API integration for document workflows.']),
    result: bilingual('Herramientas para preparar y cruzar información documental y de personal.', 'Tools to prepare and reconcile document and personnel information.'),
    flow: bilingual(['Nóminas y decretos', 'OCR y cruce', 'Datos preparados'], ['Payroll & documents', 'OCR & reconciliation', 'Prepared data']),
    tags: ['Python', 'Pandas', 'Flet', 'Tesseract', 'OpenCV'],
    capabilities: bilingual(['Procesamiento de datos', 'OCR', 'Aplicaciones de escritorio'], ['Data processing', 'OCR', 'Desktop applications']),
    githubUrl: 'https://github.com/RenatoLV/aplicacionTransparencia',
  },
];

export function getProjects(language = 'es') {
  const locale = language === 'en' ? 'en' : 'es';
  return projectCatalog.map(project => Object.fromEntries(
    Object.entries(project).map(([key, value]) => [key,
      value && typeof value === 'object' && !Array.isArray(value) && 'es' in value ? value[locale] : value,
    ]),
  ));
}

export const reviewedProjectCount = projectCatalog.filter(project => project.reviewed).length;
