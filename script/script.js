// Make a variables to store counts of wins, loses, draws and the game rounds
let playerWinCount = 0;
let playerLoseCount = 0;
let drawCount = 0;
let gameCount = 0;
// Make a function to play the game:
function game(e) {
    alert('Rock, Paper or Scissors?')
    // Make a random choice for computer
    let randInt = Math.floor(Math.random() * 3);
    let computerSelection = randInt === 0? 'rock' :
    randInt === 1? 'paper' :
    'scissors';
    // Compare player's and computer's choices
    if (e.target.innerText.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            drawCount++;
            scoreDiv.textContent = `Draw. Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else if (computerSelection === 'paper') {
            playerLoseCount++;
            scoreDiv.textContent = `You Lost((.Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else {
            playerWinCount++;
            scoreDiv.textContent = `You Won! Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        }
    } else if (e.target.innerText.toLowerCase() === 'paper') {
        if (computerSelection === 'paper') {
            drawCount++;
            scoreDiv.textContent = `Draw. Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else if (computerSelection === 'rock') {
            playerWinCount++;
            scoreDiv.textContent = `You Won! Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else {
            playerLoseCount++;
            scoreDiv.textContent = `You Lost((. Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        }
    } else {
        if (computerSelection === 'scissors') {
            drawCount++;
            scoreDiv.textContent = `Draw. Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else if (computerSelection === 'rock') {
            playerLoseCount++;
            scoreDiv.textContent = `You Lost((. Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        } else {
            playerWinCount++;
            scoreDiv.textContent = `You Won! Your current score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws.`;
        }
    }

    gameCount++;
    console.log(gameCount)

    if (gameCount === 5) {
        if (playerWinCount > playerLoseCount) {
            scoreDiv.textContent = `Congratulations, you won the game. Your total score is ${playerWinCount} wins and ${playerLoseCount} loses and ${drawCount} draws. If you want to play another round just click on one of the choices.`;
        } else if (playerWinCount < playerLoseCount) {
            scoreDiv.textContent = `You lost, you sorry excuse for of a human being. Your total score is ${playerWinCount} wins and ${playerLoseCount} loses ${drawCount} draws. If you want to play another round just click on one of the choices.`;
        } else {
            scoreDiv.textContent = `It's a draw, pretty disapointing. Your total score is ${playerWinCount} wins and ${playerLoseCount} loses ${drawCount} draws. If you want to play another round just click on one of the choices.`;
        }
        gameCount = 0;
        drawCount = 0;
        playerLoseCount = 0;
        playerWinCount = 0;
    }
}



const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const playground = document.querySelector('#playground');
playground.appendChild(rockButton);
playground.appendChild(paperButton);
playground.appendChild(scissorsButton);
const scoreDiv = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(scoreDiv);

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);



