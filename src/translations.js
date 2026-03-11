export const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto",
            cta: "Hablemos"
        },
        hero: {
            greeting: "HOLA, SOY",
            role_prefix: "Analista Programador especializado en",
            role_highlight1: "Automatización",
            role_connector: "y",
            role_highlight2: "Gestión de Datos",
            description: "Transformando procesos complejos en soluciones digitales eficientes.",
            btn_projects: "VER PROYECTOS",
            btn_contact: "CONTACTO"
        },
        about: {
            title: "SOBRE",
            title_highlight: "MÍ",
            p1: "Analista Programador especializado en <strong>Automatización y Gestión de Datos</strong>, con experiencia en diversos procesos creando sistemas que generan la transformación de procesos complejos en soluciones digitales eficientes.",
            p2: "Creador de <strong>flujos de trabajo</strong> e implementación de software bajo <strong>metodologías ágiles</strong> como Sprint en Scrum. Experto en creación de <strong>dashboards de gestión</strong> y <strong>planillas inteligentes automatizadas</strong> que optimizan la toma de decisiones.",
            stats: {
                years: "Años Exp.",
                projects: "Proyectos",
                stack: "Stack Tech",
                stackList: "App Script • Python • SQL • Power BI • Java • React • JavaScript • .NET • Linux • Google Suite"
            }
        },
        experience: {
            title: "EXPERIENCIA",
            title_highlight: "LABORAL",
            jobs: [
                {
                    title: "Apoyo Profesional – Dirección de RRHH",
                    company: "Municipalidad de Coquimbo",
                    period: "08/2024 – Presente",
                    details: [
                        "Digitalización de procesos de nuevos ingresos y contratos.",
                        "Automatización de Transparencia MU (Pasiva).",
                        "Desarrollo de sistema de correspondencia interna.",
                        "Gestión de Transparencia Activa y Dashboard de Ley de Retiro.",
                        "Manejo de Power BI para reportes de funcionarios."
                    ]
                },
                {
                    title: "Práctica Profesional – RRHH",
                    company: "Municipalidad de Coquimbo",
                    period: "21/04/2024 – 11/07/2024",
                    details: [
                        "Apoyo en procesos administrativos y digitalización.",
                        "Automatización de tareas básicas.",
                        "Manejo de bases de datos y organización documental."
                    ]
                }
            ]
        },
        projects: {
            title: "PROYECTOS",
            title_highlight: "DESTACADOS",
            preview: "Visualización del Proyecto",
            btn_details: "VER GALERÍA",
            list: [
                {
                    title: "Organigrama Municipal",
                    description: "Plataforma interactiva construida con React y Java para visualizar el organigrama y personal de la municipalidad, incluyendo reglamentos, modo oscuro y detalles de departamentos.",
                    tags: ["React", "Java", "JavaScript"],
                    images: [
                        "/images/organigrama_1.png",
                        "/images/organigrama_2.png",
                        "/images/organigrama_3.png",
                        "/images/organigrama_4.png"
                    ],
                    demoUrl: "https://orgama-react.firebaseapp.com/"
                },
                {
                    title: "Sistema de Nuevos Ingresos",
                    description: "Generación automática de documentación y registro centralizado de ingresos al municipio. Conectado a sistemas de contratos y dotación.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Automation"],
                    video: "https://www.youtube.com/embed/z9qm6S3Pgw0",
                    images: [
                        "/images/modulo_ingreso_1.png",
                        "/images/modulo_ingreso_2.png",
                        "/images/modulo_ingreso_3.png",
                        "/images/modulo_ingreso_4.png",
                        "/images/modulo_ingreso_5.png",
                        "/images/modulo_ingreso_6.png",
                        "/images/modulo_ingreso_7.png",
                        "/images/modulo_ingreso_8.png",
                        "/images/modulo_ingreso_9.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Generador de Contratos",
                    description: "Sistema con inicio de sesión para encargados de sección, permitiendo la generación automatizada de contratos y reduciendo errores manuales.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Security"],
                    images: [
                        "/images/contrato_1.png",
                        "/images/contrato_2.png",
                        "/images/contrato_3.png",
                        "/images/contrato_4.png",
                        "/images/contrato_5.png",
                        "/images/contrato_6.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Sistema RIFO",
                    description: "Gestor de funcionarios con fotos, generación de documentos y visualización de datos de personal (antigüedad, estudios).",
                    tags: ["App Script", "JavaScript", "Google Suite", "Management"],
                    images: [
                        "/images/rifo_1.png",
                        "/images/rifo_2.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Sistema de Dotación",
                    description: "Sistema Integral de Gestión (SIG) desarrollado como una SPA sobre Google Sheets. Incluye un backend en JavaScript con lógica de enrutamiento, un robot de tareas (Cron Jobs) para procesar cambios contractuales de forma asíncrona, un motor de validación de datos en tiempo real y un Dashboard analítico con Chart.js. Automatiza la gestión documental vinculando respaldos PDF directamente vía Google Drive API.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Optimization"],
                    images: [
                        "/images/graficos.png",
                        "/images/graficos2.png",
                        "/images/graficos filtrados.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Dashboard de Programas",
                    description: "Visualización interactiva de costos, personal, direcciones y dotación. Cruce de datos con formulario inteligente.",
                    tags: ["App Script", "Google Suite", "Power BI", "Data Viz"],
                    images: [
                        "/images/PRESTACION.png",
                        "/images/PRESTACION 1.png",
                        "/images/PRESTACION 3.png",
                        "/images/PRESTACION 4.png",
                        "/images/PRESTACION 5.png",
                        "/images/PRESTACION 6.png",
                        "/images/PRESTACION 7.png",
                        "/images/PRESTACION 8.png",
                        "/images/PRESTACION 9.png"
                    ],
                    demoUrl: "https://script.google.com/macros/s/AKfycbzevnyQcFvLrPU7JuoJ9st1y37wFP9wlacFBFmC_vCYPfAbJApw0rmCznN8tX8umA/exec"
                },
                {
                    title: "Consolidado de Nóminas Python",
                    description: "Script en Python para procesar nóminas y generar reportes avanzados en Power BI.",
                    tags: ["Python", "Power BI", "Data Processing"],
                    images: [
                        "/images/dashboard_1.jpg",
                        "/images/dashboard_2.jpg",
                        "/images/dashboard_3.jpg",
                        "/images/dashboard_4.jpg"
                    ],
                    demoUrl: null
                },
                {
                    title: "App de Transparencia",
                    description: "Ordenamiento automático (A-Z) y detección de incidencias de tachado parcial para cumplimiento de normas de transparencia.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Automation"],
                    images: [],
                    demoUrl: null
                },
                {
                    title: "Sistema de Informes Mensuales",
                    description: "Sistema de transparencia y remuneraciones que evita el tachado gracias a que la plataforma entrega el formato del informe y gestiona el paso del adjuntado con la boleta emitida.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Transparency"],
                    images: [],
                    demoUrl: null
                },
                {
                    title: "Sistema de Secretaría",
                    description: "Programa para no perder el correlativo y mantener el registro digital fidedigno de toda la documentación oficial.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Digital Records"],
                    images: [
                        "/images/SECRETARIA.png",
                        "/images/SECRETARIA 1.png",
                        "/images/SECRETARIA 2.png"
                    ],
                    demoUrl: "https://script.google.com/macros/s/AKfycby8eYR7m0fuIFH4FWC0aWKUE0SM4NjF0vleQI4DujGDQOU8BOMNOagNmgu23yX3wX4b-g/exec"
                }
            ]
        },
        contact: {
            title_prefix: "¿LISTO PARA",
            title_highlight: "COLABORAR?",
            description: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tu empresa y/o emprendimiento.",
            phone_title: "Llámame",
            email_title: "Escríbeme",
            location_title: "Me ubico en",
            footer_rights: "Todos los derechos reservados.",
            download_cv: "Descargar CV"
        }
    },
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
            cta: "Let's Talk"
        },
        hero: {
            greeting: "HELLO, I AM",
            role_prefix: "Programmer Analyst specialized in",
            role_highlight1: "Automation",
            role_connector: "and",
            role_highlight2: "Data Management",
            description: "Transforming complex processes into efficient digital solutions.",
            btn_projects: "VIEW PROJECTS",
            btn_contact: "CONTACT"
        },
        about: {
            title: "ABOUT",
            title_highlight: "ME",
            p1: "Programmer Analyst specialized in <strong>Automation and Data Management</strong>, with experience in various processes creating systems that transform complex processes into efficient digital solutions.",
            p2: "Creator of <strong>workflows</strong> and software implementation under <strong>agile methodologies</strong> such as Sprint in Scrum. Expert in creating <strong>management dashboards</strong> and <strong>automated intelligent spreadsheets</strong> that optimize decision-making.",
            stats: {
                years: "Years Exp.",
                projects: "Projects",
                stack: "Tech Stack",
                stackList: "App Script • Python • SQL • Power BI • Java • React • JavaScript • .NET • Linux • Google Suite"
            }
        },
        experience: {
            title: "WORK",
            title_highlight: "EXPERIENCE",
            jobs: [
                {
                    title: "Professional Support – HR Directorate",
                    company: "Municipality of Coquimbo",
                    period: "08/2024 – Present",
                    details: [
                        "Digitization of new entry processes and contracts.",
                        "Automation of Transparency MU (Passive).",
                        "Development of internal correspondence system.",
                        "Active Transparency Management and Retirement Law Dashboard.",
                        "Power BI management for employee reports."
                    ]
                },
                {
                    title: "Professional Internship – HR",
                    company: "Municipality of Coquimbo",
                    period: "21/04/2024 – 11/07/2024",
                    details: [
                        "Support in administrative processes and digitization.",
                        "Automation of basic tasks.",
                        "Database management and document organization."
                    ]
                }
            ]
        },
        projects: {
            title: "FEATURED",
            title_highlight: "PROJECTS",
            preview: "Project Preview",
            btn_details: "VIEW GALLERY",
            list: [
                {
                    title: "Municipal Organization Chart",
                    description: "Interactive platform built with React and Java to view the municipality's organizational chart and staff, including regulations, dark mode, and department details.",
                    tags: ["React", "Java", "JavaScript"],
                    images: [
                        "/images/organigrama_1.png",
                        "/images/organigrama_2.png",
                        "/images/organigrama_3.png",
                        "/images/organigrama_4.png"
                    ],
                    demoUrl: "https://orgama-react.firebaseapp.com/"
                },
                {
                    title: "New Entries System",
                    description: "Automatic generation of documentation and centralized registration of entries to the municipality. Connected to contract and staffing systems.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Automation"],
                    video: "https://www.youtube.com/embed/z9qm6S3Pgw0",
                    images: [
                        "/images/modulo_ingreso_1.png",
                        "/images/modulo_ingreso_2.png",
                        "/images/modulo_ingreso_3.png",
                        "/images/modulo_ingreso_4.png",
                        "/images/modulo_ingreso_5.png",
                        "/images/modulo_ingreso_6.png",
                        "/images/modulo_ingreso_7.png",
                        "/images/modulo_ingreso_8.png",
                        "/images/modulo_ingreso_9.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Contract Generator",
                    description: "System with login for section managers, allowing automated contract generation and reducing manual errors.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Security"],
                    images: [
                        "/images/contrato_1.png",
                        "/images/contrato_2.png",
                        "/images/contrato_3.png",
                        "/images/contrato_4.png",
                        "/images/contrato_5.png",
                        "/images/contrato_6.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "RIFO System",
                    description: "Employee manager with photos, document generation, and personnel data visualization (seniority, education).",
                    tags: ["App Script", "JavaScript", "Google Suite", "Management"],
                    images: [
                        "/images/rifo_1.png",
                        "/images/rifo_2.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Staffing System",
                    description: "Integrated Management System (IMS) built as a SPA on Google Sheets. Includes a JavaScript backend with routing logic, a task robot (Cron Jobs) for asynchronous contract processing, a real-time data validation engine, and an analytical Dashboard with Chart.js. Automates document management by linking PDF backups directly via Google Drive API.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Optimization"],
                    images: [
                        "/images/graficos.png",
                        "/images/graficos2.png",
                        "/images/graficos filtrados.png"
                    ],
                    demoUrl: null
                },
                {
                    title: "Programs Dashboard",
                    description: "Interactive visualization of costs, personnel, addresses, and staffing. Data crossing with smart form.",
                    tags: ["App Script", "Google Suite", "Power BI", "Data Viz"],
                    images: [
                        "/images/PRESTACION.png",
                        "/images/PRESTACION 1.png",
                        "/images/PRESTACION 3.png",
                        "/images/PRESTACION 4.png",
                        "/images/PRESTACION 5.png",
                        "/images/PRESTACION 6.png",
                        "/images/PRESTACION 7.png",
                        "/images/PRESTACION 8.png",
                        "/images/PRESTACION 9.png"
                    ],
                    demoUrl: "https://script.google.com/macros/s/AKfycbzevnyQcFvLrPU7JuoJ9st1y37wFP9wlacFBFmC_vCYPfAbJApw0rmCznN8tX8umA/exec"
                },
                {
                    title: "Python Payroll Consolidated",
                    description: "Python script to process payrolls and generate advanced reports in Power BI.",
                    tags: ["Python", "Power BI", "Data Processing"],
                    images: [
                        "/images/dashboard_1.jpg",
                        "/images/dashboard_2.jpg",
                        "/images/dashboard_3.jpg",
                        "/images/dashboard_4.jpg"
                    ],
                    demoUrl: null
                },
                {
                    title: "Transparency App",
                    description: "Automatic sorting (A-Z) and detection of partial strikethrough incidents for transparency compliance.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Automation"],
                    images: [],
                    demoUrl: null
                },
                {
                    title: "Monthly Reports System",
                    description: "Transparency and payroll system that prevents strikethrough by providing the report format and managing the attachment process with issued receipts.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Transparency"],
                    images: [],
                    demoUrl: null
                },
                {
                    title: "Secretary System",
                    description: "Program to maintain correlative tracking and reliable digital record of all official documentation.",
                    tags: ["App Script", "JavaScript", "Google Suite", "Digital Records"],
                    images: [
                        "/images/SECRETARIA.png",
                        "/images/SECRETARIA 1.png",
                        "/images/SECRETARIA 2.png"
                    ],
                    demoUrl: "https://script.google.com/macros/s/AKfycby8eYR7m0fuIFH4FWC0aWKUE0SM4NjF0vleQI4DujGDQOU8BOMNOagNmgu23yX3wX4b-g/exec"
                }
            ]
        },
        contact: {
            title_prefix: "READY TO",
            title_highlight: "COLLABORATE?",
            description: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your company and/or venture.",
            phone_title: "Call Me",
            email_title: "Write Me",
            location_title: "I am located in",
            footer_rights: "All rights reserved.",
            download_cv: "Download CV"
        }
    }
};
