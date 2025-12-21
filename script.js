document.addEventListener("DOMContentLoaded", function () {

    /* Dark Mode Toggle */
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark", themeToggle.checked);
    });

    /* Mobile Menu Toggle */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.style.display =
            navLinks.style.display === "flex" ? "none" : "flex";
    });

});
