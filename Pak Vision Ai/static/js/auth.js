const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const login = document.getElementById("loginForm");
const register = document.getElementById("registerForm");


// ===============================
// LOGIN / REGISTER
// ===============================

register.style.display = "none";

loginBtn.onclick = () => {

    login.style.display = "block";
    register.style.display = "none";

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");

};


registerBtn.onclick = () => {

    login.style.display = "none";
    register.style.display = "block";

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");

};


// ===============================
// PASSWORD SHOW / HIDE
// ===============================

function togglePassword(id, icon) {

    const input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}


// ===============================
// DARK / LIGHT THEME
// ===============================

const themeToggle = document.getElementById("themeToggle");


// Page load par saved theme check karo
const savedTheme = localStorage.getItem("pakvision-theme");

if (savedTheme === "light") {

    document.documentElement.classList.add("light-mode");

    if (themeToggle) {
        themeToggle.checked = true;
    }

}


// Toggle click
if (themeToggle) {

    themeToggle.addEventListener("change", function () {

        if (this.checked) {

            // LIGHT MODE
            document.documentElement.classList.add("light-mode");

            localStorage.setItem("pakvision-theme", "light");

        } else {

            // DARK MODE
            document.documentElement.classList.remove("light-mode");

            localStorage.setItem("pakvision-theme", "dark");

        }

    });

}