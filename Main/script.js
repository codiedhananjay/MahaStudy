document.addEventListener("DOMContentLoaded", function () {

    /* =====================
       GLOBAL DARK MODE
    ===================== */

    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme on page load
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeToggle) themeToggle.checked = true;
    }

    // Toggle theme and save preference
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            if (themeToggle.checked) {
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        });
    }

    /* =====================
       MOBILE MENU TOGGLE
    ===================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.style.display =
                navLinks.style.display === "flex" ? "none" : "flex";
        });
    }

    /* =========================
       FINAL FORM VALIDATION
    ========================== */

    // Helper functions
    function isValidMobile(mobile) {
        return /^[0-9]{10}$/.test(mobile);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 6 && !password.includes(" ");
    }

    /* ---------- REGISTER FORM ---------- */
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const textInputs = registerForm.querySelectorAll('input[type="text"]');
            const fullName = textInputs[0].value.trim();
            const parentName = textInputs[1].value.trim();

            const mobile = registerForm.querySelector('input[type="tel"]').value.trim();
            const password = registerForm.querySelector('input[type="password"]').value.trim();
            const selects = registerForm.querySelectorAll("select");

            // Empty check
            if (!fullName || !parentName || !mobile || !password) {
                alert("Please fill all required fields");
                return;
            }

            // Dropdown check
            for (let select of selects) {
                if (select.value === "") {
                    alert("Please select all dropdown options");
                    return;
                }
            }

            // Mobile validation
            if (!isValidMobile(mobile)) {
                alert("Mobile number must be exactly 10 digits (numbers only)");
                return;
            }

            // Password validation
            if (!isValidPassword(password)) {
                alert("Password must be at least 6 characters and contain no spaces");
                return;
            }

            alert("Registration successful (demo)");
            registerForm.reset();
        });
    }

    /* ---------- LOGIN FORM ---------- */
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const userInput = loginForm.querySelector('input[type="text"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value.trim();

            if (!userInput || !password) {
                alert("Please fill all fields");
                return;
            }

            if (!isValidPassword(password)) {
                alert("Password must be at least 6 characters");
                return;
            }

            // Mobile OR Email check
            if (/^[0-9]+$/.test(userInput)) {
                if (!isValidMobile(userInput)) {
                    alert("Mobile number must be exactly 10 digits");
                    return;
                }
            } else {
                if (!isValidEmail(userInput)) {
                    alert("Please enter a valid email address");
                    return;
                }
            }

            alert("Login successful (demo)");
            loginForm.reset();
        });
    }

});
