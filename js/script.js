// ========== INTERACTIVE JS ==========

// Typing effect with multiple texts
const typingElement = document.querySelector(".typing");
const texts = [
  "I'm a Software Engineer. 💻",
  "I'm a UI/UX Designer. 🎨",
  "I'm a Creative Problem Solver. ⚡"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

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
  
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

// Start typing effect when page loads
if (typingElement) {
  typeEffect();
}

// Hamburger menu with enhanced animations
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

// Toggle menu on hamburger click
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

// Close menu when clicking on overlay
if (overlay) {
  overlay.addEventListener("click", closeMenu);
}

// Close menu when clicking on a link
const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(item => {
  item.addEventListener("click", closeMenu);
});

// Close menu on escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks && navLinks.classList.contains("active")) {
    closeMenu();
  }
});

// Button interactions
document.addEventListener('DOMContentLoaded', function() {
  // View Projects button
  const viewProjectsBtn = document.querySelector('.btn-view-projects');
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', function() {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('View Projects clicked!');
      }
    });
  }
  
  // Contact Me button
  const contactMeBtn = document.querySelector('.btn-contact-me');
  if (contactMeBtn) {
    contactMeBtn.addEventListener('click', function() {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Contact Me clicked!');
      }
    });
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});