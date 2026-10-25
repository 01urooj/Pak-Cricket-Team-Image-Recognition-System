// ==========================================
// PAKVISION AI - GLOBAL THEME
// ==========================================

(function () {

    // Saved theme
    const savedTheme =
        localStorage.getItem("pakvisionTheme") || "dark";

    // Apply saved theme immediately
    if (savedTheme === "light") {

        document.documentElement.classList.add("light-mode");

    } else {

        document.documentElement.classList.remove("light-mode");

    }

})();