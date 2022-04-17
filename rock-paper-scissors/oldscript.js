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
        console.log('Tie!');
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose between "Rock", "Paper" or "Scissors"');
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === 'You won the round!') {
            playerScore++;
        }
        else if (result === 'You lost the round!') {
            computerScore++;
        } 
    }
    if (playerScore > computerScore) {
        console.log('You Win!');
    }
    else if (playerScore < computerScore) {
        console.log('You Lose!');
    }
    else {
        console.log('Tie!');
    }
}

game();


