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
    getComputerChoice();

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
//   console.log(`You chose ${playerSelection}!` );
//   console.log(`The computer chose ${computerSelection}!` );
//   console.log(playRound(playerSelection, computerSelection));

//   game time 
  function playGame(){
    let playerscore = 0
    let computerScore = 0

    if (playRound === "you win!"){
        alert("you win!")
        playerscore++;
    }
    else if (playRound === "you lose...sorry"){
        alert("you lose...sorry");
        computerScore++;
    }
    else {
        alert("tie");
    }
    console.log(playerscore);
    consolelog(computerScore);
  }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     playerSelection = prompt("").toLowerCase();
//     playRound(playerSelection, computerSelection);

    
//      if (playRound === "you win!"){
//         alert ("you win!");
//         console.log("Thats a point for you!")
//         playerScore++;
    
//     }
//         else if (playRound === "you lose...sorry"){
//             alert("you lose...sorry");
//             console.log("that's a point for the computer..");
//         computerScore++;
//     }
//         else {
//         console.log("tie");
//   }
//     console.log(playerScore);
//     console.log(computerScore);
//  }
//     if (playerScore > computerScore){
//     alert ("Game over, YOU WIN!!")
// }
//         else if (playerScore < computerScore){            
//    alert ("Game over, YOU LOSE!!")
// }
//     else {
//   alert ("TIED GAME, PLAY AGAIN..")
// }
//   }

//   playGame();