function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoice = 'Rock';
    }
    else if (computerChoice === 1) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return('Tie!');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return('You won the round!');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return('You lost the round!');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return('You won the round!');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return('You lost the round!');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return('You lost the round!');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return('You won the round!');
    }
}

let playerScore = 0;
let computerScore = 0;
let result;
const buttons = document.querySelectorAll('button');
const divplayer = document.querySelector('.player');
const divcomputer = document.querySelector('.computer');
const divround = document.querySelector('.round');
divplayer.textContent = "Your Score: " + playerScore;
divcomputer.textContent = "Opponent's Score: " + computerScore;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            result = playRound(button.id, computerPlay());
            divround.textContent = result;
            if (result === 'You won the round!') {
                divplayer.textContent = "Your Score: " + ++playerScore;
            }
            else if (result === 'You lost the round!') {
                divcomputer.textContent = "Opponent's Score: " + ++computerScore;
            }
        }
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                alert('Game Over! You Win!');
            }
            else {
                alert('Game Over! You Lose!');
            }
        }
    });
});