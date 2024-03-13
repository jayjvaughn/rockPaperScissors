//   Rock paper scissors game v1


// const choices = ["rock", "paper", "scissors"]
// const computerSelection = choices[Math.floor(Math.random() * choices.length )];
// let playerSelection = prompt("").toLowerCase();


//  function getComputerChoice(){
//      const computerSelection = choices[Math.floor(Math.random() * choices.length )];
//      return computerSelection;

// //  console.log(computerSelection);
//  }

//  function playRound(playerSelection, computerSelection){
//     playerSelection = prompt("").toLowerCase();

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

//   // game time 
//   function playGame(playRound){
//     let playerScore = 0
//     let computerScore = 0
//     for (let i=0; i<5; i++){

//         playerSelection = prompt("").toLowerCase();
  
//      if (playRound === "you win!"){
//         alert ("you win!");
//         console.log("1 point for you");
//         playerScore++;
    
//     }
//         else if (playRound === "you lose...sorry"){
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
     
//      if (playerScore === 5){
//         alert ("CONGRATULATIONS, YOU WIN");
//         console.log("CONGRATULATIONS, YOU WIN");
//      }
//      else if (computerScore === 5){
//         alert ("SORRY, YOU LOSE");
//         console.log("SORRY, YOU LOSE");
//      }
//      else {

//      }

//   playGame(playRound(playerSelection, getComputerChoice()));


//   Winner announcement
// function winner(){
//     if (playerScore > computerScore){
//         alert ("Game over, YOU WIN!!")
//     }
//     else if (playerScore < computerScore){
//             alert ("Game over, YOU LOSE!!")
//     }
//     else {
//         alert ("TIED GAME, PLAY AGAIN..")
//     }
//   }
//   winner();


// Rock paper scissors game v2


// const choices = ["rock", "paper", "scissors"]
// const computerSelection = choices[Math.floor(Math.random() * choices.length )];
// let playerSelection = prompt("").toLowerCase();


//  function getComputerChoice(){
//      const computerSelection = choices[Math.floor(Math.random() * choices.length )];
//      return computerSelection;

// //  console.log(computerSelection);
//  }

//  function playRound(playerSelection, computerSelection){
//     getComputerChoice();

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
//   console.log(`You chose ${playerSelection}!` );
//   console.log(`The computer chose ${computerSelection}!` );
//   console.log(playRound(playerSelection, computerSelection));

// //   game time 
//     function playGame(){
//         let playerScore = 0
//         let computerScore = 0

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

//   }


//   playGame()

// rock paper scissors v3


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
  function playGame(playRound){
    let playerScore = 0
    let computerScore = 0
    for (let i=0; i<5; i++){

        playerSelection = prompt("").toLowerCase();
        computerSelection = choices[Math.floor(Math.random() * choices.length )];
  
     if (playRound === "you win!"){
        alert ("you win!");
        console.log("1 point for you");
        playerScore++;
    
    }
        else if (playRound === "you lose...sorry"){
            alert("you lose...sorry");
            console.log("1 point for the computer..");
        computerScore++;
    }
        else {
            alert ("Tie game, Play again!")
        console.log("tie");
  }
     console.log(playerScore);
     console.log(computerScore);
    }
     // this is my addition....
     
     if (playerScore === 5){
        alert ("CONGRATULATIONS, YOU WIN");
        console.log("CONGRATULATIONS, YOU WIN");
     }
     else if (computerScore === 5){
        alert ("SORRY, YOU LOSE");
        console.log("SORRY, YOU LOSE");
     }
     else {

     }
    }
  playGame(playRound(playerSelection, getComputerChoice()));