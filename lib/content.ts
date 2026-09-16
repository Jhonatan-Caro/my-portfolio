export const profile = {
  name: "Jhonatan Caro Suárez",
  role: "Desarrollador full stack enfocado en datos e inteligencia artificial",
  location: "España",
  email: "jhonatancaro258@gmail.com",
  github: "https://github.com/Jhonatan-Caro",
  linkedin: "https://www.linkedin.com/in/jhonatancarosuarez",
  cvPath: "/CV-Jhonatan-Caro-Datos-IA.pdf",
  photo: "/images/jhonatan.jpeg",
  intro:
    "Me interesa el punto donde el desarrollo y los datos se juntan: ingesta de fuentes heterogéneas, modelado analítico en PostgreSQL y modelos de lenguaje sobre datos propios.",
  availability:
    "Busco mi primera posición en desarrollo full stack orientado a datos e IA.",
};

export const sections = [
  { id: "experiencia", label: "experiencia" },
  { id: "proyectos", label: "proyectos" },
  { id: "ia", label: "inteligencia artificial" },
  { id: "formacion", label: "formación" },
  { id: "stack", label: "stack" },
  { id: "contacto", label: "contacto" },
];

export const experience = [
  {
    role: "Desarrollador web freelance",
    company: "Despiértamebonito",
    companyUrl: "https://xn--despirtamebonito-fqb.es/",
    period: "jun 2026 — ago 2026",
    location: "Almería, España",
    bullets: [
      "Desarrollé el sitio completo sobre WordPress, programando una plantilla de entradas a medida en PHP (single.php y CSS) dentro de un tema hijo para superar las limitaciones del constructor visual.",
      "Migración de dominio y alojamiento, formulario de contacto e integración con WhatsApp.",
      "SEO on-page con Search Console y Analytics: primeras posiciones orgánicas en «desayunos sorpresa Almería» y «desayunos a domicilio Almería».",
    ],
    stack: ["WordPress", "PHP", "CSS", "Elementor", "SEO", "Search Console", "Analytics"],
  },
  {
    role: "Desarrollador web en prácticas",
    company: "Suratica Software",
    companyUrl: null,
    period: "mar 2025 — jun 2025",
    location: "Almería, España",
    bullets: [
      "Desarrollé un dashboard interno de monitorización en Vue.js que consumía una API propia para mostrar el estado de los servidores y notificar nuevas tareas y caídas de servicio.",
      "Implementé funcionalidades en PHP con Laravel para el panel de administración de la aplicación de un cliente: ventanas emergentes y tablas de datos.",
      "Desarrollé landing pages y plugins a medida en WordPress, adaptando temas y funcionalidades a cada cliente.",
    ],
    stack: ["Vue.js", "PHP", "Laravel", "WordPress", "Elementor", "APIs REST"],
  },
];

export type ProjectTag = {
  label: string;
  color: "frontend" | "backend" | "ai" | "data";
};

export const projects: {
  name: string;
  tagline: string;
  repoUrl: string | null;
  siteUrl: string | null;
  tags: ProjectTag[];
  summary: string;
  bullets: string[];
  stack: string[];
}[] = [
  {
    name: "Stocken-Data",
    tagline: "Plataforma de inventario y análisis de ventas",
    repoUrl: "https://github.com/Jhonatan-Caro/Stocken-Data",
    siteUrl: null,
    tags: [
      { label: "Frontend", color: "frontend" },
      { label: "Backend", color: "backend" },
      { label: "IA", color: "ai" },
      { label: "Datos", color: "data" },
    ],
    summary:
      "Convierte archivos de ventas sin estructura fija en métricas de negocio fiables, con un asistente conversacional sobre los propios datos.",
    bullets: [
      "Ingesta de CSV y XLSX con mapeo dinámico de campos, normalizando fuentes con estructuras distintas en un modelo común.",
      "Modelo analítico en PostgreSQL: columnas tipadas, JSONB con índices GIN para el dato original y NUMERIC en importes.",
      "Métricas de negocio (facturación, ticket medio, margen bruto, desglose por canal y producto) con importación idempotente.",
      "Asistente conversacional con un LLM vía API y patrón RAG sobre datos estructurados: responde a partir de las consultas del panel, sin generar SQL.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Node.js",
      "Express",
      "Docker",
      "Tailwind CSS",
    ],
  },
  {
    name: "despiertamebonito.es",
    tagline: "Sitio completo para un negocio local",
    repoUrl: null,
    siteUrl: "https://xn--despirtamebonito-fqb.es/",
    tags: [
      { label: "Frontend", color: "frontend" },
      { label: "SEO", color: "data" },
    ],
    summary:
      "WordPress con plantilla de entradas a medida en PHP y trabajo de SEO on-page que alcanzó primeras posiciones orgánicas en sus búsquedas objetivo.",
    bullets: [
      "Plantilla de entradas a medida (single.php y CSS) en un tema hijo, manteniendo la edición desde WordPress.",
      "Migración de dominio y alojamiento, formulario de contacto e integración con WhatsApp.",
      "SEO on-page con Search Console y Analytics.",
    ],
    stack: ["WordPress", "PHP", "CSS", "Elementor", "SEO"],
  },
];

export const aiFocus = {
  title: "Inteligencia artificial",
  intro:
    "Integro modelos de lenguaje desde el lado del desarrollo, con el acceso a los datos controlado por la aplicación.",
  items: [
    {
      title: "LLMs integrados vía API",
      body: "El modelo se consume desde el backend en Python con FastAPI. Qué datos ve y qué puede hacer lo decide la aplicación, no el modelo.",
    },
    {
      title: "RAG sobre datos estructurados",
      body: "En Stocken-Data el asistente responde preguntas de negocio en lenguaje natural a partir de los resultados de las mismas consultas SQL que alimentan el panel: el modelo nunca genera SQL ni accede a la base de datos.",
    },
    {
      title: "Base analítica en PostgreSQL",
      body: "Columnas tipadas para dimensiones y métricas agregables, JSONB con índices GIN para conservar el dato original e importaciones idempotentes.",
    },
    {
      title: "Formación en curso",
      body: "Máster en Big Data e Inteligencia Artificial, que completa la práctica con la parte de analítica y modelos. Este mismo sitio se sirve como estático desde Amazon S3.",
    },
  ],
};

export const education = [
  {
    title: "Máster en Big Data e Inteligencia Artificial",
    school: "MasterD - Davante",
    period: "2025 — actualidad",
    stack: ["Big data", "IA", "Python", "SQL"],
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    school: "MEDAC - Davante, Almería",
    period: "2023 — 2025",
    stack: ["Java", "PHP", "JavaScript", "HTML y CSS", "SQL"],
  },
];

export const skills = [
  {
    label: "Datos e IA",
    items: [
      "Python",
      "SQL analítico",
      "PostgreSQL",
      "Modelado de datos",
      "Integración de LLMs vía API",
      "RAG sobre datos estructurados",
    ],
  },
  {
    label: "Lenguajes",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP", "Java"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Laravel", "APIs REST", "JWT"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Analítica web",
    items: ["Google Analytics", "Google Search Console"],
  },
  {
    label: "Herramientas",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "AWS", "WordPress", "Figma"],
  },
  {
    label: "Idiomas",
    items: ["Español (nativo)", "Inglés (medio)"],
  },
];
