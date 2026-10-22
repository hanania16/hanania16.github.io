/**
 * Hanania Meseret - Portfolio Website
 * Focusing on DevOps Engineer & AI Engineer (LLM applications like Claude)
 * Current status: 3rd-year Software Engineering student
 */

// ========== PORTFOLIO DATA ==========
const portfolioData = {
  // TODO: Verify and update these statistics with your actual metrics
  stats: [
    { label: "Academic Standing", value: 3, suffix: "rd Yr" }, // 3rd-year Software Engineering student
    { label: "Core Competencies", value: 18, suffix: "+" }, // Hands-on tools in DevOps, AI & Web
    { label: "Roadmap Milestones", value: 5, suffix: " Phases" }, // Structured DevOps & AI path
    { label: "Commitment to Growth", value: 100, suffix: "%" } // Continuous learning ethic
  ],

  // Skills grouped into 5 requested categories with honest level chips
  // Levels: "Learning", "Familiar", "Proficient" (Defaulted honestly to Learning / Familiar with TODOs)
  skills: {
    core: [
      // TODO: Adjust your level ("Learning", "Familiar", "Proficient") for Core skills
      { name: "Python", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript / TypeScript", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Linux & Bash Scripting", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Git & GitHub", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Networking Basics (HTTP, DNS, REST)", level: "Learning", icon: null },
      { name: "SQL (PostgreSQL)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Data Structures & Algorithms", level: "Learning", icon: null }
    ],
    devops: [
      // TODO: Adjust your level for DevOps & Cloud skills
      { name: "Docker", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Docker Compose", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "CI/CD (GitHub Actions)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "AWS Basics (EC2, S3, IAM)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Terraform (IaC)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Kubernetes Concepts", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Monitoring (Prometheus, Grafana)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" }
    ],
    ai: [
      // TODO: Adjust your level for AI & LLM Engineering skills
      { name: "LLM Fundamentals (Tokens, Context)", level: "Familiar", icon: null },
      { name: "Prompt Engineering", level: "Familiar", icon: null },
      { name: "Claude API (Messages, Streaming, Tool Use)", level: "Learning", icon: null },
      { name: "RAG (Embeddings, Vector Databases)", level: "Learning", icon: null },
      { name: "AI Agents & MCP (Model Context Protocol)", level: "Learning", icon: null },
      { name: "LLM Evaluation", level: "Learning", icon: null }
    ],
    mlops: [
      // TODO: Adjust your level for MLOps / AI Infrastructure skills
      { name: "Deploying AI Apps in Containers", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "API Key & Secrets Management", level: "Learning", icon: null },
      { name: "Cost & Latency Monitoring", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Automated Testing for AI Features", level: "Learning", icon: null }
    ],
    web: [
      // Supporting Web & Mobile skills
      // TODO: Adjust your level for Web & Mobile skills
      { name: "React.js / Next.js", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Flutter", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ]
  },

  // Learning Roadmap Timeline Data (Stages 1 through 5)
  roadmap: [
    {
      stage: "Stage 01",
      title: "Foundations & Containerization",
      topics: "Linux, Git, Python, Docker",
      status: "In progress", // TODO: Update to Done / In progress / Planned
      statusClass: "status-in-progress",
      description: "Mastering shell commands, Git workflow branches, object-oriented Python, and packaging clean container images."
    },
    {
      stage: "Stage 02",
      title: "CI/CD & Cloud Basics",
      topics: "GitHub Actions and AWS",
      status: "Planned", // TODO: Update status
      statusClass: "status-planned",
      description: "Configuring automated test/build workflows on push, and provisioning core AWS services (EC2, S3, IAM roles)."
    },
    {
      stage: "Stage 03",
      title: "LLM Applications & Retrieval",
      topics: "Claude API and RAG",
      status: "Planned", // TODO: Update status
      statusClass: "status-planned",
      description: "Building contextual search over documents with vector embeddings, chunking strategies, and Anthropic's Claude API tool use."
    },
    {
      stage: "Stage 04",
      title: "Infrastructure as Code & Orchestration",
      topics: "Terraform and Kubernetes Basics",
      status: "Planned", // TODO: Update status
      statusClass: "status-planned",
      description: "Writing declarative infrastructure blueprints with Terraform and managing multi-container deployments in Kubernetes."
    },
    {
      stage: "Stage 05",
      title: "Autonomous Agents & MLOps",
      topics: "AI Agents, Evaluation, and MLOps",
      status: "Planned", // TODO: Update status
      statusClass: "status-planned",
      description: "Architecting multi-step agents with Model Context Protocol (MCP), tracking token costs/latency, and automated LLM regression tests."
    }
  ],

  // Projects - Reorganized around 3 Flagship Projects (Planned / In Progress) + Delivered Web Apps
  projects: [
    // --- 3 FLAGSHIP PROJECTS (With clear Planned / In progress badge & architecture placeholder) ---
    {
      id: "flagship-cicd-cloud",
      category: "devops",
      categoryLabel: "DevOps Flagship",
      title: "Dockerized Web App with Cloud CI/CD Pipeline",
      statusBadge: "Planned / In progress",
      badgeType: "flagship-planned",
      mockupType: "terminal",
      description: "A containerized full-stack service with a complete GitHub Actions CI/CD pipeline, automated linting, container vulnerability scanning, and automated cloud deployment.",
      techStack: ["Docker", "GitHub Actions", "AWS EC2", "Nginx", "Linux"],
      hasArchitecture: true,
      archDescription: "GitHub Push -> CI Test Runner -> Docker Build -> AWS Deploy Hook -> Systemd / Container Up",
      github: "https://github.com/hanania16", // TODO: Add GitHub repo link once started
      liveDemo: "https://github.com/hanania16", // TODO: Add live cloud URL
      isPlaceholder: true,
      stats: "Automated Deployment Pipeline"
    },
    {
      id: "flagship-claude-rag",
      category: "ai",
      categoryLabel: "AI & LLM Flagship",
      title: "Claude API Document Assistant with RAG",
      statusBadge: "Planned / In progress",
      badgeType: "flagship-planned",
      mockupType: "browser",
      description: "An intelligent retrieval-augmented generation assistant powered by Anthropic's Claude API. Ingests documentation and code repositories into vector embeddings for citation-backed Q&A.",
      techStack: ["Python", "Claude API (Anthropic)", "RAG", "ChromaDB / pgvector", "FastAPI"],
      hasArchitecture: true,
      archDescription: "Document Upload -> Chunking -> Embeddings -> Vector DB -> Claude API Messages & Tool Use -> UI Response",
      github: "https://github.com/hanania16", // TODO: Add GitHub repo link once started
      liveDemo: "https://github.com/hanania16", // TODO: Add live app link
      isPlaceholder: true,
      stats: "Anthropic Claude API & Vector Search"
    },
    {
      id: "flagship-mlops-dashboard",
      category: "ai",
      categoryLabel: "MLOps & Infra Flagship",
      title: "AI App Deployment with Telemetry & Cost Tracking",
      statusBadge: "Planned / In progress",
      badgeType: "flagship-planned",
      mockupType: "terminal",
      description: "Production-oriented AI application deployed in Docker containers, equipped with Prometheus and Grafana dashboards tracking token consumption, API latency, and estimated Claude API cost per request.",
      techStack: ["Docker", "Prometheus", "Grafana", "Python", "Claude API", "Redis"],
      hasArchitecture: true,
      archDescription: "Client Request -> FastApi Proxy -> Token Tracker -> Redis Cache -> Claude API -> Prometheus Metrics -> Grafana",
      github: "https://github.com/hanania16", // TODO: Add GitHub repo link once started
      liveDemo: "https://github.com/hanania16", // TODO: Add live dashboard link
      isPlaceholder: true,
      stats: "Token Metrics & Cost Observability"
    },

    // --- Delivered Web & Supporting Projects ---
    {
      id: "proj-ecommerce",
      category: "web",
      categoryLabel: "Web & Full-Stack",
      title: "E-Commerce Platform & Checkout Suite",
      statusBadge: "Completed Prototype",
      badgeType: "flagship-completed",
      mockupType: "browser",
      description: "A modern web store prototype featuring cart flows, state management, and product catalog interactions.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      hasArchitecture: false,
      github: "https://github.com/hanania16",
      liveDemo: "https://github.com/hanania16",
      isPlaceholder: false,
      stats: "Full-Stack Web App"
    },
    {
      id: "proj-cloud-dash",
      category: "web",
      categoryLabel: "Web & Telemetry",
      title: "Cloud Management & Observability Dashboard",
      statusBadge: "Completed Prototype",
      badgeType: "flagship-completed",
      mockupType: "browser",
      description: "Telemetry frontend interface giving engineers immediate visibility into system stats, server health, and resource metrics.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      hasArchitecture: false,
      github: "https://github.com/hanania16",
      liveDemo: "https://github.com/hanania16",
      isPlaceholder: false,
      stats: "Cluster Metrics Interface"
    },
    {
      id: "proj-design-sys",
      category: "web",
      categoryLabel: "Design System",
      title: "Design System & UI Component Library",
      statusBadge: "Completed Kit",
      badgeType: "flagship-completed",
      mockupType: "browser",
      description: "Accessible, modular UI component collection designed in Figma and coded for responsive cross-platform web prototyping.",
      techStack: ["Figma", "HTML5/CSS3", "JavaScript", "Storybook"],
      hasArchitecture: false,
      github: "https://github.com/hanania16",
      liveDemo: "https://github.com/hanania16",
      isPlaceholder: false,
      stats: "Accessible UI Components"
    }
  ],

  // Certifications & Courses (Placeholders marked with TODOs)
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      status: "In Progress / Targeted", // TODO: Update with your certification progress
      statusBadge: "Targeted 2026",
      description: "Fundamentals of AWS cloud architecture, security, compute (EC2), storage (S3), and IAM identity controls.",
      linkText: "Target Certification",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    {
      title: "GitHub Actions: Automated CI/CD Pipelines",
      issuer: "GitHub / Industry Curriculum",
      status: "In Progress", // TODO: Update with course name / status
      statusBadge: "Coursework",
      description: "Writing workflow YAML manifests, caching build dependencies, multi-stage matrix testing, and automated release tags.",
      linkText: "Curriculum Info",
      link: "https://github.com/features/actions"
    },
    {
      title: "Anthropic Claude API & LLM App Development",
      issuer: "Anthropic / DeepLearning.AI",
      status: "Planned", // TODO: Update with actual course enrollment
      statusBadge: "Planned",
      description: "System prompts, Claude 3.5 Sonnet / Haiku tool use, structured JSON output extraction, and context caching.",
      linkText: "Anthropic Documentation",
      link: "https://docs.anthropic.com/"
    }
  ],

  // Value Statements (Honest, factual engineering principles - NO fake quotes)
  valuePillars: [
    {
      title: "Student Mindset & Rapid Learner",
      badge: "Growth Oriented",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
      description: "As a 3rd-year Software Engineering student, I approach every challenge with high curiosity, digging into documentation and building proof-of-concept projects to bridge theory with practical implementation."
    },
    {
      title: "Reproducibility & Automation First",
      badge: "DevOps Philosophy",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      description: "I prioritize clean Dockerfiles, explicit requirements files, automated linting, and Git-driven pipelines so software runs identically everywhere without guesswork."
    },
    {
      title: "Thoughtful AI Engineering",
      badge: "Real-World LLMs",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m10 15 5-3-5-3v6z"></path></svg>`,
      description: "Instead of treating LLMs as magic boxes, I focus on system prompt design, deterministic tool calling, evaluation metrics, token budgets, and grounded RAG citations."
    }
  ],

  experiences: [
    {
      company: "Software Engineering Studies",
      period: "3rd Year Student",
      role: "Undergraduate Software Engineering Student",
      description: "Focusing coursework on Operating Systems, Computer Networks, Database Systems, Software Architecture, and hands-on self-directed labs in DevOps automation and AI application engineering.",
      link: "#"
    },
    {
      company: "Independent Projects & Self-Directed Labs",
      period: "2024 - Present",
      role: "DevOps & AI Engineering Learner",
      description: "Hands-on implementation of containerized applications, GitHub Actions workflows, prompt engineering, Claude API integration prototypes, and full-stack web clients.",
      link: "#projects"
    }
  ]
};

// ========== RENDER FUNCTIONS ==========

// Render Skills with Level Chips ("Learning", "Familiar", "Proficient")
function renderSkills(category = 'core') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const skills = portfolioData.skills[category] || [];

  container.innerHTML = `
    <div class="skills-showcase">
      ${skills.map((skill, index) => {
        const levelClass = skill.level.toLowerCase(); // 'learning', 'familiar', 'proficient'
        return `
          <div class="skill-item reveal" style="transition-delay: ${index * 40}ms">
            <div class="skill-info">
              <div class="skill-brand">
                <span class="skill-logo">
                  ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" loading="lazy" />` : `<span class="skill-fallback-icon">✦</span>`}
                </span>
                <span class="skill-name">${skill.name}</span>
              </div>
              <span class="skill-level-chip chip-${levelClass}">${skill.level}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render Learning Roadmap Timeline
function renderRoadmap() {
  const container = document.getElementById('roadmap-timeline');
  if (!container) return;

  container.innerHTML = portfolioData.roadmap.map((item, index) => `
    <div class="roadmap-card reveal" style="transition-delay: ${index * 80}ms">
      <div class="roadmap-card-header">
        <span class="roadmap-stage-badge">${item.stage}</span>
        <span class="roadmap-status-badge ${item.statusClass}">${item.status}</span>
      </div>
      <h3 class="roadmap-title">${item.title}</h3>
      <div class="roadmap-topics">${item.topics}</div>
      <p class="roadmap-description">${item.description}</p>
    </div>
  `).join('');
}

// Render Certifications & Courses
function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card reveal">
      <div class="cert-header">
        <span class="cert-issuer">${cert.issuer}</span>
        <span class="cert-badge">${cert.statusBadge}</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-description">${cert.description}</p>
      <div class="cert-footer">
        <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link">
          <span>${cert.linkText}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render Projects with Flagship Badges, Architecture diagram placeholders & filters
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    let mockupHTML = '';
    if (p.mockupType === 'terminal') {
      mockupHTML = `
        <div class="mockup mockup-terminal">
          <div class="mockup-header">
            <span class="mockup-dot dot-red"></span>
            <span class="mockup-dot dot-yellow"></span>
            <span class="mockup-dot dot-green"></span>
            <span class="mockup-title">${p.id}</span>
          </div>
          <div class="mockup-body terminal-body">
            <span class="term-line">&gt; docker compose up -d --build</span>
            <span class="term-line text-green">&gt; deployment status: [active]</span>
            <span class="term-line text-cyan">&gt; ${p.stats}</span>
          </div>
        </div>
      `;
    } else {
      mockupHTML = `
        <div class="mockup mockup-browser">
          <div class="mockup-header">
            <span class="mockup-dot dot-red"></span>
            <span class="mockup-dot dot-yellow"></span>
            <span class="mockup-dot dot-green"></span>
            <span class="mockup-address">https://${p.id}.dev</span>
          </div>
          <div class="mockup-body browser-body">
            <div class="browser-placeholder-content">
              <span class="browser-wireframe-icon">⚡</span>
              <span>${p.stats}</span>
            </div>
          </div>
        </div>
      `;
    }

    const archBox = p.hasArchitecture ? `
      <div class="architecture-box">
        <div class="arch-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          Architecture Diagram (Placeholder)
        </div>
        <p class="arch-flow">${p.archDescription}</p>
      </div>
    ` : '';

    return `
      <article class="project-card reveal" data-category="${p.category}">
        <div class="project-preview-wrap">
          ${mockupHTML}
        </div>
        <div class="project-content">
          <div class="project-header-meta">
            <span class="project-category-tag">${p.categoryLabel}</span>
            <span class="status-badge-chip ${p.badgeType}">${p.statusBadge}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          ${archBox}
          <div class="project-tech-stack">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <a href="${p.liveDemo}" class="btn-project btn-demo" target="_blank" rel="noopener noreferrer">
              <span>${p.isPlaceholder ? 'Planned Demo' : 'Live Demo'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="${p.github}" class="btn-project btn-code" target="_blank" rel="noopener noreferrer">
              <span>GitHub Repo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Render Stats (With explicit TODO indicator for unverified stats)
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(st => `
    <div class="stat-card">
      <div class="stat-number">
        <span class="counter" data-target="${st.value}">${st.value}</span>${st.suffix}
      </div>
      <div class="stat-label">${st.label}</div>
    </div>
  `).join('');
}

// Render Process / Workflow
function renderProcess() {
  const container = document.getElementById('process-grid');
  if (!container) return;

  const processItems = [
    {
      step: "01",
      phase: "Architecture & Requirements",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
      description: "Defining container topologies, LLM context strategies, API interfaces, and reproducible test plans."
    },
    {
      step: "02",
      phase: "Build & Prompt Engineering",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      description: "Developing clean backend code, configuring tool use with Claude API, creating vector embeddings, and structuring modular code."
    },
    {
      step: "03",
      phase: "Containerize & Automate",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>`,
      description: "Writing multi-stage Dockerfiles and GitHub Actions workflows for continuous integration, automated tests, and cloud delivery."
    },
    {
      step: "04",
      phase: "Observe & Evaluate",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
      description: "Tracking Prometheus metrics, token usage, API latency, and running automated regression evals for AI prompt accuracy."
    }
  ];

  container.innerHTML = processItems.map(pr => `
    <div class="process-card reveal">
      <div class="process-step-header">
        <span class="process-number">${pr.step}</span>
        <div class="process-icon-wrap">${pr.icon}</div>
      </div>
      <h3 class="process-phase">${pr.phase}</h3>
      <p class="process-description">${pr.description}</p>
    </div>
  `).join('');
}

// Render Why Work With Me (Values instead of fake testimonials)
function renderWhyWorkWithMe() {
  const container = document.getElementById('why-work-with-me-grid');
  if (!container) return;

  container.innerHTML = portfolioData.valuePillars.map(pillar => `
    <div class="value-card reveal">
      <div class="value-header">
        <div class="value-icon">${pillar.icon}</div>
        <span class="value-badge">${pillar.badge}</span>
      </div>
      <h3 class="value-title">${pillar.title}</h3>
      <p class="value-description">${pillar.description}</p>
    </div>
  `).join('');
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = portfolioData.experiences.map(exp => `
    <div class="experience-item reveal">
      <div class="experience-header">
        <h3>${exp.company}</h3>
        <span class="experience-date">${exp.period}</span>
      </div>
      <p class="experience-role">${exp.role}</p>
      <p class="experience-description">${exp.description}</p>
      <a href="${exp.link}" class="experience-link">Learn More &rarr;</a>
    </div>
  `).join('');
}

// ========== TYPING EFFECT ==========
const typingElement = document.querySelector(".typing");
const texts = [
  "DevOps Engineer",
  "AI Engineer (Claude & LLMs)",
  "Software Engineering Student",
  "CI/CD & Cloud Infrastructure Builder"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return;
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 400);
    return;
  }

  setTimeout(typeEffect, isDeleting ? 35 : 75);
}

// ========== THEME TOGGLE (DARK / LIGHT) ==========
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'light') {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('aria-label', 'Switch to light theme');
  }
}

// ========== SCROLL PROGRESS BAR ==========
function setupScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// ========== STATS COUNTER ANIMATION ==========
function setupStatsCounter() {
  const statSection = document.querySelector('.stats-bar');
  if (!statSection) return;

  let animated = false;
  const runCounters = () => {
    const rect = statSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && !animated) {
      animated = true;
      document.querySelectorAll('.counter').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        let count = 0;
        const duration = 1400;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            counter.textContent = isDecimal ? target.toFixed(1) : Math.round(target);
            clearInterval(timer);
          } else {
            counter.textContent = isDecimal ? count.toFixed(1) : Math.floor(count);
          }
        }, stepTime);
      });
    }
  };

  window.addEventListener('scroll', runCounters, { passive: true });
  runCounters();
}

// ========== PROJECT FILTER TABS ==========
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
      setupScrollReveal();
    });
  });
}

// ========== SKILL TABS ==========
function setupSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tabs .tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderSkills(category);
      setupScrollReveal();
    });
  });
}

// ========== TERMINAL INTERACTION SIMULATOR ==========
function setupTerminalSimulator() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalLogs = document.getElementById('terminal-logs');
  if (!terminalInput || !terminalLogs) return;

  const sampleCommands = {
    "help": "Available commands: status, deploy, claude, docker ps, k8s, clear",
    "status": "● DevOps Systems: Ready | AI Models: Active (Claude 3.5 Sonnet) | CI/CD: Automated",
    "deploy": "🚀 Running automated build workflow -> Linting -> Tests -> Docker Image Build -> AWS Deploy Hook -> Success",
    "claude": "🤖 Claude API: Connected | Streaming: Enabled | Tool use: MCP & Retrieval Active",
    "docker ps": "CONTAINER ID   IMAGE                 STATUS         PORTS\n7f82b14c1      ai-rag-service:v1.0   Up 24 hours    0.0.0.0:8000->8000\n91e4a28f0      prometheus:latest     Up 24 hours    0.0.0.0:9090->9090",
    "k8s": "NAMESPACE     NAME                               READY   STATUS    RESTARTS\nproduction    deployment.apps/rag-assistant      2/2     Running   0\nproduction    deployment.apps/metrics-exporter   1/1     Running   0",
    "clear": "CLEAR"
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value.trim().toLowerCase();
      if (!val) return;

      if (val === 'clear') {
        terminalLogs.innerHTML = '';
      } else {
        const response = sampleCommands[val] || `command not found: "${val}". Type 'help' for available commands.`;
        terminalLogs.innerHTML += `
          <div class="terminal-entry">
            <span class="term-prompt">devops@hanania:~$</span> ${val}
          </div>
          <div class="terminal-reply">${response.replace(/\n/g, '<br>')}</div>
        `;
      }
      terminalInput.value = '';
      terminalLogs.scrollTop = terminalLogs.scrollHeight;
    }
  });
}

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("navOverlay");

function openMenu() {
  if (navLinks) navLinks.classList.add("active");
  if (hamburger) hamburger.classList.add("open");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (navLinks) navLinks.classList.remove("active");
  if (hamburger) hamburger.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navLinks && navLinks.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (overlay) overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links li a").forEach(item => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks && navLinks.classList.contains("active")) {
    closeMenu();
  }
});

// ========== SCROLL REVEAL ==========
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight - 60;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();
}

// ========== NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTING ==========
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    let currentId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navAnchorLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ========== BACK TO TOP BUTTON ==========
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========== FORMSPREE CONTACT FORM SUBMISSION ==========
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = contactForm?.querySelector('button[type="submit"]');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const actionUrl = contactForm.getAttribute('action');
    const formData = new FormData(contactForm);

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;
    }

    // Check if Formspree ID is still the placeholder
    if (actionUrl.includes('YOUR_FORMSPREE_ID')) {
      if (formFeedback) {
        formFeedback.innerHTML = `
          <div class="feedback-success">
            ✔ Message simulation successful! <em>(Note: Replace <code>YOUR_FORMSPREE_ID</code> with your active Formspree Form ID in index.html to receive messages directly to your inbox).</em>
          </div>
        `;
        formFeedback.classList.add('active');
      }
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
      }
      return;
    }

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        if (formFeedback) {
          formFeedback.innerHTML = `
            <div class="feedback-success">
              ✔ Thank you! Your message has been sent successfully. I will get back to you shortly.
            </div>
          `;
          formFeedback.classList.add('active');
        }
        contactForm.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (err) {
      if (formFeedback) {
        formFeedback.innerHTML = `
          <div class="feedback-error">
            ✖ Oops! There was a problem submitting your message. Please reach out directly to <a href="mailto:hananiyameseret@gmail.com">hananiyameseret@gmail.com</a>.
          </div>
        `;
        formFeedback.classList.add('active');
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
      }
    }
  });
}

// ========== CURSOR GLOW EFFECT (Desktop Only) ==========
function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = -100;
  let mouseY = -100;
  let currentX = -100;
  let currentY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX - 160}px, ${currentY - 160}px, 0)`;
    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic components
  renderStats();
  renderSkills('core');
  renderRoadmap();
  renderCertifications();
  renderExperience();
  renderProjects('all');
  renderProcess();
  renderWhyWorkWithMe();

  // Setup interactive handlers
  setupThemeToggle();
  setupScrollProgress();
  setupStatsCounter();
  setupProjectFilters();
  setupSkillTabs();
  setupTerminalSimulator();
  setupScrollReveal();
  setupNavbarScroll();
  setupBackToTop();
  setupContactForm();
  setupCursorGlow();

  // Hero button smooth scroll
  document.querySelector('.btn-view-projects')?.addEventListener('click', () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.btn-contact-me')?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Start typing effect
  if (typingElement) {
    typeEffect();
  }
});
