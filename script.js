//variable declaration
var items = ["rock", "paper", "scissors"];
let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
let computerSelection = getComputerChoice(items);
let win = 0;
let lose = 0;
let tie = 0;

//getting computer choice
function getComputerChoice(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

//function to take reults and store who won
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

//function to return result of who wins
/*function oneRound()
{
    if(playerSelection == computerSelection){
        tie++;
    }
    else if(playerSelection > computerSelection){
        win++;
    }
    else if(playerSelection < computerSelection){
        lose++;
    }
}*/

//function to run game 5 times
function game(){
    round();
   // oneRound();

    for (let i = 0; i < 5; i++) {
        if (i == "win"){
            win++;
        } 
        if (i == "lose"){
            lose++;
        } 
        if (i == "tie"){
            tie++;
        } 
    }

    console.log("wins: " + win);
    console.log("losses: " + lose);
    console.log("ties: " + tie);
    }
    
game();
