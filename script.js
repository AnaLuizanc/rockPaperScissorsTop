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

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    userPlaceholder.innerHTML = icons[humanChoice];
    robotPlaceholder.innerHTML = icons[computerChoice];

    const winner = getWinner(humanChoice, computerChoice);
    updateScores(winner);

    setTimeout(startNewRound, 3000);
  });

});

function startNewRound() {
  userPlaceholder.innerHTML = "";
  robotPlaceholder.innerHTML = "";
  roundActive = true;
}

function updateScores(winner) {
    if (winner === "human") {
        humanScore += 1;
        document.getElementById("humanScore").innerHTML = humanScore;
    }
    if (winner === "computer") {
        computerScore += 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
}