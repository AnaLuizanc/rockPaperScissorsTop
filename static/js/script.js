import { icons } from "./svgIcons.js";
import { getComputerChoice, getWinner } from "./gameLogic.js";

const userPlaceholder = document.getElementById("userChoicePlaceholder");
const robotPlaceholder = document.getElementById("robotChoicePlaceholder");

document.getElementById("userIcon").innerHTML = icons.userProfile;
document.getElementById("robotIcon").innerHTML = icons.robot;
document.getElementById("versusIcon").innerHTML = icons.versus;
document.getElementById("swordsIcon").innerHTML = icons.swords;

let roundActive = true;

document.querySelectorAll(".buttons button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        if (!roundActive) return;
        userPlaceholder.innerHTML = icons[button.id];
    });

    button.addEventListener("click", () => {

        if (!roundActive) return;
        roundActive = false;
        setButtonsDisabled(true);

        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        userPlaceholder.innerHTML = icons[humanChoice];
        robotPlaceholder.innerHTML = icons[computerChoice];
        document.getElementById("loader").style.visibility = "hidden";

        const winner = getWinner(humanChoice, computerChoice);
        updateScores(winner);

        setTimeout(startNewRound, 2300);
    });

});

function startNewRound() {
    userPlaceholder.innerHTML = "";
    robotPlaceholder.innerHTML = "";
    roundActive = true;
    document.getElementById("loader").style.visibility = "visible";
    setButtonsDisabled(false);
}

function updateScores(winner) {
    var alert = document.getElementById("myAlert");
    alert.style.display = "block";

    if (winner === "human") {
        humanScore += 1;
        document.getElementById("humanScore").innerHTML = humanScore;
        alert.style.backgroundColor = "#4bb543bf";
        alert.textContent = "You win the round!";
    }
    else if (winner === "computer") {
        computerScore += 1;
        document.getElementById("computerScore").innerHTML = computerScore;
        alert.style.backgroundColor = "#ff0000bf";
        alert.textContent = "You lose the round!";
    }
    else {
        alert.textContent = "Draw!";
    }

    setTimeout(function () {
        alert.style.display = "none";
    }, 2300);
}

function setButtonsDisabled(state) {
    document.querySelectorAll(".buttons button").forEach(button => {
        button.disabled = state;
    });
}