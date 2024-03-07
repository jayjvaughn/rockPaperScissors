// Rock paper scissors game 


const choices = ["rock", "paper", "scissors"]
const computerSelection = choices[Math.floor(Math.random() * choices.length )];
let playerSelection = prompt("");



 function getComputerChoice(){
     const computerSelection = choices[Math.floor(Math.random() * choices.length )];
     return computerSelection;

//  console.log(computerSelection);
 }

 function playRound(playerSelection, computerSelection){

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        return "you win!";
   }
        else if (playerSelection === computerSelection){
        return "it's a tie!";
    }
   

        else {
            return "you lose...sorry";
        }
  }
 // major change
  console.log(playRound(playerSelection,getComputerChoice()))
  