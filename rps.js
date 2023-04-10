let choiceInt;
let playerSelection = prompt("Type Rock, Paper, or Scissors.", "");
let computerSelection;

function random() {
    return Math.floor((Math.random() * 3)+1)
}

function randomizeComputerChoice() {
     choiceInt = random();
}

function getComputerChoice() {
    if (choiceInt==1) {
        computerSelection='Rock';
    } else if (choiceInt==2) {
        computerSelection='Paper';
    } else {
        computerSelection='Scissors';
    }
}

randomizeComputerChoice();
getComputerChoice();
console.log(computerSelection);