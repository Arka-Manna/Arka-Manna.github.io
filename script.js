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


/* =========================================
   SUBTLE MOUSE PARALLAX
========================================= */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroImage = document.querySelector(".hero-image");

if (hero) {

    hero.addEventListener("mousemove", (e) => {

        const rect = hero.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - 0.5;

        const y =
            (e.clientY - rect.top) / rect.height - 0.5;


        /* Move text slightly */

        if (heroContent) {

            heroContent.style.transform =
                `translate3d(
                    ${x * -6}px,
                    ${y * -4}px,
                    0
                )`;

        }


        /* Move image slightly more */

        if (heroImage) {

            heroImage.style.transform =
                `translate3d(
                    ${x * 14}px,
                    ${y * 10}px,
                    0
                )
                rotateY(${x * 2}deg)
                rotateX(${y * -2}deg)`;

        }


        /* Cursor glow position */

        hero.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`
        );

        hero.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`
        );

    });


    hero.addEventListener("mouseleave", () => {

        if (heroContent) {

            heroContent.style.transform =
                "translate3d(0,0,0)";

        }

        if (heroImage) {

            heroImage.style.transform =
                "translate3d(0,0,0) rotateY(0) rotateX(0)";

        }

    });

}
