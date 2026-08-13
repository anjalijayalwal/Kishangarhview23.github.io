// =============================
// GALLERY FILTER
// =============================

function filterGallery(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function(item) {

        if (category === "all") {

            item.style.display = "block";

        } else if (item.classList.contains(category)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("show");
    }

}
