let choiceInt;
let playerSelection;
let computerSelection;
let rounds=0;
var wins=0;
var losses=0;

var result = document.querySelector('.result');

function random() {
    return Math.floor((Math.random() * 3)+1)
}

function randomizeComputerChoice() {
     choiceInt = random();
}

function getComputerChoice() {
    if (choiceInt==1) {
        computerSelection='rock';
    } else if (choiceInt==2) {
        computerSelection='paper';
    } else {
        computerSelection='scissors';
    }
}

function getChoiceAndPlay(choice) {
    playerSelection = choice;
    playRound();
}

function playRound() {
    //playerSelection = prompt("Type Rock, Paper, or Scissors.", "").toLowerCase();
    console.log(playerSelection);
    randomizeComputerChoice();
    getComputerChoice();
    console.log(computerSelection);
    if (playerSelection==computerSelection) {
        console.log("You tied this round!");
        result.textContent = "You tied this round!";
    }   else if (playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        wins+=1;
    }   else if (playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        wins+=1;
    }   else if (playerSelection=="paper" && computerSelection=="rock") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        wins+=1;
    }   else if (computerSelection=="rock" && playerSelection=="scissors") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        losses+=1;
    }   else if (computerSelection=="scissors" && playerSelection=="paper") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        losses+=1;
    }   else if (computerSelection=="paper" && playerSelection=="rock") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        losses+=1;
    }   else {
        console.log("Try again.");
    }
}





function game() {
    for (let rounds=1; rounds<=5; rounds++) {
        randomizeComputerChoice();
        getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (wins > losses) {
            console.log('You beat the computer!');
        } else if (losses > wins) {
            console.log('The computer won the game!');
        } else {
            console.log('Nobody won!');
        }
     }
    

