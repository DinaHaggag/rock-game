let computerOptions = ['rock','paper','scissors'];
let choiceNumber = Math.floor(Math.random()*3);
let getComputerChoice = computerOptions[choiceNumber];
// let playerOption = ["ROCK","PAPER","SCISSORS"];
let playerSelection = document.querySelector('#player');
const result = document.querySelector('.result');
let computerSelection = getComputerChoice();

function playerRound(playerSelection,computerSelection){
       
        // let ROCK = document.querySelector('.rock');
        // let PAPER = document.querySelector('.paper');
        // let SCISSORS = document.querySelector('.scissor');
         playerSelection = playerSelection .lowercase();
         computerSelection = computerSelection .lowercase();

    
    
        if(playerSelection==computerSelection){
            result.textContent = "Tie";
        } 
        else if(
            playerSelection=="Rock" && computerSelection=="Scissors"||
            playerSelection=="Paper"&&computerSelection=="Rock" ||
            playerSelection=="Scissors"&&computerSelection=="Paper"
            ){
                result.textContent = "player wins";
            } 
            else {
                result.textContent = "computer wins";
            }
    
    }
    playerRound();
    