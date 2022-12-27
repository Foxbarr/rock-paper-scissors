function getComputerChoice(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["rock", "paper", "scissors"];
let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
let computerSelection = getComputerChoice(items);

function round(){
    if(playerSelection === computerSelection){
        playerSelection == computerSelection;
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerSelection > computerSelection;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerSelection > computerSelection;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerSelection > computerSelection;
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        playerSelection < computerSelection;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        playerSelection < computerSelection;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        playerSelection < computerSelection;
    }

}

round();

function oneRound(String)
{

    if(playerSelection == computerSelection){
        return String ("Tie Game " + playerSelection + "is the same as" + computerSelection) 
    }
    else if(playerSelection > computerSelection){
        return String ("You won! " + playerSelection + "beats" + computerSelection)
    }
    else if(playerSelection < computerSelection){
        return String ("You lost! " + computerSelection + "beats" + playerSelection)
    }
}

console.log(oneRound(String));