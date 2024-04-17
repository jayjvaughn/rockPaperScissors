// rock paper scissors v3


const choices = ["rock", "paper", "scissors"]
const playerButtons = document.querySelectorAll("#rock", "#paper", "#scissors");
// rock.onclick = () => console.log("rock");
// paper.onclick = () => console.log("paper");
// scissors.onclick = () => console.log("scissors");
playerButtons.forEach((playerButtons)=> {
    rock.addEventListener("click",()=> {
        return rock;
    });
});



// const playerSelection = document.querySelectorAll("#rock", "#paper", "#scissors");
// rock.onclick = () => {return "rock"};
// paper.onclick = () => {return "paper"};
// scissors.onclick = () => {return "scissors"};

console.log(playerButtons);

//  function getComputerChoice(){
//      const computerSelection = choices[Math.floor(Math.random() * choices.length )];
//      return computerSelection;

//  }

//  function playRound(playerSelection){
// //    let playerSelection = prompt("").toLowerCase();
//     let playerSelection = playerButtons.toString();
//     let computerSelection = getComputerChoice();

//     if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
//         return "you win!";
//    }
//         else if (playerSelection === computerSelection){
//         return "it's a tie!";
//     }
   
//         else {
//             return "you lose...sorry";
//         }
//   }
//   console.log(playRound(playerSelection));

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









