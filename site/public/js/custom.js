// ===== GET CURRENT YEAR =====
function getYear() {
    const yearElement = document.querySelector("#displayYear");

    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = currentYear;
    }
}

// Изчакваме DOM да е зареден
document.addEventListener("DOMContentLoaded", getYear);


// ===== NAV MENU =====
function openNav() {

    const nav = document.getElementById("myNav");
    const menuBtn = document.querySelector(".custom_menu-btn");

    if (nav) {
        nav.classList.toggle("menu_width");
    }

    if (menuBtn) {
        menuBtn.classList.toggle("menu_btn-style");
    }
}