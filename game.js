let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function computerPlay (){
    let randomNum = Math.floor(Math.random()*3);

    switch (randomNum){
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    
    if (player === computer){
        displayResult();
        return "You both picked " + player +", you tied!";
    }
    else if ((player === 'rock' && computer === 'scissors') ||
             (player === 'paper' && computer === 'rock') ||
             (player === 'scissors' && computer === 'paper')){
              playerScore++;
              displayResult();
              return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if ((player === 'rock' && computer === 'paper') ||
             (player === 'paper' && computer === 'scissors') ||
             (player === 'scissors' && computer === 'rock') ) {
              computerScore ++;
              displayResult();
              return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function displayResult () {
    selection.textContent = "Computer chooses " +computerSelection;
    compScore.textContent = "Computer score: " + computerScore;
    playScore.textContent = "Player score: " + playerScore;
    checkScore();
}

function checkScore(){
    winScore.textContent = '';
    if (computerScore===5) {
        winScore.textContent = 'Computer wins the game!';
        resetGame();
    }
    else if (playerScore===5){
        winScore.textContent = 'Player wins the game!';
        resetGame();
    }
}
function resetGame() {
    computerScore = 0;
    playerScore = 0; 
}

const choice = document.querySelectorAll("i");
choice.forEach (function(chs){
    chs.addEventListener("click",function(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    round.textContent = playRound(playerSelection,computerSelection);
    })
})
const selection = document.getElementById("selection");
const round = document.getElementById("round");
const compScore = document.getElementById("compScore");
const playScore = document.getElementById("playScore");
const winScore = document.getElementById("winner");