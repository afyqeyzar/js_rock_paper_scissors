const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {game("rock")});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {game("paper")});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {game("scissors")});


function getComputerChoice(){
    let rando = Math.floor(Math.random() * 3)
    if (rando === 2){
        return "rock"
    }
    else if (rando ===1){
        return "paper"
    }
    else {
    return "scissors"
    }
}

var playerScore = 0
var compScore = 0

function playRound(playerSelection, computerSelection){
    
    let choice = playerSelection
    
    const playerBox = document.querySelector('.playerChoice')
    const compBox = document.querySelector('.compChoice')
    const results = document.querySelector('.result-box')
    const playerScoreBox = document.querySelector('.playerScore')
    const compScoreBox = document.querySelector('.compScore')


    //starts the scores at 0
    playerScoreBox.textContent = playerScore
    compScoreBox.textContent = compScore

    const WINNING_SCORE = 5

    if (playerScore == WINNING_SCORE){
        winner()
    }

    else if (compScore == WINNING_SCORE){
        loser()
    }

    else if (choice === computerSelection){
        
        playerBox.textContent = playerSelection
        compBox.textContent = computerSelection
        results.textContent = 'its a tie :/'
    }

    else if(computerSelection === "rock"){
        if (choice === "paper"){
            playerScore += 1
            playerScoreBox.textContent = playerScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'You win, paper beats rock!'
        }
        else if (choice === "scissors"){
            compScore +=1
            compScoreBox.textContent = compScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, rock beats scissors!'
        }
    }

    else if(computerSelection === "paper"){
        if (choice === "scissors"){
            playerScore += 1
            playerScoreBox.textContent = playerScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you win, scissors beats paper!'
        }
        else if (choice === "rock"){
            compScore +=1
            compScoreBox.textContent = compScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, paper beats rock!'
        }
    }

    /* if computer is scissors */
    else {
        if (choice === "rock"){
            playerScore += 1
            playerScoreBox.textContent = playerScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you win, rock beats scissors!'
        }
        else if (choice === "paper"){
            compScore +=1
            compScoreBox.textContent = compScore

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, scissors beats paper!'
        }
    }
}

function game(playerChoice){


  
    //playing a round
    let compChoice = getComputerChoice()
    let outcome = playRound(playerChoice,compChoice)
    return outcome
    
}

const content = document.querySelector('#content');
const message = document.createElement('div');
message.classList.add('message');

const refreshBtn = document.createElement('button');
refreshBtn.classList.add('refresh-btn');
refreshBtn.textContent = 'play again'

function refreshPage(){
    window.location.reload();
} 

refreshBtn.addEventListener('click', refreshPage);


function winner() {
    message.textContent = 'you won :)'
    content.append(message);
    content.append(refreshBtn)
}

function loser() {
    message.textContent = 'you lost :('
    content.append(message);
    content.append(refreshBtn)
}