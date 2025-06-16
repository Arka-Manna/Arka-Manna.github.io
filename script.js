// ----------------------------
// Typewriter Effect
// ----------------------------
const dynamicText = document.getElementById('dynamic-text');
const roles = ["n Innovator", " Robotics Engineer", "n Embedded Dev", " RC Pilot"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;    // milliseconds per character
const pauseTime = 1500;     // pause time at full text

function type() {
  const fullText = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
    dynamicText.textContent = fullText.substring(0, charIndex);
  } else {
    charIndex++;
    dynamicText.textContent = fullText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => isDeleting = true, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const timeout = isDeleting ? typingSpeed / 2 : typingSpeed;
  setTimeout(type, timeout);
}

document.addEventListener('DOMContentLoaded', type);

// ----------------------------
// Slider Functionality
// ----------------------------
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
