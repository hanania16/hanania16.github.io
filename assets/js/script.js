/**
 * Hanania Meseret - Portfolio Website
 * Simplified to 4 Focused Sections: About, Skills, Projects, Contact
 * 3rd-year Software Engineering Student (DevOps & AI Engineering)
 */

// ========== PORTFOLIO DATA ==========
const portfolioData = {
  // 4 Core Technical Skill Categories with honest level chips
  // Levels: "Learning", "Familiar", "Proficient"
  skills: [
    {
      category: "Core Foundation",
      description: "Fundamental languages, systems & data management",
      items: [
        // TODO: Update your level ("Learning", "Familiar", "Proficient") for Core skills
        { name: "Python", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript / TypeScript", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Linux & Bash", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "Git / GitHub", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "SQL (PostgreSQL)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      category: "DevOps & Cloud",
      description: "Automated pipelines, containers & cloud infrastructure",
      items: [
        // TODO: Update your level for DevOps skills
        { name: "Docker", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "GitHub Actions (CI/CD)", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
        { name: "AWS Basics", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Terraform", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Kubernetes Basics", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
      ]
    },
    {
      category: "AI Engineering",
      description: "Building applications on LLMs, retrieval & tool workflows",
      items: [
        // TODO: Update your level for AI Engineering skills
        { name: "Prompt Engineering", level: "Familiar", icon: null },
        { name: "Claude / Anthropic API", level: "Learning", icon: null },
        { name: "RAG (Embeddings / Vector DB)", level: "Learning", icon: null },
        { name: "AI Agents & MCP", level: "Learning", icon: null }
      ]
    },
    {
      category: "Web & Mobile",
      description: "Supporting client layers for prototyping applications",
      items: [
        // TODO: Update your level for Web & Mobile skills
        { name: "React / Next.js", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", level: "Familiar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Flutter", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React Native", level: "Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ]
    }
  ],

  // Real Projects
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "A full-stack web store prototype featuring cart flows, state management, product catalogs, and checkout interactions.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/hanania16", // TODO: Replace with exact repository link
      liveDemo: null // Hidden when null
    },
    {
      id: "cloud-dashboard",
      title: "Cloud Management & Observability Dashboard",
      description: "An intuitive monitoring dashboard interface giving engineers immediate visibility into system stats, server metrics, and container telemetry.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/hanania16", // TODO: Replace with exact repository link
      liveDemo: null // Hidden when null
    },
    {
      id: "design-system",
      title: "Design System & UI Component Kit",
      description: "A modular, accessible UI component kit designed in Figma and coded for rapid and consistent responsive prototype development.",
      techStack: ["Figma", "HTML5/CSS3", "JavaScript", "Storybook"],
      github: "https://github.com/hanania16", // TODO: Replace with exact repository link
      liveDemo: null // Hidden when null
    }
  ]
};

// ========== RENDER FUNCTIONS ==========

// Render Skills (4 Clean Groups with Level Chips)
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map((group, gIdx) => `
    <div class="skill-category-card reveal" style="transition-delay: ${gIdx * 60}ms">
      <div class="skill-cat-header">
        <h3 class="skill-cat-title">${group.category}</h3>
        <p class="skill-cat-desc">${group.description}</p>
      </div>
      <div class="skill-chips-list">
        ${group.items.map(skill => {
          const levelClass = skill.level.toLowerCase(); // 'learning', 'familiar', 'proficient'
          return `
            <div class="skill-chip-item">
              <div class="skill-brand">
                <span class="skill-logo">
                  ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" loading="lazy" />` : `<span class="skill-fallback-icon">✦</span>`}
                </span>
                <span class="skill-name">${skill.name}</span>
              </div>
              <span class="skill-level-chip chip-${levelClass}">${skill.level}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// Render Projects (Clean Card Grid with optional live demo & repo links)
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((p, pIdx) => {
    const liveDemoBtn = p.liveDemo ? `
      <a href="${p.liveDemo}" class="btn-project btn-demo" target="_blank" rel="noopener noreferrer">
        <span>Live Demo</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    ` : '';

    const githubBtn = p.github ? `
      <a href="${p.github}" class="btn-project btn-code" target="_blank" rel="noopener noreferrer">
        <span>GitHub</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      </a>
    ` : '';

    return `
      <article class="project-card reveal" style="transition-delay: ${pIdx * 60}ms">
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tech-stack">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            ${githubBtn}
            ${liveDemoBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ========== TYPING EFFECT ==========
const typingElement = document.querySelector(".typing");
const texts = [
  "DevOps Engineer",
  "AI Engineer (Claude & LLMs)",
  "Software Engineering Student"
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

// ========== HAMBURGER MENU & MOBILE NAVIGATION ==========
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("navOverlay");

  function openMenu() {
    navLinks.classList.add("active");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.contains("active") ? closeMenu() : openMenu();
    });
  }

  if (overlay) overlay.addEventListener("click", closeMenu);
  document.querySelectorAll(".nav-links li a").forEach(item => item.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
    }
  });
}

// ========== SCROLL REVEAL (Simple & Lightweight) ==========
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// ========== NAVBAR ACTIVE SECTION HIGHLIGHT & SCROLL BLUR ==========
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar backdrop blur
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== CONTACT FORM (FORMSPREE AJAX) ==========
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('YOUR_FORMSPREE_ID')) {
      status.className = 'form-status info';
      status.innerHTML = `Message received in demo mode! (Configure Formspree ID in <code>index.html</code> to receive emails directly).`;
      form.reset();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.className = 'form-status success';
        status.textContent = 'Thank you! Your message has been sent successfully.';
        form.reset();
      } else {
        const data = await response.json();
        status.className = 'form-status error';
        status.textContent = data.errors ? data.errors.map(err => err.message).join(', ') : 'Oops! Something went wrong.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Network error. Please try again or reach out via direct email.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      `;
    }
  });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  setupThemeToggle();
  setupMobileMenu();
  setupScrollReveal();
  setupNavbarScroll();
  setupBackToTop();
  setupContactForm();

  // Smooth scroll buttons in hero
  document.querySelector('.btn-view-projects')?.addEventListener('click', () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.btn-contact-me')?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Start typing rotation
  if (typingElement) {
    typeEffect();
  }
});
