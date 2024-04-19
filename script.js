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

  // game time 
//   function playGame(){
//     let playerScore = 0
//     let computerScore = 0
//     for (let i=0; i<5; i++){
//     result = playRound();
     
//      if (result === "you win!"){
//         yourScore++;
//         yourScore.textContent = `Your score: ${yourScore}`;
    
//     }
//         else if (result === "You LOSE...sorry"){
//         computerScore++;
//         computerScore.textContent = `Your score: ${computerScore}`;
//     }
//         else {
            
//         }
//     }
     // this is my addition....
     
    //  if (playerScore >= computerScore){
    //     alert ("CONGRATULATIONS, YOU WIN");
    //     console.log("CONGRATULATIONS, YOU WIN");
    //  }
    //  else if (playerScore === computerScore){
    //     alert ("TIED GAME");
    //     console.log("TIED GAME");
    //  }
    //  else {
    //     alert ("SORRY, YOU LOSE");
    //     console.log("SORRY, YOU LOSE");

    //  }
    // }

//   playGame();
