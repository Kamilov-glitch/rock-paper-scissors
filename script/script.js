// Take user's input
function playerChoice () {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    let a = 2;
    // Check user's input, it must be rock, paper or scissors, otherwise inform user and ask to make a choice again
    while (a > 1) {
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            a--
        } else {
            alert('Please write either rock, paper or scissors.');
            playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
            }
        }
    return playerSelection;    
    }
// Make a function to randomly determine computers choice
function computerSelection() {
    let randInt = Math.floor(Math.random() * 3);
    return randInt === 0? 'rock' :
    randInt === 1? 'paper' :
    'scissors'
}

// Make a variables to store counts of wins and loses
let playerWinCount = 0;
let playerLoseCount = 0;
// Make a function to play the game:
function game(playerSelection, computerSelection) {
    //    compare user's choice against computers;
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'draw'
        } else if (computerSelection === 'paper') {
            playerLoseCount++;
            return 'you lost this round';
        } else {
            playerWinCount++;
            return 'you win this round';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return 'draw';
        } else if (computerSelection === 'rock') {
            playerWinCount++;
            return 'you win this round';
        } else {
            playerLoseCount++;
            return 'you lose this round';
        }
    } else {
        if (computerSelection === 'scissors') {
            return 'draw';
        } else if (computerSelection === 'rock') {
            playerLoseCount++;
            return 'you lose this round';
        } else {
            playerWinCount++;
            return 'you win this round';
        }
    }

}
//    count the rounds(5 total);
for (let i = 5; i > 0; i--) {
    console.log(game(playerChoice(), computerSelection()))
}
//    count the wins and report the the winner
if (playerWinCount > playerLoseCount) {
    console.log(`Congratulations, you won the game. Your score is ${playerWinCount} wins and ${playerLoseCount} loses and ${5 - playerLoseCount - playerWinCount} draws.`);
} else if (playerWinCount < playerLoseCount) {
    console.log(`You lost, you sorry excuse for of a human being. Your score is ${playerWinCount} wins and ${playerLoseCount} loses ${5 - playerLoseCount - playerWinCount} draws.`);
} else {
    console.log(`It's a draw, pretty disapointing. Your score is ${playerWinCount} wins and ${playerLoseCount} loses ${5 - playerLoseCount - playerWinCount} draws.`);
}