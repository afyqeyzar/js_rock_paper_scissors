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
    
    let choice = playerSelection.toLowerCase()

    if (choice === computerSelection){
        return "its a tie :/"
    }

    else if(computerSelection === "rock"){
        if (choice === "paper"){
            return "You win, paper beats rock!"
        }
        else if (choice === "scissors"){
            return "You lose, rock beats scissors!"
        }
    }

    else if(computerSelection === "paper"){
        if (choice === "scissors"){
            return "You win, scissors beats paper!"
        }
        else if (choice === "rock"){
            return "You lose, paper beats rock!"
        }
    }

    /* if computer is scissors */
    else {
        if (choice === "rock"){
            return "You win, rock beats scissors!"
        }
        else if (choice === "paper"){
            return "You lose, scissors beats paper"
        }
    }
}

function game(playerChoice){

    // getting a choice from the player
    // let playerChoice = prompt("Pick rock, paper or scissors")
  
    //playing a round
    let compChoice = getComputerChoice()
    let outcome = playRound(playerChoice,compChoice)
    
    //printing the results
    return ("You chose " + playerChoice +". Computer chose " + compChoice + ". " + outcome)
    
}

function game5(){
    //initial score
    var playerScore = 0
    var compScore = 0

    for (let i = 1; i < 6; i++) {
        //printing the rounds
        console.log("Round " + i)
        
        // getting a choice from the player
        let playerChoice = prompt("Pick rock, paper or scissors")
    
        //playing a round
        let compChoice = getComputerChoice()
        let outcome = playRound(playerChoice,compChoice)
        
        //printing the results
        console.log("You chose " + playerChoice + ". Computer chose " + compChoice + ". " + outcome)

        if (outcome.indexOf("w") == 4){
            playerScore += 1
        }

        else if (outcome.indexOf("l") == 4){
            compScore += 1
        }
        else {
            playerScore += 0
        }

        console.log("Player: " + playerScore ,"Computer: " + compScore)
    }

    if (playerScore > compScore){
        console.log("Congrats, you beat the computer!")
    }

    else if (playerScore == compScore){
        console.log("It seems to be a tie.")

    }

    else {
        console.log("You lost, better luck nest time :/")
    }


}

//this function doesnt work when put into rock.addEventListener
function printResults(playerChoice){
    console.log(playRound(playerChoice, getComputerChoice()))
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => console.log(game("rock")));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => console.log(game("paper")));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => console.log(game("scissors")));