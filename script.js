function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3)

    return choices[index]
}

function getHumanChoice() {
    let userChoice = ""

    document.getElementById("rock").onclick = function () {
        userChoice = "rock"
    }

    document.getElementById("paper").onclick = function () {
        userChoice = "paper"
    }

    document.getElementById("scissors").onclick = function () {
        userChoice = "scissors"
    }

    return userChoice
}

function handleHumanChoice(choice) {
    console.log("Human chose:", choice);
    return choice
}

function playRound(humanChoice, computerChoice) {

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


