// Rock paper scissors game 


const choices = ["rock", "paper", "scissors"]
const rock = (rock < paper || rock > scissors || rock == rock)
const paper = (paper > rock || paper < scissors || paper == paper)
const scissors = (scissors < rock || scissors > paper || scissors == scissors)

 function getComputerChoice(){
     const computerSelection = choices[Math.floor(Math.random() * choices.length )];
     return computerSelection;

console.log(computerSelection);
 }


function 