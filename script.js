// Get user's choice
let userChoice = prompt("Choose rock, paper or scissors:");

// Get computer's choice
let computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (computerChoice < 0.66) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}

// Compares choices and determines winner
let result;
if (userChoice === computerChoice) {
    result = "Tie!";
} else if (userChoice === "rock" && computerChoice === "scissors" ||
    userChoice === "paper" && computerChoice === "rock" ||
    userChoice === "scissors" && computerChoice === "paper") {
    result = "You win!";
} else {
    result = "Computer wins!";
}

// Display result
alert("You chose " + userChoice + ".\n" + "Computer chose " + computerChoice + ".\n\n" + result);