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

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu when clicking on a link (optional but good UX)
const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});