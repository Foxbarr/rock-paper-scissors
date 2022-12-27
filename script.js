function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["rock", "paper", "scissors"];
let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
let computerSelection = random_item(items);

function round(){
    if(playerSelection === computerSelection){
        console.log("Tie Game!");
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You won! Paper beats Rock!");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You won! Scissors beats Paper!");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You won! Rock beats Scissors");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Computer Wins! Paper beats Rock!");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Computer Wins! Scissors beats Paper!");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("Computer Wins! Rock beats Scissors!");
    }

}
console.log("Computer chose " + computerSelection);
console.log(playerSelection);
round();