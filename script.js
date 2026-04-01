// Typing effect
const typingElement = document.querySelector(".typing");
const text = "I'm a Software Engineer.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40); // recursive call
  }
}

// Call the function once to start typing
typeEffect();


// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // show/hide menu
  hamburger.classList.toggle("open");  // optional: animate hamburger
});