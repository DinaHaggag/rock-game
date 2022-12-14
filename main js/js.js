// / Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    // Function to
    const playGame = () => {
        
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerSelection = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors'];

        // Function to start playing game
        playerSelection.forEach (option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.move');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerSelection = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerSelection)
                 
                // Calling gameOver function after 5 moves
                if(moves == 5){
                    gameOver(playerSelection,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (playerSelection,computerSelection) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if(playerSelection === computerSelection){
            result.textContent = 'Tie'
        }
        else if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerSelection,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerSelection.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = 'green';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';

        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();


