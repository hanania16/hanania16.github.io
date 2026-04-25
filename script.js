// ========== PORTFOLIO DATA ==========
const portfolioData = {
  // Skills Data
  skills: {
    technical: [
      { icon: "💻", name: "JavaScript/TypeScript", level: 90, years: "4 years", description: "Expert in modern ES6+, React, Node.js" },
      { icon: "⚛️", name: "React.js", level: 88, years: "3 years", description: "Hooks, Redux, Next.js, Context API" },
      { icon: "🐍", name: "Python", level: 85, years: "3 years", description: "Django, Flask, Data Analysis" },
      { icon: "🚀", name: "Node.js", level: 82, years: "2 years", description: "Express, REST APIs, Authentication" },
      { icon: "🎨", name: "HTML5/CSS3", level: 92, years: "4 years", description: "Flexbox, Grid, Animations, Sass" },
      { icon: "🗄️", name: "MongoDB/PostgreSQL", level: 78, years: "2 years", description: "Database design, Queries, Optimization" },
      { icon: "📱", name: "React Native", level: 75, years: "1.5 years", description: "Cross-platform mobile apps" },
      { icon: "🔧", name: "Git & GitHub", level: 85, years: "3 years", description: "Version control, Collaboration, CI/CD" }
    ],
    design: [
      { icon: "🎨", name: "Figma", level: 90, years: "3 years", description: "Prototyping, Components, Design systems" },
      { icon: "🎭", name: "Adobe XD", level: 85, years: "2 years", description: "Wireframing, Interactive prototypes" },
      { icon: "🖌️", name: "Photoshop", level: 75, years: "2 years", description: "Image editing, Graphics design" },
      { icon: "✏️", name: "Illustrator", level: 70, years: "1.5 years", description: "Vector graphics, Icons, Logos" },
      { icon: "🎬", name: "Premiere Pro", level: 65, years: "1 year", description: "Video editing, Motion graphics" },
      { icon: "📊", name: "Miro", level: 80, years: "2 years", description: "Whiteboarding, User flows, Brainstorming" }
    ],
    soft: [
      { icon: "💬", name: "Communication", level: 88, description: "Clear documentation, Team collaboration, Client presentations" },
      { icon: "🧩", name: "Problem Solving", level: 90, description: "Analytical thinking, Creative solutions, Debugging" },
      { icon: "⏰", name: "Time Management", level: 85, description: "Meeting deadlines, Prioritization, Agile methodology" },
      { icon: "🤝", name: "Teamwork", level: 90, description: "Cross-functional collaboration, Code reviews, Mentoring" },
      { icon: "🎯", name: "Leadership", level: 82, description: "Project management, Decision making, Team motivation" },
      { icon: "🔄", name: "Adaptability", level: 88, description: "Learning new tech, Flexible mindset, Embracing change" }
    ]
  },
  
  // Work Experience
  experiences: [
    { company: "CiB on the Mobile", period: "2022 - Present", role: "Senior UX Designer", description: "Leading user experience design for mobile apps. Creating intuitive interfaces that enhance user engagement and satisfaction.", link: "#" },
    { company: "Tech Solutions Inc.", period: "2020 - 2022", role: "UX Designer", description: "User experience design for web and mobile platforms. Collaborated with cross-functional teams to deliver user-centered design solutions.", link: "#" },
    { company: "Digital Creative Agency", period: "2018 - 2020", role: "Junior UX Designer", description: "Assisted in user research and usability testing. Created wireframes and prototypes for client projects.", link: "#" }
  ],
  
  // Featured Project
  featuredProject: {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with seamless payment integration, user authentication, and real-time inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    github: "#"
  },
  
  // Contact Info
  contact: {
    email: "hanania.meseret@example.com",
    phone: "+251 912 345 678",
    location: "Addis Ababa, Ethiopia"
  }
};

// ========== RENDER FUNCTIONS ==========

// Render Skills
function renderSkills(category = 'technical') {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  const skills = portfolioData.skills[category];
  
  container.innerHTML = `
    <div class="skills-grid">
      ${skills.map(skill => `
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-info">
              <div class="skill-name">${skill.name}</div>
              ${skill.years ? `<div class="skill-years">📅 ${skill.years}</div>` : ''}
            </div>
          </div>
          <div class="skill-progress-container">
            <div class="skill-progress-label">
              <span>Proficiency</span>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-progress-bar">
              <div class="skill-progress-fill" data-level="${skill.level}"></div>
            </div>
          </div>
          <div class="skill-description">${skill.description}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.skill-progress-fill').forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level + '%';
    });
  }, 100);
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;
  
  container.innerHTML = portfolioData.experiences.map(exp => `
    <div class="experience-item">
      <div class="experience-header">
        <h3>${exp.company}</h3>
        <span class="experience-date">${exp.period}</span>
      </div>
      <p class="experience-role">${exp.role}</p>
      <p class="experience-description">${exp.description}</p>
      <a href="${exp.link}" class="experience-link">Learn More →</a>
    </div>
  `).join('');
}

// Render Featured Project
function renderFeaturedProject() {
  const container = document.getElementById('featured-project');
  if (!container) return;
  
  const project = portfolioData.featuredProject;
  container.innerHTML = `
    <div class="project-content">
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech-stack">
        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-actions">
        <a href="${project.liveDemo}" class="btn-live-demo">Live Demo →</a>
        <a href="${project.github}" class="btn-github">GitHub →</a>
      </div>
    </div>
    <div class="project-image-placeholder">
      <div class="placeholder-box">Project Preview</div>
    </div>
  `;
}

// Render Contact Info
function renderContact() {
  const container = document.getElementById('contact-info');
  if (!container) return;
  
  container.innerHTML = `
    <div class="contact-item">
      <div class="contact-icon">📧</div>
      <div><h3>Email</h3><p>${portfolioData.contact.email}</p></div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">📱</div>
      <div><h3>Phone</h3><p>${portfolioData.contact.phone}</p></div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">📍</div>
      <div><h3>Location</h3><p>${portfolioData.contact.location}</p></div>
    </div>
    <div class="social-links">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Behance</a>
    </div>
  `;
}

// ========== TYPING EFFECT ==========
const typingElement = document.querySelector(".typing");
const texts = ["I'm a Software Engineer. 💻", "I'm a UI/UX Designer. 🎨", "I'm a Creative Problem Solver. ⚡"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  if (!typingElement) return;
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }
  
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
    return;
  }
  
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
if (typingElement) typeEffect();

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("navOverlay");

function openMenu() {
  navLinks.classList.add("active");
  hamburger.classList.add("open");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  navLinks.classList.remove("active");
  hamburger.classList.remove("open");
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
document.addEventListener("keydown", (e) => e.key === "Escape" && navLinks.classList.contains("active") && closeMenu());

// ========== TAB SWITCHING ==========
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');
    renderSkills(category);
  });
});

// ========== BUTTON HANDLERS ==========
document.addEventListener('DOMContentLoaded', () => {
  renderSkills('technical');
  renderExperience();
  renderFeaturedProject();
  renderContact();
  
  document.querySelector('.btn-view-projects')?.addEventListener('click', () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('.btn-contact-me')?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});