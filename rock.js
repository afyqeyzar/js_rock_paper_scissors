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



function playRound(playerSelection, computerSelection){
    
    let choice = playerSelection
    const buttons = document.querySelector('#buttons')
    const div = document.createElement('div')
    const playerBox = document.querySelector('.playerChoice')
    const compBox = document.querySelector('.compChoice')
    const results = document.querySelector('.result-box')
     
    //var playerScore = 0
    //var compScore = 0
    

    if (choice === computerSelection){
        //return "its a tie :/"
        //div.textContent = "its a tie :/"
        //buttons.appendChild(div)
        
        playerBox.textContent = playerSelection
        compBox.textContent = computerSelection
        results.textContent = 'its a tie :/'
    }

    else if(computerSelection === "rock"){
        if (choice === "paper"){
            //return "You win, paper beats rock!"
            //div.textContent = "You win, paper beats rock!"
            //buttons.appendChild(div)
            //playerScore += 1

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'You win, paper beats rock!'
        }
        else if (choice === "scissors"){
            //return "You lose, rock beats scissors!"
            //div.textContent = "You lose, rock beats scissors!"
            //buttons.appendChild(div)
            //compScore +=1

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, rock beats scissors!'
        }
    }

    else if(computerSelection === "paper"){
        if (choice === "scissors"){
            //return "You win, scissors beats paper!"
            //div.textContent = "You win, scissors beats paper!"
            //buttons.appendChild(div)

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you win, scissors beats paper!'
        }
        else if (choice === "rock"){
            //return "You lose, paper beats rock!"
            //div.textContent = "You lose, paper beats rock!"
            //buttons.appendChild(div)

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, paper beats rock!'
        }
    }

    /* if computer is scissors */
    else {
        if (choice === "rock"){
            //return "You win, rock beats scissors!"
            //div.textContent = "You win, rock beats scissors!"
            //buttons.appendChild(div)

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you win, rock beats scissors!'
        }
        else if (choice === "paper"){
            //return "You lose, scissors beats paper"
            //div.textContent = "You lose, scissors beats paper"
            //buttons.appendChild(div)

            playerBox.textContent = playerSelection
            compBox.textContent = computerSelection
            results.textContent = 'you lose, scissors beats paper!'
        }
    }
}

function game(playerChoice){

    // getting a choice from the player
    // let playerChoice = prompt("Pick rock, paper or scissors")
  
    //playing a round
    let compChoice = getComputerChoice()
    let outcome = playRound(playerChoice,compChoice)
    //let outcome = playRound(playerChoice, playerChoice)
    
    //printing the results
    //return ("You chose " + playerChoice +". Computer chose " + compChoice + ". " + outcome)
    return outcome
    
}

function game5(){
    //initial score
    let playerScore = 0
    let compScore = 0

    for (let i = 1; i < 6; i++) {
        //printing the rounds
        console.log("Round " + i)

        // getting a choice from the player
        let playerChoice = prompt("Pick rock, paper or scissors")

        //playing a round
        let compChoice = getComputerChoice()
        let outcome = playRound(playerChoice,compChoice)

        //printing the results
        console.log("You chose " + playerChoice +". Computer chose " + compChoice + ". " + outcome)

    }


}

//this function doesnt work when put into rock.addEventListener
function printResults(playerChoice){
    console.log(playRound(playerChoice, getComputerChoice()))
}

//const play = document.querySelector("#play");
//play.addEventListener('click', game5)

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {game("rock")});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {game("paper")});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {game("scissors")})
