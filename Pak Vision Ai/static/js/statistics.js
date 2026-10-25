// ===============================
// Get Data from statistics.html
// ===============================

const stats = JSON.parse(
    document.getElementById("stats-data").textContent
);

const playerNames = stats.playerNames;
const playerScans = stats.playerScans;

const activityDates = stats.activityDates;
const activityScans = stats.activityScans;

const averageAccuracy = stats.averageAccuracy;
const totalScans = stats.totalScans;





// ===============================
// Recognition Activity (Line Chart)
// ===============================

new Chart(document.getElementById("activityChart"), {

    type: "line",

    data: {

        labels: activityDates,

        datasets: [{

            label: "Total Scans",

            data: activityScans,

            borderColor: "#00ff99",

            backgroundColor: "rgba(0,255,153,.15)",

            fill: true,

            tension: .4,

            borderWidth: 3,

            pointRadius: 5,

            pointBackgroundColor: "#00ff99"

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff"

                }

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#ffffff"

                },

                grid: {

                    color: "rgba(255,255,255,.08)"

                }

            },

            y: {

                beginAtZero: true,

                ticks: {

                    color: "#ffffff"

                },

                grid: {

                    color: "rgba(255,255,255,.08)"

                }

            }

        }

    }

});


// ===============================
// Players Distribution (Bar Chart)
// ===============================

new Chart(document.getElementById("distributionChart"), {

    type: "bar",

    data: {

        labels: playerNames,

        datasets: [{

            label: "Detections",

            data: playerScans,

            backgroundColor: [

                "#00ff99",
                "#3498db",
                "#f39c12",
                "#e91e63",
                "#9b59b6",
                "#1abc9c",
                "#e74c3c",
                "#f1c40f",
                "#2ecc71",
                "#34495e"

            ],

            borderRadius: 8

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff"

                }

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#ffffff"

                },

                grid: {

                    display: false

                }

            },

            y: {

                beginAtZero: true,

                ticks: {

                    color: "#ffffff"

                },

                grid: {

                    color: "rgba(255,255,255,.08)"

                }

            }

        }

    }

});


// ===============================
// Recognition Accuracy (Doughnut)
// ===============================

new Chart(document.getElementById("accuracyChart"), {

    type: "doughnut",

    data: {

        labels: [

            "Correct",
            "Incorrect"

        ],

        datasets: [{

            data: [

                averageAccuracy,
                100 - averageAccuracy

            ],

            backgroundColor: [

                "#00ff99",
                "#ff4444"

            ],

            borderWidth: 0

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff",

                    font: {

                        size: 14

                    }

                }

            }

        }

    }

});