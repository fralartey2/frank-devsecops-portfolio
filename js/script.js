/* =========================================================
   SPRINT 3 — TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typing-text");

const titles = [
    "DevSecOps Engineer",
    "Cloud Engineer",
    "AWS Engineer",
    "Kubernetes Engineer"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentTitle = titles[titleIndex];


    /* =========================
       TYPING
    ========================= */

    if (!deleting) {

        typingText.textContent =
            currentTitle.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        /* Finished typing */

        if (characterIndex === currentTitle.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    }


    /* =========================
       DELETING
    ========================= */

    else {

        typingText.textContent =
            currentTitle.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        /* Finished deleting */

        if (characterIndex === 0) {

            deleting = false;

            titleIndex =
                (titleIndex + 1) % titles.length;
        }
    }


    /* Typing speed */

    const speed =
        deleting
            ? 50
            : 90;


    setTimeout(
        typeEffect,
        speed
    );
}


/* =========================================================
   START ANIMATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        typeEffect();

    }
);