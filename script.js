// Rock paper scissors game 


const choices = ["rock", "paper", "scissors"]
const computerSelection = choices[Math.floor(Math.random() * choices.length )];
let playerSelection = prompt("").toLowerCase();


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

  // game time 
  function playGame(playRound){
    let playerScore = 0
    let computerScore = 0


     if (playRound === "you win!"){
        alert ("you win!");
        console.log("Luck was on your side, lets try again");
        playerScore++;
    
    }
        else if (playRound === "you lose...sorry"){
            alert("you lose...sorry");
            console.log("that's a point for the computer..");
        computerScore++;
    }
        else {
        console.log("tie");
  }
    console.log(playerScore);
    console.log(computerScore);
  }
  playGame(playRound(playerSelection, getComputerChoice()));