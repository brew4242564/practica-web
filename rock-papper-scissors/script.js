// global variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch (value) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Make a choice!");
}


function playRound() {
    let userWord = getHumanChoice();
    let computerWord = getComputerChoice();
    console.log("User choice: " + userWord);
    console.log("Computer choice: " + computerWord);

    if (userWord == computerWord) {
        console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
        return "Draw";

    }

    if (userWord == "paper") {
        if (computerWord == "rock") {
            humanScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "User wins";
        } else {
            computerScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "Computer Wins";
        }
    }

    if (userWord == "rock") {
        if (computerWord == "scissors") {
            humanScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "User wins";
        } else {
            computerScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "Computer Wins";
        }
    }

    if (userWord == "scissors") {
        if (computerWord == "paper") {
            humanScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "User wins";
        } else {
            computerScore++;
            console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
            return "Computer Wins";
        }
    }
}

function playFiveRounds() {
    for (i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("Human wins, another victory for the humanity")
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins, Skynet is near.")
    }
    else{
        console.log("This is weird.")
    }

}

playFiveRounds();
