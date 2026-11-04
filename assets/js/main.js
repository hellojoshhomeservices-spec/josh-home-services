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

/* =========================================================
   Automatic Active Navigation Highlighter
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".site-nav a, .mobile-menu a");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        if (currentPath.startsWith("/services") && href.includes("/services")) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        } else if (currentPath.startsWith("/areas") && href.includes("/areas")) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        } else if (currentPath.startsWith("/guides") && href.includes("/guides")) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        }
    });
});
