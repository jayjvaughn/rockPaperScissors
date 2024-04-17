// rock paper scissors v4

const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameResult = document.getElementById("gameResult");


 function playRound(playerSelection){
    const computerSelection = choices[Math.floor(Math.random() * choices.length )];
   let result = "";

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        result = "you win!";
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

//   // game time 
//   function playGame(){
//     let playerScore = 0
//     let computerScore = 0
//     for (let i=0; i<5; i++){
//     let result = playRound();
     
//      if (result === "you win!"){
//         alert ("you win!");
//         console.log("1 point for you");
//         playerScore++;
    
//     }
//         else if (result === "you lose...sorry"){
//             alert("you lose...sorry");
//             console.log("1 point for the computer..");
//         computerScore++;
//     }
//         else {
//             alert ("Tie game, Play again!")
//         console.log("tie");
//   }
//      console.log(playerScore);
//      console.log(computerScore);
//     }
//      // this is my addition....
     
//      if (playerScore >= computerScore){
//         alert ("CONGRATULATIONS, YOU WIN");
//         console.log("CONGRATULATIONS, YOU WIN");
//      }
//      else if (playerScore === computerScore){
//         alert ("TIED GAME");
//         console.log("TIED GAME");
//      }
//      else {
//         alert ("SORRY, YOU LOSE");
//         console.log("SORRY, YOU LOSE");

//      }
//     }

//   playGame();









