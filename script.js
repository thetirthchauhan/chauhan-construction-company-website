// Toggle mobile menu
const hamburger = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    navbarCollapse.classList.toggle("show"); // Toggle the menu visibility
}

document.addEventListener("click", (e) => {
    const isClickInsideNavbar = navbarCollapse.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideNavbar && !isClickOnHamburger) {
        navbarCollapse.classList.remove("show");
    }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show"); // Close the menu
    });
});

console.log("Script loaded!");


hamburger.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    console.log("Hamburger clicked!"); // Debugging statement
    event.preventDefault();
    event.stopPropagation();
    navbarCollapse.classList.toggle("show");
}