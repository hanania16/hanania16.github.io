// Typing effect
const typingElement = document.querySelector(".typing");
const text = "I'm a Software Engineer.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

typeEffect();

// Hamburger menu with enhanced animations
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("navOverlay");

function openMenu() {
  navLinks.classList.add("active");
  hamburger.classList.add("open");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
}

function closeMenu() {
  navLinks.classList.remove("active");
  hamburger.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling
}

// Toggle menu on hamburger click
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  if (navLinks.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

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
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    closeMenu();
  }
});