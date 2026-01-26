
export function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3)

    return choices[index]
}

export function getWinner(human, computer) {
    if (human === computer){
        return "draw";
    } 
    if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "human";
    }

    return "computer";
}