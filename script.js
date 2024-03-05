// Rock paper scissors game 


const choices = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice();
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

// let rock = ("rock" < "paper" || "rock" > "scissors" || "rock" == "rock")
 //let paper = ("paper" > "rock" || "paper" < "scissors" || "paper" == "paper")
// let scissors = ("scissors" < "rock" || "scissors" > "paper" || "scissors" == "scissors")


 function getComputerChoice(){
     const computerSelection = choices[Math.floor(Math.random() * choices.length )];
     return computerSelection;

 console.log(computerSelection);
 }


 function playRound(playerSelection, computerSelection) {
   if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
    return "you win!";
   }
        else if (playerSelection === computerSelection){
            return "it's a tie!"
        }
        else {
            return "you lose...sorry";
        }
  }
  