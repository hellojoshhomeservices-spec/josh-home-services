"use strict";

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("js");

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileLinks = document.querySelectorAll("#mobile-menu a");

    if (!menuToggle || !mobileMenu) {
        return;
    }

    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.classList.remove("is-open");

        mobileMenu.classList.remove("is-open");

        window.setTimeout(() => {
            if (!mobileMenu.classList.contains("is-open")) {
                mobileMenu.hidden = true;
            }
        }, 220);
    };

    const openMenu = () => {
        mobileMenu.hidden = false;

        requestAnimationFrame(() => {
            mobileMenu.classList.add("is-open");
        });

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        menuToggle.classList.add("is-open");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !mobileMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1200) {
            closeMenu();
        }
    });
});
