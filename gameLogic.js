
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3)

    return choices[index]
}

function getHumanChoice() {
    return new Promise((resolve) => {
        document.getElementById("rock").onclick = () => resolve("rock");
        document.getElementById("paper").onclick = () => resolve("paper");
        document.getElementById("scissors").onclick = () => resolve("scissors");
    });
}

function updateScores(plusHuman = false, plusComputer = false) {
    if (plusHuman) {
        humanScore += 1;
        document.getElementById("humanScore").innerHTML = humanScore;
    }
    if (plusComputer) {
        computerScore += 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
}

async function playRound(humanScore, computerScore) {
    const humanChoice = await getHumanChoice();
    const computerChoice = getComputerChoice();

    console.warn("Computer's choice: " + computerChoice)
    if (humanChoice === computerChoice) {
        updateScores(true, true);
        playRound(humanScore, computerScore);
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        updateScores(true, false);
        playRound(humanScore, computerScore);
    } 
    else {
        updateScores(false, true);
        playRound(humanScore, computerScore);
    }
}