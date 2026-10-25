// =====================================
// Player Search
// =====================================

const searchInput = document.getElementById("searchPlayer");

const playerCards = document.querySelectorAll(".player-card");

const noResults = document.getElementById("noResults");


searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase().trim();

    let visiblePlayers = 0;


    playerCards.forEach(function (card) {

        const playerName =
            card.getAttribute("data-name");

        if (playerName.includes(searchValue)) {

            card.style.display = "block";

            visiblePlayers++;

        } else {

            card.style.display = "none";

        }

    });


    if (visiblePlayers === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// =====================================
// Open Player Modal
// =====================================

function openPlayerModal(
    name,
    role,
    age,
    city,
    accuracy
) {

    document.getElementById("modalName").textContent =
        name;

    document.getElementById("modalRole").textContent =
        role;

    document.getElementById("modalAge").textContent =
        age;

    document.getElementById("modalCity").textContent =
        city;

    document.getElementById("modalAccuracy").textContent =
        accuracy;


    document
        .getElementById("playerModal")
        .classList.add("active");

}


// =====================================
// Close Modal
// =====================================

function closePlayerModal() {

    document
        .getElementById("playerModal")
        .classList.remove("active");

}


// =====================================
// Close Modal by Clicking Outside
// =====================================

document
    .getElementById("playerModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closePlayerModal();

        }

    });


// =====================================
// ESC Key
// =====================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closePlayerModal();

    }

});