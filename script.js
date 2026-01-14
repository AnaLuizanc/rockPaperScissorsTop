function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3)

    return choices[index]
}

function handleHumanChoice(choice) {
    console.log("Human chose:", choice);
    return choice
}

function getHumanChoice() {
    return new Promise((resolve) => {
        document.getElementById("rock").onclick = () => resolve("rock");
        document.getElementById("paper").onclick = () => resolve("paper");
        document.getElementById("scissors").onclick = () => resolve("scissors");
    });
}

async function playRound() {

    const humanChoice = await getHumanChoice();
    const computerChoice = getComputerChoice();

    console.warn(humanChoice)
    console.warn(computerChoice)
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        humanScore = humanScore + 1;
        computerScore = computerScore + 1
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!")
        humanScore = humanScore + 1;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore = computerScore + 1
    }
}


