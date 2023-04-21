let choiceInt;
let playerSelection;
let computerSelection;
let rounds=0;
var wins=0;
var losses=0;
var playerNumber=0;
let playerImage = document.createElement("img");;
let computerImage = document.createElement("img");;

var playerPick = document.querySelector('.player');
var computerPick = document.querySelector('.computer');

var result = document.querySelector('.result');
var score = document.querySelector('.score');
var display = document.querySelector('.display');

function random() {
    return Math.floor((Math.random() * 3)+1)
}

function getPlayerNumber() {
    if(playerSelection=="rock") {
        playerNumber=1;
    } else if(playerSelection=="paper") {
        playerNumber=2;
    } else if(playerSelection=="scissors") {
        playerNumber=3;
    }
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
    getPlayerNumber()
    playerImage.src= "./images/choice"+playerNumber+".png";
    computerImage.src= "./images/choice"+choiceInt+".png";
    console.log(computerSelection);
    if (playerSelection==computerSelection) {
        console.log("You tied this round!");
        result.textContent = "You tied this round!";
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
    }   else if (playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++wins;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else if (playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++wins;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else if (playerSelection=="paper" && computerSelection=="rock") {
        console.log("You win this round!");
        result.textContent = "You won this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++wins;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else if (computerSelection=="rock" && playerSelection=="scissors") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++losses;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else if (computerSelection=="scissors" && playerSelection=="paper") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++losses;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else if (computerSelection=="paper" && playerSelection=="rock") {
        console.log("You lose this round!");
        result.textContent = "You lost this round!";
        playerPick.appendChild(playerImage);
        computerPick.appendChild(computerImage);
        ++losses;
        score.textContent = `Wins: ${wins}      Losses: ${losses}`;
    }   else {
        console.log("Try again.");
    }
}

function gameCheck() {
    if(wins == 5) {
        result.textContent = "You Win! Pick again to retry.";
        wins=0;
        losses=0;
    } else if(losses == 5) {
        result.textContent = "The Computer Wins! Pick again to retry.";
        wins=0;
        losses=0;
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
    

