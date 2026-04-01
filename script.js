const text = "Currently, I'm a Software Engineer,";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

typeEffect();