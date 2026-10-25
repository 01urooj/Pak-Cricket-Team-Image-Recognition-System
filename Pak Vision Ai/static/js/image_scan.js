// ==========================
// Image Preview
// ==========================

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewImage.src = e.target.result;
        previewImage.style.display = "block";

    };

    reader.readAsDataURL(file);

});














// ==========================
// Scan Notification
// ==========================

function showScanNotification(playerName) {

    // Check Settings
    const notificationSetting =
        localStorage.getItem("scanNotifications");

    // Notification OFF
    if (notificationSetting === "off") {
        return;
    }

    // Browser doesn't support notifications
    if (!("Notification" in window)) {
        console.log("Browser notifications are not supported.");
        return;
    }

    // Permission already granted
    if (Notification.permission === "granted") {

        new Notification("PakVision AI", {

            body:
                "Scan completed: " +
                playerName +
                " detected.",

            icon: "/static/images/logo.png"

        });

        return;
    }

    // Ask for permission
    if (Notification.permission !== "denied") {

        Notification.requestPermission().then(function (permission) {

            if (permission === "granted") {

                new Notification("PakVision AI", {

                    body:
                        "Scan completed: " +
                        playerName +
                        " detected.",

                    icon: "/static/images/logo.png"

                });

            }

        });

    }

}


// ==========================
// Real AI Scan
// ==========================

document.getElementById("scanBtn").addEventListener("click", function () {

    const file = imageInput.files[0];

    if (!file) {

        alert("Please select an image first.");

        return;

    }

    const formData = new FormData();

    formData.append("image", file);

    document.getElementById("playerName").innerHTML =
        "Scanning...";

    document.getElementById("confidence").innerHTML =
        "Please Wait...";


    fetch("/scan", {

        method: "POST",

        body: formData

    })

    .then(response => response.json())

    .then(data => {

        // ==========================
        // Display Result
        // ==========================

        document.getElementById("playerName").innerHTML =
            data.player;

        document.getElementById("confidence").innerHTML =
            "Confidence : " + data.confidence + "%";

        document.getElementById("progressBar").style.width =
            data.confidence + "%";

        document.getElementById("name").innerHTML =
            data.player;

        document.getElementById("accuracy").innerHTML =
            data.confidence + "%";

        document.getElementById("role").innerHTML =
            data.role;

        document.getElementById("age").innerHTML =
            data.age;

        document.getElementById("city").innerHTML =
            data.city;


        // ==========================
        // Show Notification
        // ==========================

        showScanNotification(data.player);

    })

    .catch(error => {

        console.log(error);

        alert("Prediction Failed");

    });

});


