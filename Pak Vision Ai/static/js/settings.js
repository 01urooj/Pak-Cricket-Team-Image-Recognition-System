// ==========================================
// SETTINGS NAVIGATION
// ==========================================

function showSection(sectionId, button) {

    const sections = document.querySelectorAll(".settings-section");
    const buttons = document.querySelectorAll(".setting-nav");
    const settingsContent = document.getElementById("settingsContent");

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Remove active from all buttons
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    // Selected button
    if (button) {
        button.classList.add("active");
    }

    // Show the right-side content box
    if (settingsContent) {
        settingsContent.classList.add("active");
    }
}


// ==========================================
// APPLY THEME
// ==========================================

function applyTheme() {

    const theme =
        localStorage.getItem("pakvisionTheme") || "dark";

    if (theme === "light") {

        document.documentElement.classList.add("light-mode");

    } else {

        document.documentElement.classList.remove("light-mode");
    }
}


// ==========================================
// DARK / LIGHT MODE
// ==========================================

function toggleDarkMode() {

    const darkMode =
        document.getElementById("darkMode");

    if (!darkMode) return;

    if (darkMode.checked) {

        // Dark Mode
        localStorage.setItem(
            "pakvisionTheme",
            "dark"
        );

        document.documentElement.classList.remove(
            "light-mode"
        );

    } else {

        // Light Mode
        localStorage.setItem(
            "pakvisionTheme",
            "light"
        );

        document.documentElement.classList.add(
            "light-mode"
        );
    }
}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Apply saved theme
    applyTheme();

    // Get settings content
    const settingsContent =
        document.getElementById("settingsContent");

    // IMPORTANT:
    // Hide right-side content when page first opens
    if (settingsContent) {
        settingsContent.classList.remove("active");
    }

    // Dark mode toggle
    const darkMode =
        document.getElementById("darkMode");

    if (darkMode) {

        const theme =
            localStorage.getItem("pakvisionTheme") || "dark";

        darkMode.checked =
            theme === "dark";
    }

});


// ==========================================
// SCAN NOTIFICATIONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const notificationToggle =
        document.getElementById("scanNotifications");

    if (!notificationToggle) return;

    // Load saved setting
    const savedSetting =
        localStorage.getItem("scanNotifications");

    // Default = ON
    notificationToggle.checked =
        savedSetting !== "off";


    // Save when changed
    notificationToggle.addEventListener("change", function () {

        if (this.checked) {

            localStorage.setItem(
                "scanNotifications",
                "on"
            );

        } else {

            localStorage.setItem(
                "scanNotifications",
                "off"
            );
        }

    });

});


// ==========================================
// SAVE PREFERENCES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const savePreferencesBtn =
        document.getElementById("savePreferences");

    if (!savePreferencesBtn) return;

    savePreferencesBtn.addEventListener("click", function () {

        // Get preference values
        const language =
            document.getElementById("language")?.value || "";

        const animations =
            document.getElementById("animations")?.checked ?? true;

        const autoScan =
            document.getElementById("autoScan")?.checked ?? false;


        // Save preferences
        localStorage.setItem(
            "pakvisionLanguage",
            language
        );

        localStorage.setItem(
            "pakvisionAnimations",
            animations ? "on" : "off"
        );

        localStorage.setItem(
            "pakvisionAutoScan",
            autoScan ? "on" : "off"
        );


        // Success message
        alert("Preferences saved successfully!");

    });

});