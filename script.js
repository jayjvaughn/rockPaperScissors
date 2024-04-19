// rock paper scissors v4

const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameResult = document.getElementById("gameResult");
const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");


 function playRound(playerSelection){
    const computerSelection = choices[Math.floor(Math.random() * choices.length )];
    let result = "";

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        result = "You win!";
   }
        else if (playerSelection === computerSelection){
        result = "It's a tie!";
    }
   
        else {
            result = "You LOSE...sorry";
        }
   
   playerChoice.textContent = `You chose: ${playerSelection}`;
   computerChoice.textContent = `You chose: ${computerSelection}`;
   gameResult.textContent = result;
  }