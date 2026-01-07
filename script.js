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
}
