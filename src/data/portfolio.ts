export const profile = {
  name: "Sumeet Sonar",
  role: "AI Engineer",
  subtitle: "AI & Backend Engineer",
  location: "Navi Mumbai, India",
  email: "sonarsumeet10@gmail.com",
  phone: "+91 8624880655",
  github: "https://github.com/Sumeet2005",
  linkedin: "https://www.linkedin.com/in/sumeet-sonar",
  tagline: "Building Intelligent Systems With AI",
  intro:
    "Bachelor of Engineering in Information Technology graduate specializing in AI Engineering and Backend Engineering.",
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
  { key: "<status>", value: "Available for contract & full-time roles" },
  { key: "<focus>", value: "LLMs, Agentic RAG & Backend APIs" },
  { key: "<degree>", value: "B.E. Information Technology (CGPA: 7.63)" },
];

export const aboutParagraphs = [
  "As a Bachelor of Engineering in IT graduate, I bridge the gap between software backends and intelligent models. I build scalable full-stack applications with FastAPI, Django, and React, integrating structured semantic searches with ChromaDB, orchestration frameworks like LangChain and LangGraph, and multi-provider LLM routing (OpenAI, Gemini, Groq, Ollama, Hugging Face).",
  "My hands-on experience spans machine learning pipelines, NLP data workflows, token caching, WebSockets telemetry, Solidity smart contract verification, and role-based access control (RBAC). I focus on building reliable, grounded systems that solve actual domain problems.",
];

export const capabilities = [
  {
    id: "ml",
    title: "AI & Machine Learning",
    tech: "PYTHON • SCIKIT-LEARN • STREAMLIT • XGBOOST",
    statement:
      "Developing robust machine learning pipelines, data preprocessing, and model evaluations.",
    points: [
      "Data preprocessing, cleaning, feature engineering, and exploratory data analysis (EDA)",
      "Classification & regression pipeline implementation using Scikit-learn and XGBoost",
      "Model testing, debugging, and metrics evaluation (F1, ROC/AUC, accuracy)",
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "NLP", "Pandas", "NumPy"],
    related: "Smart AI Resume Analyzer with Blockchain Certificate Verification",
  },
  {
    id: "genai",
    title: "Generative AI & RAG",
    tech: "PYTHON • CHROMADB • BM25 • LANGCHAIN • LANGGRAPH",
    statement:
      "Designing grounded retrieval pipelines that keep LLM output accurate and source-backed.",
    points: [
      "Hybrid retrieval combining BM25 keyword matching and dense ChromaDB vector search with cross-encoder reranking",
      "Agentic orchestration with LangChain and LangGraph state machines",
      "Multi-provider LLM integration layer (OpenAI, Gemini, Groq, Ollama, Hugging Face)",
    ],
    stack: ["ChromaDB", "LangChain", "LangGraph", "BM25", "Hugging Face", "Ollama"],
    related: "IntelliICU",
  },
  {
    id: "backend",
    title: "Backend & AI Systems",
    tech: "FASTAPI • DJANGO • POSTGRESQL • WEBSOCKETS",
    statement:
      "Engineering resilient service layers that carry AI workloads into production safely.",
    points: [
      "REST APIs with FastAPI and Django, SQLAlchemy ORM and Alembic schema migrations",
      "Real-time patient & metric telemetry via active WebSockets connections",
      "JWT authentication with custom Role-Based Access Control (RBAC)",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "SQLAlchemy", "Alembic", "WebSockets", "JWT", "RBAC"],
    related: "PharmacoGuard",
  },
  {
    id: "fullstack",
    title: "Full-Stack & Web3 Engineering",
    tech: "REACT • TYPESCRIPT • SOLIDITY • DOCKER",
    statement:
      "Shipping clean front-end architectures and Web3 integrations that make intelligent systems usable.",
    points: [
      "Component-driven React interfaces with TypeScript & Tailwind CSS",
      "Blockchain-backed certificate verification using Solidity smart contracts & Web3",
      "Deployment & containerization with Docker, GitHub Actions, Nginx and Railway",
    ],
    stack: ["React", "TypeScript", "Solidity", "Web3", "Docker", "GitHub Actions", "Railway"],
    related: "Atlas",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Solidity"] },
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
      "Multi-provider LLM Integration",
      "Sentence Transformers",
    ],
  },
  {
    title: "Backend Systems",
    items: ["FastAPI", "Django", "Async APIs", "REST APIs", "SQLAlchemy", "Alembic", "WebSockets", "JWT", "RBAC"],
  },
  { title: "Frontend & Web3", items: ["React", "Vite", "Streamlit", "Web3.js", "Solidity Smart Contracts"] },
  {
    title: "ML & Data Sci",
    items: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation", "EDA"],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Oracle SQL"] },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Docker Compose", "GitHub Actions", "Railway", "Nginx", "Jupyter Notebook", "Power BI"],
  },
  { title: "LLM Integration", items: ["OpenAI", "Gemini", "Groq", "Hugging Face", "Ollama"] },
];

export interface Project {
  id: string;
  name: string;
  kicker: string;
  category: string;
  summary: string;
  features: string[];
  stack: string[];
  github: string;
  extendedDesc?: string;
  verificationWorkflow?: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    name: "IntelliICU",
    kicker: "AI Clinical Copilot & Hospital Platform",
    category: "AI Clinical Copilot & Healthcare Platform",
    summary:
      "Real-time clinical decision support platform leveraging active WebSocket telemetries and RAG clinical queries.",
    features: [
      "Engineered an AI-powered clinical decision support system using FastAPI, LangChain, ChromaDB, and Retrieval-Augmented Generation (RAG).",
      "Architected a configurable multi-provider LLM integration layer supporting OpenAI, Gemini, Ollama, and Hugging Face models.",
      "Secured the platform with JWT Authentication and RBAC, added WebSockets for real-time updates, and deployed async FastAPI endpoints on Railway.",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "LangChain", "ChromaDB", "WebSockets", "Docker", "JWT", "Railway"],
    github: "https://github.com/Sumeet2005/IntelliICU",
    extendedDesc:
      "IntelliICU addresses critical healthcare latency issues by feeding active telemetry data directly to full-stack pipelines. The platform coordinates query parsing, chunk overrides, and embedding index validations via secure ChromaDB storage, allowing doctors to get grounded answers scoped to patient records.",
  },
  {
    id: "02",
    name: "Atlas",
    kicker: "AI Knowledge Workspace",
    category: "Agentic Knowledge Workspace",
    summary:
      "Intelligent search workspace featuring hybrid semantic matching and cross-encoder rerankers for document Q&A.",
    features: [
      "Flexible document ingestion with multi-format parsing pipelines for documents, PDFs, and text scripts.",
      "Advanced hybrid retrieval combining keyword matching (BM25) and dense semantic vector search (ChromaDB) with cross-encoder reranking.",
      "Fully grounded question answering with context scoping, token caching, and token telemetry tracking.",
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "ChromaDB", "BM25", "LangGraph", "PostgreSQL", "Nginx"],
    github: "https://github.com/Sumeet2005/AI-Knowledge-Chatbot",
    extendedDesc:
      "Atlas is a developer-centric workspace that structures complex files, PDFs, and text scripts into semantic vectors. It combines lexical index scoring (BM25) with dense semantic search blocks to ensure high-accuracy document reranking under low latency.",
  },
  {
    id: "03",
    name: "PharmacoGuard",
    kicker: "AI-Powered Pharmaceutical Complaint Management System",
    category: "Pharma Complaint Intelligence",
    summary:
      "State machine complaint routing agent built on LangGraph workflows and PostgreSQL schemas for pharmacovigilance.",
    features: [
      "Engineered an AI-powered complaint management system using LangGraph, FastAPI, PostgreSQL, and Groq LLM.",
      "Designed AI workflows for automated complaint classification, risk assessment, semantic duplicate search, and summarization.",
      "Built REST APIs with full database migrations setup using Alembic and PostgreSQL data persistence, integrated into a React web app.",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "LangGraph", "Groq LLM", "SQLAlchemy", "Alembic", "React", "Python"],
    github: "https://github.com/Sumeet2005/ai-pharmaceutical-complaint-system",
    extendedDesc:
      "PharmacoGuard automates manual risk reviews in regulated setups. It maps incoming tickets through state machines using LangGraph, evaluating complaint severity and duplicate classification, persisting logs securely to PostgreSQL layers.",
  },
  {
    id: "04",
    name: "Smart AI Resume Analyzer with Blockchain Certification",
    kicker: "HR Tech & Web3 Certificate Verification System",
    category: "HR Tech & Blockchain Verification System",
    summary:
      "Intelligent resume analysis combined with Web3-integrated Solidity smart contracts for tamper-resistant academic certificate verification.",
    features: [
      "Engineered an NLP pipeline for resume parsing, feature extraction, candidate ranking, and skill-gap analysis using Machine Learning.",
      "Implemented blockchain-based certificate verification using Solidity smart contracts & Web3 integration for tamper-resistant academic records.",
      "Built an interactive Streamlit dashboard for recruitment analytics, candidate evaluation, and cryptographic verification trails.",
    ],
    stack: ["Python", "Scikit-learn", "NLP", "Solidity", "Web3", "Streamlit", "Pandas", "Blockchain"],
    github: "https://github.com/Sumeet2005/Smart_resume_analyzer_with_Blockchain_certification",
    extendedDesc:
      "This platform combines AI-driven candidate parsing with Web3 blockchain verification. On the AI side, NLP algorithms evaluate resume documents, score ATS keyphrase alignment, and calculate candidate fit against target job roles. On the Blockchain side, the system interacts via Web3 with Solidity smart contracts to perform tamper-resistant certificate verification.",
    verificationWorkflow: [
      "Certificate Submitted",
      "ID Processed",
      "Web3 Query",
      "Solidity Smart Contract Verification",
      "Verified Result",
    ],
  },
  {
    id: "05",
    name: "FraudShield",
    kicker: "AI-Powered Fraud Detection System",
    category: "Risk & Anomaly Detection",
    summary:
      "A machine learning-based fraud detection system designed to identify potentially fraudulent transactions using predictive modeling.",
    features: [
      "Fraud detection using machine learning & predictive classification algorithms.",
      "Transaction data analysis, preprocessing, feature engineering, and imbalanced data handling.",
      "Model training, evaluation (precision/recall, ROC/AUC), and real-time fraud risk identification.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    github: "https://github.com/Sumeet2005/FraudShield",
    extendedDesc:
      "A machine learning-based fraud detection system designed to identify potentially fraudulent transactions using data analysis, preprocessing, feature engineering, and predictive modeling.",
  },
  {
    id: "06",
    name: "Sales Prediction Using Data Science",
    kicker: "Predictive Analytics & Sales Forecasting",
    category: "Forecasting",
    summary:
      "A data science project focused on building a predictive machine learning model to forecast future sales from historical advertising data.",
    features: [
      "Data preprocessing, cleaning, and exploratory data analysis (EDA).",
      "Feature engineering and regression model selection.",
      "Machine learning model training, cross-validation, and forecast accuracy evaluation.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
    github: "https://github.com/Sumeet2005/Sales-Prediction-using-Data-Science",
    extendedDesc:
      "A data science project focused on building a predictive machine learning model to forecast future sales from historical advertising data. The project covers data analysis, preprocessing, visualization, model training, prediction, and performance evaluation.",
  },
  {
    id: "07",
    name: "Healthcare Dashboard Using Power BI",
    kicker: "Interactive Healthcare Analytics Dashboard",
    category: "Business Intelligence",
    summary:
      "An interactive Healthcare Analytics Dashboard developed using Power BI to analyze patient records, billing information, and health trends.",
    features: [
      "KPI cards for Total Billing, Average Billing, and Pending Payments.",
      "Disease distribution analysis, payment method breakdowns, and monthly patient trends.",
      "Data cleaning with Power Query, DAX measures, data modeling, and interactive dashboard design.",
    ],
    stack: ["Power BI", "Power Query", "DAX", "SQL", "Data Modeling", "Excel"],
    github: "https://github.com/Sumeet2005/HealthCareDashboard-Using-Power-Bi",
    extendedDesc:
      "An interactive Healthcare Analytics Dashboard developed using Power BI to analyze patient records, billing information, payment methods, disease distribution, department-wise performance, and patient trends.",
  },
];

export const careerTabs = [
  {
    id: "experience",
    label: "01 / Experience",
    sub: "Data Science Internship Logs",
    verified: "VERIFIED",
    title: "Data Science Intern",
    meta: "CodSoft // Apr 2025 — May 2025",
    facets: [
      {
        id: "01 / DATA",
        label: "Raw Data Processing & EDA",
        report:
          "Applied Machine Learning and NLP techniques to real-world datasets using Python and Scikit-learn. Converted raw transaction files and document lists into normalized records, handling missing entries, outliers, and feature encoding pipelines.",
      },
      {
        id: "02 / ML",
        label: "Machine Learning Workflows",
        report:
          "Engineered end-to-end predictive modeling workflows including data cleaning, preprocessing, feature engineering, exploratory data analysis (EDA), and baseline model training.",
      },
      {
        id: "03 / NLP",
        label: "Natural Language Processing",
        report:
          "Developed tokenization, text parsing, and vectorization procedures. Evaluated skill gaps and keyword densities for automated resume matching and NLP document screening.",
      },
      {
        id: "04 / QUALITY",
        label: "Testing & Performance Evaluation",
        report:
          "Rigorous validation using F1, ROC/AUC, and accuracy metrics to troubleshoot pipeline blocks and validate production readiness.",
      },
    ],
  },
  {
    id: "education",
    label: "02 / Education",
    sub: "Academic Degrees & Schooling",
    verified: "RECORDED",
    title: "Bachelor of Engineering in Information Technology",
    meta: "Bharati Vidyapeeth College of Engineering, Navi Mumbai // Graduated June 2026 // CGPA: 7.63 / 10",
    facets: [
      {
        id: "01 / BE_IT",
        label: "B.E. Information Technology",
        report:
          "Bharati Vidyapeeth College of Engineering, Navi Mumbai — Graduated June 2026 with 7.63 / 10 CGPA. Core coursework in Software Engineering, AI & Machine Learning, Database Management, and Operating Systems.",
      },
      {
        id: "02 / HSC",
        label: "Higher Secondary Certificate (HSC)",
        report:
          "JSM College, Alibag — Completed March 2022. Focused on Physics, Chemistry, and Mathematics (Science stream).",
      },
      {
        id: "03 / SSC",
        label: "Secondary School Certificate (SSC)",
        report:
          "K.E.S English Medium High School, Alibag — Completed March 2020.",
      },
      {
        id: "04 / CAPSTONES",
        label: "Applied Engineering Capstones",
        report:
          "Delivered end-to-end AI clinical copilot platforms (IntelliICU), Web3 resume & certificate analyzers, and RAG knowledge workspaces during degree studies.",
      },
    ],
  },
  {
    id: "credentials",
    label: "03 / Credentials",
    sub: "Oracle & Godrej Certifications",
    verified: "CERTIFIED",
    title: "Professional Certifications",
    meta: "Oracle // Godrej",
    facets: [
      {
        id: "01 / ORACLE",
        label: "Programming in Generative AI — Oracle",
        report:
          "Oracle Certification in Generative AI (Aug 2025). Validates prompt engineering, LLM architecture principles, and generative model deployment.",
      },
      {
        id: "02 / GODREJ",
        label: "Data Analytics & Power BI — Godrej",
        report:
          "Godrej Certification in Data Analytics & Power BI (Sep 2025). Covers data modeling, DAX measures, Power Query ETL, and interactive executive reporting.",
      },
      {
        id: "03 / AI_LEARNING",
        label: "Applied GenAI & RAG Orchestration",
        report:
          "Continuous self-directed engineering practice across LangChain, LangGraph state machines, ChromaDB hybrid search, and multi-provider LLM integrations.",
      },
      {
        id: "04 / DEVOPS_PRAC",
        label: "Deployment & Containerization",
        report:
          "Hands-on containerization, CI/CD pipelines, and cloud hosting workflows with Docker, GitHub Actions, Nginx, FastAPI, and Railway.",
      },
    ],
  },
];