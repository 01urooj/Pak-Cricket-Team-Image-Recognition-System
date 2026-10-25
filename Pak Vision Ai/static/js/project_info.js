// ==========================================
// PakVision AI - Project Info JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // Fade-in animation for sections
    // ------------------------------------------

    const sections = document.querySelectorAll(
        ".info-card, .feature-card, .tech-card, .project-header"
    );

    sections.forEach((section, index) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";

        setTimeout(() => {

            section.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }, index * 100);

    });


    // ------------------------------------------
    // Feature cards hover effect
    // ------------------------------------------

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    // ------------------------------------------
    // Technology cards hover effect
    // ------------------------------------------

    const techCards = document.querySelectorAll(".tech-card");

    techCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-5px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });


    // ------------------------------------------
    // Back to dashboard button
    // ------------------------------------------

    const backButton = document.querySelector(".back");

    if (backButton) {

        backButton.addEventListener("click", () => {

            document.body.style.opacity = "0";

            document.body.style.transition = "opacity 0.3s ease";

        });

    }


    // ------------------------------------------
    // Current year
    // ------------------------------------------

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});