

let z = parseInt(prompt("How many rounds you want to play ?"));

for(let i = z; i>0; i--){
function getComputerChoice(){

    let a = Math.floor(Math.random()*9);

    let b = ""

    if (a<=2){
        b = "rock"
    }else if (a>=3 && a<=5 ){
        b = "paper"
    }else{
        b = "scissors"
    }

    return b
}

let computerSelection = getComputerChoice()

let playerSelection = prompt("Rock, paper or Scissors ?")

playerSelection = playerSelection.toLowerCase()

function playRound(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        alert("The computer selected "+ computerSelection +" It's a draw")
    }else if( playerSelection == "paper" && computerSelection == "scissors"){
        alert("The computer selected "+ computerSelection +"You lost this round :/")
    }else if( playerSelection == "paper" && computerSelection == "rock"){
        alert("The computer selected "+ computerSelection +"You won this round :)")
    }else if( playerSelection == "rock" && computerSelection == "paper"){
        alert("The computer selected "+ computerSelection +"You lost this round :/")
    }else if( playerSelection == "rock" && computerSelection == "scissors"){
        alert("The computer selected "+ computerSelection +"You won this round :)")
    }else if( playerSelection == "scissors" && computerSelection == "rock"){
        alert("The computer selected "+ computerSelection +"You lost this round :/")
    }else if( playerSelection == "scissors" && computerSelection == "paper"){
        alert("The computer selected "+ computerSelection +"You won this round :)")
    }
}


playRound(playerSelection, computerSelection)

}