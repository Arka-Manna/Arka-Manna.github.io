// =========================================================
// TYPEWRITER EFFECT
// =========================================================

const dynamicText = document.getElementById("dynamic-text");

const roles = [
  " Innovator",
  " Robotics Engineer",
  " Embedded Developer",
  " RC Pilot"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const pauseTime = 1500;


function type() {

  // Stop if this page doesn't have
  // the typewriter element
  if (!dynamicText) return;

  const fullText = roles[roleIndex];


  // -----------------------------------------
  // Typing
  // -----------------------------------------

  if (!isDeleting) {

    charIndex++;

    dynamicText.textContent =
      fullText.substring(0, charIndex);

  }


  // -----------------------------------------
  // Deleting
  // -----------------------------------------

  else {

    charIndex--;

    dynamicText.textContent =
      fullText.substring(0, charIndex);

  }


  // -----------------------------------------
  // Finished typing
  // -----------------------------------------

  if (
    !isDeleting &&
    charIndex === fullText.length
  ) {

    setTimeout(() => {

      isDeleting = true;

    }, pauseTime);

  }


  // -----------------------------------------
  // Finished deleting
  // -----------------------------------------

  else if (
    isDeleting &&
    charIndex === 0
  ) {

    isDeleting = false;

    roleIndex =
      (roleIndex + 1) % roles.length;

  }


  // -----------------------------------------
  // Typing speed
  // -----------------------------------------

  const timeout =
    isDeleting
      ? typingSpeed / 2
      : typingSpeed;


  setTimeout(type, timeout);

}


// Start typewriter when page loads

document.addEventListener(
  "DOMContentLoaded",
  type
);