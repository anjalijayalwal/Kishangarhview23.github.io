/* =====================================
   KISHANGARH - THE MARBLE CITY
   script.js
===================================== */


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("show");
    }
}


/* Close mobile menu when a link is clicked */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            const nav = document.getElementById("navMenu");

            if (nav) {
                nav.classList.remove("show");
            }

        });
    });

});


/* =====================================
   GALLERY FILTER
===================================== */

function filterGallery(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function (item) {

        if (category === "all") {

            item.style.display = "block";

        } else {

            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        }

    });

}


/* =====================================
   GALLERY BUTTON ACTIVE STATE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".gallery-filter button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            buttons.forEach(function (btn) {
                btn.classList.remove("active-filter");
            });

            this.classList.add("active-filter");

        });

    });

});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".highlight-card, .place-card, .food-card, .festival-card, .gallery-item, .marble-steps > div"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });

});


/* =====================================
   IMAGE ERROR HANDLING
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

            const parent = this.parentElement;

            if (parent) {
                parent.style.background = "#ead8ca";
            }

        });

    });

});


/* =====================================
   SMOOTH PAGE TOP
===================================== */

window.addEventListener("load", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================
   CURRENT YEAR
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

});
