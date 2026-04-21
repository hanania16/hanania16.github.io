// ========== RENDER PORTFOLIO DYNAMICALLY ==========

// Render Hero Section
function renderHero() {
  const heroName = document.querySelector('.hero-text h3 span');
  if (heroName) heroName.innerHTML = portfolioData.personal.name;
  
  const typingElement = document.querySelector(".typing");
  if (typingElement) typingElement.innerHTML = `I'm a ${portfolioData.personal.title}.`;
  
  const description = document.querySelector('.bottom-text .description');
  if (description) description.innerHTML = portfolioData.personal.bio;
  
  const profileImg = document.querySelector('.hero-img img');
  if (profileImg) profileImg.src = portfolioData.personal.profileImage;
}

// Render Skills Section
function renderSkills() {
  const skillsGrid = document.querySelector('.skills-grid');
  if (!skillsGrid) return;
  
  skillsGrid.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>
    </div>
  `).join('');
}

// Render Work Experience
function renderExperience() {
  const experienceList = document.querySelector('.experience-list');
  if (!experienceList) return;
  
  experienceList.innerHTML = portfolioData.experiences.map(exp => `
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
  const featuredProject = document.querySelector('.featured-project');
  if (!featuredProject) return;
  
  const project = portfolioData.featuredProject;
  featuredProject.innerHTML = `
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
      <div class="placeholder-box">
        <span>${project.imagePlaceholder}</span>
      </div>
    </div>
  `;
}

// Render All Projects
function renderAllProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = portfolioData.allProjects.map(project => `
    <div class="project-card">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.liveDemo}" class="project-link">Live Demo →</a>
          <a href="${project.github}" class="project-link">GitHub →</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render CTA Text
function renderCTA() {
  const ctaText = document.querySelector('.cta-text');
  if (ctaText) {
    ctaText.innerHTML = portfolioData.ctaText;
  }
}

// Render Contact Info
function renderContact() {
  const contactInfo = document.querySelector('.contact-info');
  if (!contactInfo) return;
  
  contactInfo.innerHTML = `
    <div class="contact-item">
      <div class="contact-icon">📧</div>
      <div>
        <h3>Email</h3>
        <p>${portfolioData.personal.email}</p>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">📱</div>
      <div>
        <h3>Phone</h3>
        <p>${portfolioData.personal.phone}</p>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">📍</div>
      <div>
        <h3>Location</h3>
        <p>${portfolioData.personal.location}</p>
      </div>
    </div>
    <div class="social-links">
      <a href="${portfolioData.socialLinks.github}" target="_blank">GitHub</a>
      <a href="${portfolioData.socialLinks.linkedin}" target="_blank">LinkedIn</a>
      <a href="${portfolioData.socialLinks.twitter}" target="_blank">Twitter</a>
      <a href="${portfolioData.socialLinks.behance}" target="_blank">Behance</a>
    </div>
  `;
}

// Initialize all rendering
function initPortfolio() {
  renderHero();
  renderSkills();
  renderExperience();
  renderFeaturedProject();
  renderAllProjects();
  renderCTA();
  renderContact();
}

// Call when page loads
document.addEventListener('DOMContentLoaded', initPortfolio);