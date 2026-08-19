export const profile = {
  name: "Sumeet Sonar",
  role: "AI Engineer",
  subtitle: "AI & Backend Engineer",
  location: "Navi Mumbai, India",
  email: "sonarsumeet10@gmail.com",
  github: "https://github.com/Sumeet2005",
  linkedin: "https://www.linkedin.com/in/sumeet-sonar",
  tagline: "Building Intelligent Systems With AI",
  intro:
    "Information Technology graduate building AI-powered, backend and full-stack applications.",
};

export const heroStack = [
  { title: "RAG", desc: "Retrieve → Rerank → Generate" },
  { title: "LLMs", desc: "Reasoning and language intelligence" },
  { title: "Agents", desc: "Tool-using autonomous workflows" },
  { title: "Vector DB", desc: "Semantic search and knowledge retrieval" },
  { title: "React", desc: "Interactive AI application interfaces" },
  { title: "FastAPI", desc: "High-performance AI backend APIs" },
];

export const aboutFacts = [
  { key: "<status>", value: "Available for contracts" },
  { key: "<focus>", value: "LLMs & Agentic RAG" },
  { key: "<degree>", value: "B.Sc. Info Technology" },
];

export const aboutParagraphs = [
  "As an IT graduate, I bridge the gap between heavy software systems and intelligent models. I build scalable full-stack applications with FastAPI, Django, and React, integrating structured semantic searches with ChromaDB, orchestration frameworks like LangChain/LangGraph, and custom multi-provider LLM setups (OpenAI, Gemini, Groq).",
  "My hands-on experience spans machine learning implementations, NLP data workflows, token caching, WebSockets integrations, and custom role-based access control. I strive to build reliable, grounded systems that solve actual domain problems.",
];

export const capabilities = [
  {
    id: "ml",
    title: "AI & Machine Learning",
    tech: "PYTHON • SCIKIT-LEARN • STREAMLIT",
    statement:
      "Developing robust machine learning pipelines, data preprocessing, and model evaluations.",
    points: [
      "Data preprocessing, cleaning, and features extraction",
      "Traditional ML pipeline implementation (Classification, Regression)",
      "Model testing, debugging, and metrics evaluation (F1, AUC, accuracy)",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    related: "Smart AI Resume Analyzer",
  },
  {
    id: "genai",
    title: "Generative AI & RAG",
    tech: "PYTHON • CHROMADB • BM25",
    statement:
      "Designing grounded retrieval pipelines that keep LLM output accurate and source-backed.",
    points: [
      "Hybrid retrieval with semantic search and BM25 reranking",
      "Agentic orchestration with LangChain and LangGraph",
      "Multi-provider LLM routing (OpenAI, Gemini, Groq, Hugging Face)",
    ],
    stack: ["ChromaDB", "LangChain", "LangGraph", "BM25"],
    related: "IntelliICU",
  },
  {
    id: "backend",
    title: "Backend & AI Systems",
    tech: "FASTAPI • DJANGO • POSTGRESQL",
    statement:
      "Engineering resilient service layers that carry AI workloads into production safely.",
    points: [
      "REST APIs with FastAPI and Django, SQLAlchemy and Alembic migrations",
      "Realtime telemetry via WebSockets and token caching layers",
      "JWT auth with custom role-based access control",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "WebSockets"],
    related: "PharmacoGuard",
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    tech: "REACT • TYPESCRIPT • TAILWIND CSS",
    statement:
      "Shipping clean front-end architectures that make intelligent systems usable.",
    points: [
      "Component-driven React interfaces with TypeScript",
      "Dashboards for realtime metrics and analytics",
      "Deployment with Docker, GitHub Actions, Nginx and Railway",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    related: "Atlas",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"] },
  {
    title: "AI & GenAI",
    items: [
      "Machine Learning",
      "NLP",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Semantic Search",
      "ChromaDB",
      "Multi-provider LLM integration",
    ],
  },
  {
    title: "Backend Systems",
    items: ["FastAPI", "Django", "REST APIs", "SQLAlchemy", "Alembic", "WebSockets", "JWT", "RBAC"],
  },
  { title: "Frontend", items: ["React", "Vite", "Streamlit"] },
  {
    title: "ML & Data Sci",
    items: ["Scikit-learn", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation"],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Oracle SQL"] },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Docker Compose", "GitHub Actions", "Railway", "Nginx"],
  },
  { title: "LLM Integration", items: ["OpenAI", "Gemini", "Groq", "Hugging Face", "Ollama"] },
];

export const projects = [
  {
    id: "01",
    name: "IntelliICU",
    kicker: "AI Clinical Copilot",
    category: "AI Clinical Copilot & Healthcare Platform",
    summary:
      "Real-time clinical monitoring platform leveraging active WebSocket telemetries and RAG clinical queries.",
    features: [
      "Real-time patient monitoring & metrics telemetry via active WebSockets connection.",
      "Grounded, source-backed clinical answers using RAG extraction architectures.",
      "Configurable multi-provider LLM integrations (OpenAI, Gemini, Groq, Hugging Face).",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "LangChain", "ChromaDB", "WebSockets", "Docker", "JWT"],
  },
  {
    id: "02",
    name: "Atlas",
    kicker: "AI Knowledge Workspace",
    category: "Agentic Knowledge Workspace",
    summary:
      "A knowledge workspace that ingests documents and answers questions with grounded, cited context.",
    features: [
      "Document ingestion pipelines with chunking and semantic indexing.",
      "Agentic orchestration over tools with LangGraph.",
      "Workspace UI for browsing sources alongside generated answers.",
    ],
    stack: ["React", "FastAPI", "ChromaDB", "LangGraph", "PostgreSQL"],
  },
  {
    id: "03",
    name: "PharmacoGuard",
    kicker: "AI-Powered Complaint Management System",
    category: "Pharma Complaint Intelligence",
    summary:
      "Complaint management system that classifies, routes and summarises pharmacovigilance reports.",
    features: [
      "Automated complaint classification and severity triage.",
      "Role-based access control across reviewer workflows.",
      "Audit-friendly reporting with structured summaries.",
    ],
    stack: ["Django", "PostgreSQL", "Python", "RBAC", "NLP"],
  },
  {
    id: "04",
    name: "Smart AI Resume Analyzer",
    kicker: "HR Tech",
    category: "Resume Intelligence",
    summary:
      "NLP-driven resume screening that scores candidates against role requirements.",
    features: [
      "Resume parsing with feature extraction and skill matching.",
      "Scoring models evaluated on F1, AUC and accuracy.",
      "Streamlit interface for recruiter-side review.",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "NLP", "Pandas"],
  },
  {
    id: "05",
    name: "FraudShield",
    kicker: "AI-Powered Fraud Detection System",
    category: "Risk & Anomaly Detection",
    summary:
      "Transaction fraud detection with engineered features and calibrated classification models.",
    features: [
      "Imbalanced-data handling with resampling and threshold tuning.",
      "Feature engineering over transactional behaviour.",
      "Model metrics dashboard for precision/recall tradeoffs.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: "06",
    name: "Sales Prediction Using Data Science",
    kicker: "Predictive Analytics",
    category: "Forecasting",
    summary:
      "Regression pipelines forecasting sales performance from historical and campaign data.",
    features: [
      "Exploratory analysis and feature selection.",
      "Regression modelling with cross-validated evaluation.",
      "Visual reporting of forecast accuracy.",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    id: "07",
    name: "Healthcare Dashboard Using Power BI",
    kicker: "Interactive Healthcare Analytics Dashboard",
    category: "Business Intelligence",
    summary:
      "Interactive analytics dashboard surfacing healthcare operations and outcome metrics.",
    features: [
      "Clean data modelling over healthcare datasets.",
      "Drill-down views for departments and outcomes.",
      "KPI tracking with interactive filters.",
    ],
    stack: ["Power BI", "SQL", "Data Modelling"],
  },
];

export const careerTabs = [
  {
    id: "experience",
    label: "01 / Experience",
    sub: "Data science internship logs",
    verified: "VERIFIED",
    title: "Data Science Intern",
    meta: "CodSoft // Apr 2025 — May 2025",
    facets: [
      { id: "01 / DATA", label: "Raw Data Processing", report: "Converting dirty transaction files and document lists into normalized records. Handled missing entries, outliers, and feature encoding pipelines." },
      { id: "02 / ML", label: "Machine Learning Workflows", report: "Built and compared classification and regression baselines, tuning hyperparameters and tracking evaluation metrics across runs." },
      { id: "03 / NLP", label: "Natural Language Processing", report: "Text cleaning, tokenization and vectorization workflows powering resume and document understanding tasks." },
      { id: "04 / QUALITY", label: "Testing & Performance Evaluation", report: "Model testing and debugging with F1, AUC and accuracy reporting to validate production readiness." },
    ],
  },
  {
    id: "education",
    label: "02 / Education",
    sub: "IT degree records",
    verified: "RECORDED",
    title: "B.Sc. Information Technology",
    meta: "University of Mumbai // Graduate",
    facets: [
      { id: "01 / CORE", label: "Software Engineering", report: "Core coursework across data structures, databases, operating systems and software engineering practice." },
      { id: "02 / DATA", label: "Databases & SQL", report: "Relational modelling, query optimisation and hands-on work with Oracle SQL, MySQL and PostgreSQL." },
      { id: "03 / AI", label: "AI Foundations", report: "Machine learning fundamentals, statistics and applied Python for data-driven systems." },
      { id: "04 / PROJECTS", label: "Applied Capstones", report: "Project-driven learning culminating in full-stack and AI systems delivered end to end." },
    ],
  },
  {
    id: "credentials",
    label: "03 / Credentials",
    sub: "Oracle & Godrej certificates",
    verified: "CERTIFIED",
    title: "Certifications",
    meta: "Oracle // Godrej",
    facets: [
      { id: "01 / ORACLE", label: "Oracle Certification", report: "Oracle certification covering SQL and database fundamentals for production data work." },
      { id: "02 / GODREJ", label: "Godrej Programme", report: "Industry programme certificate covering applied technology and professional engineering practice." },
      { id: "03 / AI", label: "Applied AI Learning", report: "Continuous self-directed learning across LLM tooling, retrieval systems and agent frameworks." },
      { id: "04 / DEVOPS", label: "Deployment Practice", report: "Hands-on containerisation, CI pipelines and deployment workflows with Docker and GitHub Actions." },
    ],
  },
];