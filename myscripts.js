let computerScore = 0
let humanScore = 0

function getHumanChoice() {

    let humanChoice = prompt("Pick your weapon, rock, paper or scissors ?").toLowerCase()

    return humanChoice

}

function getComputerChoice() {

    let randomNumber = Math.random(0)
    let computerChoice

    if (randomNumber <= 0.33) {
        computerChoice = "Rock"
    }

    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = "Paper"
    }

    else if (randomNumber > 0.66) {
        computerChoice = "Scissors"
    }

    return computerChoice
}

function playRound(humanChoice, computerChoice) {

    let result

    if (humanChoice === "rock" && computerChoice === "Rock") {
        console.log("It's a draw, you both played rock.")
        result = 2
    }

    else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log("You lost! You picked rock while the computer picked paper.")
        result = 3
    }

    else if (humanChoice === "rock" && computerChoice === "Scissors") {
        console.log("Well done! You picked rock while the computer picked scissors.")
        result = 1
    }

    else if (humanChoice === "paper" && computerChoice === "Rock") {
        console.log("Well done! You picked paper while the computer picked rock.")
        result = 1
    }

    else if (humanChoice === "paper" && computerChoice === "Paper") {
        console.log("It's a draw, you both played paper.")
        result = 2
    }

    else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log("You lost! You picked paper while the computer picked scissors.")
        result = 3
    }

    else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log("You lost! You picked scissors while the computer picked rock.")
        result = 3
    }

    else if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log("Well done! You picked scissors while the computer picked paper.")
        result = 1
    }

    else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        console.log("It's a draw, you both played scissors.")
        result = 2
    }

    return result

}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let roundResult = playRound(humanSelection, computerSelection);

    if (roundResult === 1) {
        humanScore += 1;
    } else if (roundResult === 3) {
        computerScore += 1;
    }
}


console.log("Your score is ", humanScore, ". The computer score is ", computerScore, ".")

