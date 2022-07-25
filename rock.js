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

function game(){

    // getting a choice from the player
    let playerChoice = prompt("Pick rock, paper or scissors")
  
    //playing a round
    let compChoice = getComputerChoice()
    let outcome = playRound(playerChoice,compChoice)
    
    //printing the results
    console.log("You chose " + playerChoice +". Computer chose " + compChoice + ". " + outcome)
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